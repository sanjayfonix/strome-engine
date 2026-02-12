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
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${
            scrolled 
                ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-lg' 
                : 'bg-white border-b border-gray-100 shadow-sm'
        }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo with Gradient and Animation */}
                    <Link href="/" className="group flex items-center gap-2 transition-all duration-300 hover:scale-105">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-2">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                            Storm Engine
                        </span>
                    </Link>

                    {/* Desktop nav with enhanced styling */}
                    <div className="hidden md:flex items-center gap-3">
                        <Link
                            href="/login"
                            className="group relative px-6 py-2.5 text-sm font-semibold text-gray-700 rounded-xl hover:text-primary transition-all duration-300 overflow-hidden"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></span>
                            <span className="relative flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                </svg>
                                Login
                            </span>
                        </Link>
                        <Link
                            href="/signup"
                            className="group relative px-6 py-2.5 text-sm font-semibold text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center gap-2">
                                Sign Up
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </Link>
                    </div>

                    {/* Mobile hamburger with animation */}
                    <button
                        className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
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

            {/* Mobile menu with slide animation */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}>
                <div className="border-t border-gray-100 bg-gradient-to-b from-white to-gray-50 px-4 pb-4 pt-4 space-y-3">
                    <Link
                        href="/login"
                        className="flex items-center gap-3 w-full px-5 py-3 text-sm font-semibold text-gray-700 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-primary transition-all duration-300 transform hover:translate-x-1"
                        onClick={() => setMobileOpen(false)}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                        onClick={() => setMobileOpen(false)}
                    >
                        Sign Up
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
