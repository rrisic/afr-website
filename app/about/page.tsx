"use client";

import { useEffect, useRef } from 'react';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      {children}
    </div>
  );
};

const DecorativeImage = ({ className = "", imageSrc }: { className?: string; imageSrc: string }) => (
  <div className={`relative w-full h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden border-2 border-white/50 ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
    <Image
      src={imageSrc}
      alt="AFR Formula Car"
      fill
      className="object-cover rounded-lg"
    />
  </div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <FadeInSection>
          <div className="max-w-7xl mx-auto mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] z-0">
                <DecorativeImage 
                  className="lg:translate-x-8" 
                  imageSrc="/images/AFR/AFR_banner_gastly2.JPG"
                />
              </div>
              <div className="lg:col-span-7 relative z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
                  <h1 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${montserrat.className}`}>
                    About AFR
                  </h1>
                  <p className="text-lg text-gray-300 mb-8">
                    <span className="font-bold text-racing-gold">Anteater Formula Racing</span> designs, builds, and races a <span className="font-bold text-racing-gold">high-performance, open-wheel race car</span> inspired by Formula 1 and IndyCar, competing annually at <span className="font-bold text-racing-gold">Formula SAE California</span>. The team is made up of <span className="font-bold text-racing-gold">51 engineering students</span> who contribute to every phase of the project—from <span className="font-bold text-racing-gold">design and simulation</span> to <span className="font-bold text-racing-gold">machining, assembly, and track testing</span>. Across all four academic quarters, AFR members dedicate <span className="font-bold text-racing-gold">over 20,000 hours annually</span> to push the boundaries of <span className="font-bold text-racing-gold">performance, innovation, and teamwork</span>.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    The result is more than just a competitive race car—it's a <span className="font-bold text-racing-gold">launchpad for careers</span> in automotive, aerospace, software, electronics, and beyond. AFR gives students <span className="font-bold text-racing-gold">hands-on engineering experience</span>, <span className="font-bold text-racing-gold">real-world problem solving</span>, and <span className="font-bold text-racing-gold">critical collaboration skills</span> that are highly sought after by industry leaders. <span className="font-bold text-racing-gold">Formula SAE</span> remains one of the most <span className="font-bold text-racing-gold">impactful experiences</span> a future engineer can pursue.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Mission Section */}
        <FadeInSection>
          <div className="max-w-7xl mx-auto mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] z-0">
                <DecorativeImage 
                  className="lg:-translate-x-8" 
                  imageSrc="/images/AFR/AFR_banner_gastly.JPG"
                />
              </div>
              <div className="lg:col-start-6 lg:col-span-7 relative z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
                  <h2 className={`text-3xl font-bold mb-6 ${montserrat.className}`}>Our Mission</h2>
                  <p className="text-lg text-gray-300">
                    To develop the next generation of engineers through hands-on experience in automotive design and manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Timeline Section */}
        <FadeInSection>
          <div className="max-w-7xl mx-auto mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
                  <h2 className={`text-3xl font-bold mb-6 ${montserrat.className}`}>Our Timeline</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div className="text-racing-gold font-semibold text-xl">2025</div>
                      <h3 className="text-xl font-semibold">Formula SAE Knowledge Event & Validation</h3>
                      <p className="text-gray-300">Competing in both the Knowledge Event and Validation Event in California</p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-racing-gold font-semibold text-xl">2024</div>
                      <h3 className="text-xl font-semibold">Current Development</h3>
                      <p className="text-gray-300">Designing and building our latest formula-style race car</p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-racing-gold font-semibold text-xl">2023</div>
                      <h3 className="text-xl font-semibold">Best Finish</h3>
                      <p className="text-gray-300">Achieved 19th place at Formula SAE Lincoln (Nebraska)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] z-0">
                <DecorativeImage 
                  className="lg:translate-x-8" 
                  imageSrc="/images/team/full team zot.JPG"
                />
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* FSAE Competition Section */}
        <FadeInSection>
          <div className="max-w-7xl mx-auto mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="relative lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] z-0">
                <DecorativeImage 
                  className="lg:-translate-x-8" 
                  imageSrc="/images/AFR/AFR_banner_gastly2.JPG"
                />
              </div>
              <div className="lg:col-start-6 lg:col-span-7 relative z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
                  <h2 className={`text-3xl font-bold mb-6 ${montserrat.className}`}>Formula SAE Competition</h2>
                  <div className="space-y-6 text-gray-300">
                    <p>
                      Formula SAE Knowledge Event 2025 and Formula SAE Validation – California 2025 are SAE Collegiate Design Series events that will feature student teams representing over 110 universities across the world.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="font-semibold mb-4">FSAE competitions are overseen by a dedicated group of industry professionals and involve:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Technical and safety inspections for rules compliance</li>
                          <li>Design presentations with industry professionals</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-4">Dynamic events include:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Acceleration</li>
                          <li>Skid Pad</li>
                          <li>Autocross</li>
                          <li>Endurance</li>
                          <li>Efficiency</li>
                        </ul>
                      </div>
                    </div>
                    <p>
                      Each presentation and event scores points for the overall Knowledge Event score, while dynamic events count for the Validation Event score.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Support Us Section */}
        <FadeInSection>
          <div className="max-w-7xl mx-auto mb-32 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
                  <h2 className={`text-3xl font-bold mb-6 ${montserrat.className}`}>Support Us</h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Help us continue our mission of developing the next generation of engineers and competing at the highest level of Formula SAE.
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      href="/contact" 
                      className="inline-block bg-racing-gold text-black font-bold py-3 px-8 rounded-lg hover:bg-racing-gold/90 transition-colors"
                    >
                      Get Involved
                    </Link>
                  </div>
                </div>
              </div>
              <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[140%] z-0">
                <DecorativeImage 
                  className="lg:translate-x-8" 
                  imageSrc="/images/AFR/AFR_banner_gastly.JPG"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </main>
  );
} 