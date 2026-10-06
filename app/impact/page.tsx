import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ImpactIntro from "@/components/impact/ImpactIntro";
import ImpactAreas from "@/components/impact/ImpactAreas";
import ImpactApproach from "@/components/impact/ImpactApproach";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function ImpactPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Our Impact" />

        <ImpactIntro />

        <ImpactAreas />

        <ImpactApproach />

        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
