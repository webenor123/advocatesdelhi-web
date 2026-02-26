import Image from 'next/image';
import Container from './Container';

export default function WhyChooseUs() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Left - Image */}
                    <div className="w-full md:w-[45%] shrink-0 relative min-h-[300px] md:min-h-0">
                        <Image
                            src="/why-client-choose-us.png"
                            alt="Law firm scales of justice"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-[55%] text-center md:text-left flex flex-col justify-center">
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

                        <button className="mt-8 bg-gray-900 text-white text-[14px] font-medium px-7 py-3 rounded-md hover:bg-gray-700 transition-all duration-300 w-fit mx-auto md:mx-0">
                            Enquire Now
                        </button>
                    </div>

                </div>
            </Container>
        </section>
    );
}
