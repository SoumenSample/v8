// app/services/page.js
import ServicesPage from "@/components/ServicesPage";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Expert IT Services | in Howrah, Kolkata, India | Cyberspace Works",
  description:
    "Explore our full suite of professional services, including Web, App, and Software Development. Get expert help and a free quote today!",
    keywords:
      "Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics services, professional services, Hire Web Developer, App Developer, Software Developer, UI/UX Designer, Graphics Designer, Digital Marketer, Research and Analytics Expert, Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics pricing, Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics quote, book Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics, consult with Web Developer, App Developer, Software Developer, UI/UX Designer, Graphics Designer, Digital Marketer, Research and Analytics Expert, Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics in Howrah, Kolkata, India, best Web Developer, App Developer, Software Developer, UI/UX Designer, Graphics Designer, Digital Marketer, Research and Analytics Expert near me, local Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics services provider, Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics experts in Howrah, Kolkata, India, How much doesWeb Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics services cost?, specialized Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics services, compare Web Development, App Development, Software Development, UI/UX Designing, Graphics Designing, Digital Marketing, Research and Analytics services plans, dedicated Web Developer, App Developer, Software Developer, UI/UX Designer, Graphics Designer, Digital Marketer, Research and Analytics Expert team",
  openGraph: {
    type: "website",
    title: "Expert IT Services | in Howrah, Kolkata, India | Cyberspace Works",
    description:
      "Explore our full suite of professional services, including Web, App, and Software Development. Get expert help and a free quote today!",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert IT Services | in Howrah, Kolkata, India | Cyberspace Works",
    description:
      "Explore our full suite of professional services, including Web, App, and Software Development. Get expert help and a free quote today!",
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

export default function Services() {
  return (
    <>
      {/* ✅ Client Component for dynamic canonical */}
      <DynamicCanonical />
      <ServicesPage />
    </>
  );
}
