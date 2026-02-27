import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FAQSection from "@/components/Track_order/FAQSection";
import TrackOrderFlow from "@/components/Track_order/TrackOrderFlow";

export const metadata = {
    title: "Track Order | Storm Engine",
    description: "Track the status of your forensic engineering report.",
};

export default function TrackOrderPage() {
    return (
        <>
            <Header />
            <TrackOrderFlow />
            <FAQSection />
            <CTASection/>
            <Footer />
        </>
    );
}
