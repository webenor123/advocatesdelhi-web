import Image from 'next/image';
import Container from './Container';

export default function ServingClients() {
    return (
        <section className="pt-16 md:pt-24 bg-white overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left - Content */}
                    <div className="w-full lg:w-[45%] text-center lg:text-left">
                        <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] mb-6 tracking-tight">
                            <span className="text-gray-900">Serving Clients </span>
                            <span className="text-gray-500">Across</span>
                            <br className="hidden md:block" />
                            <span className="text-gray-500 mt-2 inline-block">Delhi </span>
                            <span className="text-gray-900"> Region</span>
                        </h2>

                        <p className="text-[14px] text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Aggarwal &amp; Associates assists clients across all major zones of Delhi. Our familiarity with local procedures enables smooth coordination with registration offices and authorities.
                        </p>
                    </div>

                    {/* Right - Images */}
                    <div className="w-full lg:w-[55%] flex flex-col sm:flex-row items-center justify-center gap-6 lg:gap-5">
                        {/* Image 1: Collage */}
                        <div className="relative w-full max-w-[240px] aspect-4/5 shrink-0">
                            <Image
                                src="/serving-clients1.png"
                                alt="Aggarwal Associates Clients"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Image 2: Delhi Map */}
                        <div className="relative w-full max-w-[320px] aspect-square shrink-0">
                            <Image
                                src="/serving-clients2.png"
                                alt="Delhi Region Map"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
