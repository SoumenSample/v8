"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { FaChartLine, FaTools, FaRocket } from "react-icons/fa";
import { FiTrendingUp } from "react-icons/fi";
import DotField from "../DotField";
// import { DottedGlowBackground } from "../ui/dotted-glow-background";


export default function ITSupportSection() {
  /* -------------------------------------------------
   *  Animation variants – plain JavaScript
   * ------------------------------------------------- */
  const offscreen = (direction) => ({
    y: direction === "top" ? -100 : 100,
    opacity: 0,
  });

  const onscreen = {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  };

  const cardVariants = { offscreen, onscreen };

  return (
    
    <section className="relative bg-black text-white pt-12 px-6 z-0 overflow-hidden min-h-screen">
      {/* DotField background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotField
          gradientFrom="rgba(6, 182, 212, 0.9)"   // cyan-500
          gradientTo="rgba(6, 182, 212, 0.4)"     // lighter cyan
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Headings */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">How We Do It</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We craft, solve, and support your tech from day one to
            never-let-you-down.
          </p>
        </div>
 
        {/* Grid Layout */}
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 text-center md:text-left mb-20">
          
         
          {/* Center Glowing Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative w-40 h-40 flex items-center justify-center rounded-full">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 rounded-full animate-pulseGlow" />
              <div className="relative w-32 h-32 bg-black border border-gray-700 rounded-full flex items-center justify-center">
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-25 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Divider Lines */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1.5px] z-0 bg-gradient-to-b from-transparent via-gray-500 to-transparent" />
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] z-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent" />

          {/* Top Left – from top */}
          <motion.div
            custom="top"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto"
          >
            <h3 className="absolute -top-10 -left-6 md:-left-16 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600 px-6 lg:px-0">
              01
            </h3>
            <FaChartLine className="text-4xl text-cyan-400 mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Business Analysis & Tech Assessment
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We analyze your business, find the best tech and tools to use,
              and create a researched visualization. No fluff. Just facts.
            </p>
          </motion.div>

          {/* Top Right – from bottom */}
          <motion.div
            custom="bottom"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto lg:pb-0 pb-25 lg:mb-0 mb-10"
          >
            <h3 className="absolute -top-10 -right-6 md:-right-10 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600 px-6 lg:px-0">
              02
            </h3>
            <FaTools className="text-4xl text-cyan-400 mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Project Execution and Crafting the Best You Can Get
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We start working on the project with the best and latest tech and
              tools available, maintaining quality.
            </p>
          </motion.div>

          {/* Bottom Left – from top */}
          <motion.div
            custom="top"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto lg:pt-0 lg:mt-0 mt-2"
          >
            <h3 className="absolute bottom-30 -left-6 md:-left-16 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600 px-6 lg:px-0">
              03
            </h3>
            <FaRocket className="text-4xl text-cyan-400 mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              DTD: Deployment, Test and Delivery
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              After completion, we deploy the project, test rigorously to every
              scenario and when passed, we deliver it to you.
            </p>
          </motion.div>

          {/* Bottom Right – from bottom */}
          <motion.div
            custom="bottom"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col items-center text-center relative z-10 max-w-3xl mx-auto"
          >
            <h3 className="absolute bottom-30 -right-6 md:-right-20 text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-cyan-600 px-6 lg:px-0">
              04
            </h3>
            <FiTrendingUp className="text-4xl text-cyan-400 mb-4" />
            <h4 className="text-lg font-semibold mb-2">
              Monitor, Optimize, and Scale
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              We don’t disappear. We track, tweak, and improve your stack as you
              grow, all under flat fee support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}