"use client";
import React from "react";
import {
  FaReact, FaNodeJs, FaCode, FaDatabase, FaJs, FaCss3Alt, FaMobileAlt,
  FaWordpress, FaGlobe, FaDraftingCompass
} from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";
import ServicePage from "@/components/ServicePage";

export default function WebDevelopment() {
  const subServices = [
    {
      title: "MERN Stack Development",
      description: "Modern, scalable web apps using MongoDB, Express, React, Node.js.",
    },
    {
      title: "Full Stack Next.js Development",
      description: " High-performance, SEO-friendly apps built with Next.js and Node.",
    },
    {
      title: "MEAN Stack",
      description: " Dynamic web solutions powered by MongoDB, Express, Angular, Node.js.",
    },
    {
      title: "MEVN Stack",
      description: "Fast, lightweight applications using MongoDB, Express, Vue, Node.js.",
    },
    {
      title: "PERN Stack",
      description: "Robust web platforms with PostgreSQL, Express, React, Node.js.",
    },
    {
      title: "LAMP Stack",
      description: " Reliable, secure solutions using Linux, Apache, MySQL, PHP.",
    },
     {
      title: "Django & Flask Stack",
      description: "  Python-powered backends delivering speed, flexibility, and scalability.",
    },
     {
      title: "Spring Stack",
      description: "  Enterprise-grade Java applications built for performance and security.",
    },
     {
      title: "WordPress",
      description: "  Custom, responsive, and user-friendly websites with seamless CMS control.",
    },
     {
      title: "Shopify",
      description: "Powerful, scalable eCommerce stores with smooth user experiences.",
    },
     {
      title: "Wix",
      description: " Beautiful, easy-to-manage websites for startups and small businesses.",
    },
     {
      title: "Squarespace",
      description: " Elegant, all-in-one web presence for creative professionals and brands.",
    },
     {
      title: "Webflow",
      description: "  Visually stunning, responsive websites with pixel-perfect precision.",
    },
     {
      title: "Framer",
      description: " Next-gen, animated web experiences with smooth performance and design.",
    },
    {
      title: "Maintenance and Fix",
      description: "  We can upgrade existing website with maintenance and fixing.",
    },
  ];

  const useCases = [
    {
      title: "Corporate Websites ",
      description: "Build brand presence and showcase company portfolios.",
    },
    {
      title: "Consulting Firms",
      description: " Generate leads and display professional expertise online.",
    },
    {
      title: "Real Estate Platforms",
      description: "List, filter, and manage property sales and rentals.",
    },
    {
      title: "Legal Services Portals",
      description: " Offer client bookings, document uploads, and consultation scheduling.",
    },
    {
      title: "Accounting & Finance Firms",
      description: "Display services, collect leads, and manage client interactions.",
    },
    {
      title: "Online Stores",
      description: "Sell physical or digital products globally with integrated payments.",
    },
    {
      title: "Fashion & Apparel Sites",
      description: " Showcase collections, lookbooks, and personalized shopping experiences.",
    },
    {
      title: "Food Delivery Platforms",
      description: "Enable online ordering, tracking, and customer reviews.",
    },
    {
      title: "Grocery & FMCG Stores",
      description: "Build convenient, subscription-based online marketplaces.",
    },
    {
      title: "Jewelry & Luxury Stores",
      description: " Create elegant, high-end digital storefronts with 3D previews.",
    },
    {
      title: "Travel Booking Platforms",
      description: "Manage tours, packages, and dynamic pricing options.",
    },
    {
      title: "Hotel & Resort Websites ",
      description: "Offer room bookings, reviews, and virtual tours.",
    },
    {
      title: "Destination Portals",
      description: "Inspire travelers with blogs, guides, and experiences.",
    },
    {
      title: "Airlines & Transport Services ",
      description: "Provide scheduling, online ticketing, and customer support systems.",
    },
    {
      title: "Hospital Websites",
      description: " Provide doctor profiles, online appointments, and patient records.",
    },
    {
      title: "Pharmacy & Healthcare E-commerce ",
      description: " Sell medicines and health products securely.",
    },
    {
      title: "Fitness & Yoga Platforms",
      description: " Manage memberships, online classes, and trainer bookings.",
    },
    {
      title: "Telemedicine Platforms",
      description: "Connect patients and doctors for secure virtual consultations.",
    },
    {
      title: "E-Learning Portals",
      description: "Offer courses, quizzes, and progress tracking.",
    },
    {
      title: "University & School Websites",
      description: "Manage admissions, departments, and event updates.",
    },
    {
      title: "Coaching Institute Platforms",
      description: " Accept enrollments and deliver online learning content.",
    },
    {
      title: "News & Magazine Websites ",
      description: "Publish articles, videos, and breaking stories.",
    },
    {
      title: "Music & Streaming Platforms ",
      description: "Stream songs, podcasts, or live events.",
    },
    {
      title: "Film & Production Studios",
      description: " Showcase portfolios, trailers, and upcoming projects.",
    },
    {
      title: "SaaS Dashboards",
      description: "Deliver real-time analytics and user management systems.",
    },
    {
      title: "Startup Landing Pages ",
      description: " Highlight product features and convert visitors into leads.",
    },
    {
      title: "IT Service Platforms ",
      description: "Present solutions, pricing, and client case studies.",
    },
    {
      title: "Government Portals ",
      description: "Provide citizen services, forms, and public announcements.",
    },
    {
      title: "NGO Websites",
      description: "Raise awareness, collect donations, and manage volunteers.",
    },
    {
      title: "Automotive Showrooms",
      description: " Display vehicle listings, specifications, and booking options.",
    },
  ];

  const technologies = [
    { name: "React.js", icon: <FaReact size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "Express.js", icon: <FaCode size={22} /> },
    { name: "MongoDB", icon: <FaDatabase size={22} /> },
    { name: "Next.js", icon: <FaJs size={22} /> },
    { name: "Tailwind CSS", icon: <FaCss3Alt size={22} /> },
    { name: "Wix", icon: <FaMobileAlt size={22} /> },
    { name: "PostgreSQL", icon: <FaFlutter size={22} /> },
    { name: "TypeScript", icon: <FaJs size={22} /> },
    { name: "WordPress", icon: <FaWordpress size={22} /> },
    { name: "Webflow", icon: <FaGlobe size={22} /> },
    { name: "Vercel", icon: <FaDraftingCompass size={22} /> },
  ];

  return (
    <ServicePage
      title="Web Development"
      description="At CSW, we craft high-performance, secure, and scalable web solutions tailored to your business goals."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
