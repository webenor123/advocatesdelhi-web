import Image from 'next/image';
import Container from './Container';

export default function ConsultAdvocate() {
    return (
        <section className="pt-16 md:pt-24 pb-16 md:pb-24 bg-white">
            <Container>
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Left - Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative w-full max-w-[450px] aspect-4/3">
                            {/* If the user hasn't uploaded the image yet, they can replace the src */}
                            <Image
                                src="/Law firm-bro.png"
                                alt="Consult an Advocate"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-[32px] md:text-[44px] font-semibold leading-[1.2] mb-6 tracking-tight">
                            <span className="text-gray-900">Consult an Advocate for</span>
                            <br />
                            <span className="text-gray-500">Property Registration</span>
                        </h2>

                        <p className="text-[14px] text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                            If you are planning a property transaction in Delhi, professional legal guidance can help you avoid complications later. Our team is available to assist you with clarity and confidence.
                        </p>

                        <button className="px-6 py-3 border border-gray-900 text-gray-900 text-[14px] font-medium rounded hover:bg-gray-50 transition-colors w-full sm:w-auto">
                            Consult an Advocate for Property Registration
                        </button>
                    </div>

                </div>
            </Container>
        </section>
    );
}
