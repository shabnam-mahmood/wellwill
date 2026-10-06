import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProjectsIntro from "@/components/projects/ProjectsIntro";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import FeaturedProject from "@/components/projects/FeaturedProject";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Projects" />

        <ProjectsIntro />

        <ProjectsGrid />

        <FeaturedProject />

        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
