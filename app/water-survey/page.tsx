import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import WaterSurveyForm from "@/components/survey/WaterSurveyForm";
import Footer from "@/components/Footer";

export default function WaterSurveyPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Water Survey" />

        <WaterSurveyForm />
      </main>

      <Footer />
    </>
  );
}
