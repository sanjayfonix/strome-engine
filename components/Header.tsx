"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Work", href: "#how-it-work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Track Order", href: "/track-order" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkColor = (href: string) => {
    const isActive = activeLink === href;
    if (scrolled) {
      return isActive
        ? "text-[#1E1E1E] font-medium"
        : "text-[#515151] font-normal";
    }
    return isActive
      ? "text-white font-medium"
      : "text-[#F1F1F1] font-normal";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 pt-3 sm:pt-4">
      <nav
        className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-2 h-14 sm:h-16 flex items-center justify-between rounded-full backdrop-blur-xl border border-white/20 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.14)] bg-white/20`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src={scrolled ? "/logoblack.png" : "/logo.png"}
            alt="Storm Engine Logo"
            width={119}
            height={30}
            className="w-22.5 sm:w-29.75 h-auto transition-opacity duration-300"
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                className={`text-sm lg:text-base  transition-colors duration-200 ${linkColor(link.href)}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button — desktop */}
        <div className="hidden md:block">
          <Link
            href="/create-report"
            className="flex items-center gap-2 bg-[#2563EB] text-white text-sm lg:text-base font-semibold px-4 lg:px-5 py-2 lg:py-2.5 rounded-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
          >
            Create New Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className={`md:hidden p-1.5 rounded-lg transition-colors ${scrolled ? "text-[#1E1E1E] hover:bg-black/10" : "text-white hover:bg-white/10"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile / Tablet Dropdown Menu */}
      {mobileOpen && (
        <div className={`md:hidden mt-2 mx-auto rounded-2xl backdrop-blur-xl border border-white/20 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.14)] px-5 py-5 flex flex-col gap-1 bg-white/20`}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => { setMobileOpen(false); setActiveLink(link.href); }}
              className={`text-sm font-medium py-2 border-b border-white/10 last:border-0 transition-colors duration-200 ${linkColor(link.href)}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/create-report"
            onClick={() => setMobileOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 bg-[#2563EB] text-white text-sm font-bold px-5 py-2.5 rounded-full w-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] "
          >
            Create New Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      )}
    </header>
  );
}


