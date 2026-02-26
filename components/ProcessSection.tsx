import Link from "next/link";

const steps = [
  {
    id: 1,
    title: "Submit Documentation",
    description:
      "Upload your coverage or denial letter along with photos, estimates, and supporting documents. This forms the foundation of the analysis.",
    icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_354_185)">
        <path d="M13.75 5.00004V14.5834C13.75 16.425 12.2584 17.9167 10.4167 17.9167C8.57504 17.9167 7.08337 16.425 7.08337 14.5834V4.16671C7.08337 3.01671 8.01671 2.08337 9.16671 2.08337C10.3167 2.08337 11.25 3.01671 11.25 4.16671V12.9167C11.25 13.375 10.875 13.75 10.4167 13.75C9.95837 13.75 9.58337 13.375 9.58337 12.9167V5.00004H8.33337V12.9167C8.33337 14.0667 9.26671 15 10.4167 15C11.5667 15 12.5 14.0667 12.5 12.9167V4.16671C12.5 2.32504 11.0084 0.833374 9.16671 0.833374C7.32504 0.833374 5.83337 2.32504 5.83337 4.16671V14.5834C5.83337 17.1167 7.88337 19.1667 10.4167 19.1667C12.95 19.1667 15 17.1167 15 14.5834V5.00004H13.75Z" fill="#0B1F33"/>
        </g>
        <defs>
        <clipPath id="clip0_354_185">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
        </svg>


    ),
  },
  {
    id: 2,
    title: "Data Enrichment & Validation",
    description:
      "We integrate verified storm history, weather data, roof measurements, and relevant building standards to support the evaluation.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M11.25 5.41666L8.62667 2.79333C8.43835 2.60504 8.18296 2.49927 7.91667 2.49927C7.65037 2.49927 7.39498 2.60504 7.20667 2.79333L5.29333 4.70666C5.10505 4.89497 4.99927 5.15037 4.99927 5.41666C4.99927 5.68296 5.10505 5.93835 5.29333 6.12666L7.91667 8.74999M13.75 6.24999L15.8333 4.16666M14.5833 8.74999L17.2067 11.3733C17.395 11.5616 17.5007 11.817 17.5007 12.0833C17.5007 12.3496 17.395 12.605 17.2067 12.7933L15.2933 14.7067C15.105 14.8949 14.8496 15.0007 14.5833 15.0007C14.317 15.0007 14.0616 14.8949 13.8733 14.7067L11.25 12.0833M7.5 17.5C7.5 16.1739 6.97322 14.9021 6.03553 13.9645C5.09785 13.0268 3.82608 12.5 2.5 12.5M7.79333 8.87333C7.60505 9.06164 7.49927 9.31703 7.49927 9.58333C7.49927 9.84962 7.60505 10.105 7.79333 10.2933L9.70667 12.2067C9.89498 12.3949 10.1504 12.5007 10.4167 12.5007C10.683 12.5007 10.9384 12.3949 11.1267 12.2067L14.7067 8.62666C14.895 8.43835 15.0007 8.18296 15.0007 7.91666C15.0007 7.65037 14.895 7.39497 14.7067 7.20666L12.7933 5.29333C12.605 5.10504 12.3496 4.99927 12.0833 4.99927C11.817 4.99927 11.5616 5.10504 11.3733 5.29333L7.79333 8.87333Z" stroke="#0B1F33" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

    ),
  },
  {
    id: 3,
    title: "Engineering Analysis",
    description:
      "AI-assisted structured analysis applies forensic engineering methodology to assess causation and damage consistency.",
    icon: (
     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_354_18)">
<path d="M13.2533 10.8756L11.4856 12.6433L16.4824 17.6402L18.2502 15.8724L13.2533 10.8756Z" fill="#323232"/>
<path d="M14.5833 8.33337C16.1917 8.33337 17.5 7.02504 17.5 5.41671C17.5 4.93337 17.3667 4.48337 17.1583 4.08337L14.9083 6.33337L13.6667 5.09171L15.9167 2.84171C15.5167 2.63337 15.0667 2.50004 14.5833 2.50004C12.975 2.50004 11.6667 3.80837 11.6667 5.41671C11.6667 5.75837 11.7333 6.08337 11.8417 6.38337L10.3 7.92504L8.81667 6.44171L9.40833 5.85004L8.23333 4.67504L10 2.90837C9.025 1.93337 7.44167 1.93337 6.46667 2.90837L3.51667 5.85837L4.69167 7.03337H2.34167L1.75 7.62504L4.7 10.575L5.29167 9.98337V7.62504L6.46667 8.80004L7.05833 8.20837L8.54167 9.69171L2.36667 15.8667L4.13333 17.6334L13.6167 8.15837C13.9167 8.26671 14.2417 8.33337 14.5833 8.33337Z" fill="#323232"/>
</g>
<defs>
<clipPath id="clip0_354_18">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    ),
  },
  {
    id: 4,
    title: "Professional Engineer Review",
    description:
      "A licensed Professional Engineer reviews, refines, and certifies the final report before delivery.",
    icon: (
   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_354_266)">
<path d="M15 7.49992L13.825 6.31659L8.33333 11.8083L6.175 9.65825L5 10.8333L8.33333 14.1666L15 7.49992ZM15.8333 2.49992H12.35C12 1.53325 11.0833 0.833252 10 0.833252C8.91667 0.833252 8 1.53325 7.65 2.49992H4.16667C4.05 2.49992 3.94167 2.50825 3.83333 2.53325C3.50833 2.59992 3.21667 2.76659 2.99167 2.99159C2.84167 3.14159 2.71667 3.32492 2.63333 3.52492C2.55 3.71659 2.5 3.93325 2.5 4.16659V15.8333C2.5 16.0583 2.55 16.2833 2.63333 16.4833C2.71667 16.6833 2.84167 16.8583 2.99167 17.0166C3.21667 17.2416 3.50833 17.4083 3.83333 17.4749C3.94167 17.4916 4.05 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM10 2.29159C10.3417 2.29159 10.625 2.57492 10.625 2.91659C10.625 3.25825 10.3417 3.54159 10 3.54159C9.65833 3.54159 9.375 3.25825 9.375 2.91659C9.375 2.57492 9.65833 2.29159 10 2.29159ZM15.8333 15.8333H4.16667V4.16659H15.8333V15.8333Z" fill="#0B1F33"/>
</g>
<defs>
<clipPath id="clip0_354_266">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    ),
  },
  {
    id: 5,
    title: "Receive Your Report",
    description:
      "Download a professionally formatted, defensible engineering report ready for negotiation, appraisal, or litigation support.",
    icon: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_354_67)">
