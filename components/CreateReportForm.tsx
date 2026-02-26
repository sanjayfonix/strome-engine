"use client";

import Link from "next/link";
import { useState } from "react";

const roofTypes = ["Asphalt Shingle", "Metal", "Tile", "Flat / TPO", "Wood Shake", "Slate", "Other"];
const roofConditions = ["Good", "Fair", "Poor", "Damaged"];
const roofMaterials = ["Asphalt", "Metal", "Clay Tile", "Concrete Tile", "Wood", "Slate", "Synthetic", "Other"];

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function InputField({
  label, required, placeholder, type = "text", value, onChange,
}: {
  label: string; required?: boolean; placeholder?: string; type?: string;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#1E293B]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-11 px-3.5 rounded-lg border border-[#E2E8F0] bg-white text-sm text-[#1E293B] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors"
      />
    </div>
  );
}

function SelectField({
  label, required, placeholder, options, value, onChange,
}: {
  label: string; required?: boolean; placeholder?: string; options: string[];
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-[#1E293B]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 px-3.5 pr-10 rounded-lg border border-[#E2E8F0] bg-white text-sm text-[#1E293B] appearance-none focus:outline-none focus:ring-2 focus:ring-[#2563EB]/30 focus:border-[#2563EB] transition-colors"
        >
          <option value="" disabled>{placeholder || "Select..."}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg className="w-4 h-4 text-[#94A3B8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function AccordionSection({
  title, required, children, defaultOpen = false,
}: {
  title: string; required?: boolean; children: React.ReactNode; defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-[#E2E8F0] bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="text-sm sm:text-base font-semibold text-[#0B1F33]">
          {title} {required && <span className="text-red-500">*</span>}
        </span>
        <ChevronDown open={open} />
      </button>
      {open && (
        <div className="px-5 pb-5 border-t border-[#E2E8F0]">
          {children}
        </div>
      )}
    </div>
  );
}

export default function CreateReportForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    roofType: "",
    roofCondition: "",
    roofMaterial: "",
    roofAge: "",
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyAddress: "",
  });

  const set = (key: keyof typeof form) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto max-w-7xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-[#1E4ED8] text-sm font-normal mb-6"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </Link>

        {/* Page heading */}
        <h1 className="text-[#0F2A43] text-2xl font-semibold mb-1">Create New Report</h1>
        <p className="text-[#475569] text-sm mb-6">Experience the Storm Engine difference with zero risk.</p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">

          {/* Guest Requester Information */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-8 [box-shadow:0px_1px_2px_0px_#0000000D]">
            <h2 className="text-base sm:text-lg font-semibold text-[#0F2A43] mb-1">Guest Requester Information</h2>
            <p className="text-sm text-[#475569] mb-5">This information is used to uniquely identify your case and securely deliver your report.</p>

            <div className="flex flex-col gap-4">
              <InputField
                label="Full Name" required placeholder="John Smith"
                value={form.fullName} onChange={set("fullName")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Email" required type="email" placeholder="john@example.com"
                  value={form.email} onChange={set("email")}
                />
                <InputField
                  label="Phone Number" required type="tel" placeholder="(555) 123-4567"
                  value={form.phone} onChange={set("phone")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectField
                  label="Roof Type" required placeholder="Select roof type"
                  options={roofTypes} value={form.roofType} onChange={set("roofType")}
                />
                <SelectField
                  label="Roof Condition" required placeholder="Good"
                  options={roofConditions} value={form.roofCondition} onChange={set("roofCondition")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <SelectField
                  label="Roof Material" required placeholder="Select material"
                  options={roofMaterials} value={form.roofMaterial} onChange={set("roofMaterial")}
                />
                <InputField
                  label="Roof Age" required placeholder="1 year"
                  value={form.roofAge} onChange={set("roofAge")}
                />
              </div>
            </div>
          </div>

          {/* Company Details Accordion */}
          <AccordionSection title="Company Details">
            <div className="flex flex-col gap-4 pt-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Company Name" placeholder="Acme Corp"
                  value={form.companyName} onChange={set("companyName")}
                />
                <InputField
                  label="Company Email" type="email" placeholder="contact@company.com"
                  value={form.companyEmail} onChange={set("companyEmail")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField
                  label="Company Phone" type="tel" placeholder="(555) 000-0000"
                  value={form.companyPhone} onChange={set("companyPhone")}
                />
                <InputField
                  label="Company Address" placeholder="123 Main St, City, State"
                  value={form.companyAddress} onChange={set("companyAddress")}
                />
              </div>
            </div>
          </AccordionSection>

          {/* Document Upload Accordion */}
          <AccordionSection title="Document Upload" required>
            <div className="pt-4">
              <label
                htmlFor="doc-upload"
                className="flex flex-col items-center justify-center w-full h-36 border-2 border-dashed border-[#CBD5E1] rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] cursor-pointer transition-colors group"
              >
                <svg className="w-8 h-8 text-[#94A3B8] mb-2 group-hover:text-[#64748B] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg>
                <span className="text-sm font-medium text-[#475569]">Click to upload or drag & drop</span>
                <span className="text-xs text-[#94A3B8] mt-1">PDF, PNG, JPG, DOC up to 25MB</span>
                <input id="doc-upload" type="file" multiple accept=".pdf,.png,.jpg,.jpeg,.doc,.docx" className="hidden" />
              </label>
            </div>
          </AccordionSection>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-2 pb-4">
            <Link
              href="/"
              className="h-11 px-6 rounded-full border border-[#CBD5E1] bg-white text-sm font-medium text-[#475569] hover:bg-[#F8FAFC] transition-colors flex items-center"
            >
              Back
            </Link>
            <button
              type="submit"
              className="h-11 px-6 rounded-full bg-[#2563EB] text-white text-sm font-semibold hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] transition-all duration-200"
            >
              Review &amp; Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
