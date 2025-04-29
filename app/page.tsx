"use client";

import Image from "next/image";
import Link from "next/link";
import BrandsSwiper from "./components/BrandsSwiper";
import SocialButtons from "./components/SocialButtons";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-screen w-full">
        <div className="absolute inset-0 z-0 mx-4 mb-4">
          <Image
            src="/images/AFR/AFR_banner_gastly2.JPG"
            alt="AFR Formula Car"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className={`text-center ${montserrat.className}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-tight">
              Anteater Formula Racing
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white mb-8 max-w-2xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-bold tracking-tight">
              UCI FSAE ICE
            </p>
            <SocialButtons />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">
                Welcome to AFR
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 text-center">
                  Anteater Formula Racing is UCI's Formula SAE team, dedicated to designing, building, and racing a formula-style race car. 
                  Our team brings together students from various engineering disciplines to create innovative solutions in automotive engineering.
                </p>
                <div className="mt-8 flex justify-center">
                  <Link 
                    href="/about" 
                    className="inline-block bg-racing-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-racing-gold/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <div className="py-20">
        <BrandsSwiper />
      </div>
    </main>
  );
}
