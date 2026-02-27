import Image from 'next/image';

export default function LegalSupport() {
    return (
        <section className="w-full bg-[#E9EAE2]">
            <div className="flex flex-col md:flex-row w-full">

                {/* Left Image */}
                <div className="w-full md:w-[50%] relative min-h-[350px] sm:min-h-[400px] lg:min-h-[550px]">
                    <Image
                        src="/leagal-support.png" // Placeholder - please rename your actual image to legal-support.png
                        alt="Legal Support and Administration"
                        fill
                        className="object-cover object-center"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full md:w-[50%] flex items-center">
                    {/* Padding matching the Container right side + inner spacing */}
                    <div className="px-10 pt-16 md:pt-20 lg:pt-24 pb-0 md:pl-12 lg:pl-20 md:pr-14 sm:pr-20 lg:pr-32 max-w-2xl">
                        <h2 className="text-[32px] md:text-[40px] lg:text-[46px] font-semibold mb-6 leading-[1.2] text-gray-900 tracking-tight">
                            Legal Support and <br className="hidden xl:block" /> Administration
                        </h2>

                        <div className="space-y-6 text-gray-500 text-[14px] md:text-[15px] leading-[1.8] mb-10">
                            <p>
                                The firm is supported internally by <span className="font-bold text-gray-700">Sonu Chadha</span>, who assists in administrative coordination and procedural support to ensure efficient management of documentation and scheduling within the firm&apos;s operations.
                            </p>
                            <p>
                                This internal structure allows the advocates to focus on legal review and advisory responsibilities while maintaining organized workflow management.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#1c1c1c] text-white px-7 py-3 rounded-full text-[14px] font-medium hover:bg-black transition-all duration-300">
                                Book a Consultation
                            </button>
                            <button className="bg-transparent border border-gray-400 text-gray-700 px-7 py-3 rounded-full text-[14px] font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center gap-2">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Call Now
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
