import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import StoriesIntro from "@/components/stories/StoriesIntro";
import StoriesGrid from "@/components/stories/StoriesGrid";
import CommunityVoices from "@/components/stories/CommunityVoices";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function StoriesPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Stories" />

        <StoriesIntro />

        <StoriesGrid />

        <CommunityVoices />

        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
