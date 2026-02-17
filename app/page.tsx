import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import AfterUpload from "./components/AfterUpload";
import ForProfessionals from "./components/ForProfessionals";
import SecureProcessing from "./components/SecureProcessing";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <AfterUpload />
      </div>
      <div id="professionals">
        <ForProfessionals />
      </div>
      <div id="security">
        <SecureProcessing />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
}
