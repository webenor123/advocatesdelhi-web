import Container from './Container';

const practiceAreas = [
    {
        title: "SALE DEED REGISTRATION",
        description: "We assist buyers and sellers in preparing and registering sale deeds with careful document verification and compliance with applicable stamp duty and registration procedures, ensuring lawful transfer of ownership."
    },
    {
        title: "GIFT DEED REGISTRATION",
        description: "Our firm provides legal guidance for gifting immovable property, ensuring that the gift deed is properly drafted, verified, and registered in accordance with legal requirements."
    },
    {
        title: "LEASE DEED & RENT AGREEMENT REGISTRATION",
        description: "We assist landlords and tenants in drafting and registering lease deeds and rent agreements to safeguard contractual rights and prevent future disputes."
    },
    {
        title: "CONVEYANCE DEEDS",
        description: "We handle conveyance deed documentation for transfer of property rights, ensuring that ownership is formally recorded and legally recognized."
    },
    {
        title: "POWER OF ATTORNEY (POA)",
        description: "Our team assists in drafting and registering powers of attorney for property transactions, ensuring clarity of authority and lawful representation."
    },
    {
        title: "BUILDER-BUYER AGREEMENT REVIEW",
        description: "We provide careful review of builder-buyer agreements to help clients understand contractual obligations, payment structures, and legal safeguards before execution."
    },
    {
        title: "PROPERTY MUTATION ASSISTANCE",
        description: "We guide clients through the mutation process to ensure proper updating of ownership records with relevant authorities after property transfer."
    },
    {
        title: "NRI PROPERTY REGISTRATION",
        description: "We assist non-resident clients with property registration matters in Delhi, including documentation review, representation, and coordination where required."
    }
];

export default function CorePracticeAreas() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                    <h2 className="text-[28px] md:text-[40px] font-semibold mb-5 leading-[1.3] text-gray-900">
                        Our <span className="text-gray-500">Core</span> Practice Areas
                    </h2>
                    <p className="text-gray-500 text-[14px] leading-[1.8]">
                        Aggarwal &amp; Associates maintains a focused practice in property registration and documentation matters in Delhi. Our experience allows us to guide clients through legal formalities with clarity and structured support.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-12">
                    {practiceAreas.map((area, index) => (
                        <div key={index} className="flex flex-col">
                            <h3 className="font-bold text-[14px] text-gray-800 mb-3 tracking-wide uppercase">
                                {area.title}
                            </h3>
                            <p className="text-gray-500 text-[13px] leading-[1.7] mb-6">
                                {area.description}
                            </p>
                            {/* Divider Line */}
                            <div className="w-full h-px bg-gray-200 mt-auto"></div>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}
