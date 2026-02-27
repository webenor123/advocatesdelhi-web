import Image from 'next/image';
import Container from './Container';

export default function LeadershipFoundation() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <div className="w-full md:w-[50%] lg:w-[55%]">
                        <h2 className="text-[28px] md:text-[40px] font-semibold mb-6 leading-[1.3] text-gray-900">
                            Leadership <span className="text-gray-500">&amp;</span> Foundation
                        </h2>

                        <div className="space-y-6 text-gray-500 text-[14px] md:text-[15px] leading-[1.8] mb-10 pr-0 lg:pr-6">
                            <p>
                                The firm is led by Experienced Advocate Sanjay Aggarwal, who has been practicing in property registration and documentation matters since 1997. His steady guidance and hands-on involvement in complex registration matters have shaped the professional standards of the firm.
                            </p>
                            <p>
                                Under his leadership, Aggarwal & Associates has maintained a focused practice in property-related legal services across Delhi.
                            </p>
                        </div>

                        <button className="bg-[#1c1c1c] text-white px-7 py-3 rounded-md text-[14px] font-medium hover:bg-black transition-all duration-300">
                            Enquire Now
                        </button>
                    </div>

                    {/* Right Image Mask */}
                    <div className="w-full md:w-[50%] lg:w-[45%] self-stretch">
                        <div className="relative w-full h-full min-h-[400px] rounded-[10px] overflow-hidden">
                            <Image
                                src="/about-us-leadership.png" // Replace with actual image path
                                alt="Leadership & Foundation"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
