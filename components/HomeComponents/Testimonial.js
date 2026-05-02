"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaArrowRight, FaTimes } from "react-icons/fa";

import DeepChakroborty from "@/public/testimonials/DeepChakroborty.png";
import Devpriyadutt from "@/public/testimonials/Devpriyadutt.png";
import poojabanerjee from "@/public/testimonials/poojabanerjee.png";
import rajoshriacharjee from "@/public/testimonials/rajoshriacharjee.png";
import santanuBhowmik from "@/public/testimonials/santanuBhowmik.png";
import sayanighosh from "@/public/testimonials/sayanighosh.png";
import siddharthamallick from "@/public/testimonials/siddharthamallick.png";
import subhamaydholay from "@/public/testimonials/subhamaydholay.png";
import subhojitdhar from "@/public/testimonials/subhojitdhar.png";
import sudipbanerjee from "@/public/testimonials/sudipbanerjee.png";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    firstname: "Deep",
    lastname: "Chakroborty",
    position: "CEO, Iennep",
    testimonial:
      "Their design process was smooth and easy to follow. Highly recommend.",
    avatar: DeepChakroborty,
  },
  {
    firstname: "Devpriya",
    lastname: "Dutt",
    position: "CEO, Deepstack",
    testimonial:
      "Impressive results in record time. These guys know what they’re doing.",
    avatar: Devpriyadutt,
  },
  {
    firstname: "Pooja",
    lastname: "Banerjee",
    position: "CEO, Rentpost",
    testimonial:
      "Very professional team that delivered beyond expectations!",
    avatar: poojabanerjee,
  },
  {
    firstname: "Rajoshri",
    lastname: "Acharjee",
    position: "CEO, Cofi",
    testimonial:
      "Loved working with them. Great results and support throughout.",
    avatar: rajoshriacharjee,
  },
  {
    firstname: "Santanu",
    lastname: "Bhowmik",
    position: "Founder, BlueSky",
    testimonial:
      "The attention to detail and creativity blew my mind. Excellent job!",
    avatar: santanuBhowmik,
  },
  {
    firstname: "Sayani",
    lastname: "Ghosh",
    position: "Tech Lead, Novex",
    testimonial:
      "Their innovative ideas helped us scale faster than expected.",
    avatar: sayanighosh,
  },
  {
    firstname: "Siddhartha",
    lastname: "Mallick",
    position: "CTO, CloudSync",
    testimonial:
      "Smooth collaboration and stunning results. Would love to work again!",
    avatar: siddharthamallick,
  },
  {
    firstname: "Subhamay",
    lastname: "Dholay",
    position: "CEO, Zenith Corp",
    testimonial:
      "The team’s dedication and professionalism stand out from the crowd.",
    avatar: subhamaydholay,
  },
  {
    firstname: "Subhojit",
    lastname: "Dhar",
    position: "CEO, Zenith Corp",
    testimonial:
      "The team’s dedication and professionalism stand out from the crowd.",
    avatar: subhojitdhar,
  },
  {
    firstname: "Sudip",
    lastname: "Banerjee",
    position: "CEO, Zenith Corp",
    testimonial:
      "The team’s dedication and professionalism stand out from the crowd.",
    avatar: sudipbanerjee,
  },
];

// ✅ Hook to get window width
const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowWidth;
};

const getSlideWidth = (windowWidth, isActive) => {
  if (windowWidth < 640) return isActive ? 300 : 180;
  if (windowWidth < 768) return isActive ? 400 : 220;
  return isActive ? 500 : 250;
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const windowWidth = useWindowSize();
  const swiperRef = useRef(null);

  return (
    <section className="relative text-black px-6 py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 🪄 Animated Title - comes from left */}
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-white relative z-10"
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          What <span className="text-cyan-400">People</span> Say About Us
        </motion.h2>

        {/* 🪄 Animated Swiper Wrapper - slides in from left */}
        <motion.div
          className="relative overflow-hidden z-10"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Fades on both sides */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-100 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-100 bg-gradient-to-l from-black to-transparent z-10"></div>

          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            allowTouchMove={true}
            grabCursor={true}
            freeMode={false}
            modules={[Autoplay]}
            className="relative z-20 mySwiper"
          >
            {testimonials.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <SwiperSlide
                  key={index}
                  className="transition-all duration-300 sm:w-[180px] md:w-[220px]"
                  style={{
                    width: `${getSlideWidth(windowWidth, isActive)}px`,
                    transition: "width 0.3s ease",
                  }}
                >
                  <div
                    className={`h-[250px] bg-cyan-400/80 backdrop-blur-xl border border-white/10 rounded-xl p-4 relative overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "flex flex-row gap-4 items-start"
                        : "flex flex-col items-center justify-center mb-10"
                    } group`}
                  >
                    {/* Avatar + Name */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center text-center text-black">
                      <Image
                        src={item.avatar}
                        alt={`${item.firstname} ${item.lastname}`}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full mb-2 object-cover border-2 border-white/40 shadow-md"
                      />
                      <h4 className="text-lg font-semibold">{item.firstname}</h4>
                      <h4 className="text-lg font-semibold">{item.lastname}</h4>
                    </div>

                    {/* Testimonial */}
                    {isActive && (
                      <div className="w-1/2 relative flex items-center justify-center text-center text-sm h-full px-4 text-black">
                        <div className="absolute text-[10rem] sm:text-[14rem] text-black/10 pointer-events-none select-none leading-none">
                          &ldquo;
                        </div>
                        <p className="relative z-10 max-w-[90%]">
                          {item.testimonial}
                        </p>
                      </div>
                    )}

                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => setActiveIndex(isActive ? null : index)}
                      className="absolute bottom-3 right-3 w-7 h-7 bg-black text-white rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
                    >
                      {isActive ? (
                        <FaTimes size={12} />
                      ) : (
                        <FaArrowRight size={12} />
                      )}
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
