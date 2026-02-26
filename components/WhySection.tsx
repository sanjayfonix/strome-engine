"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    title: "Structured Forensic Methodology",
    image: "/whychoose1.png",
    description:
      "We apply established engineering standards to assess causation, consistency, and documented damage — not pattern recognition alone.",
  },
  {
    id: 2,
    title: "Licensed PE Oversight",
    image: "/whychoose2.png",
    description:
      "Every report is reviewed and certified by a licensed Professional Engineer, ensuring defensibility and legal standing.",
  },
  {
    id: 3,
    title: "Verified Storm Data Integration",
    image: "/whychoose3.png",
    description:
      "We source verified meteorological and storm data to validate claims with precision and credibility.",
  },
  {
    id: 4,
    title: "Documented Analysis Workflow",
    image: "/whychoose4.png",
    description:
      "Our structured workflow ensures every step is documented, traceable, and audit-ready.",
  },
  {
    id: 5,
    title: "Duplicate Case Protection",
    image: "/whychoose5.png",
    description:
      "Built-in checks prevent duplicate submissions, protecting both clients and the integrity of each analysis.",
  },
  {
    id: 6,
    title: "Secure & Controlled Processing",
    image: "/whychoose6.png",
    description:
      "Encrypted document handling and controlled report access ensure confidentiality.",
  },
];

const cardShadow = {
  boxShadow:
    "0px 2px 4px 0px rgba(0,0,0,0.10), 0px 7px 7px 0px rgba(0,0,0,0.09), 0px 15px 9px 0px rgba(0,0,0,0.05), 0px 26px 11px 0px rgba(0,0,0,0.01)",
};

export default function WhySection() {
  const lastId = items[items.length - 1].id;
  const [activeId, setActiveId] = useState<number | null>(lastId);
  const [hoveredId, setHoveredId] = useState<number>(lastId);

  return (
    <section className="bg-[#F3F6F9] w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="flex items-start justify-between ">
          <span className="text-[#0B1F33] text-base sm:text-xl font-normal tracking-widest uppercase">
            /Why Storm Engine/
          </span>
          <Link
            href="#create-report"
            className="hidden sm:flex items-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] "
          >
            Create Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-[#0B1F33] text-[28px] sm:text-4xl lg:text-5xl font-medium leading-tight mb-10 sm:mb-14">
          Structured Analysis.<br />Professional Accountability.
        </h2>

        {/* Desktop cards — horizontal accordion, JS hover */}
        <div className="hidden md:flex justify-center">
          <div
            className="flex flex-row gap-3 h-[420px]"
            onMouseLeave={() => setHoveredId(lastId)}
          >
            {items.map((item) => {
              const isActive = hoveredId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  style={cardShadow}
                  className={`relative overflow-hidden rounded-sm border border-[#E2E8F0] cursor-pointer transition-all duration-300 ease-in-out ${
                    isActive ? "flex-[0_0_380px] bg-[#E7E9EB]" : "flex-[0_0_68px] bg-white"
                  }`}
                >
                  {/* ── COLLAPSED STATE ── */}
                  <div className={`absolute inset-0 flex flex-col p-5 transition-opacity duration-200 ${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
                    {/* vertical title — top */}
                    <div className="flex justify-center shrink-0 pt-1 overflow-hidden">
                      <span
                        className="text-[#1E1E1E] text-[18px] font-medium whitespace-nowrap select-none"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {item.title}
                      </span>
                    </div>
                    {/* spacer */}
                    <div className="flex-1" />
                    {/* ↗ arrow — bottom */}
                    <div className="flex justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                        <path d="M2.5 13.5L13.5 2.5M13.5 2.5H5.5M13.5 2.5V10.5" stroke="#0B1F33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* ── EXPANDED STATE ── */}
                  <div className={`absolute inset-0 flex flex-row pl-5 transition-opacity duration-300 ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                    {/* Left strip: vertical title + arrow */}
                    <div className="w-10 shrink-0 flex flex-col items-center py-5">
                      <div className="flex justify-center shrink-0 pt-1 overflow-hidden">
                        <span
                          className="text-[#1E1E1E] text-[18px] font-medium whitespace-nowrap select-none"
                          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                        >
                          {item.title}
                        </span>
                      </div>
                      <div className="flex-1" />
                      <div className="shrink-0">
                        <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                          <path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="#0B1F33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                    {/* Right: image fills top, description below */}
                    <div className="flex-1 flex flex-col py-5 pr-5 pl-5 gap-2">
                      <div className="relative rounded-xl overflow-hidden bg-[#E7E9EB] w-full h-[249px] shrink-0">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                      </div>
                      <p className="text-[#515151] text-[12px] leading-relaxed text-right mt-auto shrink-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet — vertical accordion */}
        <div className="md:hidden flex flex-col gap-3">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                style={cardShadow}
                className={`rounded-2xl border border-[#E2E8F0] cursor-pointer transition-all duration-300 overflow-hidden ${isActive ? "bg-[#E7E9EB]" : "bg-white"}`}
                onClick={() => setActiveId(isActive ? null : item.id)}
              >
                {/* Header row — always visible */}
                <div className="flex items-center justify-between px-5 py-4">
                  <span className="text-[#1E1E1E] text-[15px] sm:text-[17px] font-medium leading-snug">{item.title}</span>
                  <span className={`shrink-0 ml-3 transition-transform duration-300 ${isActive ? "rotate-45" : ""}`}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                      <path d="M2.5 13.5L13.5 2.5M13.5 2.5H5.5M13.5 2.5V10.5" stroke="#0B1F33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>

                {/* Expanded content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isActive ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-5 pb-5 flex flex-col gap-3">
                    {/* Full-width image */}
                    <div className="relative w-full rounded-xl overflow-hidden bg-[#E7E9EB]" style={{ aspectRatio: "16/9" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                      />
                    </div>
                    {/* Description + arrow row */}
                    <div className="flex items-end justify-between gap-3">
                      <p className="text-[#515151] text-[12px] sm:text-[13px] leading-relaxed flex-1">
                        {item.description}
                      </p>
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" className="shrink-0 mb-0.5">
                        <path d="M2.5 8H13.5M13.5 8L9 3.5M13.5 8L9 12.5" stroke="#0B1F33" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden mt-10 flex justify-center">
          <Link
            href="#create-report"
            className="flex items-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] "
          >
            Create Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
