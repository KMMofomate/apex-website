'use client';

import Link from 'next/link';

export default function Register() {
  return (
    <main className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-2 uppercase tracking-tighter">
            Student Registration
          </h1>
          <p className="text-slate-600">
            Secure your spot for First Aid or OHS training below.
          </p>
        </header>

        {/* EMBEDDED JOTFORM */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <iframe
            id="JotFormIFrame-260765178203054"
            title="Apex Registration Form"
            src="https://form.jotform.com/260765178203054" 
            className="w-full h-[1000px] border-none" // increase from 800px to 1000px
            allow="geolocation; microphone; camera"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-bold text-slate-400 hover:text-blue-900 transition-colors uppercase tracking-widest">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}