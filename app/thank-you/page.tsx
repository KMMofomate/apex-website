import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-8 p-12 rounded-3xl border border-slate-100 shadow-2xl">
        
        {/* Success Icon */}
        <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold text-slate-900">Registration Received!</h1>
          <p className="text-lg text-slate-600">
            Thank you for choosing <strong>Apex Technical Group and Training</strong>. 
            We have successfully received your enrollment details.
          </p>
        </div>

        {/* Next Steps Box */}
        <div className="bg-slate-50 p-6 rounded-2xl text-left space-y-4 border-l-4 border-blue-900">
          <h2 className="font-bold text-blue-900 uppercase tracking-wider text-sm">Important Next Steps:</h2>
          <ul className="space-y-3 text-slate-700 text-sm">
            <li className="flex gap-3">
              <span className="font-bold text-blue-900">1.</span>
              <span>A consultant will contact you via WhatsApp or Email to confirm your training date and location.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-900">2.</span>
              <span>Please ensure you have a certified copy of your ID ready for the assessor.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-900">3.</span>
              <span>Wear comfortable clothing for practical sessions (CPR and Fire Fighting).</span>
            </li>
          </ul>
        </div>

        <div className="pt-6">
          <Link href="/" className="inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition-all shadow-md">
            Return to Homepage
          </Link>
        </div>
        
        <p className="text-xs text-slate-400">
          For urgent queries, contact us at 078 923 8510
        </p>
      </div>
    </main>
  );
}