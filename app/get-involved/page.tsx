import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import GetInvolvedIntro from "@/components/get-involved/GetInvolvedIntro";
import GetInvolvedOptions from "@/components/get-involved/GetInvolvedOptions";
import GetInvolvedJoin from "@/components/get-involved/GetInvolvedJoin";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function GetInvolvedPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Get Involved" />

        <GetInvolvedIntro />

        <GetInvolvedOptions />

        <GetInvolvedJoin />

        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
