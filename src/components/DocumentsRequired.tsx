import Image from "next/image";

export default function DocumentsRequired() {
    return (
        <section className="w-full bg-white pt-16 md:pt-24">
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-14 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

                {/* Left Content */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1c1d20] leading-[1.2] tracking-tight">
                        <span className="text-gray-500 font-medium">Documents</span> Required for
                        <br className="hidden sm:block" />
                        Property Registration in
                        <br className="hidden sm:block" />
                        Delhi
                    </h2>

                    <p className="text-[#4b5563] text-[14px] sm:text-[15px] leading-[1.6]">
                        Property registration requires strict compliance with document norms. While
                        specifics may vary by transaction type, commonly required documents include:
                    </p>

                    <div className="flex flex-col sm:flex-row gap-10 sm:gap-16 mt-4">
                        {/* Mandatory Documents List */}
                        <div className="flex-1">
                            <h3 className="text-[#1c1d20] font-semibold text-[15px] mb-4">
                                Mandatory Documents
                            </h3>
                            <ul className="text-[#4b5563] text-[13px] sm:text-[14px] leading-[2] space-y-1">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Aadhaar Card / Passport (All parties)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Passport-size photographs</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Title documents (Sale deed, prior deeds)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Encumbrance Certificate (EC)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Stamp duty payment receipts</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>PAN Card (Both parties)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Address proof (Utility bill, passport, etc.)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Draft sale deed / executed deed</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>Power of Attorney (If executed)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Additional Documents List */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <h3 className="text-[#1c1d20] font-semibold text-[15px] mb-4">
                                    Additional Documents Depending
                                    <br className="hidden sm:block" />
                                    on Case
                                </h3>
                                <ul className="text-[#4b5563] text-[13px] sm:text-[14px] leading-[2] space-y-1">
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Builder agreement / allotment letter (for new properties)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>NRI documents (Passport, POA, OCI/PIO cards)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>DDA lease documents (for conversion)</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Municipal tax receipts / Khata certificate</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>Affidavits / Undertakings (as per case requirement)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center gap-4 mt-8 sm:mt-0">
                                <button className="bg-[#1c1d20] text-white px-6 py-2.5 rounded-md text-[13px] font-medium hover:bg-black transition-colors">
                                    Get started
                                </button>
                                <button className="bg-[#6b7280] text-white px-6 py-2.5 rounded-md text-[13px] font-medium hover:bg-gray-600 transition-colors">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-[45%] xl:w-[40%] relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
                    <Image
                        src="/propertyregistratoin.png"
                        alt="Property Registration Document Review"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
