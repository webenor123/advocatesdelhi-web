import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-stone-900">
                <Image
                    src="/home-hero.png"
                    alt="Advocates Delhi Skyline Sunrise"
                    fill
                    priority
                    className="object-cover object-[center_30%]"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1536px] mx-auto px-14 sm:px-20 lg:px-32">
                <div className="max-w-xl pb-16 text-center md:text-left">
                    <h1 className="text-[28px] md:text-5xl lg:text-[56px] font-semibold text-white mb-4 leading-[1.2] tracking-tight">
                        Serving Clients with Legal Clarity Since <span className="text-white/90">1997</span>
                    </h1>
                    <p className="text-white/75 text-[14px] mb-8 leading-[1.7] font-normal mx-auto md:mx-0">
                        Led by Experienced Advocate <span className="font-semibold text-white">Sanjay Aggarwal</span>, the firm assists clients in navigating property transactions with clarity, compliance, and confidence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                        <button className="bg-white text-black px-7 py-3 rounded-full text-[14px] font-semibold hover:bg-gray-100 transition-all duration-300">
                            Book a Consultation
                        </button>
                        <button className="bg-transparent border border-white/60 text-white px-7 py-3 rounded-full text-[14px] font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Call Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Information Bar */}
            <div className="absolute bottom-0 left-0 w-full bg-black/80 backdrop-blur-sm border-t border-white/10 z-10">
                {/* Desktop */}
                <div className="w-full max-w-[1536px] mx-auto px-14 sm:px-20 lg:px-32 py-4 hidden md:flex justify-between items-center text-[11px] font-bold uppercase tracking-[0.15em]">
                    <div className="flex-1 text-center text-stone-500 hover:text-white transition-colors duration-300 cursor-default">RESIDENTIAL &amp; COMMERCIAL PROPERTY REGISTRATIONS</div>
                    <div className="flex-none text-stone-700 px-4">|</div>
                    <div className="flex-1 text-center text-stone-500 hover:text-white transition-colors duration-300 cursor-default">EXPERIENCED LEGAL TEAM</div>
                    <div className="flex-none text-stone-700 px-4">|</div>
                    <div className="flex-1 text-center text-stone-500 hover:text-white transition-colors duration-300 cursor-default">TRANSPARENT &amp; STRUCTURED PROCESS</div>
                </div>
                {/* Mobile */}
                <div className="px-6 py-3 flex flex-col items-center gap-2 md:hidden text-[10px] text-stone-500 font-bold uppercase tracking-widest text-center">
                    <div>RESIDENTIAL &amp; COMMERCIAL PROPERTY REGISTRATIONS</div>
                    <div className="w-3/4 h-px bg-white/10" />
                    <div>EXPERIENCED LEGAL TEAM</div>
                    <div className="w-3/4 h-px bg-white/10" />
                    <div>TRANSPARENT &amp; STRUCTURED PROCESS</div>
                </div>
            </div>
        </section>
    );
}
