"use client";
import React from "react";
import {
  FaPaintBrush, FaPenNib, FaImage, FaPencilRuler, FaFilePdf, FaCamera, FaBrush, FaLayerGroup,
} from "react-icons/fa";
import ServicePage from "@/components/ServicePage";

export default function GraphicDesign() {
  const subServices = [
    {
      title: "Logo Design & Logo Systems",
      description: "Creating unique, memorable logos with clear usage guidelines for various applications.",
    },
    {
      title: "Brand Style Guides",
      description: "Developing comprehensive manuals that define logo usage, color palettes, typography, and imagery to ensure brand consistency.",
    },
    {
      title: "Brand Strategy & Visual Identity",
      description: " Defining the core visual elements (colors, fonts, imagery) that express a brand's personality and values.",
    },
    {
      title: "Brand Naming & Tagline Development",
      description: "Crafting memorable names and slogans that capture the essence of a business.",
    },
    {
      title: "Business Card & Stationery Design",
      description: "Designing cohesive letterheads, envelopes, and business cards that make a professional first impression.",
    },
    {
      title: "Brochure & Catalog Design",
      description: "Creating informative and visually appealing multi-page documents for products, services, or events.",
    },
     {
      title: "Flyer & Poster Design",
      description: "Designing eye-catching promotional materials for events, sales, or announcements.",
    },
     {
      title: "Packaging & Label Design",
      description: "Developing product packaging that stands out on shelves and communicates key information effectively.",
    },
     {
      title: "Editorial & Magazine Layout",
      description: "Designing the interior and cover layouts for books, magazines, and reports.",
    },
     {
      title: "Website & App UI Design:",
      description: "Designing the visual interface for websites and mobile applications, including buttons, icons, and menus.",
    },
     {
      title: "Social Media Graphics & Banners",
      description: " Creating profile images, post graphics, cover photos, and story content optimized for each platform.",
    },
     {
      title: "Email Newsletter Design",
      description: "Crafting visually engaging and click-worthy email templates for marketing campaigns.",
    },
     {
      title: "Digital Ad & Banner Design",
      description: " Designing static and animated banners for online advertising campaigns (Google Display, social media).",
    },
     {
      title: "Presentation Design",
      description: "Transforming decks and slides (for PowerPoint, Google Slides, Keynote) into professional, visually compelling presentations.",
    },
     {
      title: "Icon & Illustration Design",
      description: "Creating custom icons, characters, and illustrations to enhance digital and print materials.",
    },
     {
      title: "Infographic Design",
      description: " Transforming complex data and information into easy-to-understand, engaging visual stories.",
    },
     {
      title: "Signage & Environmental Graphics",
      description: "Designing interior and exterior signs, trade show booths, and office branding.",
    },
     {
      title: "Billboard & OOH (Out-of-Home) Advertising",
      description: "Creating large-scale, impactful advertisements for billboards and public spaces.",
    },
     {
      title: "Trade Show & Event Materials",
      description: "Designing banners, booth graphics, and promotional items for events.",
    },
     {
      title: "Motion Graphics & Animation",
      description: "Creating animated logos, explainer videos, and short animations for digital platforms.",
    },
     {
      title: "Typography & Lettering",
      description: " Designing custom fonts, hand-lettered logos, and artistic typographic compositions.",
    },
     {
      title: "Photo Editing & Retouching",
      description: "Enhancing, color-correcting, and manipulating photographs for professional use.",
    },
     {
      title: "T-Shirt & Merchandise Design",
      description: "* Creating artwork for apparel, mugs, stickers, and other promotional products.",
    },
     {
      title: "Storyboarding",
      description: "Creating visual sequences to plan out videos, animations, or commercials.",
    },
    
  ];

  const useCases = [
    {
      title: "Fashion & Apparel",
      description: "Clothing line logos, lookbooks, hang tags, packaging, and promotional materials.",
    },
    {
      title: "Food & Beverage",
      description: " Product packaging, label design, menu design, and promotional posters.",
    },
    {
      title: "Beauty & Cosmetics",
      description: " Elegant packaging, brand identity, marketing collateral, and in-store displays.",
    },
    {
      title: "Home Goods & Furniture",
      description: "Catalog design, product photography styling, and branding for stores.",
    },
    {
      title: "E-commerce & D2C Brands",
      description: "Website graphics, social media assets, product mockups, and digital ads.",
    },
    {
      title: "Healthcare & Medical",
      description: "Patient education materials, clinic branding, medical device packaging, and website design.",
    },
     {
      title: "Fitness & Gym",
      description: " Brand identity, membership sales kits, class schedule graphics, and apparel design.",
    },
     {
      title: "Wellness & Self-Care",
      description: "Packaging for supplements, branding for spas, and calming visual content for apps.",
    },
     {
      title: "Pharmaceutical",
      description: " Informative brochure design, clinical study summaries, and product launch materials.",
    },
     {
      title: "Education & E-Learning",
      description: "Textbook layouts, online course graphics, school/university branding, and educational apps.",
    },
     {
      title: "B2B & SaaS",
      description: "Website and app UI, icon systems, whitepaper layouts, and sales presentation decks.",
    },
     {
      title: "Professional Services (Legal, Consulting)",
      description: "Corporate branding, report design, and professional presentations.",
    },
     {
      title: "Non-Profit & NGOs",
      description: "Campaign materials, annual reports, donation forms, and awareness-raising social media graphics.",
    },
     {
      title: "Real Estate",
      description: "Property listing brochures, agency branding, signage, and virtual tour graphics.",
    },
     {
      title: "Architecture & Interior Design",
      description: "Portfolio layouts, proposal decks, and branding for firms.",
    },
     {
      title: "Manufacturing",
      description: "Technical data sheets, product catalogs, trade show booth graphics, and safety signage.",
    },
     {
      title: "Automotive",
      description: " Brochures, dealership signage, and digital marketing assets for new vehicle launches.",
    },
     {
      title: "Gaming",
      description: " Game UI/UX, character design, marketing assets, and merchandise.",
    },
     {
      title: "Film & Television",
      description: "Key art (posters), title sequences, and promotional materials.",
    },
     {
      title: "Music Industry",
      description: "Album cover art, merchandise (t-shirts, posters), and tour promotional graphics.",
    },
     {
      title: "Publishing",
      description: "Book cover design, magazine layouts, and ebook formatting.",
    },
     {
      title: "Travel & Tourism",
      description: "Travel agency branding, tour brochures, and website visuals.",
    },
     {
      title: "Hospitality (Hotels/Restaurants)",
      description: "Menu design, hotel branding, and environmental signage.",
    },
     {
      title: "Finance & FinTech:",
      description: "Corporate branding for banks, infographics for financial reports, and app UI design.",
    },
     {
      title: "Technology & Electronics",
      description: "Product packaging, user manual design, and trade show graphics.",
    },
     {
      title: "Arts & Culture",
      description: " Museum exhibition graphics, gallery show catalogs, and event posters.",
    },
     {
      title: "Sports Teams & Leagues",
      description: "Team logos, merchandise, program books, and social media graphics.",
    },
     {
      title: "Events & Weddings",
      description: "Invitations, programs, signage, and theming for special occasions.",
    },
     {
      title: "Agriculture (AgriTech)",
      description: "Branding for farming equipment, packaging for produce, and trade show materials.",
    },
     {
      title: "Government & Public Sector",
      description: " Public service announcement (PSA) graphics, informational brochures, and website design.",
    },
  ];

  const technologies = [
    { name: "Adobe Photoshop", icon: <FaImage size={22} /> },
    { name: "Adobe Illustrator", icon: <FaPenNib size={22} /> },
    { name: "Canva", icon: <FaBrush size={22} /> },
    { name: "Figma", icon: <FaPaintBrush size={22} /> },
    { name: "CorelDRAW", icon: <FaPencilRuler size={22} /> },
    { name: "Adobe Lightroom", icon: <FaCamera size={22} /> },
    { name: "InDesign", icon: <FaFilePdf size={22} /> },
    { name: "Blender", icon: <FaLayerGroup size={22} /> },
  ];

  return (
    <ServicePage
      title="Graphic Design"
      description="We deliver stunning, brand-consistent visuals that make a lasting impression — from digital creatives to full brand design systems."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
