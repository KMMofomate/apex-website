import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="bg-blue-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Our Mission & Expertise</h1>
          <p className="text-xl text-blue-100 leading-relaxed">
            Apex Technical Group and Training is a mobile service provider dedicated to bringing high-standard 
            Occupational Health, Safety, and Technical training directly to your doorstep.
          </p>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
             {/* Using your company logo for branding */}
            <Image src="/images/logo.png" alt="Apex Logo" fill className="object-contain p-10" />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Built on Professional Excellence</h2>
            <p className="text-slate-600 leading-relaxed">
              Founded by <strong>Khombo Millicent Mofomate</strong>, Apex was born from years of 
              front-line experience in <strong>claims assessment and safety consulting</strong>. 
              Our leadership brings a deep understanding of OHS legal frameworks and workplace risk management.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-red-600">
                <span className="block font-bold text-slate-900 text-lg">Reg No:</span>
                <span className="text-slate-600 text-sm">2026/224873/07</span>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border-l-4 border-blue-900">
                <span className="block font-bold text-slate-900 text-lg">Location:</span>
                <span className="text-slate-600 text-sm">Midrand, Gauteng</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Apex?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="text-red-500 text-3xl font-bold">01</div>
              <h3 className="text-xl font-bold">Mobile First</h3>
              <p className="text-slate-400 text-sm">We come to you, reducing downtime for your employees and technical staff.</p>
            </div>
            <div className="space-y-4">
              <div className="text-red-500 text-3xl font-bold">02</div>
              <h3 className="text-xl font-bold">Compliant</h3>
              <p className="text-slate-400 text-sm">All training aligns with QCTO and HPCSA standards for total peace of mind.</p>
            </div>
            <div className="space-y-4">
              <div className="text-red-500 text-3xl font-bold">03</div>
              <h3 className="text-xl font-bold">Integrated</h3>
              <p className="text-slate-400 text-sm">Combining safety expertise with modern web and technical support solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center px-6">
        <h2 className="text-2xl font-bold mb-6">Ready to upgrade your team's safety?</h2>
        <Link href="/" className="inline-block bg-red-600 text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-lg">
          Back to Home
        </Link>
      </section>
    </main>
  );
}