// app/about-us/page.js
import ResearchAndAnalytics  from "@/components/ServicesComponents/ResearchAndAnalytics";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Research & Analytics Services for Business Growth",
  description:
    "Leverage data-driven insights with our Research & Analytics services. Optimize your strategy and decision-making in Kolkata and beyond.",
    keywords:
      "Market research services, Data analytics consulting, Business intelligence services, Data science consulting, Predictive analytics, Competitive analysis report, Customer segmentation analysis, Quantitative market research, AI-powered data analysis, Real-time data processing, Data governance and compliance, Big Data solutions, Actionable business insights, Data-driven decision making, Market trend analysis",
  openGraph: {
    type: "website",
    title: "Research & Analytics Services for Business Growth",
    description:
      "Leverage data-driven insights with our Research & Analytics services. Optimize your strategy and decision-making in Kolkata and beyond.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Analytics Services for Business Growth",
    description:
      "Leverage data-driven insights with our Research & Analytics services. Optimize your strategy and decision-making in Kolkata and beyond.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* ✅ Client Component for dynamic canonical */}
      <DynamicCanonical />
      <ResearchAndAnalytics />
    </>
  );
}
