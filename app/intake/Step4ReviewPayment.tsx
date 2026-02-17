"use client";

import { useState } from 'react';
import { useFormContext } from './FormContext';

interface ProgressStepProps {
  number: number;
  label: string;
  status: 'complete' | 'current' | 'upcoming';
}

function ProgressStep({ number, label, status }: ProgressStepProps) {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-3">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${status === 'complete'
              ? 'bg-green-500 text-white'
              : status === 'current'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
        >
          {status === 'complete' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            number
          )}
        </div>
        <span
          className={`text-sm font-medium hidden sm:block whitespace-nowrap ${status === "current" ? "text-gray-900" : "text-gray-600"
            }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Step4ReviewPayment() {
  const { formData, setCurrentStep } = useFormContext();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [couponError, setCouponError] = useState('');

  const reportFee = 499.00;
  const discount = appliedCoupon ? 50.00 : 0; // Example discount
  const total = reportFee - discount;

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }
    // Placeholder for coupon validation
    if (couponCode.toUpperCase() === 'DEMO50') {
      setAppliedCoupon(couponCode);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code');
      setAppliedCoupon(null);
    }
  };

  const handleEditStep = (step: number) => {
    setCurrentStep(step);
  };

  const handleBack = () => {
    setCurrentStep(3);
  };

  const handleProceedToPayment = () => {
    // Placeholder for Stripe payment integration
    alert('Proceeding to Stripe payment...\n\nIn production, this would redirect to Stripe Checkout.');
    // In production: redirect to Stripe Checkout or use Stripe Elements
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Report</h1>
          <p className="text-gray-600 mb-6">Step 4 of 4: Review & Payment</p>

          {/* Progress Stepper */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <ProgressStep number={1} label="Requester Info" status="complete" />
            <div className="w-12 sm:w-16 h-0.5 bg-green-500"></div>
            <ProgressStep number={2} label="Intake Form" status="complete" />
            <div className="w-12 sm:w-16 h-0.5 bg-green-500"></div>
            <ProgressStep number={3} label="Upload Files" status="complete" />
            <div className="w-12 sm:w-16 h-0.5 bg-blue-600"></div>
            <ProgressStep number={4} label="Review & Payment" status="current" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Review Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Requester Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Requester Information</h2>
                <button
                  onClick={() => handleEditStep(1)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Edit
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Full Name</p>
                  <p className="text-sm font-medium text-gray-900">{formData.requesterInfo.fullName || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="text-sm font-medium text-gray-900">{formData.requesterInfo.email || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="text-sm font-medium text-gray-900">{formData.requesterInfo.phone || '—'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Company/Organization</p>
                  <p className="text-sm font-medium text-gray-900">{formData.requesterInfo.company || '—'}</p>
                </div>
              </div>
            </div>

            {/* Property & Claim Information */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Property & Claim Information</h2>
                <button
                  onClick={() => handleEditStep(2)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Edit
                </button>
              </div>

              {/* Claimant Details */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Claimant Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Property Owner</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimantDetails.propertyOwner || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Property Address</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimantDetails.propertyAddress || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Property Type</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimantDetails.propertyType || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Roof Covering</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimantDetails.roofCovering || '—'}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Claim Information */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Claim Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Claim Number</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimInfo.claimNumber || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Date of Loss</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimInfo.dateOfLoss || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Insurance Carrier</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimInfo.insuranceCarrier || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Policy Number</p>
                    <p className="text-sm font-medium text-gray-900">{formData.claimInfo.policyNumber || '—'}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4"></div>

              {/* Estimate Details */}
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">Estimate Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Type of Loss</p>
                    <p className="text-sm font-medium text-gray-900">{formData.estimateDetails.typeOfLoss || '—'}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Estimated Amount</p>
                    <p className="text-sm font-medium text-gray-900">
                      {formData.estimateDetails.estimatedAmount ? `$${parseFloat(formData.estimateDetails.estimatedAmount).toFixed(2)}` : '—'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">ACV Loss</p>
                    <p className="text-sm font-medium text-gray-900">
                      {formData.estimateDetails.acvLoss ? `$${parseFloat(formData.estimateDetails.acvLoss).toFixed(2)}` : '—'}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Replacement Cost Loss</p>
                    <p className="text-sm font-medium text-gray-900">
                      {formData.estimateDetails.replacementCostLoss ? `$${parseFloat(formData.estimateDetails.replacementCostLoss).toFixed(2)}` : '—'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Uploaded Documents */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Uploaded Documents</h2>
                <button
                  onClick={() => handleEditStep(3)}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Edit
                </button>
              </div>
              {formData.uploadedFiles.length > 0 ? (
                <div className="space-y-2">
                  {formData.uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                    >
                      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-500 italic">No documents uploaded yet.</p>
              )}
            </div>
          </div>

          {/* Right Column - Payment Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Payment Summary</h2>

              {/* Report Fee */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-700">Report Fee</span>
                <span className="text-sm font-medium text-gray-900">${reportFee.toFixed(2)}</span>
              </div>

              {/* Coupon Code */}
              <div className="mb-4">
                <label className="text-sm font-medium text-gray-700 block mb-2">Coupon Code</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Enter code"
                    disabled={!!appliedCoupon}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    disabled={!!appliedCoupon}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                  >
                    Apply
                  </button>
                </div>
                {couponError && (
                  <p className="text-xs text-red-600 mt-1">{couponError}</p>
                )}
                {appliedCoupon && (
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-xs text-green-600 font-medium">Coupon "{appliedCoupon}" applied!</p>
                    <button
                      onClick={() => {
                        setAppliedCoupon(null);
                        setCouponCode('');
                      }}
                      className="text-xs text-red-600 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>

              {/* Discount */}
              {appliedCoupon && (
                <div className="flex items-center justify-between mb-4 text-green-600">
                  <span className="text-sm">Discount</span>
                  <span className="text-sm font-medium">-${discount.toFixed(2)}</span>
                </div>
              )}

              <div className="border-t border-gray-200 my-4"></div>

              {/* Total */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-base font-semibold text-gray-900">Total</span>
                <span className="text-2xl font-bold text-gray-900">${total.toFixed(2)}</span>
              </div>

              {/* Payment Button */}
              <button
                onClick={handleProceedToPayment}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-sm"
              >
                Proceed to Payment
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Secure payment powered by <strong>Stripe</strong>
              </p>

              {/* Info Box */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-blue-900 mb-1">What happens next?</p>
                    <ul className="text-xs text-blue-800 space-y-1">
                      <li>• Secure payment via Stripe</li>
                      <li>• Your case will be reviewed by a Licensed PE</li>
                      <li>• Report delivered within 3-5 business days</li>
                      <li>• You'll receive email updates on progress</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex items-center justify-between mt-8 pb-8">
          <button
            onClick={handleBack}
            className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
