"use client";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
});

export default function TeamArchivesPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 md:p-12">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${montserrat.className}`}>
              Team Archives
            </h1>
            <p className="text-lg text-gray-300 text-center">
              This page is under construction. Check back soon for historical records of previous teams and projects.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 