<path d="M14.1667 9.99992H11.6667V6.66658H8.33333V9.99992H5.83333L10 14.1666L14.1667 9.99992ZM15.8333 2.49992H12.35C12 1.53325 11.0833 0.833252 10 0.833252C8.91667 0.833252 8 1.53325 7.65 2.49992H4.16667C4.05 2.49992 3.94167 2.50825 3.83333 2.53325C3.50833 2.59992 3.21667 2.76659 2.99167 2.99159C2.84167 3.14159 2.71667 3.32492 2.63333 3.52492C2.55 3.71659 2.5 3.93325 2.5 4.16659V15.8333C2.5 16.0583 2.55 16.2833 2.63333 16.4833C2.71667 16.6833 2.84167 16.8583 2.99167 17.0166C3.21667 17.2416 3.50833 17.4083 3.83333 17.4749C3.94167 17.4916 4.05 17.4999 4.16667 17.4999H15.8333C16.75 17.4999 17.5 16.7499 17.5 15.8333V4.16659C17.5 3.24992 16.75 2.49992 15.8333 2.49992ZM10 2.29159C10.3417 2.29159 10.625 2.57492 10.625 2.91659C10.625 3.25825 10.3417 3.54159 10 3.54159C9.65833 3.54159 9.375 3.25825 9.375 2.91659C9.375 2.57492 9.65833 2.29159 10 2.29159ZM15.8333 15.8333H4.16667V4.16659H15.8333V15.8333Z" fill="#0B1F33"/>
</g>
<defs>
<clipPath id="clip0_354_67">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

    ),
  },
];

const cardShadow =
  "shadow-[0px_2px_4px_0px_rgba(0,0,0,0.10),0px_7px_7px_0px_rgba(0,0,0,0.09),0px_15px_9px_0px_rgba(0,0,0,0.05),0px_26px_11px_0px_rgba(0,0,0,0.02),0px_41px_12px_0px_rgba(0,0,0,0)]";

