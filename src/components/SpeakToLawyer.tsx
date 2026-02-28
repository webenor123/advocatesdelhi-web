import React from 'react';

const LocationIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const PhoneIcon = <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const ArrowRightIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const UserIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>;
const WhatsAppIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>;
const MailIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
const MessageIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;

export default function SpeakToLawyer() {
    return (
        <section className="w-full bg-white pt-16 md:pt-24">
            <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-14 flex flex-col items-center">

                {/* Header Container */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-[#1c1d20] leading-[1.2] tracking-tight mb-4">
                        Speak to a <span className="text-gray-500 font-medium">Property Registration</span>
                        <br />
                        Lawyer in Delhi
                    </h2>
                    <p className="text-[#4b5563] text-[14px] sm:text-[15px] font-medium max-w-2xl mx-auto leading-relaxed">
                        If you are buying, selling, transferring, converting, or researching property in Delhi, professional legal guidance is crucial to protecting your rights.
                    </p>
                </div>

                {/* Content Grid */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14">

                    {/* Left Column: Contact Cards */}
                    <div className="flex flex-col gap-6">
                        {/* Location Card */}
                        <div className="bg-[#e9eadf] rounded-[20px] p-6 lg:p-8 flex flex-col justify-between min-h-[220px]">
                            <div className="text-gray-700">
                                {LocationIcon}
                            </div>
                            <div className="mt-8 flex items-end justify-between">
                                <div>
                                    <h3 className="text-[#1c1d20] text-[16px] lg:text-[18px] font-bold mb-1.5">
                                        Location
                                    </h3>
                                    <p className="text-[#4b5563] text-[14px]">
                                        Office & Court Locations — Kashmere Gate, Delhi
                                    </p>
                                </div>
                                <div className="text-gray-500 mb-1">
                                    {ArrowRightIcon}
                                </div>
                            </div>
                        </div>

                        {/* Call Us Card */}
                        <div className="bg-[#e9eadf] rounded-[20px] p-6 lg:p-8 flex flex-col justify-between min-h-[220px]">
                            <div className="text-gray-700">
                                {PhoneIcon}
                            </div>
                            <div className="mt-8 flex items-end justify-between">
                                <div>
                                    <h3 className="text-[#1c1d20] text-[16px] lg:text-[18px] font-bold mb-1.5">
                                        Call Us
                                    </h3>
                                    <p className="text-[#4b5563] text-[14px]">
                                        Mon - Fri 9 AM to 7 PM at +91 9851599499
                                    </p>
                                </div>
                                <div className="text-gray-500 mb-1">
                                    {ArrowRightIcon}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="flex flex-col h-full bg-white">
                        <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold text-[#4b5563] mb-8">
                            Send Message
                        </h3>

                        <form className="flex flex-col gap-6 flex-grow justify-between">
                            <div className="flex flex-col gap-6">
                                {/* Name Input */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] text-gray-700 font-medium">Name <span className="text-gray-400 font-normal">:</span></label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                            {UserIcon}
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-[#f8f9f6] border border-transparent focus:border-gray-200 focus:bg-white rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Phone & Email Inputs Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[14px] text-gray-700 font-medium">Phone No.</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                {WhatsAppIcon}
                                            </div>
                                            <input
                                                type="text"
                                                placeholder="Whatsapp Number"
                                                className="w-full bg-[#f8f9f6] border border-transparent focus:border-gray-200 focus:bg-white rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[14px] text-gray-700 font-medium">Email Id</label>
                                        <div className="relative">
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                                                {MailIcon}
                                            </div>
                                            <input
                                                type="email"
                                                placeholder="Enter Mail Id"
                                                className="w-full bg-[#f8f9f6] border border-transparent focus:border-gray-200 focus:bg-white rounded-xl py-3.5 pl-11 pr-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Message Input */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-[14px] text-gray-700 font-medium">Message</label>
                                    <div className="relative">
                                        <div className="absolute left-4 top-[18px] text-gray-400">
                                            {MessageIcon}
                                        </div>
                                        <textarea
                                            placeholder="Type your message"
                                            rows={5}
                                            className="w-full bg-[#f8f9f6] border border-transparent focus:border-gray-200 focus:bg-white rounded-xl py-4 pl-11 pr-4 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="button"
                                className="w-full bg-[#1c1d20] hover:bg-black text-white rounded-xl py-4 mt-2 transition-colors flex items-center justify-between px-6"
                            >
                                <span className="font-medium text-[14px]">Send Message</span>
                                <span>{ArrowRightIcon}</span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
