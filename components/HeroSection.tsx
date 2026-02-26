"use client";

import Link from "next/link";
import Image from "next/image";

const floatingCards = [
  {
    id: "licensed",
    type: "badge",
    title: "Licensed Professional Engineer Certified",
    description: "Every report is reviewed and signed by a certified PE.",
    bg: "bg-amber-500/90",
    avatars: [
      "/user1.jpg",
      "/user2.jpg",
      "/user3.jpg",
      "/user4.jpg",

    ],
  },
  {
    id: "weather",
    type: "image",
    title: "Storm & Weather Data Integrated",
    description: "Historical weather and external datasets are incorporated into analysis.",
    imageSrc: "/heroimg.jpg",
    imageFallbackBg: "bg-gradient-to-br from-red-900 via-red-700 to-orange-900",
    bg: "bg-white/10",
  },
  {
    id: "engineering",
    type: "text",
    title: "Engineering Standards Applied",
    description:
      "Analysis follows structured forensic engineering methodology.",
    bg: "bg-white/10",
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[url('/herobg.png')] bg-cover bg-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Aerial view of residential neighborhood"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-end pt-28 pb-10 sm:pb-14 lg:pb-16 gap-6 lg:flex-row lg:items-end lg:gap-8">
        {/* Left: Heading + CTA */}
        <div className="flex-1 flex flex-col gap-5 sm:gap-6">
          <h1 className="text-[28px] sm:text-4xl lg:text-5xl font-medium text-[#F1F1F1] leading-tight">
            Forensic Engineering Reports Structured, Reviewed, and Defensible.
          </h1>

          <Link
            href="/create-report"
            className="flex items-center gap-2 bg-[#2563EB] text-white text-sm sm:text-base font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full w-fit transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] "
          >
            Create New Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Cards — always vertical stack */}
        <div className="flex flex-col gap-3 w-full lg:w-72 xl:w-80 lg:pb-2">
          {floatingCards.map((card) => (
            <FloatingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

type Card = (typeof floatingCards)[number];

function FloatingCard({ card }: { card: Card }) {
  if (card.type === "badge") {
    return (
      <div className="bg-[#C8A951] backdrop-blur-md rounded-xl p-3 shadow-[0px_5px_11px_0px_rgba(0,0,0,0.10),0px_21px_21px_0px_rgba(0,0,0,0.09),0px_46px_28px_0px_rgba(0,0,0,0.05),0px_83px_33px_0px_rgba(0,0,0,0.01)]">
        <h3 className="text-[#1E1E1E] text-lg font-medium leading-snug mb-1.5">
          {card.title}
        </h3>
        <p className="text-[#515151] text-xs font-normal leading-relaxed mb-3">
          {card.description}
        </p>
        {card.avatars && (
          <div className="flex items-center -space-x-2">
            {card.avatars.map((src, i) => (
              <div
                key={i}
                className="relative w-6 h-6 rounded-full border-2 border-white/60 overflow-hidden bg-white/30"
              >
                <Image
                  src={src}
                  alt={`Engineer ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (card.type === "image" && "imageFallbackBg" in card) {
    return (
      <div className="bg-white rounded-xl p-3 shadow-[0px_5px_11px_0px_rgba(0,0,0,0.10),0px_21px_21px_0px_rgba(0,0,0,0.09),0px_46px_28px_0px_rgba(0,0,0,0.05),0px_83px_33px_0px_rgba(0,0,0,0.01)]">
        {/* Image area — edge-to-edge, rounded top corners */}
        <div className={`h-28 relative w-full rounded-xl overflow-hidden  ${card.imageFallbackBg}`}>
          <Image
            src={card.imageSrc as string}
            alt={card.title}
            fill
            className="object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        </div>
        <div className="mt-2">
          <h3 className="text-[#1E1E1E] text-lg font-medium leading-snug mb-1">
            {card.title}
          </h3>
          <p className="text-[#515151] text-xs font-normal leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-3 shadow-[0px_5px_11px_0px_rgba(0,0,0,0.10),0px_21px_21px_0px_rgba(0,0,0,0.09),0px_46px_28px_0px_rgba(0,0,0,0.05),0px_83px_33px_0px_rgba(0,0,0,0.01)]">
      <h3 className="text-[#1E1E1E] text-lg font-medium leading-snug mb-1.5">
        {card.title}
      </h3>
      <p className="text-[#515151] text-xs font-normal leading-relaxed">
        {card.description}
      </p>
    </div>
  );
}
