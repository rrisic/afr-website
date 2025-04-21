import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/AFR/AFR_banner_gastly2.jpg"
          alt="AFR Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
          Anteater Formula Racing
        </h1>
        <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
          University of California, Irvine's Formula SAE Racing Team
        </p>
        <div className="flex gap-4">
          <Link
            href="/team"
            className="bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Meet the Team
          </Link>
          <Link
            href="/sponsors"
            className="bg-white/10 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
          >
            Our Sponsors
          </Link>
        </div>
      </div>

      {/* Brands Section */}
      <section className="relative z-10 py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Our Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Add sponsor logos here */}
          </div>
        </div>
      </section>
    </main>
  );
}
