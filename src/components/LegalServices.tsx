import Container from './Container';

const services = [
    {
        label: 'Sale Deed Registration',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.5 7A1.5 1.5 0 0 1 7 5.5 1.5 1.5 0 0 1 8.5 7 1.5 1.5 0 0 1 7 8.5 1.5 1.5 0 0 1 5.5 7M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.56-.23-1.06-.59-1.42z" />
            </svg>
        ),
    },
    {
        label: 'Gift Deed Registration',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 6h-2.18c.07-.33.18-.65.18-1 0-2.21-1.79-4-4-4-1.05 0-1.96.41-2.66 1.06L10 3.41l-1.34-1.36C7.96 1.41 7.05 1 6 1 3.79 1 2 2.79 2 5c0 .35.11.67.18 1H2C.9 6 0 6.9 0 8v2c0 1.1.9 2 2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5-3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zM7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-5 5h9v2H2V8zm2 12v-8h7v8H4zm14 0h-5v-8h5v8zm1-10h-9V8h9v2z" />
            </svg>
        ),
    },
    {
        label: 'Lease Deed & Rent Agreement Registration',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
        ),
    },
    {
        label: 'Conveyance Deed Registration',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
        ),
    },
    {
        label: 'Builder–Buyer Agreement Review',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3L1 9l4 2.18V17h2v-4.82l2 1.09V17c0 2.76 2.24 5 5 5s5-2.24 5-5v-3.73l2-1.09V17h2v-5.82L12 3zm5 14c0 1.66-1.34 3-3 3s-3-1.34-3-3v-2.73l3 1.64 3-1.64V17z" />
            </svg>
        ),
    },
    {
        label: 'NRI Property Registration Support',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
        ),
    },
    {
        label: 'Property Mutation Assistance',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
        ),
    },
    {
        label: 'Power of Attorney (POA)',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
        ),
    },
];

export default function LegalServices() {
    return (
        <section className="pt-16 md:pt-24 bg-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-[28px] md:text-[40px] font-semibold text-gray-900 mb-3 leading-tight">
                        Our Legal <span className="text-gray-400 font-semibold">Services</span>
                    </h2>
                    <p className="text-[14px] font-semibold text-gray-800 mb-2">
                        Property Registration &amp; Documentation Services
                    </p>
                    <p className="text-[14px] text-gray-500 max-w-xl mx-auto">
                        We provide comprehensive legal support for property-related transactions, including:
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                    {services.map((service) => (
                        <div
                            key={service.label}
                            className="flex flex-col items-center text-center gap-4 group cursor-default"
                        >
                            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 shadow-md group-hover:bg-gray-900 group-hover:text-white transition-all duration-300">
                                {service.icon}
                            </div>
                            <p className="text-[13px] text-gray-700 leading-normal font-normal">
                                {service.label}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
