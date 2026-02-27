import Image from 'next/image';

export default function ContactHero() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden mt-20">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-stone-900">
                <Image
                    src="/contact-us-hero.png" // Replace with your contact hero image path
                    alt="Contact Hero Background"
                    fill
                    priority
                    className="object-cover object-center"
                />
                {/* Dark overlay to make text readable */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1536px] mx-auto px-14 sm:px-20 lg:px-32">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h1 className="text-[32px] md:text-5xl lg:text-[56px] font-semibold text-white mb-6 leading-[1.2] tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-white/90 text-[14px] md:text-[15px] leading-[1.8] font-normal max-w-3xl">
                        If you are planning a property transaction in Delhi and require structured legal guidance, our team is available to assist you. Whether it is sale deed registration, gift deed registration, lease documentation, or NRI property registration, we aim to provide clear and dependable support.
                    </p>
                </div>
            </div>
        </section>
    );
}
