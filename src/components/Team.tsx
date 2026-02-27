import Image from 'next/image';
import Container from './Container';

const teamMembers = [
    {
        name: "Advocate Sanjay Aggarwal",
        role: "With over two decades of experience, Advocate Sanjay Aggarwal provides strategic direction and legal oversight in property registration matters. His experience ensures careful scrutiny of documentation and compliance with applicable procedures.",
        image: "/team1.png"
    },
    {
        name: "Advocate Hunny Aggarwal",
        role: "Advocate Hunny Aggarwal actively handles property registration matters, client consultations, drafting review, and representation before registration authorities. He plays a key role in ensuring timely and legally sound execution of transactions.",
        image: "/team2.png"
    },
    {
        name: "Advocate Vineet Aggarwal",
        role: "Advocate Vineet Aggarwal assists in property documentation review and procedural coordination, contributing to smooth handling of residential and commercial registrations.",
        image: "/team3.png"
    },
    {
        name: "Advocate Sumit Tomar",
        role: "Advocate Sumit Tomar supports registration-related advisory and drafting matters, ensuring compliance with documentation standards and procedural requirements.",
        image: "/team4.png"
    },
    {
        name: "Advocate Bharat Aggarwal",
        role: "Advocate Bharat Aggarwal contributes to case preparation, documentation structuring, and execution support within property registration processes.",
        image: "/team5.png"
    },
    {
        name: "Advocate Deepak Bhardwaj",
        role: "Advocate Deepak Bhardwaj assists in legal review and representation aspects of property registration matters handled by the firm.",
        image: "/team6.png"
    }
];

export default function Team() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                {/* Header */}
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-[28px] md:text-[40px] font-semibold mb-3 leading-[1.3] text-gray-900">
                        Our Team of <span className="text-gray-500">Advocates</span>
                    </h2>
                    <p className="text-gray-500 text-[13px] md:text-[14px] leading-[1.8]">
                        Aggarwal &amp; Associates operates through a coordinated team of advocates who manage advisory, drafting, compliance, and registration representation collectively.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col bg-[#fdfdfd] rounded-[4px] overflow-hidden border-b-[6px] border-[#293240] shadow-sm">
                            {/* Image */}
                            <div className="relative w-full h-[240px]">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 md:px-8 md:py-7 flex flex-col items-center grow text-center">
                                <h3 className="font-bold text-[14px] md:text-[15px] text-gray-800 mb-3">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500 text-[12px] md:text-[13px] leading-[1.8] font-medium">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
