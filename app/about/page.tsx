"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">About AFR</h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-8 text-center">
            Anteater Formula Racing (AFR) is UCI's Formula SAE team, dedicated to designing, building, and racing a formula-style race car. 
            Our team brings together students from various engineering disciplines to create innovative solutions in automotive engineering.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-300">
                To develop the next generation of engineers through hands-on experience in automotive design and manufacturing.
              </p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-300">
                To compete at the highest level of Formula SAE while fostering innovation and excellence in engineering education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 