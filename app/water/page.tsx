import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import WaterMission from "@/components/water/WaterMission";
import WaterSolutions from "@/components/water/WaterSolutions";
import CurrentInitiative from "@/components/water/CurrentInitiative";
import CommunitySupport from "@/components/water/CommunitySupport";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function WaterPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Water" />

        <WaterMission />

        <WaterSolutions />

        <CurrentInitiative />

        <CommunitySupport />

        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
