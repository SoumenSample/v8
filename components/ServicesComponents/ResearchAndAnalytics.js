"use client";
import React from "react";
import { FaChartLine, FaDatabase, FaPython, FaChartBar, FaFileExcel } from "react-icons/fa";
import ServicePage from "@/components/ServicePage";
import {
  SiNumpy,
  SiPandas,
  SiPowerbi,
  SiMysql,
  SiGoogle,
  SiMicrosoftexcel,
  SiSeaborn,
  SiPlotly,
  SiDatabricks,
  SiApachespark,
  SiPytorch,
} from "react-icons/si";
import { IoLogoTableau } from "react-icons/io5";

export default function ResearchAndAnalytics() {
  const subServices = [
    {
      title: "Data Cleaning and Processing",
      description:
        "We prepare raw, unstructured data for accurate analysis through cleaning, transformation, and validation ensuring every insight you get is grounded in reliable, high-quality data.",
    },
    {
      title: "Platform Analysis and Review Aggregator",
      description:
        "Our system collects and analyzes customer reviews, product ratings, and seller performance across major e-commerce sites to uncover real-time market sentiment and consumer expectations.",
    },
    {
      title: "Consumer Research (Behaviour Analysis)",
      description:
        "We decode how consumers think and act tracking buying patterns, digital interactions, and feedback to identify emerging preferences and decision triggers.",
    },
    {
      title: "Branding Strategy",
      description:
        "We analyze consumer perception and competitive positioning to design branding recommendations that strengthen recognition, trust, and long-term loyalty.",
    },
    {
      title: "Demand Forecasting",
      description:
        "Using historical trends, sentiment signals, and predictive models, we estimate future demand patterns to help you optimize inventory, marketing, and pricing decisions.",
    },
    {
      title: "Pricing Intelligence and Product Differentiation Report",
      description:
        "We provide data-driven insights into market pricing, competitor positioning, and product uniqueness helping you set optimal prices and clearly define your competitive edge.",
    },
  ];

  const technologies = [
    { name: "NumPy", icon: <SiNumpy size={22} /> },
    { name: "Pandas", icon: <SiPandas size={22} /> },
    { name: "Tableau", icon: <IoLogoTableau size={22} /> },
    { name: "Power BI", icon: <FaChartLine size={22} /> },
    { name: "SQL", icon: <FaDatabase size={22} /> },
    { name: "Google Trends", icon: <SiGoogle size={22} /> },
    { name: "Excel", icon: <FaFileExcel size={22} /> },
    { name: "Seaborn", icon: <FaChartBar size={22} /> },
    { name: "Plotly JS", icon: <SiPlotly size={22} /> },
    { name: "Databricks", icon: <SiDatabricks size={22} /> },
    { name: "PySpark", icon: <SiApachespark size={22} /> },
    { name: "PyTorch", icon: <SiPytorch size={22} /> },
  ];

  return (
    <ServicePage
      title="Research & Analytics"
      description="At CSW, we empower businesses with data-driven insights through advanced analytics and research."
      subServices={subServices}
      technologies={technologies} 
    />
  );
}
