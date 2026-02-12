import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center px-4 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-3xl text-center relative z-10">
        {/* Badge with Animation */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 text-primary text-sm font-semibold mb-8 animate-fadeIn shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
          <svg className="w-5 h-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
          </svg>
          Professional Claims Management
        </div>

        {/* Hero Text with Gradient */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fadeIn" style={{animationDelay: '0.1s'}}>
          Streamline your{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer">
            claims intake
          </span>{" "}
          process
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeIn" style={{animationDelay: '0.2s'}}>
          Submit property claims, upload documents, and manage your cases all in one place. Built for attorneys, case managers, and adjusters.
        </p>

        {/* Enhanced CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <Link
            href="/intake"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Start New Claim
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
          <Link
            href="/login"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-foreground font-bold rounded-2xl hover:border-primary hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Sign In
            <svg className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Enhanced Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-6 animate-fadeIn" style={{animationDelay: '0.4s'}}>
          {[
            { icon: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12", text: "Document Upload" },
            { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", text: "Case Tracking" },
            { icon: "M13 10V3L4 14h7v7l9-11h-7z", text: "Instant Quotes" },
            { icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", text: "Secure Platform" }
          ].map((feature, index) => (
            <div 
              key={feature.text} 
              className="group flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105 hover:-translate-y-1 cursor-default"
              style={{animationDelay: `${0.5 + index * 0.1}s`}}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                </svg>
              </div>
              <span className="text-sm font-semibold text-gray-700 group-hover:text-primary transition-colors duration-300">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
