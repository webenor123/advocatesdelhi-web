import Container from './Container';

export default function Commitment() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                <div className="max-w-[1000px] mx-auto">

                    {/* Top Row */}
                    <div className="flex items-center gap-6 md:gap-8 mb-2">
                        <h2 className="text-[28px] md:text-[40px] font-semibold text-gray-900 whitespace-nowrap leading-none tracking-tight">
                            Commitment to Responsible
                        </h2>
                        <div className="h-px bg-gray-200 grow mt-1"></div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-16">
                        <div className="shrink-0">
                            <h2 className="text-[28px] md:text-[40px] font-semibold text-gray-500 whitespace-nowrap leading-none tracking-tight">
                                Legal Practice
                            </h2>
                        </div>
                        <div className="md:pt-2">
                            <p className="text-[#848484] text-[13px] md:text-[13.5px] leading-[1.8] font-medium max-w-2xl">
                                Since 1997, Aggarwal &amp; Associates has operated with a consistent commitment to lawful practice, procedural diligence, and client trust. Property transactions often represent significant financial decisions, and we approach each matter with the seriousness it deserves.
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
