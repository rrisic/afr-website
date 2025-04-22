"use client";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">Events</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Formula SAE Competition</h2>
              <p className="text-gray-300 mb-4">
                Our annual competition where we showcase our car and compete against other universities.
              </p>
              <p className="text-gray-400">Date: TBD</p>
              <p className="text-gray-400">Location: TBD</p>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Team Events</h2>
              <p className="text-gray-300 mb-4">
                Regular team meetings, workshops, and social events throughout the year.
              </p>
              <p className="text-gray-400">Weekly Meetings: TBD</p>
              <p className="text-gray-400">Location: TBD</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 