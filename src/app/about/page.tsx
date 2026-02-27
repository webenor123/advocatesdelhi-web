import AboutHero from "@/components/AboutHero";
import AboutIntro from "@/components/AboutIntro";
import OurApproach from "@/components/OurApproach";
import LeadershipFoundation from "@/components/LeadershipFoundation";
import Team from "@/components/Team";
import LegalSupport from "@/components/LegalSupport";
import CorePracticeAreas from "@/components/CorePracticeAreas";
import Commitment from "@/components/Commitment";
import ConnectWithTeam from "@/components/ConnectWithTeam";

export default function AboutPage() {
    return (
        <main>
            <AboutHero />
            <AboutIntro />
            <LeadershipFoundation />
            <Team />
            <LegalSupport />
            <CorePracticeAreas />
            <OurApproach />
            <Commitment />
            <ConnectWithTeam />
        </main>
    );
}
