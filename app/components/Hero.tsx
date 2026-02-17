import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #0F2A43 0%, #1A3A5C 50%, #0F2A43 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
            AI-Powered Forensic Engineering  Reports{" "}
            <span
              style={{
                background: 'linear-gradient(90deg, #a78bfa, #7dd3fc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              —Reviewed &amp; Certified
            </span>
            <span className="block mt-2">by Licensed Professionals</span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-5xl mx-auto leading-relaxed px-2" style={{ color: '#94a3b8' }}>
            Transform property damage documentation into a structured, court-defensible engineering report in
            days — not months.
          </p>

          {/* CTA Button */}
          <div className="mb-6">
            <Link
              href="/intake"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Create a Report
            </Link>
          </div>

          {/* Trust Indicators */}
          <p className="text-sm" style={{ color: '#94a3b8' }}>
            Secure submission. Professional review. No account required.
          </p>

          {/* Feature Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto px-2">
            {/* Licensed PE Review */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#94a3b8' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <p className="text-sm font-medium" style={{ color: '#94a3b8' }}>Licensed PE Review</p>
            </div>

            {/* Weather & Roof Data */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#94a3b8' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
              </div>
              <p className="text-sm font-medium" style={{ color: '#94a3b8' }}>Weather &amp; Roof Data</p>
            </div>

            {/* Engineering Standards */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#94a3b8' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <p className="text-sm font-medium" style={{ color: '#94a3b8' }}>Engineering Standards</p>
            </div>

            {/* Secure Processing */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-lg flex items-center justify-center border" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }}>
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#94a3b8' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <p className="text-sm font-medium" style={{ color: '#94a3b8' }}>Secure Processing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
