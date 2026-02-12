"use client";

import { useState, useRef } from "react";

const DOCUMENT_TYPES = [
    "Insurance Policy",
    "Claim Denial Letter",
    "Adjuster Report",
    "Estimate Report",
    "Communication Logs",
    "Photos of Damage",
    "EagleView Report (if roof case)",
    "Proof of Loss",
    "Payment Letter",
];

export default function DocumentUploadSection() {
    const [selectedType, setSelectedType] = useState("");
    const [uploadedFiles, setUploadedFiles] = useState<{ type: string; file: File }[]>([]);
    const [dragOver, setDragOver] = useState(false);
    const selectedTypeRef = useRef("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleTypeChange = (value: string) => {
        setSelectedType(value);
        selectedTypeRef.current = value;
    };

    const handleAddFile = (file: File | null) => {
        const type = selectedTypeRef.current;
        if (!file || !type) return;
        // Replace if same type already uploaded, otherwise add
        setUploadedFiles((prev) => {
            const filtered = prev.filter((f) => f.type !== type);
            return [...filtered, { type, file }];
        });
        handleTypeChange("");
        // Reset the file input so the same file can be re-selected
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0] || null;
        handleAddFile(file);
    };

    const handleRemove = (type: string) => {
        setUploadedFiles((prev) => prev.filter((f) => f.type !== type));
    };

    const handleChooseFile = () => {
        if (selectedType && fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    // Document types that haven't been uploaded yet for the dropdown
    const availableTypes = DOCUMENT_TYPES.filter(
        (t) => !uploadedFiles.some((f) => f.type === t)
    );

    return (
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8 animate-fadeIn" style={{animationDelay: '0.8s'}}>
            {/* Hidden file input */}
            <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                onChange={(e) => {
                    handleAddFile(e.target.files?.[0] || null);
                }}
            />

            {/* Section Header */}
            <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 shadow-md">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-foreground">Document Upload</h2>
                    <p className="text-sm text-text-muted mt-0.5">Select document type and upload the file</p>
                </div>
            </div>

            {/* Document Type Dropdown */}
            <div className="mb-6 group">
                <label className="block text-sm font-semibold text-text-label mb-2 group-focus-within:text-primary transition-colors">
                    Document Type <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                    <select
                        value={selectedType}
                        onChange={(e) => handleTypeChange(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-foreground focus:outline-none focus:border-primary hover:border-gray-300 transition-all duration-300 appearance-none shadow-sm focus:shadow-md cursor-pointer"
                    >
                        <option value="">Select document type...</option>
                        {availableTypes.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400 group-focus-within:text-primary transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Upload Area */}
            <div
                className={`rounded-2xl border-2 border-dashed p-10 text-center transition-all duration-300 ${dragOver
                        ? "border-primary bg-gradient-to-br from-blue-50 to-purple-50 scale-[1.02]"
                        : selectedType
                            ? "border-gray-300 hover:border-primary/50 bg-gradient-to-br from-gray-50 to-blue-50/30 cursor-pointer hover:shadow-md"
                            : "border-gray-200 bg-gray-50/50 opacity-60"
                    }`}
                onDragOver={(e) => { e.preventDefault(); if (selectedType) setDragOver(true); }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => { if (selectedType) handleDrop(e); else e.preventDefault(); }}
                onClick={() => { if (selectedType) handleChooseFile(); }}
            >
                <svg className={`w-12 h-12 mx-auto mb-4 transition-all duration-300 ${dragOver ? 'text-primary scale-110' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                <p className="text-base text-text-muted mb-3">
                    {selectedType
                        ? <>Drag & drop your file here, or <span className="text-primary font-bold">click to browse</span></>
                        : "Please select a document type first"
                    }
                </p>
                {selectedType && (
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); handleChooseFile(); }}
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-xl hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
                    >
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        Choose File
                    </button>
                )}
            </div>

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
                <div className="mt-8 animate-fadeIn">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-sm font-bold text-text-label">
                            Uploaded Documents
                        </h3>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-primary text-xs font-bold">
                            {uploadedFiles.length}/{DOCUMENT_TYPES.length}
                        </span>
                    </div>
                    <div className="space-y-3">
                        {uploadedFiles.map((f, index) => (
                            <div
                                key={f.type}
                                className="group flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-md animate-slideIn"
                                style={{animationDelay: `${index * 0.1}s`}}
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-green-500 shrink-0 shadow-md">
                                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold text-foreground">{f.type}</p>
                                        <p className="text-xs text-text-muted truncate mt-0.5">{f.file.name}</p>
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleRemove(f.type)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-red-500 transition-all duration-300 shrink-0 transform hover:scale-110"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
