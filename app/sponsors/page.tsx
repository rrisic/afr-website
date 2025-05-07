"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import brands from "../data/brands";

interface Brand {
  id: number;
  name: string;
  image: string;
  url: string;
}

interface SponsorTier {
  name: string;
  sponsors: Brand[];
}

const SponsorsPage = () => {
  const [selectedSponsor, setSelectedSponsor] = useState<Brand | null>(null);

  // Group sponsors by tier (you can modify this based on your actual sponsor tiers)
  const sponsorTiers: SponsorTier[] = [
    {
      name: "section 1 example",
      sponsors: brands.slice(0, 3), // Example: first 3 sponsors as platinum
    },
    {
      name: "section 2 example",
      sponsors: brands.slice(3, 8), // Example: next 5 sponsors as gold
    },
    {
      name: "section 3 example",
      sponsors: brands.slice(8), // Example: remaining sponsors as silver
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-racing-gold">Our Sponsors</h2>
        
        {/* Sponsor Tiers */}
        {sponsorTiers.map((tier) => (
          <div key={tier.name} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">{tier.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tier.sponsors.map((sponsor) => (
                <div
                  key={sponsor.id}
                  className="bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => setSelectedSponsor(sponsor)}
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{sponsor.name}</h3>
                    <p className="text-gray-400 mb-4">
                      {/* Add sponsor description here */}
                      Supporting AFR in our mission to build the next generation of racing vehicles.
                    </p>
                    <Link
                      href={sponsor.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-racing-gold hover:text-racing-gold/80 transition-colors duration-300"
                    >
                      Visit Website →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Sponsor Modal */}
        {selectedSponsor && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-lg max-w-2xl w-full p-8 relative">
              <button
                onClick={() => setSelectedSponsor(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative h-64 w-full mb-6">
                <Image
                  src={selectedSponsor.image}
                  alt={selectedSponsor.name}
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{selectedSponsor.name}</h3>
              <p className="text-gray-300 mb-6">
                {/* Add detailed sponsor description here */}
                {selectedSponsor.name} has been a valuable partner in our journey, providing essential support and resources
                that have helped us achieve our goals in Formula SAE competitions.
              </p>
              <Link
                href={selectedSponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-racing-gold hover:text-racing-gold/80 transition-colors duration-300"
              >
                Visit Website
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        )}

        <h2 className="text-3xl font-bold mb-4 text-racing-gold">Become a Sponsor</h2>
      </div>
    </main>
  );
};

export default SponsorsPage; 