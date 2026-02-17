"use client";

export default function CaseStatusPage() {
  // In production, this would fetch case data based on ID from URL params or API
  const caseData = {
    caseId: 'SE-2024-001234',
    propertyAddress: '123 Main Street, Austin, TX 78701',
    status: 'Under Review',
    claimNumber: 'CLM-789456',
    dateOfLoss: '2024-01-15',
    dateSubmitted: '2024-03-10',
    insuranceCarrier: 'State Farm Insurance',
    timeline: [
      {
        step: 'Submitted',
        status: 'complete',
        date: '2024-03-10',
        time: '10:30 AM',
        description: 'Your case was successfully submitted with all required documentation.',
      },
      {
        step: 'Payment Confirmed',
        status: 'complete',
        date: '2024-03-10',
        time: '10:32 AM',
        description: 'Payment of $499.00 processed successfully via Stripe.',
      },
      {
        step: 'Processing',
        status: 'complete',
        date: '2024-03-11',
        time: '09:15 AM',
        description: 'AI analysis completed. Weather data and engineering standards compiled.',
      },
      {
        step: 'Under Review',
        status: 'current',
        date: '2024-03-12',
        time: '11:00 AM',
        description: 'Licensed Professional Engineer (PE) is reviewing your case and preparing the report.',
      },
      {
        step: 'Outcome',
        status: 'upcoming',
        date: null,
        time: null,
        description: 'Final report will be delivered via email when review is complete.',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <a href="/" className="text-sm text-blue-300 hover:text-blue-200 transition-colors">
              Home
            </a>
            <span className="text-gray-400">/</span>
            <span className="text-sm text-gray-300">Case Status</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Case Status</h1>
          <p className="text-blue-200 text-lg">{caseData.propertyAddress}</p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-400/50 rounded-lg">
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-yellow-200">{caseData.status}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Case Timeline */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Case Timeline</h2>
              
              <div className="relative">
                {caseData.timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 pb-8 last:pb-0">
                    {/* Timeline Line */}
                    <div className="relative flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm z-10 ${
                          item.status === 'complete'
                            ? 'bg-green-500 text-white'
                            : item.status === 'current'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-200 text-gray-600'
                        }`}
                      >
                        {item.status === 'complete' ? (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        ) : item.status === 'current' ? (
                          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                        ) : (
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                        )}
                      </div>
                      {index < caseData.timeline.length - 1 && (
                        <div
                          className={`w-0.5 h-full absolute top-10 ${
                            item.status === 'complete' ? 'bg-green-500' : 'bg-gray-200'
                          }`}
                        ></div>
                      )}
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3
                          className={`text-base font-semibold ${
                            item.status === 'current' ? 'text-gray-900' : 'text-gray-700'
                          }`}
                        >
                          {item.step}
                        </h3>
                        {item.date && (
                          <span className="text-xs text-gray-500">
                            {item.date} at {item.time}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      
                      {/* Current Step Additional Info */}
                      {item.status === 'current' && (
                        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                              <p className="text-sm font-semibold text-blue-900 mb-2">
                                Your case is currently under review by a Licensed Professional Engineer
                              </p>
                              <p className="text-xs text-blue-800 mb-2">
                                Our PE is analyzing your documentation, weather data, and engineering standards to prepare a comprehensive forensic report.
                              </p>
                              <p className="text-xs text-blue-800">
                                <strong>Estimated completion:</strong> 3-5 business days from submission
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Help Section */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-xl p-6 text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
                  <p className="text-blue-200 text-sm mb-4">
                    If you have questions about your case or need to provide additional documentation, our support team is here to help.
                  </p>
                  <a
                    href="mailto:support@stormengine.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Case Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Case Information</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Case ID</p>
                  <p className="text-sm font-semibold text-gray-900">{caseData.caseId}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 mb-1">Claim Number</p>
                  <p className="text-sm font-medium text-gray-900">{caseData.claimNumber}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 mb-1">Date of Loss</p>
                  <p className="text-sm font-medium text-gray-900">{caseData.dateOfLoss}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 mb-1">Date Submitted</p>
                  <p className="text-sm font-medium text-gray-900">{caseData.dateSubmitted}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-500 mb-1">Insurance Carrier</p>
                  <p className="text-sm font-medium text-gray-900">{caseData.insuranceCarrier}</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors text-sm">
                  Download Receipt
                </button>
              </div>

              <div className="mt-4">
                <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm">
                  View Case Documents
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
