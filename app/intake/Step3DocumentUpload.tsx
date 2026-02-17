"use client";

import { useState, useRef } from 'react';
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
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
            status === 'complete'
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
        <span className={`text-sm font-medium hidden sm:block ${status === 'current' ? 'text-gray-900' : 'text-gray-600'}`}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function Step3DocumentUpload() {
  const { formData, updateUploadedFiles, setCurrentStep } = useFormContext();
  const [files, setFiles] = useState<File[]>(formData.uploadedFiles);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => {
      const maxSize = 50 * 1024 * 1024; // 50MB
      if (file.size > maxSize) {
        setUploadError(`File ${file.name} exceeds maximum size of 50MB`);
        return false;
      }
      return true;
    });

    setFiles(prev => [...prev, ...validFiles]);
    setUploadError('');
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleBack = () => {
    setCurrentStep(2);
  };

  const handleContinue = () => {
    if (files.length === 0) {
      setUploadError('Please upload at least one document');
      return;
    }
    updateUploadedFiles(files);
    setCurrentStep(4);
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
          <p className="text-gray-600 mb-6">Step 3 of 4: Document Upload</p>

          {/* Progress Stepper */}
          <div className="flex items-center gap-4 overflow-x-auto pb-4">
            <ProgressStep number={1} label="Requester Info" status="complete" />
            <div className="w-12 sm:w-16 h-0.5 bg-green-500"></div>
            <ProgressStep number={2} label="Intake Form" status="complete" />
            <div className="w-12 sm:w-16 h-0.5 bg-blue-600"></div>
            <ProgressStep number={3} label="Upload Files" status="current" />
            <div className="w-12 sm:w-16 h-0.5 bg-gray-200"></div>
            <ProgressStep number={4} label="Review & Payment" status="upcoming" />
          </div>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Document Upload</h2>

          {/* Required Documents Warning */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <p className="text-sm font-semibold text-yellow-800">Required Document</p>
                <p className="text-sm text-yellow-700 mt-1">
                  You must upload <strong>at least one of the following</strong>:
                </p>
                <ul className="list-disc list-inside text-sm text-yellow-700 mt-2 space-y-1 ml-2">
                  <li>Coverage Letter</li>
                  <li>Denial Letter</li>
                </ul>
                <p className="text-xs text-yellow-600 mt-2 italic">
                  These documents are the insurance carrier's official decision regarding the claim.
                </p>
              </div>
            </div>
          </div>

          {/* Recommended Documents Checklist */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">
              Recommended Documents (Improves Report Strength)
            </h3>
            <div className="space-y-2">
              {[
                'Policy Document',
                'Appraisal or Contractor Estimate',
                'Damage Photos (10+ recommended for stronger analysis)',
                'Inspection Report',
                'Boom or Weather Report',
                'Supporting Documentation',
              ].map((doc, index) => (
                <label key={index} className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500" />
                  {doc}
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-3 italic">
              Uploading complete documentation ensures quicker processing and comprehensive coverage.
            </p>
          </div>

          {/* Drag & Drop Upload Area */}
          <div
            onDragEnter={handleDragEnter}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-all cursor-pointer ${
              isDragging
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300 hover:border-gray-400'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="flex flex-col items-center">
              <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Drag & Drop Files Here or Click to Upload
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Upload your coverage letter, denial letter, photos, estimates, and supporting documents
              </p>
              <button
                type="button"
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Select Files
              </button>
              <p className="text-xs text-gray-500 mt-4">
                Supported: PDF, DOCX, JPG, PNG, HEIC, ZIP<br />
                Maximum 50MB per file, up to 50 files per case
              </p>
            </div>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.heic,.zip"
            onChange={handleFileSelect}
            className="hidden"
          />

          {/* Error Message */}
          {uploadError && (
            <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm font-medium text-red-800">{uploadError}</p>
              </div>
            </div>
          )}

          {/* Uploaded Files List */}
          {files.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Uploaded Files ({files.length})
              </h3>
              <div className="space-y-2">
                {files.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                        <p className="text-xs text-gray-500">{formatFileSize(file.size)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="p-1 text-red-600 hover:text-red-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
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
            type="button"
            onClick={handleContinue}
            className="px-8 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
          >
            Continue to Review
          </button>
        </div>
      </div>
    </div>
  );
}
