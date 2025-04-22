"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-tight">Contact Us</h1>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-gray-300">anteaterracing@gmail.com</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Location</h3>
                <p className="text-gray-300">University of California, Irvine</p>
                <p className="text-gray-300">Engineering Gateway</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Social Media</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://www.instagram.com/anteaterformularacing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/uciafr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Join Our Team</h2>
            <p className="text-gray-300 mb-4">
              Interested in joining AFR? We're always looking for passionate students to join our team.
            </p>
            <p className="text-gray-300">
              Contact us at anteaterracing@gmail.com for more information about recruitment and team opportunities.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 