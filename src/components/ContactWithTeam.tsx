"use client";

import Image from "next/image";
import Container from "./Container";

export default function ContactWithTeam() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 max-w-[1100px] mx-auto">

                    {/* Left Column: Image + Chat Card */}
                    <div className="w-full lg:w-[48%] relative flex justify-center self-stretch">
                        <div className="relative w-full max-w-[480px] min-h-full">
                            <Image
                                src="/connect-our-team.png"
                                alt="Connect with our team"
                                fill
                                className="object-contain object-bottom z-10"
                                priority
                            />
                            {/* Chat with us card */}
                            <div className="hidden lg:flex flex-col items-center absolute top-[10%] left-[-20%] bg-[#1c1c1c] text-white rounded-2xl p-6 w-[250px] shadow-2xl z-0 text-center">
                                {/* Chat icon */}
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
                                    <svg width="22" height="22" viewBox="0 0 64 64" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        {/* Back bubble */}
                                        <path d="M42 10H22C17.58 10 14 13.58 14 18V32C14 36.42 17.58 40 22 40H24V48L34 40H42C46.42 40 50 36.42 50 32V18C50 13.58 46.42 10 42 10Z" />
                                        {/* Dots */}
                                        <circle cx="26" cy="25" r="1.5" fill="black" stroke="none" />
                                        <circle cx="32" cy="25" r="1.5" fill="black" stroke="none" />
                                        <circle cx="38" cy="25" r="1.5" fill="black" stroke="none" />
                                    </svg>
                                </div>
                                <h4 className="font-semibold text-[14px] mb-3">Chat with us</h4>
                                <p className="text-white/70 text-[11.5px] leading-[1.7]">
                                    If you&apos;re planning a property transaction in Delhi and need trusted legal expertise, our team is ready to provide clear, dependable, and well-structured support every step of the way.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Header + Form */}
                    <div className="w-full lg:w-[52%]">
                        {/* Heading */}
                        <div className="mb-6">
                            <h2 className="text-[32px] md:text-[42px] font-bold leading-[1.2] text-gray-900 mb-4">
                                Connect With <span className="text-gray-400">Our Team</span>
                            </h2>
                            <p className="text-[#555] text-[14px] leading-[1.7]">
                                Planning a property deal in Delhi? Our legal professionals provide end-to-end advisory services to ensure your transaction is secure, compliant, and stress-free.
                            </p>
                        </div>

                        <h3 className="text-[26px] md:text-[32px] font-semibold text-[#404040] mb-4">
                            Send Message
                        </h3>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                            {/* Name */}
                            <div>
                                <label className="block text-[13px] text-[#4d4d4d] mb-2 font-medium">Name :</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-[#f6f6f3] border-none rounded-md py-3.5 pl-11 pr-4 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Phone & Email */}
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="flex-1">
                                    <label className="block text-[13px] text-[#4d4d4d] mb-2 font-medium">Phone No.</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Whatsapp Number"
                                            className="w-full bg-[#f6f6f3] border-none rounded-md py-3.5 pl-11 pr-4 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <label className="block text-[13px] text-[#4d4d4d] mb-2 font-medium">Email Id</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="Enter Mail Id"
                                            className="w-full bg-[#f6f6f3] border-none rounded-md py-3.5 pl-11 pr-4 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-[13px] text-[#4d4d4d] mb-2 font-medium">Message</label>
                                <div className="relative">
                                    <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                                            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                                        </svg>
                                    </div>
                                    <textarea
                                        placeholder="Type your message"
                                        rows={5}
                                        className="w-full bg-[#f6f6f3] border-none rounded-md py-3.5 pl-11 pr-4 text-[13px] text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 placeholder:text-gray-400 resize-none h-[140px]"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-[#1c1c1c] text-white rounded-md py-[14px] px-6 flex items-center justify-between hover:bg-black transition-colors duration-300"
                            >
                                <span className="text-[14px] font-medium tracking-wide">Send Message</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </button>

                        </form>
                    </div>

                </div>
            </Container>
        </section>
    );
}
