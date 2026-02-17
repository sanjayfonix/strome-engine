"use client";

import { useState } from 'react';
import { useFormContext } from './FormContext';

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
  "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
  "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
  "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
  "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
  "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const PROPERTY_TYPES = ["Residential", "Commercial", "Industrial", "Multi-Family"];
const ROOF_COVERINGS = ["Asphalt Shingles", "Metal", "Tile", "Slate", "Wood Shake", "Flat/Membrane", "Other"];
const LOSS_TYPES = ["Hail", "Wind", "Storm", "Fire", "Flood", "Other"];
const ESTIMATE_TYPES = ["Preliminary", "Final", "Supplemental"];

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

export default function Step2IntakeForm() {
  const { formData, updateClaimantDetails, updateClaimInfo, updateEstimateDetails, updateInsuranceInfo, setCurrentStep } = useFormContext();
  const [useCurrentLocation, setUseCurrentLocation] = useState(false);

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        updateClaimantDetails({
          latitude: position.coords.latitude.toFixed(6),
          longitude: position.coords.longitude.toFixed(6),
        });
        setUseCurrentLocation(true);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
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
          <p className="text-gray-600 mb-6">Step 2 of 5: Property and Claim Information</p>

          {/* Progress Stepper */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <ProgressStep number={1} label="Requester Info" status="complete" />
            <div className="w-12 sm:w-16 h-0.5 bg-blue-600"></div>
            <ProgressStep number={2} label="Intake Form" status="current" />
            <div className="w-12 sm:w-16 h-0.5 bg-gray-200"></div>
            <ProgressStep number={3} label="Upload Files" status="upcoming" />
            <div className="w-12 sm:w-16 h-0.5 bg-gray-200"></div>
            <ProgressStep number={4} label="Review & Payment" status="upcoming" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Claimant Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Claimant Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Property Owner */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Owner <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.claimantDetails.propertyOwner}
                  onChange={(e) => updateClaimantDetails({ propertyOwner: e.target.value })}
                  placeholder="Full name of property owner"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* Property Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.claimantDetails.propertyAddress}
                  onChange={(e) => updateClaimantDetails({ propertyAddress: e.target.value })}
                  placeholder="123 Main Street, Austin, TX 78701"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
                <p className="mt-1 text-xs text-gray-500">Start typing to search for an address</p>
              </div>

              {/* Property Coordinates */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Property Coordinates</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    value={formData.claimantDetails.latitude}
                    onChange={(e) => updateClaimantDetails({ latitude: e.target.value })}
                    placeholder="Latitude (e.g., 30.267153)"
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    value={formData.claimantDetails.longitude}
                    onChange={(e) => updateClaimantDetails({ longitude: e.target.value })}
                    placeholder="Longitude (e.g., -97.743057)"
                    className="px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={getCurrentLocation}
                  className="mt-2 inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Use Current Location
                </button>
                <p className="mt-1 text-xs text-gray-500">Optional: Enter coordinates manually or use your current location</p>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.claimantDetails.propertyType}
                  onChange={(e) => updateClaimantDetails({ propertyType: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                >
                  <option value="">Select property type</option>
                  {PROPERTY_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Roof Covering */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roof Covering <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.claimantDetails.roofCovering}
                  onChange={(e) => updateClaimantDetails({ roofCovering: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                >
                  <option value="">Select roof covering</option>
                  {ROOF_COVERINGS.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Policy Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Policy Number</label>
                <input
                  type="text"
                  value={formData.claimantDetails.policyNumber}
                  onChange={(e) => updateClaimantDetails({ policyNumber: e.target.value })}
                  placeholder="Policy number"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Roof Age */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Roof Age <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.claimantDetails.roofAge}
                  onChange={(e) => updateClaimantDetails({ roofAge: e.target.value })}
                  placeholder="Roof age"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* City, State, Zip */}
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.claimantDetails.city}
                    onChange={(e) => updateClaimantDetails({ city: e.target.value })}
                    placeholder="City"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <select
                    value={formData.claimantDetails.state}
                    onChange={(e) => updateClaimantDetails({ state: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  >
                    <option value="">State</option>
                    {US_STATES.map(state => (
                      <option key={state} value={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input
                    type="text"
                    value={formData.claimantDetails.zipCode}
                    onChange={(e) => updateClaimantDetails({ zipCode: e.target.value })}
                    placeholder="Zip"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Claim Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Claim Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Claim Number */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Claim Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.claimInfo.claimNumber}
                  onChange={(e) => updateClaimInfo({ claimNumber: e.target.value })}
                  placeholder="CLM-2024-001234"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* Date of Loss */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Loss <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  value={formData.claimInfo.dateOfLoss}
                  onChange={(e) => updateClaimInfo({ dateOfLoss: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* Insurance Carrier Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Insurance Carrier Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.claimInfo.insuranceCarrier}
                  onChange={(e) => updateClaimInfo({ insuranceCarrier: e.target.value })}
                  placeholder="e.g., State Farm, Allstate"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  required
                />
              </div>

              {/* Policy Number */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Policy Number</label>
                <input
                  type="text"
                  value={formData.claimInfo.policyNumber}
                  onChange={(e) => updateClaimInfo({ policyNumber: e.target.value })}
                  placeholder="Optional"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Additional Notes */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  value={formData.claimInfo.additionalNotes}
                  onChange={(e) => updateClaimInfo({ additionalNotes: e.target.value })}
                  placeholder="Any additional information about the claim..."
                  rows={4}
                  maxLength={500}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                />
                <p className="mt-1 text-xs text-gray-500 text-right">
                  {formData.claimInfo.additionalNotes.length}/500 characters
                </p>
              </div>
            </div>
          </div>

          {/* Estimate Details */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Estimate Details</h2>
            <p className="text-sm text-gray-600 mb-6">
              These details may be auto-extracted from uploaded documents and can be adjusted if necessary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Date of Loss */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Loss</label>
                <input
                  type="date"
                  value={formData.estimateDetails.dateOfLoss}
                  onChange={(e) => updateEstimateDetails({ dateOfLoss: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Type of Loss */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type of Loss</label>
                <select
                  value={formData.estimateDetails.typeOfLoss}
                  onChange={(e) => updateEstimateDetails({ typeOfLoss: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select type</option>
                  {LOSS_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Estimated Amount */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Amount</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={formData.estimateDetails.estimatedAmount}
                    onChange={(e) => updateEstimateDetails({ estimatedAmount: e.target.value })}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Estimate Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimate Type</label>
                <select
                  value={formData.estimateDetails.estimateType}
                  onChange={(e) => updateEstimateDetails({ estimateType: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                >
                  <option value="">Select type</option>
                  {ESTIMATE_TYPES.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* ACV Loss */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Actual Cash Value (ACV) Loss</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={formData.estimateDetails.acvLoss}
                    onChange={(e) => updateEstimateDetails({ acvLoss: e.target.value })}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Replacement Cost Loss */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Replacement Cost Loss</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={formData.estimateDetails.replacementCostLoss}
                    onChange={(e) => updateEstimateDetails({ replacementCostLoss: e.target.value })}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Deductible */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Deductible</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={formData.estimateDetails.deductible}
                    onChange={(e) => updateEstimateDetails({ deductible: e.target.value })}
                    placeholder="0.00"
                    className="w-full pl-8 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Date Inspected */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Inspected</label>
                <input
                  type="date"
                  value={formData.estimateDetails.dateInspected}
                  onChange={(e) => updateEstimateDetails({ dateInspected: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Date Estimate Completed */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Date Estimate Completed</label>
                <input
                  type="date"
                  value={formData.estimateDetails.dateEstimateCompleted}
                  onChange={(e) => updateEstimateDetails({ dateEstimateCompleted: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Insurance Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Insurance Information</h2>
            <p className="text-sm text-gray-600 mb-6">
              Carrier contact information associated with this claim.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Insurance Company Representative */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Company Representative</label>
                <input
                  type="text"
                  value={formData.insuranceInfo.companyRepresentative}
                  onChange={(e) => updateInsuranceInfo({ companyRepresentative: e.target.value })}
                  placeholder="Representative name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Insurance Company Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Company Email</label>
                <input
                  type="email"
                  value={formData.insuranceInfo.companyEmail}
                  onChange={(e) => updateInsuranceInfo({ companyEmail: e.target.value })}
                  placeholder="company@insurance.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Insurance Claim Rep Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Claim Rep Email</label>
                <input
                  type="email"
                  value={formData.insuranceInfo.claimRepEmail}
                  onChange={(e) => updateInsuranceInfo({ claimRepEmail: e.target.value })}
                  placeholder="rep@insurance.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              {/* Insurance Claim Rep Phone */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Claim Rep Phone</label>
                <input
                  type="tel"
                  value={formData.insuranceInfo.claimRepPhone}
                  onChange={(e) => updateInsuranceInfo({ claimRepPhone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between pb-8">
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Back
            </button>
            <button
              type="submit"
              className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Continue to Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
