import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Process from "@/components/Process";
import Impact from "@/components/Impact";
import Story from "@/components/Story";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <Process />
        <Impact />
        <Story />
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
