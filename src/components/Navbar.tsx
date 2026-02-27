"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    const getLinkClass = (path: string) => {
        const isActive = pathname === path;
        return isActive
            ? "text-black font-semibold text-sm transition-colors"
            : "text-gray-400 hover:text-gray-900 font-medium text-sm transition-colors";
    };

    return (
        <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
            <div className="max-w-[1536px] mx-auto px-14 sm:px-20 lg:px-32">
                <div className="flex justify-between items-center h-20">

                    {/* Logo Area */}
                    <Link href="/" className="shrink-0 flex items-center gap-1.5 cursor-pointer">
                        <div className="relative w-5 h-5 sm:w-6 sm:h-6 shrink-0">
                            <Image src="/Advocate.png" alt="Advocate" fill className="object-contain" />
                        </div>
                        <span className="text-red-500 font-bold text-xl leading-none">/</span>
                        <span className="font-bold text-black tracking-[0.15em] text-xs sm:text-sm uppercase whitespace-nowrap">
                            Aggarwal & Associates
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-10">
                        <Link href="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                        <Link href="/solutions" className={getLinkClass("/solutions")}>
                            Solutions
                        </Link>
                        <Link href="/about" className={getLinkClass("/about")}>
                            About Us
                        </Link>
                        <Link href="/support" className={getLinkClass("/support")}>
                            Support
                        </Link>
                    </div>

                    {/* Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/get-started"
                            className="bg-black text-white px-6 py-2.5 rounded-sm text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
                        >
                            Get Started
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-gray-600 hover:text-black focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    );
}
