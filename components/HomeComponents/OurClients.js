"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import "swiper/css";

// Import logos
import english from "../../public/english.png";
import bewakoof from "../../public/bewakoof.jpg";
import emolifi from "../../public/emolifi.png";
import Everkind from "../../public/Everkind.png";
import growthshark from "../../public/growthshark.png";
import S_IB from "../../public/S_IB.png";
import hrp from "../../public/hrp.webp";
import hypergetshop from "../../public/hypergetshop.png";
import icons8 from "../../public/icons8.png";
import keyaseth from "../../public/keyaseth.png";
import kruti from "../../public/kruti.webp";
import mechanic from "../../public/mechanic.png";
import mfine from "../../public/mfine.png";
import myhealthcare from "../../public/myhealthcare.png";
import petaversa from "../../public/petaversa.png";
import phajil from "../../public/phajil.webp";
import space from "../../public/space.png";
import spythar from "../../public/spythar.png";
import sroutsocial from "../../public/sroutsocial.png";
import traveloka from "../../public/traveloka.webp";
import VoiceMap from "../../public/VoiceMap.png";
import workday from "../../public/workday.png";
import yesstyle from "../../public/yesstyle.png";

const logos = [
  bewakoof,
  Everkind,
  growthshark,
  emolifi,
  english,
  S_IB,
  icons8,
  hrp,
  hypergetshop,
  keyaseth,
  kruti,
  mechanic,
  mfine,
  myhealthcare,
  phajil,
  petaversa,
  space,
  spythar,
  sroutsocial,
  traveloka,
  VoiceMap,
  workday,
  yesstyle,
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
            Our Clients
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
          {/* Left fade gradient */}
          <div className="hidden lg:block pointer-events-none absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10"></div>

          {/* Right fade gradient */}
          <div className="hidden lg:block pointer-events-none absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* 🌀 Continuous Motion Loop */}
          <motion.div
            className="flex gap-16 py-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20, // adjust speed here (lower = faster)
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
                  alt={`Client Logo ${i + 1}`}
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
