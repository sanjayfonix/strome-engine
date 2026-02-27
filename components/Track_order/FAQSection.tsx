"use client";

import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: `What does this "UNDER REVIEW" means?`,
    answer:
      "Under Review indicates that your preliminary report has been generated and is now in the queue for Professional Engineer validation. A licensed PE will review the analysis, verify conclusions, and either certify the report or request additional information.",
  },
  {
    id: 2,
    question: "How long PE review take?",
    answer:
      "PE review typically takes 1–3 business days depending on the complexity of the case and current queue volume.",
  },
  {
    id: 3,
    question: "How can i find my case id?",
    answer:
      "Your case ID was sent to the email address you provided when submitting your report. You can also find it in your confirmation email.",
  },
  {
    id: 4,
    question: "What happens if documents are required?",
    answer:
      "If additional documents are required, you will receive an email notification with instructions on how to upload the requested materials to your case.",
  },
  {
    id: 5,
    question: "Is my data secure?",
    answer:
      "Yes. All documents and personal data are encrypted in transit and at rest. Access to your report is strictly controlled and limited to authorized parties.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="bg-[#F3F6F9] w-full py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <span className="text-[#0B1F33] text-base sm:text-xl font-normal tracking-widest uppercase">
          /FAQs/
        </span>

        {/* Heading row */}
        <div className="flex items-center justify-between mt-3 mb-8 sm:mb-10">
          <h2 className="text-[#0B1F33] text-[28px] sm:text-4xl font-medium leading-tight">
            Frequently Asked Questions
          </h2>

          <a
            href="mailto:support@stormengine.com"
            className="hidden sm:flex items-center gap-1.5 bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-full shrink-0 transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
          >
            Contact Support
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-[0px_1px_3px_0px_rgba(0,0,0,0.06)]"
              >
                {/* Header */}
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                >
                  <span className="text-[#0B1F33] text-sm sm:text-base font-medium leading-snug">
                    {faq.question}
                  </span>

                  {/* + / × icon */}
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors duration-200 ${isOpen ? "border-[#0B1F33] bg-white" : "border-[#D1D5DB] bg-white"}`}>
                    {isOpen ? (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1 1L11 11M11 1L1 11" stroke="#0B1F33" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1V11M1 6H11" stroke="#0B1F33" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="px-5 pb-5 text-[#515151] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Contact Support */}
        <div className="sm:hidden mt-8 flex justify-center">
          <a
            href="mailto:support@stormengine.com"
            className="flex items-center gap-1.5 bg-[#2563EB] text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
          >
            Contact Support
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
