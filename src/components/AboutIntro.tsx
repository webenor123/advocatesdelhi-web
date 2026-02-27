import Container from "./Container";

export default function AboutIntro() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <h2 className="text-[28px] md:text-[40px] font-semibold mb-8 leading-[1.3] text-gray-900">
                        <span className="text-gray-500">Aggarwal & Associates</span> &ndash; Property<br className="hidden md:block" />
                        Registration Lawyers in Delhi
                    </h2>

                    <h3 className="text-gray-700 font-semibold mb-6 text-[14px] md:text-[15px]">
                        Serving Clients with Professional Integrity Since 1997
                    </h3>

                    <div className="space-y-6 text-gray-500 text-[14px] md:text-[15px] leading-[1.8] max-w-4xl text-center">
                        <p>
                            Aggarwal & Associates is a Delhi-based law firm dedicated to property registration and related legal services. Established in 1997, the firm has steadily built its practice around accuracy, procedural compliance, and structured legal guidance in property transactions.
                        </p>
                        <p>
                            With decades of practical experience, the firm assists individuals, families, business owners, and non-resident clients in completing property registrations with clarity and confidence. Our approach is rooted in careful document verification, lawful execution, and transparent communication.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
