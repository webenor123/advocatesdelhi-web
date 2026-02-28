import Image from "next/image";

const servicesData = [
    {
        image: "/legal1.png",
        items: [
            {
                title: "SALE DEED REGISTRATION",
                desc: "We assist buyers and sellers with drafting, verification, and registration of sale deeds, ensuring lawful transfer of ownership rights as per the Registration Act, 1908 and relevant Delhi stamp duty regulations.",
            },
            {
                title: "GIFT DEED REGISTRATION",
                desc: "Our team prepares and registers gift deeds for immovable property ensuring compliance with statutory requirements and clarity of transfer.",
            }
        ]
    },
    {
        image: "/legal2.png",
        items: [
            {
                title: "LEASE DEED & RENT AGREEMENT REGISTRATION",
                desc: "We support registration of lease deeds and rent agreements for residential, commercial, and industrial purposes, providing clarity on tenant-landlord rights and obligations.",
            },
            {
                title: "CONVEYANCE DEEDS",
                desc: "We handle conveyance deed documentation to legally transfer title from one party to another. This is especially important in builder-buyer and redevelopment matters.",
            }
        ]
    },
    {
        image: "/legal3.png",
        items: [
            {
                title: "POWER OF ATTORNEY (POA)",
                desc: "We draft and register power of attorney documents, ensuring clear delegation of authority for property transactions, including those involving NRIs.",
            },
            {
                title: "BUILDER–BUYER AGREEMENT REVIEW",
                desc: "Our legal team reviews builder-buyer agreements to highlight key clauses, obligations, and risk factors before execution.",
            }
        ]
    },
    {
        image: "/legar4.png",
        items: [
            {
                title: "DDA FREEHOLD CONVERSION",
                desc: "We assist property owners in converting DDA leasehold land to freehold, ensuring statutory procedures are correctly followed — an important requirement for clear marketability.",
            },
            {
                title: "PROPERTY MUTATION ASSISTANCE",
                desc: "After property transfer, mutation in revenue records is essential. We guide you through mutation procedures with Municipal and Revenue departments so your ownership is updated in official records.",
            }
        ]
    },
    {
        image: "/legal5.png",
        items: [
            {
                title: "LEGAL TITLE SEARCH (PRE-PURCHASE)",
                desc: "Before buying property, a careful legal title search can prevent future disputes. We conduct comprehensive searches of title, encumbrance certificates, and prior records.",
            },
            {
                title: "NRI PROPERTY REGISTRATION SUPPORT",
                desc: "For non-resident clients, we provide end-to-end support, including POA drafting, documentation, representation, and coordination with registration authorities in Delhi.",
            }
        ]
    }
];

export default function ComprehensiveLegalServices() {
    return (
        <section className="w-full bg-white pt-16 md:pt-24">
            <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-14 lg:px-20 flex flex-col items-center">

                {/* Header text */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1c1d20] leading-[1.2] mb-4">
                        Comprehensive <span className="text-gray-500 font-medium">Property Registration</span>
                        <br className="hidden sm:block" />
                        & Legal Services
                    </h2>
                    <p className="text-[#4b5563] text-[15px] sm:text-[16px]">
                        We provide a wide range of legal services related to property in Delhi:
                    </p>
                </div>

                {/* List container */}
                <div className="w-full flex flex-col gap-10 md:gap-14">
                    {servicesData.map((group, groupIndex) => (
                        <div key={groupIndex} className="w-full flex flex-col md:flex-row items-stretch gap-8 md:gap-12 lg:gap-16">

                            {/* Left Image */}
                            <div className="w-full md:w-[35%] lg:w-[30%] relative h-[250px] md:h-auto min-h-[250px] md:min-h-[300px]">
                                <Image
                                    src={group.image}
                                    alt="Legal Service Category"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Right List Items */}
                            <div className="w-full md:w-[65%] lg:w-[70%] flex flex-col justify-center">
                                {group.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="w-full">
                                        {/* Divider (always show above each item) */}
                                        <div className="w-full h-px bg-gray-200 mb-6"></div>

                                        <div className="flex flex-col gap-3 pb-6">
                                            <h3 className="text-[#1c1d20] text-[15px] sm:text-[16px] font-semibold tracking-wide">
                                                {item.title}
                                            </h3>
                                            <p className="text-[#4b5563] text-[13px] sm:text-[14px] leading-[1.8]">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {/* If it's the last group and the last item, add a divider at the very bottom too based on the provided design. Actually wait, let's just make sure there's a divider after the final item. */}
                                {groupIndex === servicesData.length - 1 && (
                                    <div className="w-full h-px bg-gray-200"></div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
