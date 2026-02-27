"use client";

import { useState } from "react";

const STEPS = [
    { label: "Submission Recieved", completedDate: "Completed Jan15, 2026" },
    { label: "Payment Confirmed", completedDate: "Completed Jan15, 2026" },
    { label: "AI Assisted Analysis", completedDate: "Completed Jan5, 2026" },
    { label: "Preliminary Report Generated", completedDate: "Completed Jan15, 2026" },
    { label: "Professional Engineer Review", completedDate: "Completed Jan17, 2026" },
    { label: "Certification & Release", completedDate: "Completed Jan18, 2026" },
];

export default function ReportStatusSection() {
    // 4 steps completed by default; clicking the next step advances progress
    const [completedCount, setCompletedCount] = useState(4);
    const allDone = completedCount === STEPS.length;

    function handleStepClick(i: number) {
        // Allow clicking forward (next incomplete) or backward to undo
        if (i === completedCount) {
            setCompletedCount(i + 1); // advance
        } else if (i < completedCount) {
            setCompletedCount(i);     // undo back to this step
        }
    }
    return (
        <section className="min-h-screen   bg-[#F3F6F9] py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl pt-24 mx-auto flex flex-col gap-6">

                {/* ── Page heading ─────────────────────────────────── */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-[#0B1F33] text-2xl sm:text-3xl lg:text-[40px] font-medium leading-6 sm:leading-10 lg:leading-[46px] font-['General_Sans']">
                        Report status &amp; Certification Progress
                    </h1>
                    <p className="text-[#6B7280] text-sm sm:text-base lg:text-base font-normal leading-[150%] font-['Inter']">
                        Monitor the structured forensic engineering workflow — from submission to licensed certification.
                    </p>
                </div>

                {/* ── Case Overview card ───────────────────────────── */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-4 sm:p-5 lg:p-6 flex flex-col gap-4 sm:gap-5">
                    <h2 className="text-[#0B1F33] font-inter text-lg sm:text-xl lg:text-[24px]">Case Overview</h2>

                    {/* Fields grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6">
                        {[
                            { label: "Case ID", value: "SE-2026-0142" },
                            { label: "Date Submitted", value: "2024/01/15" },
                            { label: "Report Type", value: "Standard" },
                            { label: "Current Status", value: allDone ? "COMPLETE" : "Under Review", isStatus: true },
                            { label: "Property Address", value: "1234 Oak Street, Austin, TX 78701" },
                        ].map(({ label, value, isStatus }) => (
                            <div key={label} className="flex flex-col gap-1">
                                <span className="text-[#9CA3AF] text-sm sm:text-base lg:text-[18px]">{label}</span>
                                <span className={`text-sm sm:text-base lg:text-[16px] font-inter ${isStatus && allDone ? "text-[#16A34A] font-semibold" : "text-[#111827]"}`}>
                                    {value} 
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-[#E5E7EB] pt-4">
                        <p className="text-[#6B7280] text-xs">
                            Last updated : <span className="font-medium text-[#374151]">2024/01/17 11:20 AM</span>
                        </p>
                    </div>
                </div>

                {/* ── Report Progress card ─────────────────────────── */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-[#0B1F33] font-inter text-[24px]">Report Progress</h2>
                        <p className="text-[#9CA3AF] text-[14px]">
                            Your report moves through a structured forensic engineering workflow. Each stage is logged for transparency and compliance.
                        </p>
                    </div>

                    {/* Steps — vertical on mobile/tablet, horizontal on xl */}
                    <div className="flex flex-col xl:flex-row xl:items-start w-full gap-0">
                        {STEPS.map((step, i) => {
                            const isCompleted = i < completedCount;
                            const isCurrent = i === completedCount;
                            const isLast = i === STEPS.length - 1;

                            return (
                                <div key={i} className="flex flex-col xl:contents">

                                    {/* ── Mobile/tablet: horizontal row (icon + text) + vertical connector below ── */}
                                    <div className="flex xl:hidden flex-col items-start w-full">
                                        <div
                                            className="flex items-center gap-4 cursor-pointer select-none w-full"
                                            onClick={() => handleStepClick(i)}
                                        >
                                            {/* Icon */}
                                            {isCompleted ? (
                                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0 transition-all duration-300">
                                                    <rect width="60" height="60" rx="30" fill="#0B1F33"/>
                                                    <g clipPath="url(#clip_done_m)">
                                                        <path d="M35.59 24.41L34.18 23L27.84 29.34L29.25 30.75L35.59 24.41ZM39.83 23L29.25 33.58L25.07 29.41L23.66 30.82L29.25 36.41L41.25 24.41L39.83 23ZM18 30.82L23.59 36.41L25 35L19.42 29.41L18 30.82Z" fill="white"/>
                                                    </g>
                                                    <defs><clipPath id="clip_done_m"><rect width="24" height="24" fill="white" transform="translate(18 18)"/></clipPath></defs>
                                                </svg>
                                            ) : (
                                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 shrink-0 transition-all duration-300">
                                                    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" fill="#E7E9EB"/>
                                                    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#0B1F33"/>
                                                    <g clipPath="url(#clip_undone_m)">
                                                        <path d="M35.59 24.41L34.18 23L27.84 29.34L29.25 30.75L35.59 24.41ZM39.83 23L29.25 33.58L25.07 29.41L23.66 30.82L29.25 36.41L41.25 24.41L39.83 23ZM18 30.82L23.59 36.41L25 35L19.42 29.41L18 30.82Z" fill="#0B1F33"/>
                                                    </g>
                                                    <defs><clipPath id="clip_undone_m"><rect width="24" height="24" fill="white" transform="translate(18 18)"/></clipPath></defs>
                                                </svg>
                                            )}
                                            {/* Label beside icon */}
                                            <div className="flex flex-col gap-0.5">
                                                <span className={`text-[14px] font-inter ${isCompleted ? "text-[#1e1e1e]" : "text-[#9CA3AF]"}`}>{step.label}</span>
                                                <span className={`text-[12px] font-inter ${isCompleted ? "text-[#515151]" : "text-[#9CA3AF] italic"}`}>
                                                    {isCompleted ? step.completedDate : "In progress"}
                                                </span>
                                            </div>
                                        </div>
                                        {/* Vertical connector */}
                                        {!isLast && (
                                            <div className="ml-5 w-0 border-l-2 border-dashed h-6 transition-colors duration-300 mt-1 mb-1"
                                                style={{ borderColor: isCompleted ? "#374151" : "#D1D5DB" }} />
                                        )}
                                    </div>

                                    {/* ── Desktop xl: original horizontal layout ── */}
                                    <div className="hidden xl:contents">
                                        <div
                                            className="flex flex-col items-center gap-2 cursor-pointer select-none shrink-0"
                                            onClick={() => handleStepClick(i)}
                                            title={isCurrent ? "Click to complete this step" : isCompleted ? "Click to undo" : ""}
                                        >
                                            {isCompleted ? (
                                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px] shrink-0 transition-all duration-300">
                                                    <rect width="60" height="60" rx="30" fill="#0B1F33"/>
                                                    <g clipPath="url(#clip_done_xl)">
                                                        <path d="M35.59 24.41L34.18 23L27.84 29.34L29.25 30.75L35.59 24.41ZM39.83 23L29.25 33.58L25.07 29.41L23.66 30.82L29.25 36.41L41.25 24.41L39.83 23ZM18 30.82L23.59 36.41L25 35L19.42 29.41L18 30.82Z" fill="white"/>
                                                    </g>
                                                    <defs><clipPath id="clip_done_xl"><rect width="24" height="24" fill="white" transform="translate(18 18)"/></clipPath></defs>
                                                </svg>
                                            ) : (
                                                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[60px] h-[60px] shrink-0 transition-all duration-300">
                                                    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" fill="#E7E9EB"/>
                                                    <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="#0B1F33"/>
                                                    <g clipPath="url(#clip_undone_xl)">
                                                        <path d="M35.59 24.41L34.18 23L27.84 29.34L29.25 30.75L35.59 24.41ZM39.83 23L29.25 33.58L25.07 29.41L23.66 30.82L29.25 36.41L41.25 24.41L39.83 23ZM18 30.82L23.59 36.41L25 35L19.42 29.41L18 30.82Z" fill="#0B1F33"/>
                                                    </g>
                                                    <defs><clipPath id="clip_undone_xl"><rect width="24" height="24" fill="white" transform="translate(18 18)"/></clipPath></defs>
                                                </svg>
                                            )}
                                            <div className="flex flex-col items-center text-center gap-0.5">
                                                <span className={`text-xs font-medium whitespace-nowrap ${isCompleted ? "text-[#111827]" : "text-[#9CA3AF]"}`}>{step.label}</span>
                                                <span className={`text-[10px] whitespace-nowrap ${isCompleted ? "text-[#6B7280]" : "text-[#9CA3AF] italic"}`}>
                                                    {isCompleted ? step.completedDate : "in progress"}
                                                </span>
                                            </div>
                                        </div>
                                        {!isLast && (
                                            <div className="flex-1 flex items-center mt-[30px] px-1 min-w-[16px]">
                                                <div className={`w-full border-t-2 border-dashed transition-colors duration-300 ${isCompleted ? "border-[#374151]" : "border-[#D1D5DB]"}`} />
                                            </div>
                                        )}
                                    </div>

                                </div>
                            );
                        })}
                    </div>

                    {/* Info banner — gap 8px, radius 8px, py 12px, px 8px, bg #E9EFFD, border #5182EF */}
                    <div
                        className={`flex items-center gap-2 rounded-lg px-2 py-3 border transition-colors duration-500 ${allDone
                                ? "bg-[#F0FDF4] border-[#BBF7D0]"
                                : "bg-[#E9EFFD] border-[#5182EF]"
                            }`}
                    >
                        <svg
                            className={`w-4 h-4 shrink-0 transition-colors duration-300 ${allDone ? "text-[#16A34A]" : "text-[#2563EB]"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            {allDone ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
                            )}
                        </svg>
                        <p className={`text-sm transition-colors duration-300 ${allDone ? "text-[#16A34A]" : "text-[#2563EB]"}`}>
                            {allDone
                                ? "All steps completed! Your report has been certified and released."
                                : "This report is currently in queue for licensed Professional Engineer validation."}
                        </p>
                    </div>
                </div>

                {/* ── Preliminary Engineering Draft card ──────────── */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 flex flex-col gap-4">
                    <div>
                        <h2 className="text-[#0B1F33] font-inter text-[24px]">Preliminary Engineering Draft</h2>
                        <p className="text-[#9CA3AF] text-xs mt-1">
                            A structured engineering draft has been generated. Final certification will occur following licensed Professional Engineer validation.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 flex-wrap">
                        <button className="flex items-center gap-2 bg-[#2563eb] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95">
                            Download Preliminary Report
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.24375 7.88542L3.47708 4.65208L0.24375 1.41875C-0.08125 1.09375 -0.08125 0.56875 0.24375 0.24375C0.56875 -0.08125 1.09375 -0.08125 1.41875 0.24375L5.24375 4.06875C5.56875 4.39375 5.56875 4.91875 5.24375 5.24375L1.41875 9.06875C1.09375 9.39375 0.56875 9.39375 0.24375 9.06875C-0.0729167 8.74375 -0.08125 8.21042 0.24375 7.88542Z" fill="white" />
                            </svg>

                        </button>
                        <button className="flex items-center gap-2 bg-[#e9effd] border border-[#bbcff9] text-[#2563eb] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-[#F9FAFB] active:scale-95">
                            View Preliminary Report
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
