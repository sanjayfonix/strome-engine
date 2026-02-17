export default function ForProfessionals() {
  const cardStyle = {
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
    borderRadius: '16px',
    border: '1px solid #e2e8f0',
    padding: '33px',
    minHeight: '272px',
  };

  return (
    <section className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Built for Professionals Handling Insurance Disputes
          </h2>
          <p className="text-lg text-gray-500">
            Trusted by experts who need defensible engineering analysis
          </p>
        </div>

        {/* Professional Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
          {/* Attorneys */}
          <div style={cardStyle}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#dbeafe' }}>
              <svg className="w-7 h-7" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Attorneys</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Strengthen your case with PE-certified engineering reports that hold up in court and settlement negotiations.
            </p>
          </div>

          {/* Roofing Contractors */}
          <div style={cardStyle}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#dbeafe' }}>
              <svg className="w-7 h-7" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-3.6a.75.75 0 01-.18-1.04l3.6-5.1a.75.75 0 011.04-.18l5.1 3.6a.75.75 0 01.18 1.04l-3.6 5.1a.75.75 0 01-1.04.18zM8.75 4.5l7.5 5.25m-11.25 0l3.75 2.625M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Roofing Contractors</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Support your estimates with professional engineering analysis that validates damage causation and scope.
            </p>
          </div>

          {/* Claims Consultants */}
          <div style={cardStyle}>
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: '#dbeafe' }}>
              <svg className="w-7 h-7" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Claims Consultants</h3>
            <p className="text-gray-500 leading-relaxed text-sm">
              Deliver comprehensive, structured reports that accelerate claim resolution and maximize client outcomes.
            </p>
          </div>
        </div>

        {/* Structured, Transparent, Accountable Section */}
        <div className="">
          {/* Centered Header */}
          <div className="text-center pt-8 sm:pt-12 pb-4 px-4 sm:px-10">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Structured. Transparent. Accountable.
            </h3>
            <p className="text-gray-500 text-lg">
              Every report is built on verifiable data and professional engineering standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - Features List */}
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#dbeafe' }}>
                    <svg className="w-5 h-5" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium">
                    Duplicate case detection prevents redundant submissions
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#dbeafe' }}>
                    <svg className="w-5 h-5" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium">
                    External storm data verification from NOAA and weather services
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#dbeafe' }}>
                    <svg className="w-5 h-5" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium">
                    Code compliance integration with local building standards
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#dbeafe' }}>
                    <svg className="w-5 h-5" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium">
                    Audit trail maintained throughout entire workflow
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: '#dbeafe' }}>
                    <svg className="w-5 h-5" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-900 font-medium">
                    PE certification before delivery ensures legal defensibility
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Report Preview Card */}
            <div className="p-10 lg:p-12 flex items-center justify-center" >
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full border border-gray-100">
                {/* Medal/Certificate Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: '#dbeafe' }}>
                  <svg className="w-8 h-8" style={{ color: '#3b82f6' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317-2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 01-7.54 0" />
                  </svg>
                </div>

                <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
                  PE Certified Report
                </h4>
                <p className="text-center text-gray-500 text-sm mb-8">
                  Licensed Professional Engineer Review
                </p>

                <div className="space-y-0">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Report Type:</span>
                    <span className="text-gray-900 font-semibold text-sm">Forensic Engineering Analysis</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Certification:</span>
                    <span className="text-green-600 font-semibold text-sm">Licensed PE Seal</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-gray-500 text-sm">Legal Status:</span>
                    <span className="text-gray-900 font-semibold text-sm">Court-Defensible</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-500 text-sm">Delivery Format:</span>
                    <span className="text-gray-900 font-semibold text-sm">Professional PDF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
