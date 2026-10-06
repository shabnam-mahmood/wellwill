import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/about/AboutStory";
import MuhammadStory from "@/components/about/MuhammadStory";
import MissionVision from "@/components/about/MissionVision";
import AboutValues from "@/components/about/AboutValues";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="About Us" />

        <AboutStory />

        <MuhammadStory />
        <div className="h-12 bg-white sm:h-16 lg:h-20" />
        <MissionVision />

        <AboutValues />

        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}