import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ThankYou() {
  const trainingGallery = [
    { src: "/images/bls-manual.png", alt: "BLS Provider Manual" },
    { src: "/images/first-aid1.png", alt: "First Aid Kit" },
    { src: "/images/safety.png", alt: "Health Safety Environment" },
    { src: "/images/heart.png", alt: "Anatomical Heart Study" }
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl w-full space-y-8">
        {/* Success Header */}
        <div className="space-y-4">
          <div className="bg-green-100 text-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Registration Received!</h1>
          <p className="text-xl text-gray-600">
            Thank you for choosing Apex Technical Group and Training. We have received your details and will contact you shortly to finalize your booking.
          </p>
        </div>

        {/* Training Highlights Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
          {trainingGallery.map((img, index) => (
            <div key={index} className="relative h-32 w-full rounded-lg overflow-hidden border border-gray-200">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="https://wa.me/27789238510" 
            target="_blank"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            Chat with Millicent
          </Link>
          <Link 
            href="/" 
            className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}