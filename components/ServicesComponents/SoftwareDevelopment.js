"use client";
import React from "react";
import {
  FaJava, FaPython, FaNodeJs, FaReact, FaDatabase, FaCloud, FaCogs, FaDocker, FaJs
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import ServicePage from "@/components/ServicePage";

export default function SoftwareDevelopment() {
  const subServices = [
    {
      title: "Progressive Web App (PWA) Development",
      description: "Building fast, reliable web applications that offer a native app-like experience directly in the browser, with features like offline functionality, push notifications, and home screen installation without app store deployment.",
    },
    {
      title: "AI & Machine Learning Integration",
      description: "Designing and implementing intelligent features—such as predictive analytics, natural language processing, computer vision, and personalized recommendations—into existing or new software products to automate processes and enhance user experiences.",
    },
    {
      title: " E-Commerce Solutions",
      description: "Creating robust online stores with secure payment gateways, inventory management, and seamless user experiences using platforms like Shopify Plus, WooCommerce, or custom builds.",
    },
    {
      title: " Enterprise Software Solutions",
      description: "Developing powerful, integrated systems (like ERP and CRM) to streamline internal business operations, improve data flow, and enhance productivity across departments.",
    },
    {
      title: "API Development & Integration",
      description: "Building secure and well-documented Application Programming Interfaces (APIs) and connecting disparate software systems (like payment processors or CRM) for seamless data exchange.",
    },
    {
      title: "Cloud Migration & DevOps",
      description: "Helping businesses move infrastructure and applications to the cloud (AWS, Azure, GCP) and implementing DevOps practices for faster, more reliable software deployments.",
    },
      {
      title: "UI/UX Design & Prototyping",
      description: "Crafting intuitive and visually appealing user interfaces and experiences through user research, wireframing, and interactive prototypes to ensure user satisfaction and engagement.",
    },
      {
      title: "Software Modernization (Legacy System Overhaul)",
      description: "Upgrading outdated software, frameworks, and languages to modern, secure, and maintainable technology stacks to improve performance and reduce operational costs.",
    },
      {
      title: " Quality Assurance & Software Testing",
      description: "Providing comprehensive testing services—including automated, manual, and performance testing—to identify bugs, ensure security, and guarantee software reliability before launch.",
    },
      {
      title: "MVP (Minimum Viable Product) Development",
      description: "Rapidly building a core-version of a product with essential features to validate a business idea, gather user feedback, and attract early-stage investors.",
    },
      {
      title: " SaaS (Software-as-a-Service) Product Development",
      description: "Designing, building, and launching scalable multi-tenant cloud applications that customers can access via subscription, handling everything from architecture to billing.",
    },
      {
      title: "Data Engineering & Analytics Platforms",
      description: "Developing systems for collecting, processing, and visualizing large datasets to provide actionable business intelligence, reports, and dashboards for data-driven decision-making.",
    },
      {
      title: "IoT (Internet of Things) Solutions",
      description: "*Creating software that connects and manages smart devices, sensors, and hardware, enabling data collection, remote monitoring, and automation for various industries.",
    },
      {
      title: " Digital Transformation Consulting",
      description: "Advising businesses on their technology strategy, process digitization, and tool selection to improve efficiency, enhance customer experience, and stay competitive.",
    },
      {
      title: "Ongoing Support & Maintenance",
      description: "Offering continuous technical support, regular updates, security patching, and performance monitoring to ensure long-term software health and operational stability.",
    },
  ];

  const useCases = [
    {
      title: "FinTech & Digital Banking",
      description: "Core banking systems, peer-to-peer payment platforms, mobile banking apps, and personal finance management tools.",
    },
    {
      title: "Insurance (InsurTech)",
      description: "Platforms for automated claims processing, usage-based insurance, policy management, and AI-powered risk assessment.",
    },
    {
      title: "E-Commerce & Retail",
      description: "Custom online storefronts, omnichannel retail platforms, inventory management systems, and personalized recommendation engines.",
    },
    {
      title: "Wealth Management & Trading",
      description: " Algorithmic trading systems, robo-advisor platforms, portfolio management dashboards, and secure client portals.",
    },
    {
      title: "Lending & Credit",
      description: "Loan origination software, automated underwriting systems, credit scoring models, and peer-to-peer lending marketplaces.",
    },
    {
      title: "Healthcare & Telemedicine",
      description: "Electronic Health Record (EHR) systems, remote patient monitoring platforms, telehealth video consultation software, and hospital management systems.",
    },
     {
      title: "Pharmaceutical & Life Sciences",
      description: "Clinical trial management software, drug discovery data analysis platforms, regulatory compliance tracking, and pharmacovigilance systems.",
    },
     {
      title: "Medical Devices",
      description: " Embedded software for diagnostic equipment, patient monitoring devices, and software as a Medical Device (SaMD).",
    },
     {
      title: "Fitness & Wellness",
      description: "Gym management software, class booking systems, wearable device data integration platforms, and member engagement apps.",
    },
     {
      title: "Logistics & Supply Chain",
      description: "Warehouse management systems, fleet tracking and optimization software, supply chain visibility platforms, and last-mile delivery solutions.",
    },
     {
      title: "Manufacturing & Industry 4.0",
      description: " Manufacturing Execution Systems (MES), Industrial IoT (IIoT) monitoring platforms, predictive maintenance software, and production line automation.",
    },
     {
      title: "Agriculture (AgriTech)",
      description: "* Farm management software, precision agriculture tools using drones and sensors, irrigation control systems, and crop marketplaces.",
    },
     {
      title: "Energy & Utilities",
      description: "Smart grid management systems, energy trading platforms, predictive maintenance for infrastructure, and consumer energy usage monitoring apps.",
    },
     {
      title: "Construction & Architecture",
      description: "Project management software, Building Information Modeling (BIM) tools, equipment tracking, and architectural design simulation software.",
    },
     {
      title: "Education (EdTech)",
      description: "Learning Management Systems (LMS), virtual classroom platforms, student information systems, and adaptive learning applications.",
    },
     {
      title: "Legal (LegalTech)",
      description: "Case management software, e-discovery and document review platforms, legal research AI tools, and automated contract generation.",
    },
     {
      title: "Real Estate (PropTech)",
      description: "Property management platforms, virtual tour software, real estate investment analysis tools, and smart building management systems.",
    },
     {
      title: "Media & Entertainment",
      description: "Content Management Systems (CMS), video-on-demand platforms, digital rights management, and audience analytics dashboards.",
    },
     {
      title: "Travel & Hospitality",
      description: " Central reservation systems, airline booking engines, hotel property management systems, and travel itinerary planning apps.",
    },
     {
      title: "Non-Profit & NGOs",
      description: "Donor management systems, fundraising campaign platforms, volunteer coordination software, and program impact tracking tools.",
    },

     {
      title: "Government & Public Sector",
      description: "Citizen service portals, digital identity systems, internal workflow automation, and open data platforms.",
    },
     {
      title: "Telecommunications",
      description: "Billing and customer care systems, network management software, and 5G service orchestration platforms.",
    },
     {
      title: "Software & SaaS (B2B)",
      description: " The foundational sector—developing the core products that other businesses use, such as CRM, marketing automation, and collaboration tools",
    },
     {
      title: "Advertising & MarTech",
      description: "Ad serving platforms, customer data platforms (CDP), marketing automation suites, and campaign analytics tools.",
    },
     {
      title: "Cybersecurity",
      description: " Security information and event management (SIEM) software, threat detection platforms, vulnerability management systems, and encryption tools.",
    },
     {
      title: "Gaming & Esports",
      description: "Game development engines, live ops and analytics platforms, anti-cheat systems, and esports tournament management software.",
    },
     {
      title: "Space & Aerospace",
      description: "Satellite operation software, flight simulation, mission planning tools, and aerospace component design software",
    },
     {
      title: "Blockchain & Web3",
      description: "Cryptocurrency exchanges, smart contract development, decentralized application (dApp) platforms, and blockchain-based supply chain solutions.",
    },
     {
      title: "Automotive & Mobility",
      description: "Connected car software, autonomous driving algorithms, electric vehicle charging network management, and fleet sharing platforms.",
    },
     {
      title: "Environmental Tech (CleanTech)",
      description: "Carbon footprint tracking software, renewable energy management platforms, smart waste management systems, and environmental data analytics.",
    },

  ];

  const technologies = [
    { name: "Java", icon: <FaJava size={22} /> },
    { name: "Python", icon: <FaPython size={22} /> },
    { name: "Node.js", icon: <FaNodeJs size={22} /> },
    { name: "React.js", icon: <FaReact size={22} /> },
    { name: "MySQL", icon: <FaDatabase size={22} /> },
    { name: "PostgreSQL", icon: <FaDatabase size={22} /> },
    { name: "AWS", icon: <FaCloud size={22} /> },
    { name: "Docker", icon: <FaDocker size={22} /> },
    { name: "Kubernetes", icon: <FaCogs size={22} /> },
    { name: "Next.js", icon: <FaJs size={22} /> },
    { name: "Typescript ", icon: <SiTypescript size={22} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={22} /> },
  ];

  return (
    <ServicePage
      title="Software Development"
      description="We engineer scalable, secure, and performance-oriented software solutions customized to meet unique business needs."
      subServices={subServices}
      useCases={useCases}
      technologies={technologies}
    />
  );
}
