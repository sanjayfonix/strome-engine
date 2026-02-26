"use client";

import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    name: "Linkedin",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.854 0-2.137 1.446-2.137 2.94v5.666H9.984V9h3.102v1.561h.044c.432-.818 1.487-1.681 3.061-1.681 3.273 0 3.876 2.154 3.876 4.957v6.615zM5.337 7.433a1.8 1.8 0 1 1 0-3.601 1.8 1.8 0 0 1 0 3.601zm1.554 13.019H3.782V9h3.109v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "#",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <div
      className="bg-[#0B1F33]"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px -20px 45px 0px, rgba(0, 0, 0, 0.09) 0px -82px 82px 0px, rgba(0, 0, 0, 0.05) 0px -184px 110px 0px, rgba(0, 0, 0, 0.01) 0px -55px 131px 0px, rgba(0, 0, 0, 0) 0px -617px -3px 0px",
      }}
    >
      <footer
        className="bg-[#050D15] w-full rounded-t-[80px] sm:rounded-t-[120px]"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.6) 0px -35px 102px -18px, rgba(0, 0, 0, 0.4) 0px -16px 1px -13px",
        }}
      >
        {/* Top: centered logo + tagline */}
        <div className="flex flex-col items-center px-4 gap-4 -translate-y-10 sm:-translate-y-16">
          <Image
            src="/logosmall.png"
            alt="Storm Engine"
            width={170}
            height={136}
            className="object-contain opacity-95 w-24 h-20 sm:w-42.5 sm:h-34"
          />
          <p className="text-white text-xl sm:text-2xl md:text-[32px] font-medium text-center max-w-xl leading-snug">
            AI-Assisted Forensic Engineering Intelligence
          </p>
        </div>

        {/* Nav + Contact */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">

            {/* Product */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h4 className="text-[#F1F1F1] font-medium text-base sm:text-lg">Product</h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2">
                {["How it works", "Feature"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#E3E3E3] hover:text-white text-xs sm:text-sm font-normal transition-colors duration-150">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h4 className="text-[#F1F1F1] font-medium text-base sm:text-lg">Company</h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2">
                {["About", "Contact"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#E3E3E3] hover:text-white text-xs sm:text-sm font-normal transition-colors duration-150">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h4 className="text-[#F1F1F1] font-medium text-base sm:text-lg">Support</h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2">
                {["Help center", "Contact support"].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-[#E3E3E3] hover:text-white text-xs sm:text-sm font-normal transition-colors duration-150">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <h4 className="text-[#F1F1F1] font-medium text-base sm:text-lg">Contact</h4>
              <address className="not-italic flex flex-col gap-1 text-[#E3E3E3] text-xs sm:text-sm font-normal">
                <span>west side</span>
                <span>8926 XD Leeuwarden</span>
                <span>0511-43 22 99</span>
                <a href="mailto:info@stormengine.com" className="hover:text-white transition-colors duration-150">
                  info@stormengine.com
                </a>
              </address>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="border-t border-white/10" />
        </div>

        {/* Bottom bar */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[#E3E3E3] text-xs sm:text-sm font-normal text-center sm:text-left">
            © 2025 copyright storm engine All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="flex items-center gap-1.5 text-[#E3E3E3] hover:text-white text-xs sm:text-sm font-normal transition-colors duration-150"
              >
                {social.icon}
                {social.name}
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" className="opacity-50">
                  <path d="M1.5 8.5L8.5 1.5M8.5 1.5H3.5M8.5 1.5V6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

      </footer>
    </div>
  );
}
