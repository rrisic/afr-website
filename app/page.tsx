"use client";

import Image from "next/image";
import Link from "next/link";
import BrandsSwiper from "./components/BrandsSwiper";
import SocialButtons from "./components/SocialButtons";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="relative h-[80vh] min-h-[600px] w-full">
        <div className="absolute inset-0 z-0 mx-4 mb-4">
          <Image
            src="/images/AFR/AFR_banner_gastly2.jpg"
            alt="AFR Formula Car"
            fill
            className="object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
              Anteater Formula Racing
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
              Building the future of motorsports through innovation, engineering excellence, and teamwork.
            </p>
            <SocialButtons />
          </div>
        </div>
      </div>

      {/* Sponsors Section */}
      <BrandsSwiper />
    </main>
  );
}
