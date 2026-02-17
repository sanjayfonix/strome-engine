"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            style={{
                background: "linear-gradient( #0F2A43 50%, #1A3A5C 50%, #0F2A43 50%)",
            }}
            className="text-white shadow-lg"
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 transition-all duration-300 hover:opacity-80">
                        <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold tracking-tight">
                            Storm Engine
                        </span>
                    </Link>

                    {/* Desktop nav with menu items */}
                    <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
                        <a href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                            How It Works
                        </a>
                        <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                            Features
                        </a>
                        <a href="#security" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                            Security
                        </a>
                        <a href="#professionals" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                            For Professionals
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <Link
                            href="/intake"
                            className="px-6 py-2.5 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                        >
                            Create a Report
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                            <span className={`absolute h-0.5 w-6 bg-current top-3 transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-[#1e3a5f] px-4 pb-4 pt-2 space-y-2">
                    <a
                        href="#how-it-works"
                        className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                    >
                        How It Works
                    </a>
                    <a
                        href="#features"
                        className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                    >
                        Features
                    </a>
                    <a
                        href="#security"
                        className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                    >
                        Security
                    </a>
                    <a
                        href="#professionals"
                        className="block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                    >
                        For Professionals
                    </a>
                    <Link
                        href="/intake"
                        className="block text-center px-4 py-3 mt-2 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200"
                        onClick={() => setMobileOpen(false)}
                    >
                        Create a Report
                    </Link>
                </div>
            </div>
        </nav>
    );
}
