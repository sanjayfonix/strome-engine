import Image from "next/image";

const chips = [
  "Structured Forensic Methodology",
  "Verified Storm Data Integration",
  "AI-Assisted Damage Assessment",
  "Licensed Professional Engineer Oversight",
];

export default function AboutSection() {
  return (
    <section className="bg-[#F3F6F9] w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-16">

        {/* Left: Label */}
        <div className="lg:w-56 shrink-0 lg:pt-2">
          <span className="text-[#0B1F33] text-base sm:text-xl font-normal tracking-widest uppercase">
            /About Us/
          </span>
        </div>

        {/* Right: Content */}
        <div className="flex-1 max-w-3xl flex flex-col gap-5 sm:gap-6">
          {/* Heading */}
          <h2 className="text-[#0B1F33] text-[28px] sm:text-4xl lg:text-5xl font-medium leading-tight">
            Turning Claim Documentation into{" "}
            <span className="text-[#2563EB] font-semibold">Defensible</span> Engineering
            Intelligence.
          </h2>

          {/* Paragraph */}
          <p className="text-[#515151] text-sm sm:text-base font-normal leading-relaxed">
            Storm Engine applies structured forensic methodology to roof damage
            disputes—combining AI analysis, verified storm data, and licensed PE
            review to produce defensible engineering reports.
          </p>

          {/* Chips */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2">
            {chips.map((chip) => (
              <ChipBadge key={chip} label={chip} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ChipBadge({ label }: { label: string }) {
  return (
    <div
      className="rounded-full p-px"
      style={{
        background:
          "linear-gradient(94.72deg, rgba(11,31,51,0.89) -33.52%, #2563EB 50%, rgba(17,24,39,0.9) 133.52%)",
      }}
    >
      <div className="flex items-center gap-2 rounded-full px-4 py-2 bg-white">
        <Image
          src="/abouticon.png"
          alt=""
          width={20}
          height={20}
          className="shrink-0"
        />
        <span
          className="text-xs font-medium whitespace-nowrap"
          style={{
            background:
              "linear-gradient(94.72deg, rgba(11,31,51,0.89) -33.52%, #2563EB 50%, rgba(17,24,39,0.9) 133.52%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
