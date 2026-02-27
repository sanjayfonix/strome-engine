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
        <section
            className="relative w-full h-screen overflow-hidden bg-[conic-gradient(from_198.61deg_at_64.65%_50%,#111827_0deg,#0B1F33_48.19deg,#2563EB_234.65deg,#111827_360deg)]"
        >

            <div className="relative z-10 max-w-7xl mx-auto items-center h-full px-4 sm:px-8 lg:px-12">

                {/* ── Top: form card aligned right ──────────────────── */}
                <div className="flex justify-end pt-28 sm:pt-22 lg:pt-28">
                    <div className="w-full max-w-[612px] rounded-2xl overflow-hidden shadow-[0px_8px_32px_0px_rgba(0,0,0,0.20)]">

                        {/* Header band */}
                        <div className="bg-[#E9EFFD] px-4 py-4 sm:px-6 sm:py-5 lg:px-5 lg:py-5">
                            <h2 className="text-[#0B1F33] text-base sm:text-xl lg:text-[20px] font-medium lg:font-medium lg:leading-[20px] lg:font-['General_Sans']">Track your order here</h2>
                            <p className="text-[#515151] text-xs sm:text-sm lg:text-[14px] mt-2 sm:mt-1.5 lg:mt-1">Enter your credentials to track your orders.</p>
                        </div>

                        {/* Form body — padding: 24px top/bottom, 32px left/right */}
                        <div className="bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-5 lg:py-6">
                            <form onSubmit={handleGetOtp} className="flex flex-col gap-5">

                                {/* Fields container — gap 12px between fields */}
                                <div className="flex flex-col gap-3">

                                    {/* Email ID — label + input gap: 8px */}
                                    <div className="flex flex-col gap-2">
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

                                    {/* Case ID — label + input gap: 8px */}
                                    <div className="flex flex-col gap-2">
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

                                </div>

                                {/* Button — h: 48px, radius: 24px, padding: 12px/20px */}
                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-full bg-[#2563EB] text-white text-sm font-semibold px-5 py-3 transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
                                >
                                    Get OTP
                                </button>
                            </form>
                        </div>

                    </div>
                </div>

                {/* ── Bottom: text on the left ─────────────────────── */}
                <div className="absolute bottom-8 sm:bottom-10 lg:bottom-10 left-4 sm:left-8 lg:left-12 flex flex-col gap-4 sm:gap-6 w-full lg:w-[801px] max-w-[calc(100%-2rem)] sm:max-w-[calc(100%-4rem)] lg:max-w-[calc(100%-6rem)]">
                    <h1 className="text-white text-4xl sm:text-5xl lg:text-[56px] font-semibold leading-tight">
                        Track Report status
                    </h1>
                    <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">Access real-time progress updates for your forensic engineering report — from submission to certification</p>
                    <Link
                        href="/create-report"
                        className="flex items-center gap-2  bg-[#2563EB] text-white text-sm font-semibold px-5 py-2.5 rounded-full w-fit transition-all duration-200 hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63]"
                    >
                        Create New Report
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.24375 7.88542L3.47708 4.65208L0.24375 1.41875C-0.08125 1.09375 -0.08125 0.56875 0.24375 0.24375C0.56875 -0.08125 1.09375 -0.08125 1.41875 0.24375L5.24375 4.06875C5.56875 4.39375 5.56875 4.91875 5.24375 5.24375L1.41875 9.06875C1.09375 9.39375 0.56875 9.39375 0.24375 9.06875C-0.0729167 8.74375 -0.08125 8.21042 0.24375 7.88542Z" fill="white" />
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

                    {/* Modal card — w: 612px, radius: 24px */}
                    <div className="relative z-10 w-full max-w-[612px] rounded-[24px] overflow-hidden shadow-[0px_16px_48px_0px_rgba(0,0,0,0.30)]">

                        {/* Header band */}
                        <div className="bg-[#E9EFFD] px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-5">
                            <h2 className="text-[#0B1F33] text-base sm:text-lg lg:text-lg font-semibold">Enter OTP</h2>
                            <p className="text-[#515151] text-xs mt-1">
                                Enter 6-digit code sent to{" "}
                                <span className="font-semibold text-[#0B1F33]">{email || "your email"}</span>{" "}
                                <button type="button" onClick={() => setStep("form")} className="text-[#2563EB] font-medium hover:underline">
                                    Change
                                </button>
                            </p>
                        </div>

                        {/* OTP body — pt: 24px, pr/pl: 32px, pb: 32px, gap: 20px */}
                        <div className="bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:pt-6 lg:pb-8 flex flex-col gap-5">
                            <div className="flex flex-col gap-3">
                                <span className="text-[#374151] text-xs sm:text-sm lg:text-sm text-center">Enter code here</span>
                                <div className="flex items-center justify-center gap-1.5 sm:gap-2 lg:gap-2">
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
                                            className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg border border-[#D5D5D5] bg-[#E3E3E3] text-center text-sm sm:text-base lg:text-base font-semibold text-[#0B1F33] outline-none focus:border-[#2563EB] focus:bg-white transition-colors"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="h-px bg-[#E5E7EB]" />

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