export default function ProcessSection() {
  return (
    <section className="bg-[#F3F6F9] w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row: label + CTA */}
        <div className="flex items-start justify-between ">
          <span className="text-[#0B1F33] text-base sm:text-xl font-normal tracking-widest uppercase">
            /Process/
          </span>
          <Link
            href="#create-report"
            className="hidden sm:flex items-center gap-2 bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] "
          >
            Start Your Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Heading */}
        <h2 className="text-[#0B1F33] text-[28px] sm:text-4xl lg:text-5xl font-medium leading-tight max-w-lg mb-12 sm:mb-16">
          A Structured Process — From Submission to Certification
        </h2>

        {/* Steps */}
        <div className="flex flex-col gap-0 lg:gap-20">
          {steps.map((step, index) => {
            const isLeft = index % 2 === 0;
            const isLast = index === steps.length - 1;
            return (
              <div key={step.id} className="relative">
                {/* Card row — zigzag only on lg+, full width on mobile/tablet */}
                <div className={`relative z-10 flex ${isLeft ? "lg:justify-start" : "lg:justify-end"}`}>
                  <div className="w-full lg:w-107.25">
                    <StepCard step={step} />
                  </div>
                </div>

                {/* Mobile / Tablet connector — simple vertical line + arrow */}
                {!isLast && (
                  <div className="lg:hidden flex justify-center z-10 relative bg-transparent py-3">
                    <div className="flex flex-col items-center">
                      <div className="w-px h-8 bg-[#C7C7C7]" />
                    <svg width="10" height="19" viewBox="0 0 10 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.91667 4.16667V13.75C7.91667 15.5917 6.425 17.0833 4.58333 17.0833C2.74167 17.0833 1.25 15.5917 1.25 13.75V3.33333C1.25 2.18333 2.18333 1.25 3.33333 1.25C4.48333 1.25 5.41667 2.18333 5.41667 3.33333V12.0833C5.41667 12.5417 5.04167 12.9167 4.58333 12.9167C4.125 12.9167 3.75 12.5417 3.75 12.0833V4.16667H2.5V12.0833C2.5 13.2333 3.43333 14.1667 4.58333 14.1667C5.73333 14.1667 6.66667 13.2333 6.66667 12.0833V3.33333C6.66667 1.49167 5.175 0 3.33333 0C1.49167 0 0 1.49167 0 3.33333V13.75C0 16.2833 2.05 18.3333 4.58333 18.3333C7.11667 18.3333 9.16667 16.2833 9.16667 13.75V4.16667H7.91667Z" fill="#0B1F33"/>
                    </svg>

                    </div>
                  </div>
                )}

                {/* Desktop connector — L-shaped with arrowhead */}
                {!isLast && (
                  <div
                    className="hidden lg:block absolute w-full pointer-events-none"
                    style={{ top: "50%", bottom: "-50%", zIndex: 1 }}
                  >
                    {isLeft ? (
                      <>
                        <div className="absolute bg-[#C7C7C7]"
                          style={{ top: 0, left: "429px", right: "214px", height: "1px" }} />
                        <div className="absolute bg-[#C7C7C7]"
                          style={{ top: 0, right: "214px", width: "1px", bottom: 0 }} />
                        <svg className="absolute" style={{ right: "209px", bottom: "-4px" }}
                          width="11" height="8" viewBox="0 0 11 8" fill="none">
                          <path d="M1 1L5.5 6.5L10 1" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <div className="absolute bg-[#C7C7C7]"
                          style={{ top: 0, left: "214px", right: "429px", height: "1px" }} />
                        <div className="absolute bg-[#C7C7C7]"
                          style={{ top: 0, left: "214px", width: "1px", bottom: 0 }} />
                        <svg className="absolute" style={{ left: "209px", bottom: "-4px" }}
                          width="11" height="8" viewBox="0 0 11 8" fill="none">
                          <path d="M1 1L5.5 6.5L10 1" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </div>
                )}
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
            Start Your Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <div className={`flex items-stretch bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] overflow-hidden ${cardShadow}`}>
      {/* Pill badge — inside card, left side */}
      <div className="bg-[#0B1F33] rounded-full w-10 shrink-0 flex items-center justify-center my-3 ml-3">
        <span
          className="text-white text-sm md:text-base tracking-widest uppercase select-none"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          Step {step.id}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col gap-3">
        {/* Icon + Title row */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#E7E9EB] flex items-center justify-center shrink-0 text-[#0B1F33]">
            {step.icon}
          </div>
          <h3 className="text-[#0B1F33] text-base sm:text-lg lg:text-xl font-medium leading-snug">
            {step.title}
          </h3>
        </div>
        {/* Description */}
        <p className="text-[#475569] text-xs font-normal leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}
