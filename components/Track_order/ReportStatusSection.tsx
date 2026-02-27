"use client";

import { useState } from "react";

const STEPS = [
  { label: "Submission Recieved",         completedDate: "Completed Jan15, 2026" },
  { label: "Payment Confirmed",           completedDate: "Completed Jan15, 2026" },
  { label: "AI Assisted Analysis",        completedDate: "Completed Jan5, 2026"  },
  { label: "Preliminary Report Generated",completedDate: "Completed Jan15, 2026" },
  { label: "Professional Engineer Review",completedDate: "Completed Jan17, 2026" },
  { label: "Certification & Release",     completedDate: "Completed Jan18, 2026" },
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
      <div className="max-w-7xl  mx-auto flex flex-col gap-6">

        {/* ── Page heading ─────────────────────────────────── */}
        <div>
          <h1 className="text-[#0B1F33] text-2xl pt-24 sm:text-3xl font-semibold leading-snug">
            Report status &amp; Certification Progress
          </h1>
          <p className="text-[#6B7280] text-sm mt-1.5">
            Monitor the structured forensic engineering workflow — from submission to licensed certification.
          </p>
        </div>

        {/* ── Case Overview card ───────────────────────────── */}
        <div className="bg-white rounded-2xl shadow-sm border border-[#E5E7EB] p-6 flex flex-col gap-5">
          <h2 className="text-[#0B1F33] text-base font-semibold">Case Overview</h2>

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
                <span className="text-[#9CA3AF] text-xs">{label}</span>
                <span className={`text-sm font-medium ${isStatus && allDone ? "text-[#16A34A] font-semibold" : "text-[#111827]"}`}>
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
          <div>
            <h2 className="text-[#0B1F33] text-base font-semibold">Report Progress</h2>
            <p className="text-[#9CA3AF] text-xs mt-1">
              Your report moves through a structured forensic engineering workflow. Each stage is logged for transparency and compliance.
            </p>
          </div>

          {/* Steps — full width, clickable */}
          <div className="flex items-start w-full">
            {STEPS.map((step, i) => {
              const isCompleted = i < completedCount;
              const isCurrent   = i === completedCount; // next to complete
              const isLast      = i === STEPS.length - 1;

              return (
                <div key={i} className="flex items-start flex-1 min-w-0">
                  {/* Step node */}
                  <div
                    className="flex flex-col items-center gap-2 cursor-pointer select-none shrink-0"
                    onClick={() => handleStepClick(i)}
                    title={isCurrent ? "Click to complete this step" : isCompleted ? "Click to undo" : ""}
                  >
                    {/* Circle */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isCompleted
                          ? "bg-[#111827]"
                          : isCurrent
                          ? "bg-[#E5E7EB] border-2 border-[#9CA3AF] hover:border-[#2563EB]"
                          : "bg-[#E5E7EB] border-2 border-[#D1D5DB]"
                      }`}
                    >
                      <svg
                        className={`w-5 h-5 transition-colors duration-300 ${isCompleted ? "text-white" : "text-[#9CA3AF]"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>

                    {/* Label */}
                    <div className="flex flex-col items-center text-center gap-0.5 w-[90px] sm:w-[110px]">
                      <span className={`text-xs font-medium leading-tight ${isCompleted ? "text-[#111827]" : "text-[#9CA3AF]"}`}>
                        {step.label}
                      </span>
                      <span className={`text-[10px] ${isCompleted ? "text-[#6B7280]" : "text-[#9CA3AF] italic"}`}>
                        {isCompleted ? step.completedDate : "in progress"}
                      </span>
                    </div>
                  </div>

                  {/* Connector — flex-1 stretches to fill space */}
                  {!isLast && (
                    <div className="flex-1 flex items-center mt-5 px-1">
                      <div
                        className={`w-full h-0 border-t-2 border-dashed transition-colors duration-300 ${
                          isCompleted ? "border-[#374151]" : "border-[#D1D5DB]"
                        }`}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Info banner — blue in progress, green when all done */}
          <div
            className={`flex items-center gap-2.5 rounded-lg px-4 py-3 border transition-colors duration-500 ${
              allDone
                ? "bg-[#F0FDF4] border-[#BBF7D0]"
                : "bg-[#EFF6FF] border-[#BFDBFE]"
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
            <h2 className="text-[#0B1F33] text-base font-semibold">Preliminary Engineering Draft</h2>
            <p className="text-[#9CA3AF] text-xs mt-1">
              A structured engineering draft has been generated. Final certification will occur following licensed Professional Engineer validation.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-2 bg-[#111827] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:opacity-90 active:scale-95">
              Download Preliminary Report
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#D1D5DB] text-[#374151] text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-[#F9FAFB] active:scale-95">
              View Preliminary Report
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
