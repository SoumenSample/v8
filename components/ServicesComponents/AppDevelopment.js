"use client";
import React from "react";
import {
  FaAndroid, FaApple, FaReact, FaCode, FaMobileAlt, FaCloud, FaDatabase, FaNodeJs, FaBolt,
} from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import ServicePage from "@/components/ServicePage";

export default function AppDevelopment() {
  const subServices = [
    {
      title: "iOS App Development",
      description: " High-quality, secure iOS apps optimized for performance and usability.",
    },
    {
      title: "Android App Development",
      description: "PPowerful, scalable Android apps built for diverse global audiences.",
    },
    {
      title: "Cross-Platform Apps",
      description: "Single-codebase solutions using Flutter and React Native for seamless apps on both iOS and Android.",
    },
    {
      title: "Flutter App Development",
      description: " Seamless apps that run smoothly across iOS and Android devices.",
    },
    {
      title: "React Native App Development",
      description: "  Dynamic, cross-platform mobile apps using React Native’s robust framework.",
    },
    {
      title: "Flutter App Development",
      description: "Fast, beautiful apps with native performance using Google’s Flutter SDK.",
    },
     {
      title: "Maintenance & Fix",
      description: " Continuous support ensuring your app stays fast, secure, and updated.",
    },
  ];

  const useCases = [
    {
      title: "Real Estate",
      description: " Property search, virtual tours, agent connections, and mortgage calculators (e.g., Zillow, Zoopla).",
    },
    {
      title: "Home Services",
      description: "On-demand booking for cleaners, plumbers, electricians, and landscapers (e.g., TaskRabbit).",
    },
    {
      title: "Neighborhood & Community",
      description: "Local news, event listings, community forums, and package delivery notifications (e.g., Nextdoor).",
    },
    {
      title: "Pet Care",
      description: "Finding local pet sitters, walkers, vets, and tracking pet activity (e.g., Rover).",
    },
    {
      title: "Dating & Social Connection",
      description: "Matching algorithms, profile creation, and messaging platforms (e.g., Tinder, Bumble).",
    },
    {
      title: "Transportation & Ride-Hailing",
      description: "Booking rides, ride-sharing, and real-time tracking (e.g., Uber, Lyft).",
    },
    {
      title: "Tourism & Travel",
      description: " Booking flights and hotels, discovering attractions, and accessing digital tour guides (e.g., Airbnb Experiences, TripAdvisor).",
    },
    {
      title: "Navigation & Maps",
      description: "Turn-by-turn directions, live traffic updates, and location discovery (e.g., Google Maps, Waze).",
    },
    {
      title: "E-commerce & Retail",
      description: "Mobile shopping, personalized recommendations, and order tracking (e.g., Amazon, Shopify stores).",
    },
    {
      title: "Finance & Banking (FinTech)",
      description: "Mobile banking, peer-to-peer payments, investment tracking, and budgeting (e.g., Monzo, PayPal, Robinhood).",
    },
    {
      title: "Food & Grocery Delivery",
      description: " Restaurant food delivery and grocery shopping with home delivery (e.g., Deliveroo, Instacart).",
    },
    {
      title: "Reservations & Bookings",
      description: "SBooking tables at restaurants, appointments for salons, or tickets for events (e.g., OpenTable, Eventbrite).",
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Remote doctor consultations, symptom checking, and health record access (e.g., Teladoc, NHS App).",
    },
    {
      title: "Fitness & Wellness",
      description: "Workout plans, activity tracking, and meditation guides (e.g., Strava, MyFitnessPal, Headspace).",
    },
    {
      title: "Mental Health",
      description: " Access to therapists, mood tracking, and mental wellness exercises (e.g., Calm, BetterHelp).",
    },
    {
      title: "Enterprise & Business Operations",
      description: "Internal tools for communication, project management, and inventory tracking (e.g., Salesforce, Slack).",
    },
    {
      title: "Education & E-Learning (EdTech)",
      description: "Online courses, virtual classrooms, and language learning (e.g., Duolingo, Khan Academy).",
    },
    {
      title: "Productivity & Utilities",
      description: " Note-taking, to-do lists, document scanning, and cloud storage (e.g., Evernote, Google Workspace).",
    },
    {
      title: "Logistics & Supply Chain",
      description: " Package tracking, fleet management, and inventory optimization for businesses (e.g., Flexport).",
    },
    {
      title: "Media & Entertainment",
      description: "Streaming music, podcasts, and video-on-demand (e.g., Spotify, Netflix).",
    },
    {
      title: "Business Productivity Tools",
      description: "Smart apps for task management, internal communication, and workflow automation.",
    },
    {
      title: "Gaming",
      description: " A vast range from casual puzzle games to complex multiplayer online games (e.g., Candy Crush, PUBG Mobile).",
    },

    {
      title: "Social Media",
      description: " Content sharing, news feeds, and short-form video platforms (e.g., Instagram, TikTok, X/Twitter).",
    },

    {
      title: "Agriculture (AgriTech)",
      description: " Monitoring crop health, weather forecasts, and managing farm equipment (e.g., FarmLogs).",
    },{
      title: "Non-Profit & Social Causes",
      description: "Donation platforms, volunteer coordination, and raising awareness for causes.",
    },
    {
      title: "Legal Tech",
      description: "Document automation, finding lawyers, and managing legal cases.",
    },
    {
      title: "Insurance (InsurTech)",
      description: "Filing claims, managing policies, and getting quotes directly from a phone.",
    },
    {
      title: "Manufacturing & IoT",
      description: "Monitoring factory equipment and managing smart devices via Industrial IoT.",
    },
    {
      title: "Recruitment & HR",
      description: "Job searching, candidate screening, and applying for roles (e.g., LinkedIn, Indeed).",
    },
    {
      title: "Weather & Environment",
      description: "Real-time weather alerts, air quality monitoring, and disaster preparedness.",
    },
     {
      title: "Automotive",
      description: " Connected car apps for remote control, diagnostics, and finding fuel/parking (e.g., Tesla App).",
    },

  ];

  const technologies = [
    { name: "Flutter", icon: <FaFlutter size={22} /> },
    { name: "React Native", icon: <FaReact size={22} /> },
    { name: "Swift", icon: <FaApple size={22} /> },
    { name: "Kotlin", icon: <FaAndroid size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "Firebase", icon: <FaDatabase size={22} /> },
    { name: "AWS Amplify", icon: <FaCloud size={22} /> },
    { name: "REST APIs", icon: <FaCode size={22} /> },
    { name: "GraphQL", icon: <FaBolt size={22} /> },
    { name: "Java", icon: <FaJava  size={22} /> },
    { name: "TypeScript", icon: <SiTypescript size={22} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
  ];

  return (
    <ServicePage
      title="App Development"
      description="We build powerful, user-friendly, and high-performance mobile applications for iOS, Android, and cross-platform ecosystems."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
