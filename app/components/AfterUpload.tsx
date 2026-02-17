export default function AfterUpload() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Happens After You Upload?
          </h2>
          <p className="text-lg text-gray-500">
            See how your documentation is transformed into actionable intelligence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Completeness Score Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-gray-900">Completeness Score</h3>
              <span className="text-5xl font-bold" style={{ color: '#16a34a' }}>87%</span>
            </div>

            <div className="space-y-0">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700">Coverage Letter</span>
                <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700">Damage Photos</span>
                <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700">Contractor Estimate</span>
                <svg className="w-6 h-6 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-gray-700">Policy Document</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  Optional
                </span>
              </div>
            </div>
          </div>

          {/* Extracted Data Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Extracted Data</h3>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-gray-500 mb-1">Property Address</p>
                <p className="text-gray-900 font-semibold">1234 Oak Street, Dallas, TX 75201</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Date of Loss</p>
                <p className="text-gray-900 font-semibold">March 15, 2024</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Insurance Carrier</p>
                <p className="text-gray-900 font-semibold">State Farm Insurance</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Claim Number</p>
                <p className="text-gray-900 font-semibold">SF-2024-789456</p>
              </div>
            </div>
          </div>

          {/* Weather Integration Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-8">Weather Integration</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#dbeafe' }}>
                  <svg className="w-5 h-5" style={{ color: '#2563eb' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Severe Hail Event Detected</p>
                  <p className="text-sm text-gray-500">March 15, 2024 - 2.5&quot; diameter</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#f1f5f9' }}>
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Wind Speed: 78 mph</p>
                  <p className="text-sm text-gray-500">Exceeds local design standards</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#dcfce7' }}>
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Roof Area: 2,847 sq ft</p>
                  <p className="text-sm text-gray-500">Verified via satellite imagery</p>
                </div>
              </div>
            </div>
          </div>

          {/* Engineering Findings Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Engineering Findings</h3>

            <div className="space-y-0">
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700">Impact damage consistent with hail</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                  High
                </span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700">Wind uplift at ridge line</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#fee2e2', color: '#dc2626' }}>
                  High
                </span>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-gray-100">
                <span className="text-gray-700">Granule loss exceeds threshold</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#fff7ed', color: '#ea580c' }}>
                  Medium
                </span>
              </div>
              <div className="flex items-center justify-between py-4">
                <span className="text-gray-700">Structural integrity maintained</span>
                <span className="px-3 py-1 text-xs font-semibold rounded-full" style={{ backgroundColor: '#dcfce7', color: '#16a34a' }}>
                  High
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
