"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const roofTypes = ["Commercial", "Industrial", "Single Family residential", "Multi Family residential"];
const roofConditions = ["Good", "Average", "Bad"];
const roofMaterials = ["Wood", "Metal roofing", "Asphalt Shingle", "Clay Tile", "Slate", "Synthetic"];


function InputField({
  label, required, placeholder, type = "text", value, onChange,
}: {
  label: string; required?: boolean; placeholder?: string; type?: string;
  value: string; onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs sm:text-sm font-normal text-[#6D6D6D]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-9 px-3 rounded-md border border-[#D5D5D5] bg-white text-xs sm:text-sm text-[#373737] placeholder:text-[#A8A8A8] outline-none focus:outline-none focus-visible:outline-none transition-colors font-medium"
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-1" ref={ref}>
      <label className="text-xs sm:text-sm font-medium text-[#374151]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        {/* Trigger */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className={`w-full h-9 px-3 pr-3 rounded-md border border-[#D5D5D5] bg-white text-xs sm:text-sm text-left outline-none focus:outline-none flex items-center justify-between transition-colors ${
            value ? "text-[#374151]" : "text-[#A8A8A8]"
          }`}
        >
          <span>{value || placeholder || "Select..."}</span>
          <svg
            className={`w-4 h-4 text-[#6B7280] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Options — absolutely positioned, won't affect layout */}
        {open && (
          <div className="absolute z-50 left-0 right-0 top-[calc(100%+4px)] rounded-md border border-[#D5D5D5] bg-white overflow-hidden shadow-sm">
            {options.map((opt, i) => (
              <button
                key={opt}
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-3 py-2.5 text-xs sm:text-sm text-[#374151] bg-white hover:bg-[#F3F6F9] transition-colors ${
                  i !== options.length - 1 ? "border-b border-[#E5E7EB]" : ""
                } ${value === opt ? "font-medium" : "font-normal"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
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
    <div className="rounded-lg border border-[#E2E8F0] bg-white overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 text-left"
      >
        <span className="text-sm font-semibold text-[#0B1F33]">
          {title} {required && <span className="text-red-500">*</span>}
        </span>
        <svg
          className={`w-5 h-5 text-[#64748B] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
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
    whoRequesting: "",
    denialType: "",
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState(false);

  const set = (key: keyof typeof form) => (val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }));

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    if (files.length) {
      setUploadedFiles((prev) => [...prev, ...files]);
      setUploadError(false);
    }
    e.target.value = "";
  }

  function removeFile(index: number) {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function formatBytes(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] py-5 sm:py-8 px-3 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

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
        <h1 className="text-[#0F2A43] text-lg sm:text-2xl font-semibold mb-1">Create New Report</h1>
        <p className="text-[#475569] text-xs sm:text-sm mb-4 sm:mb-6">Experience the Storm Engine difference with zero risk.</p>

        <form onSubmit={(e) => { e.preventDefault(); if (uploadedFiles.length === 0) { setUploadError(true); } }} className="flex flex-col gap-4">

          {/* Guest Requester Information */}
          <div className="rounded-lg border border-[#E2E8F0] bg-white p-4 sm:p-6 md:p-8 [box-shadow:0px_1px_2px_0px_#0000000D]">
            <h2 className="text-sm sm:text-base font-semibold text-[#0F2A43] mb-1">Guest Requester Information</h2>
            <p className="text-xs sm:text-sm text-[#475569] mb-4">This information is used to uniquely identify your case and securely deliver your report.</p>

            <div className="flex flex-col gap-3">
              <InputField
                label="Full Name" required placeholder="John Smith"
                value={form.fullName} onChange={set("fullName")}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <InputField
                  label="Email" required type="email" placeholder="john@example.com"
                  value={form.email} onChange={set("email")}
                />
                <InputField
                  label="Phone Number" required type="tel" placeholder="(555) 123-4567"
                  value={form.phone} onChange={set("phone")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SelectField
                  label="Roof Type" required placeholder="Select roof type"
                  options={roofTypes} value={form.roofType} onChange={set("roofType")}
                />
                <SelectField
                  label="Roof Condition" required placeholder="Good"
                  options={roofConditions} value={form.roofCondition} onChange={set("roofCondition")}
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
          <AccordionSection title="Company Details" defaultOpen={true}>
            <p className="text-xs sm:text-sm text-[#475569] mb-3 -mt-1">Please Enter your company details</p>
            <div className="flex flex-col gap-3">
              <InputField
                label="Compnay Name" required placeholder="XYZ"
                value={form.companyName} onChange={set("companyName")}
              />
              <InputField
                label="Who is requesting?" required placeholder="Lorem..."
                value={form.whoRequesting} onChange={set("whoRequesting")}
              />
              <InputField
                label="Denial Type" required placeholder="No Coverage"
                value={form.denialType} onChange={set("denialType")}
              />
            </div>
          </AccordionSection>

          {/* Document Upload Accordion */}
          <AccordionSection title="Document Upload" required defaultOpen={true}>
            {/* Recommended docs list */}
            <div className="border border-[#E5E7EB] rounded-lg p-3 sm:p-4 mb-4">
              <p className="text-xs sm:text-sm font-medium text-[#0F2A43] mb-2">Recommended Documents (Improves Report Strength)</p>
              <ul className="flex flex-col gap-1.5">
                {[
                  { icon: "doc",   label: "Policy Document" },
                  { icon: "doc",   label: "Xactimate or Contractor Estimate" },
                  { icon: "img",   label: "Damage Photos (10+ recommended for stronger analysis)" },
                  { icon: "doc",   label: "Inspection Report" },
                  { icon: "cloud", label: "Storm or Weather Report" },
                  { icon: "folder",label: "Supporting Documentation" },
                ].map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                    {icon === "doc" && (
                      <svg className="w-4 h-4 text-[#334155] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>
                    )}
                    {icon === "img" && (
                      <svg className="w-4 h-4 text-[#334155] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
                    )}
                    {icon === "cloud" && (
                      <svg className="w-4 h-4 text-[#334155] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>
                    )}
                    {icon === "folder" && (
                      <svg className="w-4 h-4 text-[#334155] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>
                    )}
                    {label}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[#64748B] italic mt-3">Uploading complete documentation improves analysis quality and completeness score</p>
            </div>

            {/* Upload area */}
            <p className="text-sm font-medium text-[#374151] mb-2">Upload Documents <span className="text-red-500">*</span></p>
            <label
              htmlFor="doc-upload"
              className="flex flex-col items-center justify-center w-full py-7 sm:py-10 px-3 sm:px-4 border-2 border-dashed border-[#E2E8F0] rounded-lg bg-[#F8FAFC] cursor-pointer transition-colors group text-center"
            >
              {/* Blue cloud-upload icon */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-2 sm:mb-3">
                <svg className="w-6 h-6 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.338-2.32 3.75 3.75 0 0 1 3.832 3.849 4.5 4.5 0 0 1-1.41 8.775H6.75Z" />
                </svg>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-[#0F2A43] mb-1">Drag & Drop Files Here or Click to Upload</p>
              <p className="text-xs text-[#6B7280] mb-3 hidden sm:block">Upload your coverage letter, denial letter, photos, estimates, and supporting documents.</p>
              <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#2563EB] text-white text-xs sm:text-sm font-medium pointer-events-none">
                Select Files
              </span>
              <p className="text-[10px] sm:text-xs text-[#9CA3AF] mt-3">Supported: PDF, DOCX, XLSX, JPG, PNG, HEIC, ZIP</p>
              <p className="text-[10px] sm:text-xs text-[#9CA3AF]">Maximum 50MB per file. Up to 500MB per case.</p>
              <input id="doc-upload" type="file" multiple accept=".pdf,.docx,.xlsx,.jpg,.jpeg,.png,.heic,.zip" className="hidden" onChange={handleFileChange} />
            </label>

            {/* Validation error */}
            {uploadError && (
              <div className="mt-3 flex items-center gap-2 px-4 py-3 rounded-lg bg-red-50 border border-red-100">
                <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                </svg>
                <span className="text-sm text-red-600">Please upload at least one document.</span>
              </div>
            )}

            {/* Uploaded files list */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4 rounded-lg border border-[#E2E8F0] bg-white overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-[#E2E8F0]">
                  <p className="text-sm font-semibold text-[#0F2A43]">Uploaded Files ({uploadedFiles.length})</p>
                 
                </div>
                {/* File rows */}
                <div className="divide-y divide-[#E2E8F0]">
                  {uploadedFiles.map((file, i) => (
                    <div key={i} className="flex items-center justify-between px-4 py-3 bg-white">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-[#0F2A43] leading-tight">{file.name}</p>
                          <p className="text-xs text-[#9CA3AF] mt-0.5">{formatBytes(file.size)}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-[#22C55E] flex items-center justify-center shrink-0">
                          <svg className="w-3 h-3 text-[#22C55E]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-[#9CA3AF] hover:text-red-500 transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </AccordionSection>

          {/* Footer Actions */}
          <div className="flex items-center justify-between pt-2 pb-4">
            <Link
              href="/"
              className="h-9 sm:h-11 px-4 sm:px-6 rounded-full border border-[#BBCFF9] bg-[#E9EFFD] text-xs sm:text-sm font-medium text-[#2563EB] transition-colors flex items-center"
            >
              Back
            </Link>
            <button
              type="submit"
              className="h-9 sm:h-11 px-4 sm:px-6 rounded-full bg-[#2563EB] text-white text-xs sm:text-sm font-semibold hover:bg-[#1D4ED8] hover:shadow-[0px_3px_4px_0px_#00000033] active:bg-[#102A63] transition-all duration-200"
            >
              Review &amp; Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
