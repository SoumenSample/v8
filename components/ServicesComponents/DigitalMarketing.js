"use client";
import React from "react";
import {
  FaBullhorn, FaChartLine, FaFacebook, FaGoogle, FaEnvelope, FaInstagram, FaTwitter, FaSearch,FaChartBar 
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";
import {
  SiHubspot,
  SiBuzzsumo,
  SiCanva,
  SiSemrush,
  SiAhrefs,
  SiGoogleanalytics,
  SiMoz,
  SiMailchimp,
  SiHootsuite,
  SiBuffer,
  SiFacebook,
} from "react-icons/si";

export default function DigitalMarketing() {
  const subServices = [
    {
      title: "Digital Marketing Audit & Strategy",
      description: "A complete analysis of your current online presence and performance, resulting in a customized, data-driven roadmap to achieve your business goals.",
    },
    {
      title: "Competitive Analysis",
      description: "In-depth research into your competitors' digital strategies, strengths, and weaknesses to identify market opportunities and threats.",
    },
    {
      title: "Target Audience & Buyer Persona Development",
      description: "   Defining and understanding your ideal customers—their demographics, behaviors, motivations, and pain points—to guide all marketing efforts.",
    },
    {
      title: "Technical SEO",
      description: "Optimizing website infrastructure (site speed, crawlability, mobile-friendliness, indexing) so search engines can easily find and rank your content.",
    },
    {
      title: "On-Page SEO",
      description: " Optimizing individual web pages (content, meta tags, headers, images) to rank higher and earn more relevant traffic for target keywords.",
    },
    {
      title: "Off-Page SEO & Link Building",
      description: "  Earning high-quality backlinks from other reputable websites to build authority, trust, and improve search engine rankings.",
    },
     {
      title: "Local SEO",
      description: " Optimizing your online presence to appear in local search results (Google Business Profile, local directories) for customers in your geographic area.",
    },
     {
      title: "Google Ads & Microsoft Advertising",
      description: "Managing pay-per-click (PPC) campaigns on search engines to drive immediate, high-intent traffic for specific products, services, or keywords.",
    },
     {
      title: "Social Media Advertising",
      description: "Creating and managing paid campaigns on platforms like Meta (Facebook/Instagram), LinkedIn, TikTok, and X (Twitter) to build brand awareness and generate leads.",
    },
     {
      title: "Programmatic & Display Advertising",
      description: "Using AI to automate the buying of ad space across thousands of websites to retarget visitors and reach new audiences with visual banner ads.",
    },
     {
      title: "Social Media Management",
      description: "Full-service management of your social media profiles, including content strategy, creation, posting, and community engagement.",
    },
     {
      title: "Social Media Strategy & Consulting",
      description: "  Developing a long-term plan for social media to build brand loyalty, increase engagement, and support broader business objectives.",
    },
     {
      title: "Content Strategy",
      description: "Planning a sustainable and effective approach to content creation that attracts, engages, and retains a clearly defined audience.",
    },

     {
      title: "Blog & Article Writing",
      description: "Creating high-quality, SEO-optimized written content to establish thought leadership and drive organic traffic.",
    },
     {
      title: "Video Marketing & Production",
      description: "Planning, scripting, and producing engaging video content for platforms like YouTube, TikTok, and social media feeds.",
    },
     {
      title: "Email Marketing",
      description: "Designing and executing email campaigns (newsletters, promotions, automated sequences) to nurture leads and retain customers.",
    },
     {
      title: "Copywriting",
      description: "Crafting persuasive and compelling text for websites, ads, emails, and landing pages that drives users to take action.",
    },

     {
      title: "Web Analytics & Reporting",
      description: " Setting up tools like Google Analytics and providing regular, insightful reports on website traffic, user behavior, and campaign performance.",
    },
     {
      title: "Conversion Rate Optimization (CRO)",
      description: " Systematically testing and improving website elements (like headlines, forms, and buttons) to increase the percentage of visitors who become customers.",
    },
     {
      title: "Landing Page Design & Optimization",
      description: " Creating and testing dedicated landing pages that are designed for a single purpose—to convert visitors into leads or customers.",
    },
     {
      title: "Influencer Marketing",
      description: "Identifying and partnering with relevant influencers to promote your brand to their engaged audience in an authentic way.",
    },
     {
      title: "Public Relations (Digital PR)",
      description: " Securing online media coverage, press mentions, and digital features to build brand reputation and earn valuable backlinks.",
    },
     {
      title: "E-commerce Marketing",
      description: "  Specialized services for online stores, including Amazon SEO, Shopify optimization, and product feed management.",
    },
     {
      title: "SMS / MMS Marketing",
      description: "Running permission-based text message campaigns for promotions, alerts, and transactional messages.",
    },
     {
      title: "Podcast Marketing",
      description: " Promoting a business through podcast advertising, launching a branded podcast, or securing guest appearances.",
    },
   

  ];

  const useCases = [
    {
      title: "E-commerce & D2C Brands",
      description: "Online stores selling directly to consumers via social media, SEO, and email marketing.",
    },
    {
      title: "Fashion & Apparel",
      description: "Leveraging visual platforms like Instagram and TikTok for brand storytelling and trend promotion.",
    },
    {
      title: "Beauty & Cosmetics",
      description: "Using influencer partnerships, tutorial content, and reviews to drive sales.",
    },
    {
      title: "Home Goods & Furniture",
      description: "Inspiring customers through visual platforms like Pinterest and Instagram.",
    },
    {
      title: "Fitness & Gym",
      description: "Attracting members through local SEO, social proof, and content marketing around health tips.",
    },
    {
      title: "Wellness & Self-Care",
      description: "Promoting mental health apps, supplements, and services via targeted content and influencers",
    },
     {
      title: "Wellness & Self-Care",
      description: "Promoting mental health apps, supplements, and services via targeted content and influencers",
    },
     {
      title: "Healthcare Providers",
      description: "Using local SEO and educational content to attract patients and build trust.",
    },
     {
      title: "Pharmaceuticals",
      description: "Educating both consumers and professionals through content marketing and targeted ads.",
    },
     {
      title: "Real Estate",
      description: " Using virtual tours, local SEO, and social media ads to connect buyers with properties.",
    },
     {
      title: "Home Improvement",
      description: "Targeting DIY enthusiasts with how-to content on YouTube and visual platforms.",
    },
     {
      title: "Automotive",
      description: "Using video marketing, local SEO for dealerships, and targeted ads for new models.",
    },
     {
      title: "Transportation & Logistics",
      description: "B2B digital marketing to reach businesses needing shipping and logistics solutions.",
    },
     {
      title: "Education & E-Learning",
      description: " Reaching students globally through content marketing, SEO, and social media ads.",
    },
     {
      title: "B2B & SaaS",
      description: "Using LinkedIn marketing, content hubs, and webinars to generate qualified leads.",
    },
     {
      title: "Professional Services",
      description: " Building authority for consultants, lawyers, and accountants via content and SEO.",
    },
     {
      title: "Food & Beverage",
      description: "Driving foot traffic and delivery orders via local SEO, social media, and food delivery apps.",
    },
     {
      title: "Wellness & Self-Care",
      description: "Promoting mental health apps, supplements, and services via targeted content and influencers",
    },
     {
      title: "Wellness & Self-Care",
      description: "Promoting mental health apps, supplements, and services via targeted content and influencers",
    },
     {
      title: "Restaurants & Cafes",
      description: "Using Instagram, Google Business Profile, and influencer collaborations.",
    },
     {
      title: "Media & Entertainment",
      description: "Promoting shows, movies, and music through social media, influencers, and content partnerships.",
    },
     {
      title: "Gaming",
      description: " Building hype for new releases via streaming platforms, social media, and influencer marketing.",
    },
     {
      title: "Manufacturing",
      description: "B2B digital strategies to reach other businesses needing components or equipment.",
    },
     {
      title: "Construction",
      description: "Using local SEO, portfolio showcases, and case studies to attract commercial clients.",
    },
     {
      title: "Travel & Tourism",
      description: " Inspiring travelers with visual content and targeting them with personalized offers.",
    },
     {
      title: "Hospitality",
      description: "Driving bookings through SEO, review management, and social media ads.",
    },
     {
      title: "Finance & FinTech",
      description: " Building trust and acquiring users through educational content and targeted advertising.",
    },
     {
      title: "Insurance",
      description: "Using PPC and SEO to capture high-intent users searching for coverage.",
    },
     {
      title: "Non-Profit",
      description: "Raising awareness and driving donations through social media and email campaigns.",
    },
     {
      title: "Recruitment & HR",
      description: "Attracting talent through LinkedIn, job boards, and employer branding.",
    },
     {
      title: "Arts & Culture",
      description: "Promoting events, exhibitions, and memberships through social media and email.",
    },
     {
      title: "Pets & Veterinary",
      description: "Engaging pet owners with helpful content and targeted local ads.",
    },
     {
      title: "Renewable Energy",
      description: "Educating consumers and businesses on sustainability solutions.",
    },
     {
      title: "Recruitment & HR",
      description: "Attracting talent through LinkedIn, job boards, and employer branding.",
    },
  ];

  const technologies = [
    { name: "Google Ads", icon: <FaGoogle size={22} /> },
    { name: "HubSpot CRM or Salesforce", icon: <SiHubspot size={22} /> },
    { name: "BuzzSumo", icon: <FaChartBar   size={22} /> },
    { name: "Canva", icon: <SiCanva  size={22} /> },
    { name: "SEMrush or Ahrefs", icon: <SiSemrush  size={22} /> },
    { name: "Google Tag Manager", icon: <FaGoogle  size={22} /> },
    { name: "Hootsuite or Buffer", icon: <SiHootsuite  size={22} /> },
    { name: "Marketing Automation", icon: <FaBullhorn size={22} /> },
    { name: "Meta Business Suite", icon: <SiFacebook  size={22} /> },
    { name: "Google Analytics", icon: <SiGoogleanalytics  size={22} /> },
    { name: "Moz Pro", icon: <FaChartLine   size={22} /> },
    { name: "Mailchimp ", icon: <SiMailchimp  size={22} /> },
  ];

  return (
    <ServicePage
      title="Digital Marketing"
      description="We help brands grow online with strategic campaigns, creative content, and performance-driven digital marketing solutions."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
