[18:17, 28/03/2026] Apex Technical group and training: import Image from "next/image";

export default function Home() {
  const trainingGallery = [
    { src: "/images/129550.jpg", alt: "BLS Provider Manual" },
    { src: "/images/129547.jpg", alt: "First Aid Kit" },
    { src: "/images/129543.jpg", alt: "Health Safety Environment" },
    { src: "/images/129542.jpg", alt: "Anatomical Heart Study" }
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
  …
[18:56, 28/03/2026] Apex Technical group and training: import Image from 'next/image';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      {/* Success Icon or Logo */}
      <div className="mb-8">
        <Image 
          src="/images/117147.png" 
          alt="Apex Technical Group Logo" 
          width={180} 
          height={100} 
          className="mx-auto"
        />
      </div>

      <div className="max-w-md">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 mb-4">Registration Received!</h1>
        <p className="text-slate-600 mb-10 leading-relaxed">
          Thank you for choosing Apex Technical Group. We have received your details and will contact you shortly to confirm your booking and payment details.
        </p>

        <div className="flex flex-col gap-4">
          <Link 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all"
          >
            Return to Home
          </Link>
          
          <a 
            href="https://wa.me/27789238510" 
            target="_blank"
            className="text-green-600 font-semibold hover:text-green-700 flex items-center justify-center gap-2"
          >
            <span>Need urgent help? Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </main>
  );
}