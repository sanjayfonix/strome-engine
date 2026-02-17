import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ready to Generate a Defensible Engineering Report?
        </h2>
        
        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Submit your documentation and receive a structured, PE-reviewed forensic report that strengthens your insurance dispute case.
        </p>

        {/* CTA Button */}
        <div className="mb-6">
          <Link
            href="/intake"
            className="inline-block px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
          >
            Create a Report
          </Link>
        </div>

        {/* Trust Indicators */}
        <p className="text-sm text-gray-500">
          Secure submission • Professional review • Structured output
        </p>
      </div>
    </section>
  );
}
