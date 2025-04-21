"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";
import brands from "../data/brands";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const BrandsSwiper = () => {
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and Navigation */}
        <div className="flex items-center justify-center mb-6">
          <button
            onClick={handlePrev}
            className="relative w-12 h-12 rounded-full bg-racing-navy flex items-center justify-center transition-all duration-300 hover:bg-racing-gold active:scale-95 group mr-4"
            aria-label="Previous slide"
          >
            <div className="absolute inset-0 rounded-full bg-racing-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-130"></div>
            <svg
              className="relative w-6 h-6 text-white transition-colors duration-300 group-hover:text-racing-navy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <Link href="/sponsors" className="group">
            <h2 className="text-2xl font-semibold text-white mb-1 transition-colors duration-300 group-hover:text-racing-gold">
              AFR Sponsors
            </h2>
            <div className="w-24 h-1 bg-racing-gold mx-auto rounded-full transition-colors duration-300 group-hover:bg-white"></div>
          </Link>

          <button
            onClick={handleNext}
            className="relative w-12 h-12 rounded-full bg-racing-navy flex items-center justify-center transition-all duration-300 hover:bg-racing-gold active:scale-95 group ml-4"
            aria-label="Next slide"
          >
            <div className="absolute inset-0 rounded-full bg-racing-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-130"></div>
            <svg
              className="relative w-6 h-6 text-white transition-colors duration-300 group-hover:text-racing-navy"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Swiper */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay, Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          grabCursor={true}
          className="w-full"
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <Link
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-48 p-6 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandsSwiper; 