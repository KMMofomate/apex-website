import Image from "next/image";

export default function Home() {
  const trainingGallery = [
    { src: "/images/bls-manual.png", alt: "BLS Provider Manual" },
    { src: "/images/first-aid1.png", alt: "First Aid Kit" },
    { src: "/images/Safety-Off.png", alt: "Health Safety Environment" },
    { src: "/images/heart.png", alt: "Anatomical Heart Study" }
  ];

  const specializationList = [
    {
      title: "First Aid Training",
      items: ["Level 1-3", "BLS (Basic Life Support)", "Family and Friends", "CPR for Professionals"]
    },
    {
      title: "Health and Safety",
      items: ["Basic OHS Training", "Fire Fighting", "Risk Assessment", "Working at Heights", "Incident Investigation", "Consultation Services"]
    },
    {
      title: "Digital Services",
      items: ["Custom Web Development", "Web Maintenance", "Security Services"]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. BRANDED HERO SECTION */}
      <section className="py-20 px-6 text-center bg-slate-900 text-white">
        <div className="flex justify-center mb-10">
          <Image 
            src="/images/logo.png" 
            alt="Apex Technical Group Logo" 
            width={400} 
            height={250} 
            className="h-48 md:h-64 w-auto" 
            priority 
          />
        </div>
        <p className="text-xl md:text-2xl text-blue-400 font-bold italic mb-8 underline decoration-red-600 underline-offset-8">
          Mobile Training Center - We Come To You!
        </p>
        <div className="flex justify-center gap-4">
          <a href="https://wa.me/27789238510" className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-bold shadow-lg">WhatsApp</a>
          <a href="https://form.jotform.com/260765178203054" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full font-bold shadow-lg">Register</a>
        </div>
      </section>

      {/* 2. MOBILE HIGHLIGHT SECTION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative aspect-square">
            <Image src="/images/we-can-do-it.png" alt="Empowerment" fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase">Save A Life</h2>
            <div className="relative h-40 w-full mb-6">
              <Image src="/images/heart.png" alt="Heart Icon" fill className="object-contain" />
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Specializing in onsite safety education, we bring certified training to your doorstep in Midrand and across Gauteng.
            </p>
          </div>
        </div>
      </section>

      {/* 3. SERVICES LIST */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {specializationList.map((service, idx) => (
            <div key={idx} className="bg-slate-800 p-8 rounded-2xl border-t-4 border-blue-500 shadow-xl">
              <h3 className="text-xl font-bold text-blue-400 mb-6 uppercase">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="text-slate-300 flex items-center gap-2">
                    <span className="text-red-500 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 4. GALLERY */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12 text-slate-800 uppercase tracking-widest">Training Materials</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trainingGallery.map((img, i) => (
            <div key={i} className="relative aspect-square rounded-xl border p-2 bg-white shadow-sm">
              <Image src={img.src} alt={img.alt} fill className="object-contain p-2" />
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 bg-black text-slate-500 text-center text-xs">
        <p className="font-bold text-slate-400 mb-2 uppercase tracking-tighter">APEX TECHNICAL GROUP AND TRAINING (PTY) LTD</p>
        <p>© 2026 • Registration No: 2026/224873/07</p>
      </footer>
    </main>
  );
}