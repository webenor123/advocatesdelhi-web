import Image from 'next/image';
import Container from './Container';

export default function WhyChooseUs() {
    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left - Image */}
                    <div className="w-full md:w-[45%] shrink-0 flex justify-center">
                        <div className="relative w-full max-w-[420px] aspect-square">
                            <Image
                                src="/Law firm-bro 1.png"
                                alt="Law firm scales of justice"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-[55%] text-center md:text-left">
                        <h2 className="text-[28px] md:text-[40px] font-semibold text-gray-900 leading-tight mb-1">
                            Why Clients Choose
                        </h2>
                        <h2 className="text-[28px] md:text-[40px] font-semibold text-gray-400 leading-tight mb-6">
                            Aggarwal &amp; Associates
                        </h2>

                        <p className="text-[14px] font-semibold text-gray-800 mb-4">
                            A Law Firm Built on Consistency &amp; Professional Integrity
                        </p>

                        <div className="space-y-4 text-[14px] text-gray-600 leading-[1.8]">
                            <p>
                                Serving clients since 1997, the firm maintains a focused practice in property registration matters with a strong understanding of Delhi sub-registrar procedures. Its work is handled through a team-based legal approach to ensure better efficiency, while prioritizing clear communication and transparent guidance at every stage of the process.
                            </p>
                            <p>
                                Our clients value our structured process, realistic advice, and commitment to getting registrations completed correctly.
                            </p>
                        </div>

                        <button className="mt-8 bg-gray-900 text-white text-[14px] font-medium px-7 py-3 rounded-md hover:bg-gray-700 transition-all duration-300">
                            Enquire Now
                        </button>
                    </div>

                </div>
            </Container>
        </section>
    );
}
