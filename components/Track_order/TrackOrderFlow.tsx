"use client";

import { useState } from "react";
import ReportStatusSection from "./ReportStatusSection";
import TrackHeroSection from "./TrackHeroSection";

interface Props {
  onStatusChange?: (showStatus: boolean) => void;
}

export default function TrackOrderFlow({ onStatusChange }: Props) {
  const [verified, setVerified] = useState(false);

  const handleVerified = () => {
    setVerified(true);
    onStatusChange?.(true);
  };

  if (verified) {
    return <ReportStatusSection />;
  }

  return <TrackHeroSection onVerified={handleVerified} />;
}
