import ServicesHero from "@/components/ServicesHero";
import LawBanner from "@/components/LawBanner";
import TrustedPropertyLawyers from "@/components/TrustedPropertyLawyers";
import ComprehensiveLegalServices from "@/components/ComprehensiveLegalServices";
import DocumentsRequired from "@/components/DocumentsRequired";
import PropertyRegistrationProcess from "@/components/PropertyRegistrationProcess";
import WhyChooseAggarwal from "@/components/WhyChooseAggarwal";
import SpeakToLawyer from "@/components/SpeakToLawyer";
import ServicesFAQ from "@/components/ServicesFAQ";

export const metadata = {
    title: "Services | Advocates Delhi",
    description: "Explore our comprehensive legal services in Delhi.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />
            <LawBanner />
            <TrustedPropertyLawyers />
            <ComprehensiveLegalServices />
            <DocumentsRequired />
            <PropertyRegistrationProcess />
            <WhyChooseAggarwal />
            <SpeakToLawyer />
            <ServicesFAQ />
        </main>
    );
}
