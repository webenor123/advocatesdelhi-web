import Image from 'next/image';
import Container from './Container';

const steps = [
    {
        icon: '/op-icon1.png',
        line1: 'Initial Consultation &',
        line2: 'Assessment',
        line3: '',
    },
    {
        icon: '/op-icon2.png',
        line1: 'Legal Documentation',
        line2: 'Review',
        line3: '',
    },
    {
        icon: '/op-icon3.png',
        line1: 'Drafting, Draft',
        line2: 'Verification & Advisory',
        line3: '',
    },
    {
        icon: '/op-icon4.png',
        line1: 'Stamp Duty Advisory &',
        line2: 'Coordination',
        line3: '',
    },
    {
        icon: '/op-icon5.png',
        line1: 'Completion & Follow-',
        line2: 'Up',
        line3: '',
    },
];

export default function PropertyRegistrationProcess() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[28px] md:text-[44px] font-semibold text-gray-900 leading-tight mb-4 tracking-tight">
                        Our <span className="text-gray-500">Property Registration</span>
                        <br />
                        Process
                    </h2>
                    <p className="text-[14px] md:text-[15px] font-medium text-gray-700">
                        At Aggarwal & Associates, our legal team follows a precise, structured process:
                    </p>
                </div>

                {/* Desktop Timeline */}
                <div className="hidden md:block">
                    <div className="relative flex justify-between items-start">
                        {/* Connecting line (top-[24px] aligns with the center of the 48px circle) */}
                        <div className="absolute top-[24px] -translate-y-1/2 left-[10%] right-[10%] h-[6px] bg-gray-200 z-0" />

                        {steps.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center flex-1 px-2">
                                {/* Circle */}
                                <div className="w-12 h-12 rounded-full bg-[#1c1d20] flex items-center justify-center text-white text-lg font-semibold shadow-md mb-8 shrink-0">
                                    ✓
                                </div>
                                {/* Icon */}
                                <div className="relative w-28 h-28 mb-4 shrink-0">
                                    <Image
                                        src={step.icon}
                                        alt={step.line1}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Text */}
                                <p className="text-[13px] text-gray-600 leading-[1.6] max-w-[160px] font-medium">
                                    {step.line1}<br />
                                    {step.line2}
                                    {step.line3 && <><br />{step.line3}</>}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Timeline */}
                <div className="flex flex-col md:hidden px-2 relative mt-6">
                    {steps.map((step, i) => (
                        <div key={i} className="relative flex items-stretch gap-4 pb-10 last:pb-0">
                            {/* Vertical line (perfectly centered to the circle) */}
                            {i < steps.length - 1 && (
                                <div className="absolute left-[14px] top-8 bottom-[-16px] w-[4px] bg-gray-200 z-0" />
                            )}

                            {/* Circle (reduced size and centered with image) */}
                            <div className="relative z-10 w-8 h-8 rounded-full bg-[#1c1d20] flex items-center justify-center text-white text-sm font-semibold shadow-md shrink-0 mt-5">
                                ✓
                            </div>

                            {/* Content (Image and text pulled up and aligned) */}
                            <div className="flex items-center gap-4 w-full">
                                <div className="relative w-[72px] h-[72px] shrink-0">
                                    <Image
                                        src={step.icon}
                                        alt={step.line1}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="text-left flex-1">
                                    <p className="text-[14px] text-gray-600 font-medium leading-[1.6]">
                                        {step.line1} {step.line2} {step.line3}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
