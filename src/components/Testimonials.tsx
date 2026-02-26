import Image from 'next/image';
import Container from './Container';

const testimonials = [
    {
        image: '/testimonial1.png',
        text: '"The firm guided us through sale deed registration smoothly. Clear advice and professional handling."',
        author: 'Client',
        location: 'South Delhi',
    },
    {
        image: '/testimonial2.png',
        text: '"Smooth property registration process, clear communication, and excellent coordination with Delhi sub-registrar offices throughout."',
        author: 'Client',
        location: 'South West Delhi',
    },
];

export default function Testimonials() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-[32px] md:text-[40px] font-semibold leading-tight tracking-tight">
                        <span className="text-gray-900">What Our </span>
                        <span className="text-gray-500">Clients</span>
                        <span className="text-gray-900"> Say</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-[1000px] mx-auto">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-start">
                            {/* Image */}
                            <div className="relative w-full sm:w-[180px] shrink-0 aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src={t.image}
                                    alt={`Testimonial from ${t.location}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 pt-2">
                                {/* Stars */}
                                <div className="flex gap-1.5 mb-5 text-[#2563eb]">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-[14px] text-gray-800 leading-[1.8] font-medium mb-6">
                                    {t.text}
                                </p>

                                {/* Author & Location */}
                                <p className="text-[13px] mt-auto">
                                    <span className="font-bold text-gray-900">{t.author}, </span>
                                    <span className="font-semibold text-slate-500">{t.location}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
