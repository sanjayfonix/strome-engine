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
        <span className="text-sm sm:text-lg font-semibold text-[#0B1F33]">
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
            <h2 className="text-sm sm:text-lg font-semibold text-[#0B1F33] mb-1">Guest Requester Information</h2>
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
                  { icon: "xactimate",   label: "Xactimate or Contractor Estimate" },
                  { icon: "damage",   label: "Damage Photos (10+ recommended for stronger analysis)" },
                  { icon: "inspection",   label: "Inspection Report" },
                  { icon: "weather", label: "Storm or Weather Report" },
                  { icon: "supporting",label: "Supporting Documentation" },
                ].map(({ icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-xs sm:text-sm text-[#334155]">
                    {icon === "doc" && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7602 5.33329V14C13.7602 14.1866 13.6984 14.3444 13.5746 14.4733C13.4509 14.6022 13.2994 14.6666 13.1202 14.6666H2.88023C2.70103 14.6666 2.54957 14.6022 2.42583 14.4733C2.3021 14.3444 2.24023 14.1866 2.24023 14V1.99996C2.24023 1.81329 2.3021 1.65552 2.42583 1.52663C2.54957 1.39774 2.70103 1.33329 2.88023 1.33329H9.92023L13.7602 5.33329ZM12.4802 5.99996H9.28023V2.66663H3.52023V13.3333H12.4802V5.99996ZM5.44023 4.66663H7.36023V5.99996H5.44023V4.66663ZM5.44023 7.33329H10.5602V8.66663H5.44023V7.33329ZM5.44023 9.99996H10.5602V11.3333H5.44023V9.99996Z" fill="#94A3B8"/>
                        </svg>

                    )}
                    {icon === "xactimate" && (
                      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.1202 16.6666H2.88023C2.70103 16.6666 2.54957 16.6022 2.42583 16.4733C2.3021 16.3444 2.24023 16.1866 2.24023 16V3.99996C2.24023 3.81329 2.3021 3.65552 2.42583 3.52663C2.54957 3.39774 2.70103 3.33329 2.88023 3.33329H13.1202C13.2994 3.33329 13.4509 3.39774 13.5746 3.52663C13.6984 3.65552 13.7602 3.81329 13.7602 3.99996V16C13.7602 16.1866 13.6984 16.3444 13.5746 16.4733C13.4509 16.6022 13.2994 16.6666 13.1202 16.6666ZM12.4802 15.3333V4.66663H3.52023V15.3333H12.4802ZM5.44023 6.66663H10.5602V7.99996H5.44023V6.66663ZM5.44023 9.33329H10.5602V10.6666H5.44023V9.33329ZM5.44023 12H10.5602V13.3333H5.44023V12Z" fill="#94A3B8"/>
                      </svg>

                    )}
                    {icon === "damage" && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.23961 14C2.06041 14 1.90894 13.9356 1.78521 13.8067C1.66148 13.6778 1.59961 13.52 1.59961 13.3333V2.66667C1.59961 2.48 1.66148 2.32222 1.78521 2.19333C1.90894 2.06444 2.06041 2 2.23961 2H13.7596C13.9388 2 14.0903 2.06444 14.214 2.19333C14.3377 2.32222 14.3996 2.48 14.3996 2.66667V13.3333C14.3996 13.52 14.3377 13.6778 14.214 13.8067C14.0903 13.9356 13.9388 14 13.7596 14H2.23961ZM13.1196 10V3.33333H2.87961V12.6667L9.27961 6L13.1196 10ZM13.1196 11.88L9.27961 7.88L4.68441 12.6667H13.1196V11.88ZM5.43961 7.33333C5.20921 7.33333 4.99588 7.27333 4.79961 7.15333C4.60334 7.03333 4.44761 6.87111 4.33241 6.66667C4.21721 6.46222 4.15961 6.24 4.15961 6C4.15961 5.76 4.21721 5.53778 4.33241 5.33333C4.44761 5.12889 4.60334 4.96667 4.79961 4.84667C4.99588 4.72667 5.20921 4.66667 5.43961 4.66667C5.67001 4.66667 5.88334 4.72667 6.07961 4.84667C6.27588 4.96667 6.43161 5.12889 6.54681 5.33333C6.66201 5.53778 6.71961 5.76 6.71961 6C6.71961 6.24 6.66201 6.46222 6.54681 6.66667C6.43161 6.87111 6.27588 7.03333 6.07961 7.15333C5.88334 7.27333 5.67001 7.33333 5.43961 7.33333Z" fill="#94A3B8"/>
                        </svg>

                    )}
                    {icon === "inspection" && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.36023 4.66663H8.64023V11.3333H7.36023V4.66663ZM9.92023 7.33329H11.2002V11.3333H9.92023V7.33329ZM4.80023 8.66663H6.08023V11.3333H4.80023V8.66663ZM9.92023 2.66663H3.52023V13.3333H12.4802V5.33329H9.92023V2.66663ZM2.24023 1.99996C2.24023 1.81329 2.3021 1.65552 2.42583 1.52663C2.54957 1.39774 2.70103 1.33329 2.88023 1.33329H10.5602L13.7602 4.66663V14C13.7602 14.1777 13.6984 14.3333 13.5746 14.4666C13.4509 14.6 13.2994 14.6666 13.1202 14.6666H2.88023C2.70103 14.6666 2.54957 14.6022 2.42583 14.4733C2.3021 14.3444 2.24023 14.1866 2.24023 14V1.99996Z" fill="#94A3B8"/>
                      </svg>

                    )}
                      {icon === "weather" && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99996 1.66671C8.81063 1.66671 9.56583 1.88004 10.2656 2.30671C10.9397 2.7156 11.473 3.27115 11.8656 3.97337C12.2752 4.70226 12.48 5.48893 12.48 6.33337V6.56004C12.9749 6.73782 13.4165 7.01337 13.8048 7.38671C14.193 7.76004 14.496 8.20226 14.7136 8.71337C14.9312 9.22448 15.04 9.76448 15.04 10.3334C15.04 11.0534 14.865 11.7245 14.5152 12.3467C14.1738 12.9512 13.713 13.4312 13.1328 13.7867C12.5354 14.1512 11.8912 14.3334 11.2 14.3334H4.79996C4.10876 14.3334 3.46449 14.1512 2.86716 13.7867C2.28689 13.4312 1.82609 12.9512 1.48476 12.3467C1.13489 11.7245 0.959961 11.0534 0.959961 10.3334C0.959961 9.76448 1.06876 9.22448 1.28636 8.71337C1.50396 8.20226 1.80689 7.76004 2.19516 7.38671C2.58343 7.01337 3.02503 6.73782 3.51996 6.56004V6.33337C3.51996 5.48893 3.72476 4.70226 4.13436 3.97337C4.52689 3.27115 5.06023 2.7156 5.73436 2.30671C6.43409 1.88004 7.18929 1.66671 7.99996 1.66671ZM7.99996 3.00004C7.41969 3.00004 6.88423 3.14893 6.39356 3.44671C5.90289 3.74448 5.51463 4.14893 5.22876 4.66004C4.94289 5.17115 4.79996 5.72893 4.79996 6.33337L4.85116 7.49337L3.95516 7.81337C3.44316 8.00004 3.02929 8.32448 2.71356 8.78671C2.39783 9.24893 2.23996 9.76448 2.23996 10.3334C2.23996 10.8134 2.35516 11.2578 2.58556 11.6667C2.81596 12.0756 3.12743 12.4 3.51996 12.64C3.91249 12.88 4.33916 13 4.79996 13H11.2C11.6608 13 12.0874 12.88 12.48 12.64C12.8725 12.4 13.184 12.0756 13.4144 11.6667C13.6448 11.2578 13.76 10.8134 13.76 10.3334C13.76 9.85337 13.6448 9.40893 13.4144 9.00004C13.184 8.59115 12.8725 8.26671 12.48 8.02671C12.0874 7.78671 11.6608 7.66671 11.2 7.66671C10.6453 7.66671 10.144 7.8356 9.69596 8.17337C9.24796 8.51115 8.93863 8.95115 8.76796 9.49337L7.55196 9.06671C7.72263 8.54226 7.98716 8.07115 8.34556 7.65337C8.70396 7.2356 9.13063 6.91115 9.62556 6.68004C10.1205 6.44893 10.6453 6.33337 11.2 6.33337C11.2 5.72893 11.057 5.17115 10.7712 4.66004C10.4853 4.14893 10.097 3.74448 9.60636 3.44671C9.11569 3.14893 8.58023 3.00004 7.99996 3.00004Z" fill="#94A3B8"/>
                  </svg>


                    )}

                        {icon === "supporting" && (
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2.87961 3.33333V12.6667H13.1196V4.66667H7.73081L6.45081 3.33333H2.87961ZM8.26841 3.33333H13.7596C13.9388 3.33333 14.0903 3.39778 14.214 3.52667C14.3377 3.65556 14.3996 3.81333 14.3996 4V13.3333C14.3996 13.52 14.3377 13.6778 14.214 13.8067C14.0903 13.9356 13.9388 14 13.7596 14H2.23961C2.06041 14 1.90894 13.9356 1.78521 13.8067C1.66148 13.6778 1.59961 13.52 1.59961 13.3333V2.66667C1.59961 2.48 1.66148 2.32222 1.78521 2.19333C1.90894 2.06444 2.06041 2 2.23961 2H6.98841L8.26841 3.33333Z" fill="#94A3B8"/>
                          </svg>

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
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-[#E2E8F0] flex items-center justify-center mb-2 sm:mb-3">
                <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.625 15.725L20.925 21.025L19.15 22.8L16.875 20.525V27.5H14.375V20.525L12.1 22.8L10.325 21.025L15.625 15.725ZM15.625 2.5C17.0917 2.5 18.475 2.85 19.775 3.55C21.0083 4.21667 22.0333 5.14167 22.85 6.325C23.6667 7.50833 24.1583 8.81667 24.325 10.25C25.2917 10.5167 26.1583 10.9708 26.925 11.6125C27.6917 12.2542 28.2917 13.0333 28.725 13.95C29.1583 14.8667 29.375 15.8417 29.375 16.875C29.375 18.0583 29.1 19.15 28.55 20.15C28 21.15 27.2458 21.9708 26.2875 22.6125C25.3292 23.2542 24.275 23.625 23.125 23.725V21.2C23.825 21.1 24.4625 20.8458 25.0375 20.4375C25.6125 20.0292 26.0625 19.5125 26.3875 18.8875C26.7125 18.2625 26.875 17.5917 26.875 16.875C26.875 16.075 26.6792 15.3417 26.2875 14.675C25.8958 14.0083 25.3667 13.4792 24.7 13.0875C24.0333 12.6958 23.3 12.5 22.5 12.5C22.2333 12.5 21.975 12.525 21.725 12.575C21.825 12.1417 21.875 11.7 21.875 11.25C21.875 10.1167 21.5958 9.07083 21.0375 8.1125C20.4792 7.15417 19.7208 6.39583 18.7625 5.8375C17.8042 5.27917 16.7583 5 15.625 5C14.4917 5 13.4458 5.27917 12.4875 5.8375C11.5292 6.39583 10.7708 7.15417 10.2125 8.1125C9.65417 9.07083 9.375 10.1167 9.375 11.25C9.375 11.7 9.425 12.1417 9.525 12.575C9.25833 12.525 9 12.5 8.75 12.5C7.95 12.5 7.21667 12.6958 6.55 13.0875C5.88333 13.4792 5.35417 14.0083 4.9625 14.675C4.57083 15.3417 4.375 16.075 4.375 16.875C4.375 17.575 4.52917 18.2292 4.8375 18.8375C5.14583 19.4458 5.56667 19.9542 6.1 20.3625C6.63333 20.7708 7.23333 21.0417 7.9 21.175L8.125 21.2V23.725C6.975 23.625 5.92083 23.2542 4.9625 22.6125C4.00417 21.9708 3.25 21.15 2.7 20.15C2.15 19.15 1.875 18.0583 1.875 16.875C1.875 15.8417 2.09167 14.8667 2.525 13.95C2.95833 13.0333 3.55833 12.2542 4.325 11.6125C5.09167 10.9708 5.95833 10.5167 6.925 10.25C7.09167 8.81667 7.58333 7.50833 8.4 6.325C9.21667 5.14167 10.2417 4.21667 11.475 3.55C12.775 2.85 14.1583 2.5 15.625 2.5Z" fill="#1E4ED8"/>
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
