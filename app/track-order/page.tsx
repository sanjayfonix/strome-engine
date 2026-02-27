"use client";

import { useState } from "react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQSection from "@/components/Track_order/FAQSection";
import TrackOrderFlow from "@/components/Track_order/TrackOrderFlow";

export default function TrackOrderPage() {
    const [showReportStatus, setShowReportStatus] = useState(false);

    return (
        <>
            <Header forceScrolled={showReportStatus} />
            <TrackOrderFlow onStatusChange={setShowReportStatus} />
            <FAQSection />
            <CTASection/>
            <Footer />
        </>
    );
}
