// app/about-us/page.js
import SoftwareDevelopment  from "@/components/ServicesComponents/SoftwareDevelopment";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Custom Software Development Solutions in Kolkata, India",
  description:
    "Get tailor-made Software Development services in Kolkata, including CRM, ERP, and enterprise solutions designed for efficiency and scale.",
    keywords:
      "Custom software development, Bespoke software solutions, Enterprise software development company, Software engineering services, AI development company, Machine learning development, Generative AI integration, Blockchain development services, CRM development, ERP system development, Workflow automation software, Legacy system modernisation, DevOps services, Cloud-native development, SaaS product development, Software development outsourcing",
  openGraph: {
    type: "website",
    title: "Custom Software Development Solutions in Kolkata, India",
    description:
      "Get tailor-made Software Development services in Kolkata, including CRM, ERP, and enterprise solutions designed for efficiency and scale.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development Solutions in Kolkata, India",
    description:
      "Get tailor-made Software Development services in Kolkata, including CRM, ERP, and enterprise solutions designed for efficiency and scale.",
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
      <SoftwareDevelopment />
    </>
  );
}
