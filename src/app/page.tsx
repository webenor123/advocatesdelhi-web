import Hero from "@/components/Hero";
import AboutFirm from "@/components/AboutFirm";
import LegalServices from "@/components/LegalServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurProcess from "@/components/OurProcess";
import ServingClients from "@/components/ServingClients";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ConsultAdvocate from "@/components/ConsultAdvocate";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutFirm />
      <LegalServices />
      <WhyChooseUs />
      <OurProcess />
      <ServingClients />
      <Testimonials />
      <FAQ />
      <ConsultAdvocate />
    </div>
  );
}
