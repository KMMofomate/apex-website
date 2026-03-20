import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center font-sans text-slate-900">
      
      {/* 1. OFFICIAL BUSINESS HEADER */}
      <header className="w-full py-12 flex flex-col items-center bg-gradient-to-b from-slate-100 to-white shadow-sm">
        <Image 
          src="/images/logo.png" 
          alt="APEX TECHNICAL GROUP AND TRAINING" 
          width={450} 
          height={250} 
          priority
          sizes="(max-width: 768px) 80vw, 450px"
          className="mb-4 px-4"
        />
        <div className="text-center px-4">
          <p className="text-sm font-bold text-blue-900 tracking-widest uppercase mb-2">
            Reg No: 2026/224873/07
          </p>
          <div className="h-1 w-24 bg-red-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-slate-600 font-medium italic">
            Safety • Technology • Training
          </p>
        </div>
      </header>

      {/* 2. CORE MISSION / MOBILE NOTICE */}
      <section className="max-w-4xl w-full px-6 py-16 text-center">
        <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-bold uppercase tracking-wide mb-6">
          We are a Mobile Training Center — We Come To You!
        </div>
        <h2 className="text-3xl font-extrabold mb-6">Professional Compliance & Digital Solutions</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Based in Midrand, <strong>Apex Technical Group and Training</strong> provides accredited 
          on-site safety training, psychological wellness consultations, and specialized web infrastructure 
          to ensure your business is compliant, resilient, and tech-ready.
        </p>
      </section>

      {/* 3. DETAILED SPECIALIZATIONS */}
      <section className="w-full bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-16 text-center uppercase tracking-wider">What We Specialize In</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Medical Training */}
            <div className="bg-white p-8 rounded-2xl border-t-8 border-red-600 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-red-600 flex items-center gap-2">🩺 Medical Training</h3>
              <ul className="space-y-2 text-slate-700 font-medium">
                <li>• First Aid Training (Level 1-3)</li>
                <li>• Basic Life Support (BLS)</li>
                <li>• Family and Friends CPR</li>
                <li>• CPR for Professionals</li>
              </ul>
            </div>

            {/* Health & Safety */}
            <div className="bg-white p-8 rounded-2xl border-t-8 border-blue-600 shadow-xl lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center gap-2">🛡️ Health & Safety</h3>
              <ul className="grid grid-cols-1 gap-2 text-slate-700 text-sm">
                <li>• Basic OHS Training (Introduction Act)</li>
                <li>• Basic Fire Fighting</li>
                <li>• Risk Assessment & Incident Investigation</li>
                <li>• Hazardous Material Handling</li>
                <li>• SHE Representatives Training</li>
                <li>• Emergency Evacuation Training</li>
                <li>• Working at Heights</li>
                <li>• Driven Machinery Regulations</li>
                <li>• Compliance & Induction Services</li>
              </ul>
            </div>
<div className="mt-12 text-center">
  <Link href="/services" className="inline-block bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all border-2 border-transparent hover:border-red-600">
    View Detailed Course Breakdown →
  </Link>
</div>
            {/* Tech & Wellness */}
            <div className="bg-white p-8 rounded-2xl border-t-8 border-slate-500 shadow-xl">
              <h3 className="text-xl font-bold mb-4 text-slate-700 flex items-center gap-2">💻 Tech & Wellness</h3>
              <div className="mb-4">
                <p className="font-bold text-sm uppercase text-slate-500 mb-1">Web Services</p>
                <p className="text-slate-700 text-sm">Custom Design, Development, Security & Maintenance.</p>
              </div>
              <div>
                <p className="font-bold text-sm uppercase text-slate-500 mb-1">Psychological Services</p>
                <p className="text-slate-700 text-sm">Stress Management, Education & Consultations.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="max-w-6xl w-full py-20 px-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center uppercase tracking-widest">Training Resources & Media</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {["/images/safety.png", "/images/bls-manual.png", "/images/first-aid1.png", "/images/first-aid2.png", "/images/we-can-do-it.png", "/images/psychology.png"].map((src, i) => (
            <div key={i} className="relative aspect-video rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-all">
              <Image 
                src={src} 
                alt="Apex Training" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"// add this line
                className="object-contain p-2"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section className="w-full bg-slate-50 py-20 px-6 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Our Mobile Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-900">
              <h3 className="text-xl font-bold text-blue-900">Millicent Mofomate</h3>
              <p className="text-slate-500 text-sm mb-4">Lead Consultant</p>
              <p className="font-bold text-lg">📞 078 923 8510</p>
              <p className="text-blue-600 text-sm italic">kmmofomate@gmail.com</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-slate-400">
              <h3 className="text-xl font-bold text-slate-800">Cossa Tinyiko Samuel</h3>
              <p className="text-slate-500 text-sm mb-4">Alternative Contact</p>
              <p className="font-bold text-lg">📞 072 261 9265</p>
              <p className="text-blue-600 text-sm italic">samuelcossa8@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 bg-slate-950 text-slate-500 text-center text-xs tracking-widest uppercase">
        <p>© 2026 APEX TECHNICAL GROUP AND TRAINING • Reg: 2026/224873/07</p>
      </footer>

      {/* FLOATING WHATSAPP LOGO */}
      <a
        href="https://wa.me/27789238510"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 group flex items-center gap-2"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">
          Chat with Millicent
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l5.051-1.326A7.817 7.817 0 0 0 7.994 16c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </main>
  );
}