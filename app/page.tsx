import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import WhySection from "@/components/WhySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <WhySection />
      <CTASection />
      <Footer />
    </main>
  );
}
