import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f2a43] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Storm Engine</h3>
          <p className="text-blue-200 text-sm">
            AI-Assisted Forensic Engineering Intelligence
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link href="/terms" className="text-blue-200 hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
          <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-blue-200 hover:text-white transition-colors duration-200">
            Contact Support
          </Link>
          <Link href="https://readdy.ai" className="text-blue-200 hover:text-white transition-colors duration-200">
            Made with Readdy
          </Link>
        </div>



        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-blue-200 leading-relaxed text-center">
              Storm Engine provides structured engineering analysis assistance. All final reports are reviewed and certified by a Licensed Professional Engineer. This platform does not provide legal advice or guarantee claim outcomes.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
