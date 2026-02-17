"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Submit Documentation",
    subtitle: "Submit Documentation",
    description: "Upload your coverage or denial letter along with photos, estimates, and supporting documents. Our system validates completeness and flags missing critical information.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
      </svg>
    )
  },
  {
    number: 2,
    title: "Automated Data Enrichment",
    subtitle: "Automated Data Enrichment",
    description: "AI extracts key data points and enriches with weather data, satellite imagery, and building code requirements automatically.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: 3,
    title: "Engineering Analysis",
    subtitle: "Engineering Analysis",
    description: "Our AI performs structural analysis, damage assessment, and code compliance review based on engineering standards.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: 4,
    title: "Professional Engineer Review",
    subtitle: "Professional Engineer Review",
    description: "A licensed PE reviews, validates, and certifies all findings ensuring legal defensibility and accuracy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    number: 5,
    title: "Receive Certified Report",
    subtitle: "Receive Certified Report",
    description: "Download your court-defensible forensic engineering report with PE seal, ready for insurance disputes or litigation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setActiveStep((prev) => (prev >= steps.length ? 1 : prev + 1));
  }, []);

  // Auto-slide every 2 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext]);

  const handleStepClick = (stepNumber: number) => {
    setActiveStep(stepNumber);
    setIsPaused(true);
    // Resume auto-slide after 6 seconds of inactivity
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            A streamlined workflow from submission to certified report
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Progress Line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 hidden md:block"></div>
          <motion.div
            className="absolute top-6 left-0 h-0.5 bg-blue-600 hidden md:block"
            animate={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0 relative">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleStepClick(step.number)}
              >
                <motion.div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 relative z-10 ${activeStep === step.number
                      ? 'bg-blue-600 text-white shadow-lg'
                      : activeStep > step.number
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border-2 border-gray-300 text-gray-500'
                    }`}
                  animate={{
                    scale: activeStep === step.number ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {step.number}
                </motion.div>
                <p className={`text-xs sm:text-sm text-center font-medium transition-colors duration-300 ${activeStep === step.number ? 'text-blue-600' : 'text-gray-600'
                  }`}>
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Active Step Details */}
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {steps.map((step) => (
              activeStep === step.number && (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-start gap-6">
                    <div className="shrink-0">
                      <motion.div
                        className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600"
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      >
                        {step.icon}
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span
                          className="text-3xl font-bold text-blue-600"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {step.number}
                        </motion.span>
                        <motion.h3
                          className="text-2xl font-bold text-gray-900"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                        >
                          {step.title}
                        </motion.h3>
                      </div>
                      <motion.p
                        className="text-lg text-gray-600 leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                      >
                        {step.description}
                      </motion.p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
