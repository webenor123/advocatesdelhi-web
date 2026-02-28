import Image from "next/image";

export default function TrustedPropertyLawyers() {
    return (
        <section className="w-full bg-white pt-16 md:pt-24">
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-14 lg:px-32 flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-20">

                {/* Left Column */}
                <div className="w-full lg:w-[48%] flex flex-col gap-10">
                    <div className="flex flex-col text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight">
                        <span className="text-gray-500 font-medium">Aggarwal & Associates</span>
                        <span className="text-black font-semibold">Trusted Property</span>
                        <span className="text-black font-semibold">Registration Lawyers</span>
                        <span className="text-gray-500 font-medium">Since 1997</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 sm:gap-10 mt-4">
                        <div className="relative h-12 w-28 sm:h-14 sm:w-32">
                            <Image
                                src="/trusted-property-1.png"
                                alt="Uniworth Secfin"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="relative h-12 w-28 sm:h-14 sm:w-32">
                            <Image
                                src="/trusted-property2.png"
                                alt="GIC Housing Finance"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="relative h-10 w-20 sm:h-12 sm:w-24">
                            <Image
                                src="/trusted-property3.png"
                                alt="PNB"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <div className="relative h-14 w-14 sm:h-16 sm:w-16">
                            <Image
                                src="/trusted-property4.png"
                                alt="Emblem"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="w-full lg:w-[48%] flex flex-col gap-6 text-[#4b5563] text-[15px] sm:text-[16px] leading-[1.8]">
                    <p>
                        When it comes to property transactions in Delhi, correct legal handling of
                        documentation and registration is critical to safeguard ownership and avoid
                        future disputes. Aggarwal & Associates has been providing dedicated property
                        registration legal services in Delhi since 1997, combining deep local experience,
                        procedural compliance, and clear legal guidance for individuals, families,
                        investors, NRIs, and institutions.
                    </p>
                    <p>
                        We are also associated with public and financial panels including PNB (Punjab
                        National Bank), GIC Housing Finance, MCD Panel, and NBC&apos;s like UniWorth Secfin,
                        reflecting trust and recognition in legal credentials across financial and
                        municipal institutions.
                    </p>
                    <p>
                        Our firm&apos;s legal team understands the nuances of property law in Delhi — from
                        documentation and land classification to stamp duty, registration procedures,
                        mutation, and pre-purchase legal searches.
                    </p>
                </div>

            </div>
        </section>
    );
}
