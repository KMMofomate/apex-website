import Link from 'next/link';

export default function Services() {
    const categories = [
        {
            title: "Medical & Life Support Training",
            icon: "🩺",
            items: [
                "First Aid Training (Levels 1, 2, and 3)",
                "Basic Life Support (BLS) for Healthcare Providers",
                "Family and Friends CPR Training",
                "CPR for Professionals"
            ],
            description: "Accredited medical response training designed for both workplace compliance and personal preparedness."
        },
        {
            title: "Health & Safety (OHS)",
            icon: "🛡️",
            items: [
                "Basic OHS Training (Introduction to the Act)",
                "Basic Fire Fighting & Prevention",
                "Hazardous Material Handling",
                "Emergency Evacuation Training",
                "Working at Heights & Safety Systems",
                "Driven Machinery Regulations (DMR)"
            ],
            description: "Comprehensive safety training to ensure your team is compliant with South African labor and safety laws."
        },
        {
            title: "Specialized Safety Skills",
            icon: "🏗️",
            items: [
                "Risk Assessment & Management",
                "Incident Investigation",
                "SHE Representatives Training",
                "Safety Induction & Compliance Audits",
                "HSE Consultation Services"
            ],
            description: "Deep-dive safety management to identify hazards before they lead to incidents."
        },
        {
            title: "Web & Digital Solutions",
            icon: "💻",
            items: [
                "Custom Web Development & Design",
                "Technical Infrastructure Setup",
                "Web Security Audits",
                "Ongoing Maintenance & Hosting"
            ],
            description: "Modernizing your business with secure, professional, and high-performance technical service infrastructure."
        },
        {
            title: "Medical Aid Claims Assistance",
            icon: "🧠",
            items: [
                "Professional Medical Billing Support",
                "Holistic support focusing on administrative accuracy and efficient claim processing for emergency medical services.",
                "Guidance on documentation and compliance for medical claims."
            ],
            description: "Navigating the complexities of medical aid claims."
        } //
    ]; // <---

    return (
        <main className="min-h-screen bg-slate-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">
                
                {/* Navigation Link Back */}
                <Link href="/" className="text-blue-600 hover:underline font-bold mb-8 inline-block">
                    ← Back to Home
                </Link>

                <header className="mb-16">
                    <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Full Service Catalog</h1>
                    <p className="text-xl text-slate-600 max-w-3xl">
                        As a <strong>Mobile Training Center</strong>, Apex Technical Group and Training brings 
                        accredited expertise directly to your facility in Midrand and across Johannesburg.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-12">
                    {categories.map((cat, index) => (
                        <div key={index} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                            <div className="flex flex-col md:flex-row md:items-start gap-8">
                                <div className="text-5xl">{cat.icon}</div>
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h2>
                                    <p className="text-slate-600 mb-6 italic">{cat.description}</p>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {cat.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-800">
                                                <span className="h-2 w-2 bg-red-600 rounded-full"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-20 bg-blue-900 text-white rounded-3xl p-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Schedule Training?</h2>
                    <p className="mb-8 text-blue-100 max-w-xl mx-auto">
                        Contact Millicent today to discuss group bookings and on-site training dates.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a href="https://wa.me/27789238510" className="bg-green-500 px-8 py-3 rounded-full font-bold hover:bg-green-600 transition-colors">
                            WhatsApp Us Now
                        </a>
                        <Link href="/" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}