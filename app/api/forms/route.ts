
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_BYTES = 16 * 1024;

class FormError extends Error {
  constructor(
    public status: number,
    message: string
  ) {
    super(message);
    this.name = "FormError";
  }
}

function reply(
  status: number,
  success: boolean,
  message: string,
  extra: Record<string, string> = {}
) {
  return NextResponse.json(
    { success, message, ...extra },
    {
      status,
      headers: { "Cache-Control": "no-store" },
    }
  );
}

async function readLimited(
  stream: ReadableStream<Uint8Array> | null,
  limit: number
): Promise<string> {
  if (!stream) {
    throw new FormError(400, "Missing request body.");
  }

  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      size += value.byteLength;

      if (size > limit) {
        await reader.cancel();
        throw new FormError(413, "Request body is too large.");
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const bytes = new Uint8Array(size);
  let offset = 0;

  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return new TextDecoder("utf-8", {
    fatal: true,
  }).decode(bytes);
}

function isRecord(
  value: unknown
): value is Record<string, unknown> {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value)
  );
}

function field(
  data: Record<string, unknown>,
  key: string,
  maxLength: number
): string {
  const value = data[key];

  if (
    typeof value !== "string" ||
    !value.trim() ||
    value.length > maxLength ||
    /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(
      value
    )
  ) {
    throw new FormError(
      400,
      "Please check all required form fields."
    );
  }

  return value.trim();
}

type ContactPayload = {
  formType: "contact";
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type WaterSurveyPayload = {
  formType: "water-support";
  submissionId: string;
  date: string;
  name: string;
  fatherName: string;
  community: string;
  village: string;
  idNumber: string;
  phone: string;
};

type FormPayload =
  | ContactPayload
  | WaterSurveyPayload;

function validate(
  data: Record<string, unknown>
): FormPayload {
  if (data.formType === "contact") {
    const firstName = field(data, "firstName", 80);
    const lastName = field(data, "lastName", 80);
    const email = field(data, "email", 254);
    const subject = field(data, "subject", 30);
    const message = field(data, "message", 5000);

    
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  throw new FormError(
    400,
    "Please enter a valid email address."
  );
}


    if (
      ![
        "general",
        "partnership",
        "media",
        "volunteer",
        "other",
      ].includes(subject)
    ) {
      throw new FormError(
        400,
        "Please select a valid subject."
      );
    }

    return {
      formType: "contact",
      firstName,
      lastName,
      email,
      subject,
      message,
    };
  }

  if (data.formType === "water-support") {
    const submissionId = field(
      data,
      "submissionId",
      36
    );

    if (
      !/^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
        submissionId
      )
    ) {
      throw new FormError(
        400,
        "Invalid survey submission ID."
      );
    }

    const date = field(data, "date", 10);

    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      throw new FormError(
        400,
        "Please enter a valid survey date."
      );
    }

    const parsedDate = new Date(
      `${date}T00:00:00Z`
    );

    if (
      Number.isNaN(parsedDate.getTime()) ||
      parsedDate.toISOString().slice(0, 10) !== date
    ) {
      throw new FormError(
        400,
        "Please enter a valid survey date."
      );
    }

    return {
      formType: "water-support",
      submissionId,
      date,
      name: field(data, "name", 160),
      fatherName: field(data, "fatherName", 160),
      community: field(data, "community", 160),
      village: field(data, "village", 300),
      idNumber: field(data, "idNumber", 30),
      phone: field(data, "phone", 40),
    };
  }

  throw new FormError(
    400,
    "Unknown form type."
  );
}

function endpoint() {
  const secret = process.env.WELLWILL_FORM_SECRET;
  const raw = process.env.WELLWILL_SCRIPT_URL;

  if (!secret || !raw) {
    throw new Error("Missing configuration.");
  }

  const url = new URL(raw);

  if (
    url.protocol !== "https:" ||
    url.hostname !== "script.google.com" ||
    url.port ||
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    !/^\/macros\/s\/[A-Za-z0-9_-]+\/exec$/.test(
      url.pathname
    )
  ) {
    throw new Error("Invalid configuration.");
  }

  return { url, secret };
}

