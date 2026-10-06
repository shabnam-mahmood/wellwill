import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import DonateForm from "@/components/donate/DonateForm";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function DonatePage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Donate" />
        <DonateForm />
        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
