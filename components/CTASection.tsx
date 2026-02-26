import Link from "next/link";

export default function CTASection() {
  return (
    <section id="create-report" className="bg-[#0B1F33] w-full py-12 pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6">

        {/* Heading */}
        <h2 className="text-white text-[28px] sm:text-4xl lg:text-5xl font-medium leading-tight">
          Begin Your Forensic Engineering Report.
        </h2>

        {/* Paragraph */}
        <p className="text-white/70 max-w-xl font-normal text-base leading-normal tracking-normal text-center">
          Upload your claim documentation and receive a professionally reviewed
          engineering report built for insurance dispute clarity.
        </p>

        {/* CTA Button */}
        <Link
          href="/create-report"
          className="mt-2 inline-flex items-center gap-2 bg-[#2563EB] text-white font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] "
        >
          Create New Report
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

      </div>
    </section>
  );
}
