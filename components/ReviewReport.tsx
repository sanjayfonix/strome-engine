"use client";

import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface GuestInfo {
  name: string;
  email: string;
  phone: string;
  roofType: string;
  roofMaterial: string;
  roofAge: string;
  roofCondition: string;
}

interface CompanyInfo {
  companyName: string;
  whoRequesting: string;
  denialType: string;
}

interface UploadedFile {
  name: string;
  size: string; // e.g. "19.7 KB"
}

interface PropertyDetail {
  propertyOwner: string;
  propertyAddress: string;
  propertyCoordinates: string;
  propertyType: string;
  roofCovering: string;
  city: string;
  state: string;
  zipCode: string;
}

interface ClaimInfo {
  claimNumber: string;
  dateOfLoss: string;
  insuranceCarrierName: string;
  policyNumber: string;
  additionalNote: string;
}

interface ClaimantInfo {
  insuredName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

interface EstimateDetails {
  typeOfLoss: string;
  estimateAmount: string;
  estimateType: string;
  actualCashValue: string;
  replacementCostLoss: string;
  deductible: string;
  dateInspected: string;
  dateEstimateCompleted: string;
}

interface InsuranceInfo {
  companyRepresentative: string;
  companyEmail: string;
  claimRepEmail: string;
  claimRepPhone: string;
}

export interface ReviewReportData {
  guest: GuestInfo;
  company: CompanyInfo;
  files: UploadedFile[];
  property: PropertyDetail;
  claim: ClaimInfo;
  claimant: ClaimantInfo;
  estimate: EstimateDetails;
  insurance: InsuranceInfo;
}

// ─── Default placeholder data (replace with API response) ────────────────────

const defaultData: ReviewReportData = {
  guest: {
    name: "Shivtej",
    email: "—",
    phone: "—",
    roofType: "—",
    roofMaterial: "—",
    roofAge: "—",
    roofCondition: "—",
  },
  company: {
    companyName: "—",
    whoRequesting: "—",
    denialType: "—",
  },
  files: [],
  property: {
    propertyOwner: "—",
    propertyAddress: "—",
    propertyCoordinates: "—",
    propertyType: "—",
    roofCovering: "—",
    city: "—",
    state: "—",
    zipCode: "—",
  },
  claim: {
    claimNumber: "—",
    dateOfLoss: "—",
    insuranceCarrierName: "—",
    policyNumber: "—",
    additionalNote: "—",
  },
  claimant: {
    insuredName: "—",
    address: "—",
    city: "—",
    state: "—",
    zipCode: "—",
  },
  estimate: {
    typeOfLoss: "—",
    estimateAmount: "0.00",
    estimateType: "—",
    actualCashValue: "0.00",
    replacementCostLoss: "0.00",
    deductible: "0.00",
    dateInspected: "—",
    dateEstimateCompleted: "—",
  },
  insurance: {
    companyRepresentative: "—",
    companyEmail: "—",
    claimRepEmail: "—",
    claimRepPhone: "—",
  },
};

// ─── Small helpers ────────────────────────────────────────────────────────────

function Card({
  title,
  editHref,
  children,
}: {
  title: string;
  editHref?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 sm:p-6 rounded-lg border border-[#E2E8F0] bg-white [box-shadow:0px_1px_2px_0px_#0000000D]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E]">{title}</h2>
        {editHref && (
          <Link href={editHref} className="text-xs sm:text-sm font-medium text-[#2563EB] hover:underline">
            Edit
          </Link>
        )}
      </div>
      {children}
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-xs sm:text-sm font-normal text-[#6D6D6D]">{label} :</span>
      <span className="text-sm sm:text-base font-medium text-[#373737]">{value || "—"}</span>
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
      {children}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function ReviewReport({ data = defaultData }: { data?: ReviewReportData }) {
  const { guest, company, files, property, claim, claimant, estimate, insurance } = data;

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-5 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Back link */}
        <Link
          href="/create-report"
          className="inline-flex items-center gap-1.5 text-[#1E4ED8] text-sm font-normal mb-5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>

        {/* Page heading */}
        <h1 className="text-[#0F2A43] text-lg sm:text-2xl font-semibold mb-1">Review your Report</h1>
        <p className="text-[#475569] text-xs sm:text-sm mb-5">Experience the Storm Engine difference with zero risk.</p>

        <div className="flex flex-col gap-4">

          {/* ── Guest Requester Information + Company Information (one card) ── */}
          <div className="p-4 sm:p-6 rounded-lg border border-[#E2E8F0] bg-white [box-shadow:0px_1px_2px_0px_#0000000D] overflow-hidden">
            {/* Guest section */}
            <div className=" mb-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E]">Guest Requester Information</h2>
                <Link href="/create-report" className="text-xs sm:text-sm font-medium text-[#2563EB] hover:underline">Edit</Link>
              </div>
              <Grid>
                <Field label="Name" value={guest.name} />
                <Field label="Email" value={guest.email} />
                <Field label="Phone" value={guest.phone} />
                <Field label="Roof Type" value={guest.roofType} />
                <Field label="Roof Material" value={guest.roofMaterial} />
                <Field label="Roof Age" value={guest.roofAge} />
                <Field label="Roof Condition" value={guest.roofCondition} />
              </Grid>
            </div>


            {/* Company section */}
            <div className=" border-t border-t-[#F1F1F1] pt-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E]">Company Information</h2>
                <Link href="/create-report" className="text-xs sm:text-sm font-medium text-[#2563EB] hover:underline">Edit</Link>
              </div>
              <Grid>
                <Field label="Company Name" value={company.companyName} />
                <Field label="Who is requesting" value={company.whoRequesting} />
                <Field label="Denial Type" value={company.denialType} />
              </Grid>
            </div>
          </div>

          {/* ── Uploaded Files ── */}
          <Card title={`Uploaded Files (${files.length})`} editHref="/create-report">
            {files.length === 0 ? (
              <p className="text-sm text-[#9CA3AF]">No files uploaded.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between px-3 sm:px-4 py-3 rounded-lg border border-[#E2E8F0] bg-white">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#0F2A43] leading-tight">{file.name}</p>
                        <p className="text-xs text-[#9CA3AF]">{file.size}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-[#22C55E] flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      </div>
                      <button type="button" className="text-[#9CA3AF] hover:text-red-500 transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </Card>

          {/* ── Property Detail + Claim + Claimant + Estimate (one card) ── */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white [box-shadow:0px_1px_2px_0px_#0000000D] overflow-hidden">

            {/* Property Detail */}
            <div className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E] mb-4">Property Detail</h2>
              <Grid>
                <Field label="Property Owner" value={property.propertyOwner} />
                <Field label="Property Address" value={property.propertyAddress} />
                <Field label="Property Coordinates" value={property.propertyCoordinates} />
                <Field label="Property Type" value={property.propertyType} />
                <Field label="Roof Covering" value={property.roofCovering} />
                <Field label="City" value={property.city} />
                <Field label="State" value={property.state} />
                <Field label="ZIP Code" value={property.zipCode} />
              </Grid>
            </div>

            <hr className="border-[#E2E8F0] sm:mx-6 mx-4" />

            {/* Claim Information */}
            <div className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E] mb-4">Claim Information</h2>
              <Grid>
                <Field label="Claim Number" value={claim.claimNumber} />
                <Field label="Date of Loss" value={claim.dateOfLoss} />
                <Field label="Insurance Carrier Name" value={claim.insuranceCarrierName} />
                <Field label="Policy Number" value={claim.policyNumber} />
                <Field label="Additional note" value={claim.additionalNote} />
              </Grid>
            </div>

            <hr className="border-[#E2E8F0] sm:mx-6 mx-4" />

            {/* Claimant Information */}
            <div className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E] mb-4">Claimant Information</h2>
              <Grid>
                <Field label="Insured Name" value={claimant.insuredName} />
                <Field label="Address" value={claimant.address} />
                <Field label="City" value={claimant.city} />
                <Field label="State" value={claimant.state} />
                <Field label="ZIP Code" value={claimant.zipCode} />
              </Grid>
            </div>

            <hr className="border-[#E2E8F0] sm:mx-6 mx-4" />

            {/* Estimate Details */}
            <div className="p-4 sm:p-6">
              <h2 className="text-base sm:text-lg font-semibold text-[#1E1E1E] mb-4">Estimate Details</h2>
              <Grid>
                <Field label="Type of Loss" value={estimate.typeOfLoss} />
                <Field label="Estimate Amount" value={estimate.estimateAmount} />
                <Field label="Estimate Type" value={estimate.estimateType} />
                <Field label="Actual Cash Value (ACV) Loss" value={estimate.actualCashValue} />
                <Field label="Replacement Cost Loss" value={estimate.replacementCostLoss} />
                <Field label="Deductible" value={estimate.deductible} />
                <Field label="Date Inspected" value={estimate.dateInspected} />
                <Field label="Date Estimate Completed" value={estimate.dateEstimateCompleted} />
              </Grid>
            </div>

          </div>

          {/* ── Insurance Information ── */}
          <Card title="Insurance Information">
            <Grid>
              <Field label="Insurance Company Representative" value={insurance.companyRepresentative} />
              <Field label="Insurance Company Email" value={insurance.companyEmail} />
              <Field label="Insurance Claim Rep Email" value={insurance.claimRepEmail} />
              <Field label="Insurance Claim Rep Phone" value={insurance.claimRepPhone} />
            </Grid>
          </Card>

          {/* ── Footer Actions ── */}
          <div className="flex items-center justify-between pt-2 pb-6">
            <Link
              href="/create-report"
              className="h-9 sm:h-11 px-4 sm:px-6 rounded-full border border-[#BBCFF9] bg-[#E9EFFD] text-xs sm:text-sm font-medium text-[#2563EB] transition-colors flex items-center"
            >
              Back
            </Link>
            <Link
              href="/payment"
              className="h-9 sm:h-11 px-4 sm:px-6 rounded-full bg-[#2563EB] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D4ED8] hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] transition-all duration-200 flex items-center"
            >
              Submit
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
