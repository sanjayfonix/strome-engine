"use client";

import { useState } from "react";
import ReportStatusSection from "./ReportStatusSection";
import TrackHeroSection from "./TrackHeroSection";

export default function TrackOrderFlow() {
  const [verified, setVerified] = useState(false);

  if (verified) {
    return <ReportStatusSection />;
  }

  return <TrackHeroSection onVerified={() => setVerified(true)} />;
}
