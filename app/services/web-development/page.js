// app/about-us/page.js
import WebDevelopment from "@/components/ServicesComponents/WebDevelopment";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Expert Web Development Services in Kolkata, India",
  description:
    "Need a powerful website? We offer full-stack Web Development services in Kolkata for scalable, secure, and high-performing business solutions.",
    keywords:
      "Web development services, Custom website design company, Web development agency, E-commerce development services, Next.js development, React development services, Headless CMS development, Serverless web architecture, Progressive Web App (PWA) development, AI-driven web personalization, Web security services, High-performance website, B2B website development, Enterprise web solutions, SaaS platform development",
  openGraph: {
    type: "website",
    title: "Expert Web Development Services in Kolkata, India",
    description:
      "Need a powerful website? We offer full-stack Web Development services in Kolkata for scalable, secure, and high-performing business solutions.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Web Development Services in Kolkata, India",
    description:
      "Need a powerful website? We offer full-stack Web Development services in Kolkata for scalable, secure, and high-performing business solutions.",
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

export default function Web() {
  return (
    <>
    
      {/* ✅ Client Component for dynamic canonical */}
      <DynamicCanonical />
     
        <WebDevelopment />
      
    </>
  );
}
