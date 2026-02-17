"use client";

import { FormProvider, useFormContext } from './FormContext';
import Step1RequesterInfo from './Step1RequesterInfo';
import Step2IntakeForm from './Step2IntakeForm';
import Step3DocumentUpload from './Step3DocumentUpload';
import Step4ReviewPayment from './Step4ReviewPayment';

function IntakeFormContent() {
  const { currentStep } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1RequesterInfo />;
      case 2:
        return <Step2IntakeForm />;
      case 3:
        return <Step3DocumentUpload />;
      case 4:
        return <Step4ReviewPayment />;
      default:
        return <Step1RequesterInfo />;
    }
  };

  return <>{renderStep()}</>;
}

export default function IntakePage() {
  return (
    <FormProvider>
      <IntakeFormContent />
    </FormProvider>
  );
}
