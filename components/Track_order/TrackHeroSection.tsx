"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
  onVerified?: () => void;
}

export default function TrackHeroSection({ onVerified }: Props) {
  const [step, setStep] = useState<"form" | "otp">("form");
  const [email, setEmail] = useState("");
  const [caseId, setCaseId] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [caseIdError, setCaseIdError] = useState(false);

  // ── OTP state ──────────────────────────────────────────────
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [resendCountdown, setResendCountdown] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (step === "otp") startCountdown();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [step]);

  function startCountdown() {
    if (timerRef.current) clearInterval(timerRef.current);
    setResendCountdown(60);
    timerRef.current = setInterval(() => {
      setResendCountdown((prev) => {
        if (prev === null || prev <= 1) { clearInterval(timerRef.current!); return null; }
        return prev - 1;
      });
    }, 1000);
  }

  function handleGetOtp(e: React.FormEvent) {
    e.preventDefault();
    const hasEmailError = !email.trim();
    const hasCaseError = !caseId.trim();
    setEmailError(hasEmailError);
    setCaseIdError(hasCaseError);
    if (!hasEmailError && !hasCaseError) setStep("otp");
  }

  function handleOtpChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);
    const next = [...otp];
    next[index] = digit;
    setOtp(next);
    if (digit && index < 5) otpRefs.current[index + 1]?.focus();
  }

  function handleOtpKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
  }

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section className="relative w-full h-screen overflow-hidden bg-linear-to-br from-[#0B1F33] via-[#3d68c5] to-[#111827]">

      <div className="relative z-10 max-w-7xl mx-auto items-center h-full px-12">

        {/* ── Top: form card aligned right ──────────────────── */}
        <div className="flex justify-end pt-24">
          <div className="w-full max-w-[612px] rounded-2xl overflow-hidden shadow-[0px_8px_32px_0px_rgba(0,0,0,0.20)]">

            {/* Header band */}
            <div className="bg-[#E9EFFD] px-8 py-6">
              <h2 className="text-[#0B1F33] text-xl font-semibold">Track your order here</h2>
              <p className="text-[#515151] text-sm mt-1">Enter your credentials to track your orders.</p>
            </div>

            {/* Form body */}
            <div className="bg-white px-8 py-6">
              <form onSubmit={handleGetOtp} className="flex flex-col gap-5">

                {/* Email ID */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#374151] text-sm font-medium">Email ID</label>
                  <div className={`flex items-center gap-2.5 h-[46px] px-3.5 rounded-lg border bg-white transition-colors ${emailError ? "border-red-400" : "border-[#D5D5D5]"}`}>
                    <svg className="w-4 h-4 text-[#9CA3AF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => { setEmail(e.target.value); setEmailError(false); }}
                      placeholder="Enter your email id here"
                      className="flex-1 text-sm text-[#374151] placeholder:text-[#A8A8A8] bg-transparent outline-none"
                    />
                  </div>
                  {emailError && <span className="text-red-500 text-xs">This field is required*</span>}
                </div>

                {/* Case ID */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#374151] text-sm font-medium">Case ID</label>
                  <div className={`flex items-center gap-2.5 h-[46px] px-3.5 rounded-lg border bg-white transition-colors ${caseIdError ? "border-red-400" : "border-[#D5D5D5]"}`}>
                    <svg className="w-4 h-4 text-[#9CA3AF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <input
                      type="text"
                      value={caseId}
                      onChange={(e) => { setCaseId(e.target.value); setCaseIdError(false); }}
                      placeholder="Enter your case id here"
                      className="flex-1 text-sm text-[#374151] placeholder:text-[#A8A8A8] bg-transparent outline-none"
                    />
                  </div>
                  {caseIdError && <span className="text-red-500 text-xs">This field is required*</span>}
                </div>

                <button
                  type="submit"
                  className="w-full h-12 rounded-full bg-[#2563EB] text-white text-sm font-semibold transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
                >
                  Get OTP
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* ── Bottom: text on the left ─────────────────────── */}
        <div className="absolute top-[600px] left-[48px] flex flex-col gap-6 w-[801px] max-w-[calc(100%-48px)]">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight">
            Track Report status
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
            Access real-time progress updates for your forensic engineering report — from submission to certification
          </p>
          <Link
            href="/create-report"
            className="flex items-center gap-2  bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
          >
            Create New Report
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>

      {/* ── OTP Modal — centered, backdrop blur ────────────── */}
      {step === "otp" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setStep("form")}
          />

          {/* Modal card */}
          <div className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-[0px_16px_48px_0px_rgba(0,0,0,0.30)]">

            {/* Header band */}
            <div className="bg-[#E9EFFD] px-8 py-5">
              <h2 className="text-[#0B1F33] text-lg font-semibold">Enter OTP</h2>
              <p className="text-[#515151] text-xs mt-1">
                Enter 6-digit code sent to{" "}
                <span className="font-semibold text-[#0B1F33]">{email || "your email"}</span>{" "}
                <button type="button" onClick={() => setStep("form")} className="text-[#2563EB] font-medium hover:underline">
                  Change
                </button>
              </p>
            </div>

            {/* OTP body */}
            <div className="bg-white px-8 py-6 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <span className="text-[#374151] text-sm text-center">Enter code here</span>
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      ref={(el) => { otpRefs.current[i] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                      className="w-11 h-11 rounded-lg border border-[#D5D5D5] bg-[#E8ECEF] text-center text-base font-semibold text-[#0B1F33] outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                    />
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => onVerified?.()}
                className="w-full h-12 rounded-full bg-[#2563EB] text-white text-sm font-semibold transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
              >
                Verify OTP
              </button>

              <div className="text-center text-sm">
                {resendCountdown !== null ? (
                  <span className="text-[#515151]">
                    Resend link in{" "}
                    <span className="text-[#2563EB] font-medium">{formatTime(resendCountdown)}</span>
                  </span>
                ) : (
                  <button type="button" onClick={startCountdown} className="text-[#2563EB] font-medium hover:underline">
                    Resend link
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
