"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaLaptopCode, FaMobileAlt, FaCode, FaPalette, FaBullhorn, FaBrush } from "react-icons/fa";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";
import OurServices from "@/components/HomeComponents/OurServices.js"; 
import { Meteors } from "../ui/meteors";
import InteractiveHoverButton  from "../ui/interactive-hover-button/InteractiveHoverButton.tsx";

export default function HomePage() {
  const servicesRef = useRef(null);

  // HeroSection Component
  const HeroSection = () => {
    const canvasRef = useRef(null);

    const scrollToServices = () => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      let stars = [];
      const numStars = 300;

      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2.2,
          speed: Math.random() * 0.8 + 0.2,
          fall: Math.random() < 0.04,
        });
      }
function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star) => {
    let alpha = 1;

    const fadeStart = canvas.height * 0.6; // start fading at 60% height
    const fadeEnd = canvas.height; // fully faded at bottom

    if (star.y > fadeStart) {
      alpha = 1 - (star.y - fadeStart) / (fadeEnd - fadeStart);
      alpha = Math.max(alpha, 0);
    }

    ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  stars.forEach((star) => {
    if (star.fall) {
      star.y += star.speed * 1;
      star.x += star.speed * 2;

      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    } else {
      star.y += star.speed * 0.3;

      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    }
  });
}

      function animate() {
        drawStars();
        updateStars();
        requestAnimationFrame(animate);
      }

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <>
      <Meteors/>
      <div className="relative w-full h-screen text-white overflow-hidden">
        
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{
            height: "180px",
            zIndex: 1,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #030508 100%)",
          }}
        />
         <main className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4 lg:pt-30 pt-3">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
        }}
        viewport={{ once: true, amount: 0.6 }} // triggers once when 60% visible
      >
        <span className="text-4xl md:text-7xl font-medium ">
          Discover Endless Possibilities <br />
          in the{" "}
          <span className="text-cyan-400 text-7xl font-medium drop-shadow-[0_0_15px_rgba(59,130,246,0.8)]">
            AI-Powered Cyber-space
          </span>
        </span>

        <p className="mt-4 max-w-2xl text-gray-300 text-center mx-auto">
          Step into the AI-Powered Cyber-space and seize opportunity with our services, expert guidance,  strategic insights for unrivaled financial success,
          <br />
          expert guidance, and strategic insights for unrivaled financial success.
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <ContactButton href="/contact-us" className="mt-1">
            {/* <div className="wrap"> */}
             <InteractiveHoverButton/>
            {/* </div> */}
          </ContactButton>
          

          <div className="mt-4">
            <AboutButton href="/about-us">About Us</AboutButton>
          </div>
        </div>
      </motion.div>
    </main>

        <div
          onClick={scrollToServices}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full flex justify-center cursor-pointer"
        >
          <FaAngleDown className="text-cyan-400 text-4xl animate-bounce" />
        </div>
      </div>
      </>
    );
  };

  return (
    <div className="relative  text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e3a8a_0%,_#0d1b2a_20%,_#000000_40%)]" />
      </div>

      <HeroSection />
      <div ref={servicesRef}>
        <OurServices />
      </div>
    </div>
  );
}

/* Styled Buttons */
const AboutButton = styled(Link)`
  padding: 15px 25px; /* Balanced vertical and horizontal padding */
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2; /* Ensures proper text vertical alignment */
  color: #ffffff;
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  border: 1px solid #ffffff;
  transition: 0.5s ease;
  user-select: none;
  text-decoration: none;
  text-align: center;

  &:hover,
  &:focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
      0 0 100px #008cff;
  }
`;


const ContactButton = styled(Link)`
  --white: #ffe7ff;
  --bg: #26C6DA;
  --radius: 100px;
  outline: none;
  cursor: pointer;
  border: 0;
  position: relative;
  border-radius: var(--radius);
  background-color: var(--bg);
  transition: all 0.2s ease;
  box-shadow:
    inset 0 0.3rem 0.9rem rgba(255, 255, 255, 0.3),
    inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
    inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.5),
    0 3rem 3rem rgba(0, 0, 0, 0.3),
    0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  text-decoration: none;

  .wrap {
    font-size: 15px; /* Reduced font size */
    font-weight: 400;
    color: rgba(0, 0, 0, 1);
    padding: 18px 25px; /* Reduced padding */
    border-radius: inherit;
    position: relative;
    overflow: hidden;
  }

  .wrap p span:nth-child(2) {
    display: none;
  }

  &:hover .wrap p span:nth-child(1) {
    display: none;
  }

  &:hover .wrap p span:nth-child(2) {
    display: inline-block;
  }

  .wrap p {
    display: flex;
    align-items: center;
    gap: 8px; /* Reduced gap */
    margin: 0;
    transition: all 0.2s ease;
    transform: translateY(2%);
    mask-image: linear-gradient(to bottom, white 40%, transparent);
  }

  .wrap::before,
  .wrap::after {
    content: "";
    position: absolute;
    transition: all 0.3s ease;
  }

  .wrap::before {
    left: -15%;
    right: -15%;
    bottom: 25%;
    top: -100%;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.12);
  }

  .wrap::after {
    left: 6%;
    right: 6%;
    top: 12%;
    bottom: 40%;
    border-radius: 22px 22px 0 0;
    box-shadow: inset 0 10px 8px -10px rgba(255, 255, 255, 0.8);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  &:hover {
    box-shadow:
      inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.4),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.7),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.7),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }

  &:hover .wrap::before {
    transform: translateY(-5%);
  }

  &:hover .wrap::after {
    opacity: 0.4;
    transform: translateY(5%);
  }

  &:hover .wrap p {
    transform: translateY(-4%);
  }

  &:active {
    transform: translateY(4px);
    box-shadow:
      inset 0 0.3rem 0.5rem rgba(255, 255, 255, 0.5),
      inset 0 -0.1rem 0.3rem rgba(0, 0, 0, 0.8),
      inset 0 -0.4rem 0.9rem rgba(255, 255, 255, 0.4),
      0 3rem 3rem rgba(0, 0, 0, 0.3),
      0 1rem 1rem -0.6rem rgba(0, 0, 0, 0.8);
  }
`;