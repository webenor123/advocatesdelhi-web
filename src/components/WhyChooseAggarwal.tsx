import Image from "next/image";

const reasons = [
    {
        title: "Established Legal Practice Since 1997",
        desc: "Decades of local experience"
    },
    {
        title: "Focused Property Law Practice",
        desc: "Deep knowledge of land categories & documentation"
    },
    {
        title: "Associated with Reputed Panels",
        desc: "Including PNB, GIC Housing Finance, MCD, UniWorth Secfin & NBC"
    },
    {
        title: "Team-Driven Legal Support",
        desc: "Multiple advocates ensuring thorough handling"
    },
    {
        title: "Clear Communication",
        desc: "Structured guidance at every step"
    },
    {
        title: "Client-Centric Approach",
        desc: "Compliance-oriented and risk-aware practice"
    }
];

export default function WhyChooseAggarwal() {
    return (
        <section className="w-full bg-white pt-16 md:pt-24">
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-14 lg:px-32 flex flex-col md:flex-row items-center md:items-start justify-between gap-12 lg:gap-20">

                {/* Left Content */}
                <div className="w-full md:w-[45%] flex flex-col gap-8 md:sticky md:top-32">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1c1d20] leading-[1.2] tracking-tight">
                        Why Choose <span className="text-gray-500 font-medium">Aggarwal</span>
                        <br />
                        <span className="text-gray-500 font-medium">& Associates</span>
                    </h2>

                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm mt-2">
                        <Image
                            src="/why-choose.png"
                            alt="Aggarwal & Associates Team Meeting"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="w-full md:w-[50%] flex flex-col gap-5">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            className="w-full bg-[#f9f9f9] rounded-lg p-5 sm:p-6 sm:px-8 border border-gray-100 hover:shadow-md transition-shadow duration-300"
                        >
                            <p className="text-[14px] sm:text-[15px] leading-[1.6]">
                                <span className="text-[#1c1d20] font-semibold">{reason.title}</span>
                                <span className="text-gray-400 mx-2">—</span>
                                <span className="text-gray-600">{reason.desc}</span>
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
