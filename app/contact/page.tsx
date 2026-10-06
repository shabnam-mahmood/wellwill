import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactMain from "@/components/contact/ContactMain";
import ContactFAQ from "@/components/contact/ContactFAQ";
import GlobalCTA from "@/components/GlobalCTA";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero title="Contact" />

        <ContactMain />
        <ContactFAQ />
        <GlobalCTA />
      </main>

      <Footer />
    </>
  );
}
