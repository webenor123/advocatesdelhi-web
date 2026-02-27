"use client";

import Container from './Container';

export default function ConnectWithTeam() {
    return (
        <section className="py-16 md:py-24 bg-white">
            <Container>

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 px-4">
                    <h2 className="text-[28px] md:text-[40px] font-semibold mb-4 leading-[1.3] text-gray-900">
                        Connect With <span className="text-gray-500">Our Team</span>
                    </h2>
                    <p className="text-[#333333] font-medium text-[13.5px] leading-[1.7]">
                        If you are planning a property transaction in Delhi and require experienced legal guidance, our team is available to assist you with structured, reliable support.
                    </p>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-[1100px] mx-auto">

                    {/* Left Column: Contact Cards */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-6">

                        {/* Email Card */}
                        <div className="bg-[#eeece7] rounded-[14px] p-8 md:p-10 flex flex-col h-full min-h-[220px] transition-transform duration-300 hover:-translate-y-1 group">
                            <div className="mb-auto">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-[15px] mb-2">Email Us</h4>
                                    <p className="text-gray-600 text-[13px]">Mail Directly to us at advocatesdelhi.com</p>
                                </div>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 transition-transform duration-300 group-hover:translate-x-1">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>

                        {/* Call Card */}
                        <div className="bg-[#eeece7] rounded-[14px] p-8 md:p-10 flex flex-col h-full min-h-[220px] transition-transform duration-300 hover:-translate-y-1 group">
                            <div className="mb-auto">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-800">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
                                    <path d="M14.05 6A5 5 0 0 1 18 10" />
                                </svg>
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <div>
                                    <h4 className="font-bold text-gray-900 text-[15px] mb-2">Call Us</h4>
                                    <p className="text-gray-600 text-[13px]">Mon - Fri 9 AM to 7 PM at +91 9851599499</p>
                                </div>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 transition-transform duration-300 group-hover:translate-x-1">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Form */}
                    <div className="w-full lg:w-[55%]">
                        <h3 className="text-[28px] md:text-[34px] font-semibold text-[#404040] mb-8">
                            Send Message
                        </h3>

                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

                            {/* Name Field */}
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

                            {/* Two Columns: Phone & Email */}
                            <div className="flex flex-col sm:flex-row gap-5">
                                <div className="flex-1">
                                    <label className="block text-[13px] text-[#4d4d4d] mb-2 font-medium">Phone No.</label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
                                                <path d="M20.52 3.48A11.97 11.97 0 0 0 12 0C5.372 0 0 5.373 0 12c0 2.115.553 4.148 1.603 5.945L.302 23.328a.75.75 0 0 0 .918.918l5.383-1.301A11.972 11.972 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.205-1.248-6.219-3.48-8.52zM12 22.5c-1.896 0-3.722-.497-5.323-1.44a.75.75 0 0 0-.585-.067l-4.041.977.977-4.04a.75.75 0 0 0-.067-.585A10.457 10.457 0 0 1 1.5 12C1.5 6.21 6.21 1.5 12 1.5S22.5 6.21 22.5 12 17.79 22.5 12 22.5z" />
                                                <path d="M16.969 14.656l-1.93-1.93a1.503 1.503 0 0 0-2.122 0l-.766.766a5.772 5.772 0 0 1-3.664-3.664l.766-.766a1.5 1.5 0 0 0 0-2.121l-1.93-1.93a1.5 1.5 0 0 0-2.12 0l-.587.587c-1.161 1.161-1.354 2.9-.472 4.414 1.346 2.308 3.515 4.478 5.823 5.824 1.514.882 3.253.688 4.414-.472l.588-.588a1.5 1.5 0 0 0 0-2.12z" />
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

                            {/* Message Field */}
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#1c1c1c] text-white rounded-md py-[14px] px-6 flex items-center justify-between hover:bg-black transition-colors duration-300"
                            >
                                <span className="text-[14px] font-medium tracking-wide">Send Message</span>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
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
