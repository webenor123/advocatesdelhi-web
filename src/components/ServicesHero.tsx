import Image from 'next/image';

export default function ServicesHero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-stone-900">
                <Image
                    src="/services-hero.png"
                    alt="Services Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay to make text readable */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1536px] mx-auto px-14 sm:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h1 className="text-[28px] md:text-5xl lg:text-[56px] font-semibold text-white mb-6 leading-[1.2] tracking-tight">
                        Our Expertise. Your <br className="hidden md:block" />
                        Strategic Advantage.
                    </h1>
                    <p className="text-white/90 text-[14px] md:text-[15px] mb-10 leading-[1.7] font-normal max-w-2xl">
                        Comprehensive legal services tailored to protect your interests and drive <br className="hidden md:block" />
                        your success forward with confidence.
                    </p>

                    <button className="bg-white text-black px-8 py-3.5 rounded-full text-[14px] font-semibold hover:bg-gray-100 transition-all duration-300">
                        Explore Our Services
                    </button>
                </div>
            </div>
        </section>
    );
}
