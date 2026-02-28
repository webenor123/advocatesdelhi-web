import Image from "next/image";

export default function LawBanner() {
    return (
        <section className="w-full bg-white pt-12 md:pt-24 overflow-hidden">
            <div className="w-full max-w-[1536px] mx-auto px-6 sm:px-14 lg:px-32 flex flex-col sm:flex-row items-stretch justify-between gap-6 md:gap-10">

                {/* Left Image */}
                <div className="relative w-full sm:w-[28%] min-h-[200px] sm:min-h-0">
                    <Image
                        src="/services-law-left.png"
                        alt="Legal Consultation"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Center Text */}
                <div className="flex-1 flex justify-center items-center font-bold text-[#1c1d20] leading-[0.75] tracking-[-0.05em]">
                    <h2 className="text-[120px] sm:text-[140px] md:text-[180px] lg:text-[240px] xl:text-[280px] m-0 p-0 text-center uppercase select-none">
                        LAW
                    </h2>
                </div>

                {/* Right Image */}
                <div className="relative w-full sm:w-[28%] min-h-[200px] sm:min-h-0">
                    <Image
                        src="/services-law-right.png"
                        alt="Legal Team"
                        fill
                        className="object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
