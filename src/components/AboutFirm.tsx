import Image from 'next/image';
import Container from './Container';

export default function AboutFirm() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row items-stretch gap-12 lg:gap-20">

                    {/* Left - Image */}
                    <div className="w-full md:w-[45%] shrink-0 self-stretch">
                        <div className="relative w-full h-full min-h-[360px] rounded-2xl overflow-hidden">
                            <Image
                                src="/about-the-firm.png"
                                alt="Advocate Sanjay Aggarwal"
                                fill
                                className="object-cover object-top"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-[55%] text-center md:text-left">
                        <h2 className="text-[28px] md:text-[40px] font-semibold text-gray-900 mb-3 leading-tight">
                            About the <span className="text-gray-400 font-semibold">Firm</span>
                        </h2>

                        <p className="font-semibold text-gray-800 mb-4 text-[14px]">
                            Experience That Adds Legal Certainty to Property Transactions
                        </p>

                        <div className="space-y-4 text-gray-600 text-[14px] leading-[1.8]">
                            <p>
                                Property registration is a critical legal step that requires accuracy, compliance, and foresight. At Aggarwal & Associates, we approach every matter with attention to detail and a clear understanding of Delhi&apos;s property registration framework.
                            </p>
                            <p>
                                Established in 1997, the firm is led by Advocate Sanjay Aggarwal, who brings over two decades of experience in handling property registration and documentation matters across Delhi. He is supported by Advocate Hunny Aggarwal and a team of advocates and legal associates who collectively manage registrations, advisory work, and representation before registration authorities.
                            </p>
                            <p>
                                This collaborative structure allows the firm to handle matters efficiently while maintaining high professional standards and personalized client attention.
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center md:justify-start">
                            <button className="bg-gray-900 text-white px-7 py-3 rounded-md text-[14px] font-medium hover:bg-gray-700 transition-all duration-300">
                                Get started
                            </button>
                            <button className="bg-white text-gray-800 px-7 py-3 rounded-md text-[14px] font-medium border border-gray-300 hover:bg-gray-100 transition-all duration-300">
                                Contact Us
                            </button>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
