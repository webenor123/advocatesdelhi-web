import Container from './Container';

const approaches = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8H4zm2 2h4v2H6v-2zm0 4h3v2H6v-2z" />
                <path d="M16 11l2 1v3c0 2-1 3-2 4-1-1-2-2-2-4v-3l2-1zm-.5 4.5l-1-1 .7-.7.3.3 1.5-1.5.7.7-2.2 2.2z" />
            </svg>
        ),
        title: "Understanding the client's transaction"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM6 20V4h5v6h6v10H6zm2-8h8v2H8v-2zm0 4h5v2H8v-2z" />
            </svg>
        ),
        title: "Reviewing property documentation"
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM21.41 6.34a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                <path d="M4 22h16v2H4z" />
            </svg>
        ),
        title: "Drafting and preparation where required"
    },
    {
        icon: (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35zM8 7l-2 2l1.5 1.5L9 9l4 4l3-3l-1.5-1.5L13 10l-1 1l-4-4z" />
            </svg>
        ),
        title: "Assistance with registration procedures"
    }
];

export default function OurApproach() {
    return (
        <section className="pt-16 md:pt-24 bg-white border-b border-gray-100/50">
            <Container>
                {/* Header */}
                <div className="mb-14">
                    <h2 className="text-[28px] md:text-[40px] font-semibold mb-3 leading-[1.3] text-gray-900">
                        Our <span className="text-gray-500">Approach</span>
                    </h2>
                    <p className="text-gray-800 font-semibold text-[14px]">
                        Every matter is handled through a structured process:
                    </p>
                </div>

                {/* Icons Grid */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6 lg:gap-12 w-full pt-4">
                    {approaches.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center flex-1 w-full max-w-[220px] mx-auto md:mx-0">
                            {/* Icon Box */}
                            <div className="w-[72px] h-[72px] bg-white rounded-xl shadow-[0_2px_18px_rgb(0,0,0,0.06)] border border-gray-100/60 flex items-center justify-center text-gray-900 mb-5 shrink-0 transition-transform duration-300 hover:-translate-y-1">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <p className="text-[#848484] text-[12.5px] font-medium leading-[1.6]">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
