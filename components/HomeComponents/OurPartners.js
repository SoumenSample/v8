"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import "swiper/css";

// Import logos
import cognosutra from "../../public/cognosutra.jpg";
import netlify from "../../public/netlify.png";
import google from "../../public/google.png";
import Vercel from "../../public/Vercel.png";
import meta from "../../public/meta.png";
import hostinger from "../../public/hostinger.png";
import Digital from "../../public/Digital.png";
import growthshark from "../../public/growthshark.png";
import adobe from "../../public/adobe.png";
import aws from "../../public/aws.png";

const logos = [
  google,
  Vercel,
  meta,
  hostinger,
  Digital,
  growthshark,
  adobe,
  aws,
  cognosutra,
  netlify,
];

const LogoSection = () => {
  return (
    <section className="pt-15 relative z-10 px-6 overflow-hidden">
      <div className="flex items-center gap-6 max-w-7xl mx-auto lg:flex-row flex-col lg:px-0 px-6">
        
        {/* ✨ Animated Heading */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Our Partners
          </h2>
        </motion.div>

        {/* ✨ Infinite Motion Logo Row */}
        <motion.div
          className="lg:w-2/3 lg:px-0 px-6 overflow-hidden relative"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Left fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-34 bg-gradient-to-r from-black to-transparent z-10"></div>
          {/* Right fade */}
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-34 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* 🌀 Motion Looping Logo Row */}
          <motion.div
            className="flex gap-16 py-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex justify-center items-center hover:scale-110 transition-transform duration-300"
              >
                <Image
                  src={logo}
                  alt={`Logo ${i + 1}`}
                  height={80}
                  className="h-14 w-auto"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoSection;
