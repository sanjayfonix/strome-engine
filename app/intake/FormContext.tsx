"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface RequesterInfo {
  fullName: string;
  email: string;
  phone: string;
  company: string;
}

export interface ClaimantDetails {
  propertyOwner: string;
  propertyAddress: string;
  latitude: string;
  longitude: string;
  propertyType: string;
  roofCovering: string;
  policyNumber: string;
  roofAge: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface ClaimInfo {
  claimNumber: string;
  dateOfLoss: string;
  insuranceCarrier: string;
  policyNumber: string;
  additionalNotes: string;
}

export interface EstimateDetails {
  dateOfLoss: string;
  typeOfLoss: string;
  estimatedAmount: string;
  estimateType: string;
  acvLoss: string;
  replacementCostLoss: string;
  deductible: string;
  dateInspected: string;
  dateEstimateCompleted: string;
}

export interface InsuranceInfo {
  companyRepresentative: string;
  companyEmail: string;
  claimRepEmail: string;
  claimRepPhone: string;
}

export interface FormData {
  requesterInfo: RequesterInfo;
  claimantDetails: ClaimantDetails;
  claimInfo: ClaimInfo;
  estimateDetails: EstimateDetails;
  insuranceInfo: InsuranceInfo;
  uploadedFiles: File[];
}

interface FormContextType {
  formData: FormData;
  updateRequesterInfo: (data: Partial<RequesterInfo>) => void;
  updateClaimantDetails: (data: Partial<ClaimantDetails>) => void;
  updateClaimInfo: (data: Partial<ClaimInfo>) => void;
  updateEstimateDetails: (data: Partial<EstimateDetails>) => void;
  updateInsuranceInfo: (data: Partial<InsuranceInfo>) => void;
  updateUploadedFiles: (files: File[]) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export function FormProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    requesterInfo: {
      fullName: '',
      email: '',
      phone: '',
      company: '',
    },
    claimantDetails: {
      propertyOwner: '',
      propertyAddress: '',
      latitude: '',
      longitude: '',
      propertyType: '',
      roofCovering: '',
      policyNumber: '',
      roofAge: '',
      city: '',
      state: '',
      zipCode: '',
    },
    claimInfo: {
      claimNumber: '',
      dateOfLoss: '',
      insuranceCarrier: '',
      policyNumber: '',
      additionalNotes: '',
    },
    estimateDetails: {
      dateOfLoss: '',
      typeOfLoss: '',
      estimatedAmount: '',
      estimateType: '',
      acvLoss: '',
      replacementCostLoss: '',
      deductible: '',
      dateInspected: '',
      dateEstimateCompleted: '',
    },
    insuranceInfo: {
      companyRepresentative: '',
      companyEmail: '',
      claimRepEmail: '',
      claimRepPhone: '',
    },
    uploadedFiles: [],
  });

  const updateRequesterInfo = (data: Partial<RequesterInfo>) => {
    setFormData(prev => ({
      ...prev,
      requesterInfo: { ...prev.requesterInfo, ...data }
    }));
  };

  const updateClaimantDetails = (data: Partial<ClaimantDetails>) => {
    setFormData(prev => ({
      ...prev,
      claimantDetails: { ...prev.claimantDetails, ...data }
    }));
  };

  const updateClaimInfo = (data: Partial<ClaimInfo>) => {
    setFormData(prev => ({
      ...prev,
      claimInfo: { ...prev.claimInfo, ...data }
    }));
  };

  const updateEstimateDetails = (data: Partial<EstimateDetails>) => {
    setFormData(prev => ({
      ...prev,
      estimateDetails: { ...prev.estimateDetails, ...data }
    }));
  };

  const updateInsuranceInfo = (data: Partial<InsuranceInfo>) => {
    setFormData(prev => ({
      ...prev,
      insuranceInfo: { ...prev.insuranceInfo, ...data }
    }));
  };

  const updateUploadedFiles = (files: File[]) => {
    setFormData(prev => ({
      ...prev,
      uploadedFiles: files
    }));
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateRequesterInfo,
        updateClaimantDetails,
        updateClaimInfo,
        updateEstimateDetails,
        updateInsuranceInfo,
        updateUploadedFiles,
        currentStep,
        setCurrentStep,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
}
