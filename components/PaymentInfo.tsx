"use client";

import Link from "next/link";
import { useState } from "react";

export default function PaymentInfo() {
  const [coupon, setCoupon] = useState("");

  const reportFee = 499.0;
  const total = reportFee; // discount logic can be added when API is ready

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-5 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">

        {/* Back link */}
        <Link
          href="/review-report"
          className="inline-flex items-center gap-1.5 text-[#1E4ED8] text-sm font-normal mb-5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>

        {/* Page heading */}
        <h1 className="text-[#0F2A43] text-lg sm:text-2xl font-semibold mb-5">Payment Information</h1>

        {/* Payment card */}
        <div className="rounded-lg border border-[#E2E8F0] bg-white [box-shadow:0px_1px_2px_0px_#0000000D] p-4 sm:p-6 overflow-hidden">

          {/* Payment Summary title */}
          <h2 className="text-sm sm:text-base font-semibold text-[#1E1E1E] mb-4">Payment Summary</h2>

          {/* Report Fee row */}
          <div className="flex items-center justify-between py-3 border-b border-[#E2E8F0]">
            <span className="text-sm text-[#6D6D6D]">Report Fee</span>
            <span className="text-sm font-medium text-[#373737]">${reportFee.toFixed(2)}</span>
          </div>

          {/* Coupon Code */}
          <div className="mt-4 mb-1">
            <label className="block text-xs sm:text-sm font-medium text-[#374151] mb-2">
              Coupon Code
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="flex-1 min-w-0 h-10 px-3 rounded-md border border-[#D5D5D5] bg-white text-sm text-[#374151] placeholder:text-[#A8A8A8] outline-none focus:outline-none transition-colors"
              />
              <button
                type="button"
                className="h-10 px-5 rounded-md border border-[#D5D5D5] bg-[#F8FAFC] text-sm font-medium text-[#2563EB] hover:bg-[#EFF6FF] transition-colors shrink-0"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#E2E8F0] mt-5 mb-4" />

          {/* Total row */}
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm sm:text-base font-semibold text-[#1E1E1E]">Total</span>
            <span className="text-xl sm:text-2xl font-bold text-[#0F2A43]">${total.toFixed(2)}</span>
          </div>

          {/* Proceed to Payment button */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="w-full h-11 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:bg-[#1D4ED8] hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] transition-all duration-200"
            >
              Proceed to Payment
            </button>
            <p className="text-xs text-[#9CA3AF] text-center">
              Secure payment powered by Stripe
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
