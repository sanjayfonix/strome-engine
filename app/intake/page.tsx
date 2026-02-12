"use client";

import { useState } from "react";
import DocumentUploadSection from "../components/DocumentUploadSection";

const US_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

const ROOF_MATERIALS = ["Asphalt Shingles", "Metal", "Tile", "Slate", "Wood Shake", "Flat/Membrane", "Other"];
const EAVE_HEIGHTS = ["1 Story (0-12 ft)", "1.5 Stories (12-18 ft)", "2 Stories (18-25 ft)", "2.5 Stories (25-32 ft)", "3+ Stories (32+ ft)"];
const ROOF_LAYERS = ["1 Layer", "2 Layers", "3 or More Layers", "Not Sure"];
const MEASUREMENT_SOURCES = [
    "I don't have a sketch file available",
    "EagleView Report",
    "Hover Report",
    "Roofle Report",
    "Other Measurement Software",
];
const LOSS_TYPES = ["Hail", "Storm", "Fire", "Flood"];
const PROPERTY_TYPES = ["Residential", "Commercial"];

/* ------------------------------------------------------------------ */
/*  Section Header Component                                          */
/* ------------------------------------------------------------------ */
function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
    return (
        <div className="flex items-center gap-4 mb-6 col-span-full animate-fadeIn">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shrink-0 shadow-md">
                {icon}
            </div>
            <div>
                <h2 className="text-xl font-bold text-foreground">{title}</h2>
                {subtitle && <p className="text-sm text-text-muted mt-0.5">{subtitle}</p>}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  Reusable Field Components                                         */
/* ------------------------------------------------------------------ */
function TextField({
    label, name, value, onChange, required, type = "text", placeholder,
}: {
    label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean; type?: string; placeholder?: string;
}) {
    return (
        <div className="group">
            <label className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-foreground placeholder-gray-400 focus:outline-none focus:border-primary hover:border-gray-300 transition-all duration-300 shadow-sm focus:shadow-md"
            />
        </div>
    );
}

function SelectField({
    label, name, value, onChange, options, required, placeholder,
}: {
    label: string; name: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[]; required?: boolean; placeholder?: string;
}) {
    return (
        <div className="group">
            <label className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <select
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-foreground focus:outline-none focus:border-primary hover:border-gray-300 transition-all duration-300 appearance-none shadow-sm focus:shadow-md cursor-pointer"
                >
                    <option value="">{placeholder || "Select..."}</option>
                    {options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function RadioField({
    label, name, value, onChange,
}: {
    label: string; name: string; value: string; onChange: (val: string) => void;
}) {
    return (
        <div className="group">
            <label className="block text-sm font-semibold text-text-label mb-3">{label}</label>
            <div className="flex gap-4">
                {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-3 cursor-pointer group/radio">
                        <span
                            className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${value === opt ? "border-primary bg-primary shadow-md" : "border-gray-300 group-hover/radio:border-primary/50"
                                }`}
                        >
                            {value === opt && <span className="w-3 h-3 rounded-full bg-white" />}
                        </span>
                        <span className={`text-sm font-medium transition-colors duration-300 ${value === opt ? "text-primary" : "text-foreground group-hover/radio:text-primary"}`}>{opt}</span>
                        <input
                            type="radio"
                            name={name}
                            value={opt}
                            checked={value === opt}
                            onChange={() => onChange(opt)}
                            className="hidden"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
}

/* ------------------------------------------------------------------ */
/*  SVG Icons                                                         */
/* ------------------------------------------------------------------ */
const icons = {
    user: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
    home: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
    ),
    building: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
    ),
    roof: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
        </svg>
    ),
    client: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
        </svg>
    ),
    incident: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
    ),
    insurance: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
    ),
    legal: (
        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
        </svg>
    ),
};

/* ------------------------------------------------------------------ */
/*  Main Intake Page                                                  */
/* ------------------------------------------------------------------ */
export default function IntakePage() {
    const [form, setForm] = useState({
        // Requester
        firstName: "", lastName: "", requesterEmail: "", insuranceInvolved: "",
        // Homeowner
        hoFirstName: "", hoLastName: "", hoEmail: "", hoPhone: "",
        // Property
        street: "", street2: "", city: "", state: "", zip: "",
        roofMaterial: "", plywoodNeeded: "", eaveHeight: "", roofLayers: "",
        // Roof measurement
        measurementSource: "",
        // Client info
        fullName: "", address: "", phone: "", email: "",
        // Incident
        dateOfLoss: "", typeOfLoss: "", propertyType: "", estimatedDamage: "", priorClaims: "",
        // Insurance
        insurerName: "", policyType: "", deductible: "", coverageType: "",
        // Legal
        claimDenied: "", delayPayment: "", partialPayment: "", commLogUploaded: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRadio = (name: string, value: string) => {
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: validation + backend
        console.log("Intake form submitted:", form);
    };

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
            </div>
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Page header */}
                <div className="mb-10 text-center animate-fadeIn">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 mb-4">
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-primary">Intake Form</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">New Claim Intake</h1>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto">Fill out the form below to submit a new property claim. All required fields are marked with an asterisk (*).</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* ====== REQUESTER INFORMATION ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.1s'}}>
                        <SectionHeader icon={icons.user} title="Requester Information" subtitle="Contact details for the person submitting this claim" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField label="First Name" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="John" />
                            <TextField label="Last Name" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="Doe" />
                            <TextField label="Requester Email" name="requesterEmail" value={form.requesterEmail} onChange={handleChange} required type="email" placeholder="john@example.com" />
                            <SelectField label="Is Insurance Involved?" name="insuranceInvolved" value={form.insuranceInvolved} onChange={handleChange} options={["Yes", "No", "Not Sure"]} placeholder="Select..." />
                        </div>
                    </div>

                    {/* ====== HOMEOWNER INFORMATION ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.2s'}}>
                        <SectionHeader icon={icons.home} title="Homeowner Information" subtitle="Details about the property owner" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                           <TextField label="Homeowner First Name" name="hoFirstName" value={form.hoFirstName} onChange={handleChange} required placeholder="Jane" />
                            <TextField label="Homeowner Last Name" name="hoLastName" value={form.hoLastName} onChange={handleChange} required placeholder="Smith" />
                            <TextField label="Homeowner Email" name="hoEmail" value={form.hoEmail} onChange={handleChange} type="email" placeholder="jane@example.com" />
                            <TextField label="Homeowner Phone" name="hoPhone" value={form.hoPhone} onChange={handleChange} type="tel" placeholder="(555) 123-4567" />
                        </div>
                    </div>

                    {/* ====== PROPERTY INFORMATION ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.3s'}}>
                        <SectionHeader icon={icons.building} title="Property Information" subtitle="Location and structural details of the property" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <TextField label="Street Address" name="street" value={form.street} onChange={handleChange} required placeholder="123 Main Street" />
                            </div>
                            <div className="md:col-span-2">
                                <TextField label="Street Address Line 2" name="street2" value={form.street2} onChange={handleChange} placeholder="Apt, Suite, Unit, etc." />
                            </div>
                            <TextField label="City" name="city" value={form.city} onChange={handleChange} required placeholder="Miami" />
                            <SelectField label="State" name="state" value={form.state} onChange={handleChange} options={US_STATES} required placeholder="Select state..." />
                            <TextField label="Zip Code" name="zip" value={form.zip} onChange={handleChange} required placeholder="33101" />
                            <SelectField label="Roof Surface Material" name="roofMaterial" value={form.roofMaterial} onChange={handleChange} options={ROOF_MATERIALS} required placeholder="Select material..." />
                            <SelectField label="Is new plywood decking needed?" name="plywoodNeeded" value={form.plywoodNeeded} onChange={handleChange} options={["Yes", "No", "Not Sure"]} required />
                            <SelectField label="Building eave height?" name="eaveHeight" value={form.eaveHeight} onChange={handleChange} options={EAVE_HEIGHTS} required placeholder="Select height..." />
                            <SelectField label="How many roof layers?" name="roofLayers" value={form.roofLayers} onChange={handleChange} options={ROOF_LAYERS} required placeholder="Select layers..." />
                        </div>
                    </div>

                    {/* ====== ROOF MEASUREMENT ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.4s'}}>
                        <SectionHeader icon={icons.roof} title="Roof Measurement Information" subtitle="Measurement source for the roof" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <SelectField label="Measurement File Source" name="measurementSource" value={form.measurementSource} onChange={handleChange} options={MEASUREMENT_SOURCES} required placeholder="Select source..." />
                        </div>
                    </div>

                    {/* ====== CLIENT INFO ====== */}
                    {/* <div className="bg-white rounded-2xl border border-border-color shadow-sm p-6 sm:p-8">
                        <SectionHeader icon={icons.client} title="Client Info" subtitle="Primary client contact information" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <TextField label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Full legal name" />
                            <TextField label="Phone" name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="(555) 987-6543" />
                            <TextField label="Email" name="email" value={form.email} onChange={handleChange} type="email" placeholder="client@example.com" />
                            <TextField label="Address" name="address" value={form.address} onChange={handleChange} placeholder="Client address" />
                        </div>
                    </div> */}

                    {/* ====== INCIDENT INFO ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.5s'}}>
                        <SectionHeader icon={icons.incident} title="Incident Info" subtitle="Details about the loss event" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField label="Date of Loss" name="dateOfLoss" value={form.dateOfLoss} onChange={handleChange} type="date" />
                            <SelectField label="Type of Loss" name="typeOfLoss" value={form.typeOfLoss} onChange={handleChange} options={LOSS_TYPES} placeholder="Select type..." />
                            <SelectField label="Property Type" name="propertyType" value={form.propertyType} onChange={handleChange} options={PROPERTY_TYPES} placeholder="Select type..." />
                            <TextField label="Estimated Damage Value" name="estimatedDamage" value={form.estimatedDamage} onChange={handleChange} type="number" placeholder="$0.00" />
                            <RadioField label="Prior Claims?" name="priorClaims" value={form.priorClaims} onChange={(v) => handleRadio("priorClaims", v)} />
                        </div>
                    </div>

                    {/* ====== INSURANCE INFO ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.6s'}}>
                        <SectionHeader icon={icons.insurance} title="Insurance Info" subtitle="Policy and coverage information" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <TextField label="Insurer Name" name="insurerName" value={form.insurerName} onChange={handleChange} placeholder="State Farm, Allstate, etc." />
                            <TextField label="Policy Type" name="policyType" value={form.policyType} onChange={handleChange} placeholder="HO-3, HO-5, etc." />
                            <TextField label="Deductible" name="deductible" value={form.deductible} onChange={handleChange} placeholder="$1,000" />
                            <TextField label="Coverage Type" name="coverageType" value={form.coverageType} onChange={handleChange} placeholder="RCV, ACV, etc." />
                        </div>
                    </div>

                    {/* ====== LEGAL INDICATORS ====== */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.7s'}}>
                        <SectionHeader icon={icons.legal} title="Legal Indicators" subtitle="Legal status and communication flags" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <RadioField label="Claim Denied?" name="claimDenied" value={form.claimDenied} onChange={(v) => handleRadio("claimDenied", v)} />
                            <RadioField label="Delay in Payment?" name="delayPayment" value={form.delayPayment} onChange={(v) => handleRadio("delayPayment", v)} />
                            <RadioField label="Partial Payment?" name="partialPayment" value={form.partialPayment} onChange={(v) => handleRadio("partialPayment", v)} />
                            <RadioField label="Communication Log Uploaded?" name="commLogUploaded" value={form.commLogUploaded} onChange={(v) => handleRadio("commLogUploaded", v)} />
                        </div>
                    </div>

                    {/* ====== DOCUMENT UPLOAD ====== */}
                    <DocumentUploadSection />

                    {/* ====== SUBMIT ====== */}
                    <div className="flex justify-center animate-fadeIn" style={{animationDelay: '0.8s'}}>
                        <button
                            type="submit"
                            className="group relative px-12 py-4 text-white font-bold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></span>
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center gap-2 text-lg">
                                Submit Claim
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
