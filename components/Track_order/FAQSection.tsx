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
                <span className="text-[#0B1F33] text-base sm:text-xl ">
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
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.24375 7.88542L3.47708 4.65208L0.24375 1.41875C-0.08125 1.09375 -0.08125 0.56875 0.24375 0.24375C0.56875 -0.08125 1.09375 -0.08125 1.41875 0.24375L5.24375 4.06875C5.56875 4.39375 5.56875 4.91875 5.24375 5.24375L1.41875 9.06875C1.09375 9.39375 0.56875 9.39375 0.24375 9.06875C-0.0729167 8.74375 -0.08125 8.21042 0.24375 7.88542Z" fill="white" />
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
                                    className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left gap-3 sm:gap-4"
                                >
                                    <span className="text-[#0B1F33] text-base sm:text-lg lg:text-[24px] font-medium leading-snug">
                                        {faq.question}
                                    </span>

                                    {/* + / × icon */}
                                    {isOpen ? (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <rect width="48" height="48" rx="12" fill="#F2F2F2" />
                                            <g clipPath="url(#clip_cross)">
                                                <path d="M31 18.41L29.59 17L24 22.59L18.41 17L17 18.41L22.59 24L17 29.59L18.41 31L24 25.41L29.59 31L31 29.59L25.41 24L31 18.41Z" fill="#515151" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip_cross">
                                                    <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                                            <rect width="48" height="48" rx="12" fill="#F2F2F2" />
                                            <g clipPath="url(#clip_plus)">
                                                <path d="M31 25H25V31H23V25H17V23H23V17H25V23H31V25Z" fill="#515151" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip_plus">
                                                    <rect width="24" height="24" fill="white" transform="translate(12 12)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )}
                                </button>

                                {/* Answer */}
                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                                >
                                    <p className="px-4 sm:px-5 pb-4 sm:pb-5 w-full sm:w-2/3 text-[#515151] text-xs sm:text-sm lg:text-[18px] leading-relaxed">
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
