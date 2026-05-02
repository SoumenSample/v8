"use client";
import React from "react";
import {
  FaPaintBrush, FaDraftingCompass, FaDesktop, FaMobileAlt, FaFigma, FaSketch, FaEye, FaUser,FaBookOpen,FaUserCheck, FaProjectDiagram 
} from "react-icons/fa";
import {
  SiFramer,
  SiHotjar,
  SiUsabilityhub,
  SiStorybook,
  SiMiro,
  SiZeroheight,
  SiProtopie,
} from "react-icons/si";
import { TbBrandAdobeIllustrator } from "react-icons/tb";
import { FaFilm } from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function UiUxDesign() {
  const subServices = [
    {
      title: "UI Design",
      description: "We craft stunning, consistent interfaces that align with your brand and enhance user engagement.",
    },
    {
      title: "UX Research",
      description: "Beautiful, intuitive interfaces built for performance and seamless scalability.",
    },
    {
      title: "Mobile App Design",
      description: "Native-feeling mobile experiences designed for engagement, performance, and growth.",
    },
    {
      title: "Mobile App Design",
      description: "Design pixel-perfect, intuitive mobile interfaces optimized for iOS and Android platforms.",
    },
    {
      title: "UX Design",
      description: "Data-driven user insights to build products that truly resonate and scale effectively.",
    },
    {
      title: "Website Redesign",
      description: "Transform your site into a modern, high-converting asset built for future growth.",
    },
    {
      title: "Prototyping & Wireframing",
      description: "Interactive prototypes to validate user flows and ensure a solid, scalable foundation.",
    },
    {
      title: "User Testing",
      description: "Real user feedback to identify issues and refine products for optimal performance.",
    },
    
  ];

  const useCases = [
    {
      title: "SaaS (Software-as-a-Service)",
      description: "Productivity tools, CRM platforms, and business software interfaces.",
    },
    {
      title: "Mobile Applications",
      description: "iOS and Android apps across all categories.",
    },
    {
      title: "Web Platforms",
      description: "Social networks, marketplaces, and community platforms.",
    },
    {
      title: "Gaming & Entertainment",
      description: "Game interfaces, streaming services, and interactive media.",
    },
    {
      title: "AI & Machine Learning",
      description: "Complex dashboard interfaces for data visualization and control.",
    },
    {
      title: "Telemedicine",
      description: "Virtual consultation platforms and patient portals.",
    },
    {
      title: "Medical Devices",
      description: "Interfaces for diagnostic equipment and health monitoring devices.",
    },
    {
      title: "Fitness & Wellness",
      description: "Workout apps, meditation guides, and nutrition trackers.",
    },
    {
      title: "Mental Health",
      description: "Therapy platforms, mood tracking, and mental wellness apps.",
    },
    {
      title: "Pharmaceutical",
      description: " Patient education platforms and clinical trial interfaces.",
    },
    {
      title: "FinTech",
      description: " Banking apps, investment platforms, and payment systems.",
    },
    {
      title: "Insurance",
      description: "Claims processing, policy management, and customer portals.",
    },
    {
      title: "E-commerce",
      description: "Online stores, product discovery, and checkout experiences.",
    },
    {
      title: "Real Estate",
      description: "Property search platforms, virtual tours, and agent tools.",
    },
    {
      title: "Enterprise Software",
      description: "Internal tools, dashboards, and workflow systems.",
    },
    {
      title: "Mobility & Ride-Sharing",
      description: "Transportation apps, navigation, and booking systems.",
    },
    {
      title: "Logistics & Supply Chain",
      description: "Tracking systems, inventory management, and delivery apps.",
    },
    {
      title: "Travel & Hospitality",
      description: "Booking engines, airline apps, and hotel management.",
    },
    {
      title: "Automotive",
      description: " In-car interfaces, connected car apps, and dealership tools.",
    },
    {
      title: "Aviation",
      description: " Flight operations, crew management, and passenger services.",
    },
    {
      title: "EdTech",
      description: "Learning platforms, classroom tools, and educational games.",
    },
    {
      title: "Government Services",
      description: " Citizen portals, digital forms, and public information systems.",
    },
    {
      title: "Non-Profit & NGOs",
      description: "Donation platforms, volunteer management, and awareness campaigns.",
    },
    {
      title: "Publishing & Media",
      description: "News apps, digital magazines, and content platforms.",
    },
    {
      title: "Museums & Cultural Institutions",
      description: "Virtual consultation platforms and patient portals.",
    },
    {
      title: "Manufacturing",
      description: "Control panels, monitoring systems, and equipment interfaces.",
    },
    {
      title: "Agriculture",
      description: " Farm management tools, equipment controls, and monitoring systems.",
    },
    {
      title: "Energy & Utilities",
      description: "Smart grid controls, consumption tracking, and service management.",
    },
    {
      title: "Construction & Architecture",
      description: "Project management, BIM tools, and design software.",
    },
    {
      title: "Legal Tech",
      description: "Case management, document review, and legal research platforms.",
    },
    
  ];

  const technologies = [
    { name: "Figma", icon: <FaFigma size={22} /> },
    { name: "Adobe XD", icon: <FaPaintBrush size={22} /> },
    { name: "Sketch", icon: <FaSketch size={22} /> },
    { name: "Zeroheight", icon: <FaBookOpen  size={22} /> },
    { name: "Framer", icon: <SiFramer  size={22} /> },
    { name: "Hotjar", icon: <SiHotjar size={22} /> },
    { name: "UsabilityHub", icon: <FaUserCheck   size={22} /> },
    { name: "Adobe Illustrator", icon: <TbBrandAdobeIllustrator size={22} /> },
    { name: "ProtoPie", icon: <FaProjectDiagram   size={22} /> },
    { name: "After Effects", icon: <FaFilm size={22} /> },
    { name: "Miro / FigJam", icon: <SiMiro  size={22} /> },
    { name: "Storybook", icon: <SiStorybook  size={22} /> },
  ];

  return (
    <ServicePage
      title="UI / UX Design"
      description="We craft intuitive, user-centered designs that blend creativity with functionality to deliver seamless digital experiences."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
