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
                  imageSrc="/images/AFR/AFR_banner_gastly3.jpg"
                />
              </div>
              <div className="lg:col-span-7 relative z-10">
                <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-8 md:p-12 border border-white/20">
                  <h1 className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${montserrat.className}`}>
                    About AFR
                  </h1>
                  <p className="text-lg text-gray-300 mb-8">
                    <span className="font-bold text-racing-gold">Anteater Formula Racing</span> designs, builds, and races a high-performance, open-wheel race car inspired by Formula 1 and IndyCar, competing annually at <span className="font-bold text-racing-gold">Formula SAE California</span>. The team is made up of 51 engineering students who contribute to every phase of the project—from design and simulation to machining, assembly, and track testing. Across all four academic quarters, AFR members dedicate over 20,000 hours annually to push the boundaries of performance, innovation, and teamwork.
                  </p>
                  <p className="text-lg text-gray-300 mb-8">
                    The result is more than just a competitive race car—it's a launchpad for careers in automotive, aerospace, software, electronics, and beyond. AFR gives students hands-on engineering experience, real-world problem solving, and critical collaboration skills that are highly sought after by industry leaders. Formula SAE remains one of the most impactful experiences a future engineer can pursue.
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
                  <p className="text-lg text-gray-300 mb-4">
                    At <span className="font-bold text-racing-gold">Anteater Formula Racing</span>, our mission is to develop the next generation of engineers through hands-on experience in <span className="font-bold text-racing-gold">automotive design, manufacturing, and testing</span>. We also strive to perform at the highest level in the Formula SAE Intercollegiate Competition—aiming to pass all technical inspections, compete in every dynamic event, and demonstrate excellence across all judged categories.
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
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="text-racing-gold font-semibold text-xl">2024–2025</div>
                      <p className="text-gray-300">
                        In our second year working on <span className="font-bold text-racing-gold">Gastly</span>, we focused on refining subsystem designs, completing full-vehicle manufacturing, and running comprehensive driver training and track testing. Our efforts culminated in competition during May. This spring quarter, we've shifted focus to redesigning next year's car and recruiting the next generation of AFR engineers.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-racing-gold font-semibold text-xl">2023–2024</div>
                      <p className="text-gray-300">
                        Marked the beginning of development for <span className="font-bold text-racing-gold">Gastly</span>, featuring significant design innovations and foundational progress across all subteams.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="text-racing-gold font-semibold text-xl">2022–2023</div>
                      <p className="text-gray-300">
                        AFR earned its best competition result to date, finishing <span className="font-bold text-racing-gold">19th overall</span> at Formula SAE Lincoln in Nebraska.
                      </p>
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
                      Formula SAE Knowledge and Validation Events in California 2025 are part of the SAE Collegiate Design Series, featuring <span className="font-bold text-racing-gold">over 110 university teams</span> from around the world. These events test a team's ability to engineer a high-performance vehicle and present it in a real-world context.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="font-semibold mb-4">The competition consists of:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>Technical and Safety Inspections – ensuring rules compliance and safety</li>
                          <li>Design Reviews – evaluated by engineering professionals</li>
                          <li>Dynamic Events – Acceleration, Skid Pad, Autocross, Endurance, and Efficiency</li>
                          <li>Business & Cost Presentations – evaluating feasibility and project management</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-4">Performance Evaluation:</p>
                        <p>
                          Performance in all these areas—technical inspection, design, business, cost, and dynamic events—contributes to a team's overall competition standing. Success requires a well-rounded and technically sound approach.
                        </p>
                      </div>
                    </div>
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
                    Your support helps us do more than just build a race car—it allows us to <span className="font-bold text-racing-gold">train engineers</span>, <span className="font-bold text-racing-gold">refine advanced automotive systems</span>, and <span className="font-bold text-racing-gold">represent UCI at an elite international level</span>. Sponsorships and donations directly fund vehicle development, competition travel, and essential components, enabling us to push engineering boundaries and stay competitive in Formula SAE.
                  </p>
                  <div className="flex justify-center">
                    <Link 
                      href="/contact" 
                      className="nav-button"
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