async function forward(
  payload: FormPayload
): Promise<Record<string, unknown>> {
  const { url, secret } = endpoint();

  const fields = Object.fromEntries(
    Object.entries(payload).filter(
      ([key]) => key !== "formType"
    )
  );

  const signal = AbortSignal.timeout(15000);

  let response = await fetch(url.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      secret,
      formType: payload.formType,
      fields,
    }),
    redirect: "manual",
    cache: "no-store",
    signal,
  });

  for (
    let count = 0;
    [301, 302, 303].includes(response.status);
    count++
  ) {
    if (count >= 3) {
      throw new Error("Too many redirects.");
    }

    const location =
      response.headers.get("location");

    if (!location) {
      throw new Error("Missing redirect.");
    }

    const target = new URL(
      location,
      response.url || url.toString()
    );

    if (
      target.protocol !== "https:" ||
      target.hostname !==
        "script.googleusercontent.com" ||
      target.port ||
      target.username ||
      target.password
    ) {
      throw new Error("Invalid redirect.");
    }

    await response.body?.cancel();

    response = await fetch(target.toString(), {
      method: "GET",
      redirect: "manual",
      cache: "no-store",
      signal,
    });
  }

  if (!response.ok) {
    await response.body?.cancel();
    throw new Error("Upstream HTTP failure.");
  }

  const responseText = await readLimited(
    response.body,
    MAX_BYTES
  );

  const result: unknown = JSON.parse(responseText);

  if (
    !isRecord(result) ||
    result.success !== true
  ) {
    throw new Error(
      "Google Apps Script did not confirm delivery."
    );
  }

  return result;
}

export async function POST(request: Request) {
  try {
    const origin = request.headers.get("origin");


const allowedOrigins = new Set([
  "https://wellwill.org",
  "https://www.wellwill.org",
  "http://localhost:3000",
]);

if (
  (origin && !allowedOrigins.has(origin)) ||
  request.headers.get("sec-fetch-site") === "cross-site"
) {
  return reply(
    403,
    false,
    "Request not allowed."
  );
}

    const contentType = request.headers
      .get("content-type")
      ?.split(";")[0]
      .trim()
      .toLowerCase();

    if (contentType !== "application/json") {
      return reply(
        415,
        false,
        "Expected JSON."
      );
    }

    const contentLength =
      request.headers.get("content-length");

    if (
      contentLength &&
      (!/^\d+$/.test(contentLength) ||
        Number(contentLength) > MAX_BYTES)
    ) {
      return reply(
        413,
        false,
        "Request body too large."
      );
    }

    let data: unknown;

    try {
      data = JSON.parse(
        await readLimited(
          request.body,
          MAX_BYTES
        )
      );
    } catch (error) {
      if (error instanceof FormError) {
        throw error;
      }

      return reply(
        400,
        false,
        "Invalid JSON."
      );
    }

    if (!isRecord(data)) {
      return reply(
        400,
        false,
        "Invalid form data."
      );
    }

    if (
      data.website !== undefined &&
      typeof data.website !== "string"
    ) {
      return reply(
        400,
        false,
        "Invalid form data."
      );
    }

    if (
      typeof data.website === "string" &&
      data.website.trim()
    ) {
      return reply(
        200,
        true,
        "Received."
      );
    }

    const payload = validate(data);

    if (payload.formType === "contact") {
      const links =
        payload.message.match(/https?:\/\//gi) ?? [];

      if (links.length > 5) {
        return reply(
          400,
          false,
          "Please remove excessive links."
        );
      }
    }

    const result = await forward(payload);

    if (payload.formType === "water-support") {
      if (
        typeof result.projectNumber !== "string" ||
        !/^WW-PRJ-\d{3,}$/.test(
          result.projectNumber
        )
      ) {
        throw new Error(
          "Missing confirmed project number."
        );
      }

      return reply(
        200,
        true,
        "Survey submitted successfully.",
        {
          projectNumber: result.projectNumber,
          surveyDate:
            typeof result.surveyDate === "string"
              ? result.surveyDate
              : payload.date,
        }
      );
    }

    return reply(
      200,
      true,
      "Received."
    );
  } catch (error) {
    if (error instanceof FormError) {
      return reply(
        error.status,
        false,
        error.message
      );
    }

    return reply(
      502,
      false,
      "We couldn't confirm delivery. Please try again later."
    );
  }
}
