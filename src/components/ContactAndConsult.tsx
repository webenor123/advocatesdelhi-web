import Image from 'next/image';
import Container from './Container';
import React from 'react';

const PhoneIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>;
const BuildingIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>;
const ClockIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>;
const PinIcon = <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
const ArrowIcon = <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>;
const MapPinFilled = <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" /></svg>;

function InfoRow({ icon, children }: { icon: React.ReactNode, children: React.ReactNode }) {
    return (
        <div className="flex items-start gap-3 md:gap-4">
            <div className="w-9 h-9 md:w-10 md:h-10 shrink-0 rounded-full bg-white shadow-[0_2px_12px_rgb(0,0,0,0.06)] border border-gray-100 flex items-center justify-center text-gray-600">
                {icon}
            </div>
            <div className="text-[12.5px] md:text-[13px] text-gray-500 leading-[1.6] pt-1.5 md:pt-2.5">
                {children}
            </div>
        </div>
    );
}

export default function ContactAndConsult() {
    return (
        <section className="py-16 md:py-24 bg-[#fafafa]">
            <Container>

                {/* Header Section */}
                <div className="text-center mb-14">
                    {/* Authors/Lawyers Pill */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full p-1.5 pr-5 shadow-sm">
                            <div className="flex -space-x-2">
                                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image src="/avatar1.png" alt="Advocate" fill className="object-cover" />
                                </div>
                                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image src="/avatar2.png" alt="Advocate" fill className="object-cover" />
                                </div>
                                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image src="/avatar3.png" alt="Advocate" fill className="object-cover" />
                                </div>
                                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image src="/avatar4.png" alt="Advocate" fill className="object-cover" />
                                </div>
                                <div className="relative w-7 h-7 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                                    <Image src="/avatar5.png" alt="Advocate" fill className="object-cover" />
                                </div>
                            </div>
                            <span className="text-[12px] sm:text-[13px] font-medium text-gray-700">
                                Reliable Property Registration Lawyers in Delhi
                            </span>
                        </div>
                    </div>

                    <h2 className="text-[32px] md:text-[44px] tracking-tight text-gray-500 font-medium mb-4">
                        Contact & Consult <span className="font-semibold text-gray-900">Now</span>
                    </h2>
                    <p className="text-[14px] text-gray-500 font-medium max-w-2xl mx-auto leading-relaxed">
                        Speak with an advocate regarding your property registration. You may contact us directly or visit our office during working hours.
                    </p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 max-w-[1050px] mx-auto">

                    {/* Card 1: Office Information */}
                    <div className="flex-1 bg-white rounded-[20px] border border-gray-200 shadow-[0_4px_30px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col">
                        <div className="p-8 md:p-10 grow relative">
                            <div className="text-center mb-10">
                                <h3 className="text-[24px] md:text-[28px] font-semibold text-gray-800 mb-2">Office Information</h3>
                                <p className="text-[13px] text-gray-500">Note: Scan the QR code to view location on map</p>
                            </div>

                            <div className="flex justify-between items-end gap-2">
                                <div className="space-y-6 flex-1">
                                    <InfoRow icon={PhoneIcon}>
                                        <span className="font-semibold text-gray-800">Call Us - </span>
                                        Mobile No. 9851599499 | Office Landline 011-41500338
                                    </InfoRow>
                                    <InfoRow icon={BuildingIcon}>
                                        <span className="font-semibold text-gray-800">Address - </span>
                                        A-210, Block A, Block B, Shastri Nagar
                                    </InfoRow>
                                    <InfoRow icon={ClockIcon}>
                                        <span className="font-semibold text-gray-800">Timing - </span>
                                        Office Timings 10:30 am - 6:30 pm
                                    </InfoRow>
                                    <InfoRow icon={PinIcon}>
                                        <span className="font-semibold text-gray-800">Location - </span>
                                        <a href="https://maps.app.goo.gl/yfaXJSYttuSGjcwN7?g_st=ic" target="_blank" rel="noopener noreferrer" className="ml-1 sm:ml-2 bg-[#222] text-white text-[11px] font-medium px-3.5 py-1.5 rounded-md hover:bg-black transition-colors inline-block">
                                            Get Direction
                                        </a>
                                    </InfoRow>
                                </div>

                                {/* QR Code */}
                                <div className="hidden sm:block shrink-0 w-[84px] h-[84px] relative">
                                    <Image src="/office-info-QR.png" alt="Office QR Code" fill className="object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Map Area */}
                        <div className="relative h-[220px] w-full bg-gray-100 border-t border-gray-100 overflow-hidden pointer-events-none">
                            <iframe
                                src="https://maps.google.com/maps?q=28.670048,77.181854&t=&z=14&ie=UTF8&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute -top-[140px] -left-[20px] w-[calc(100%+40px)] h-[calc(100%+160px)]"
                            ></iframe>
                            <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/40 p-3.5 rounded-lg shadow-lg min-w-[210px] text-gray-800 pointer-events-auto">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-black">
                                        {MapPinFilled}
                                    </div>
                                    <h4 className="text-[14px] font-bold text-gray-900">Office Location</h4>
                                </div>
                                <a href="https://maps.app.goo.gl/yfaXJSYttuSGjcwN7?g_st=ic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-500 text-[12px] hover:text-gray-900 transition-colors">
                                    <span className="text-gray-400">{ArrowIcon}</span>
                                    Get Precise location on maps
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Chamber Information */}
                    <div className="flex-1 bg-white rounded-[20px] border border-gray-200 shadow-[0_4px_30px_rgb(0,0,0,0.03)] overflow-hidden flex flex-col">
                        <div className="p-8 md:p-10 grow relative">
                            <div className="text-center mb-10">
                                <h3 className="text-[24px] md:text-[28px] font-semibold text-gray-800 mb-2">Chamber Information</h3>
                                <p className="text-[13px] text-gray-500">Note: Scan the QR code to view location on map</p>
                            </div>

                            <div className="flex justify-between items-end gap-2">
                                <div className="space-y-6 flex-1">
                                    <InfoRow icon={PhoneIcon}>
                                        <span className="font-semibold text-gray-800">Call Us - </span>
                                        Mobile No. 9851599499 | Court Landline 011-41525566
                                    </InfoRow>
                                    <InfoRow icon={BuildingIcon}>
                                        <span className="font-semibold text-gray-800">Address - </span>
                                        Ch. No.25 Old Court Kashmere Gate Delhi
                                    </InfoRow>
                                    <InfoRow icon={ClockIcon}>
                                        <span className="font-semibold text-gray-800">Timing - </span>
                                        Court Timings 10:00 am - 4:00 pm
                                    </InfoRow>
                                    <InfoRow icon={PinIcon}>
                                        <span className="font-semibold text-gray-800">Location - </span>
                                        <a href="https://maps.app.goo.gl/pwKxB8T9JH3nt8Ex9?g_st=ic" target="_blank" rel="noopener noreferrer" className="ml-1 sm:ml-2 bg-[#222] text-white text-[11px] font-medium px-3.5 py-1.5 rounded-md hover:bg-black transition-colors inline-block">
                                            Get Direction
                                        </a>
                                    </InfoRow>
                                </div>

                                {/* QR Code */}
                                <div className="hidden sm:block shrink-0 w-[84px] h-[84px] relative">
                                    <Image src="/chamber-info-qr.png" alt="Chamber QR Code" fill className="object-contain" />
                                </div>
                            </div>
                        </div>

                        {/* Map Area */}
                        <div className="relative h-[220px] w-full bg-gray-100 border-t border-gray-100 overflow-hidden pointer-events-none">
                            <iframe
                                src="https://maps.google.com/maps?q=28.666700,77.231500&t=&z=14&ie=UTF8&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute -top-[140px] -left-[20px] w-[calc(100%+40px)] h-[calc(100%+160px)]"
                            ></iframe>
                            <div className="absolute bottom-5 left-5 bg-white/10 backdrop-blur-sm border border-white/40 p-3.5 rounded-lg shadow-lg min-w-[210px] text-gray-800 pointer-events-auto">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="text-black">
                                        {MapPinFilled}
                                    </div>
                                    <h4 className="text-[14px] font-bold text-gray-900">Court Chamber Location</h4>
                                </div>
                                <a href="https://maps.app.goo.gl/pwKxB8T9JH3nt8Ex9?g_st=ic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-gray-500 text-[12px] hover:text-gray-900 transition-colors">
                                    <span className="text-gray-400">{ArrowIcon}</span>
                                    Get Precise location on maps
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
}
