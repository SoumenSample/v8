// app/about-us/page.js
import UiUxDesign  from "@/components/ServicesComponents/UiUxDesign";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Professional UI/UX Design Services in Kolkata, India",
  description:
    "Enhance user engagement with stunning and intuitive UI/UX Design. We craft seamless digital experiences for web and mobile apps in Kolkata.",
    keywords:
      "UI/UX design services, User experience agency, Product design services, Mobile app UX design, Usability testing, Prototyping and wireframing, Interaction design, Design system development, Accessibility (A11Y) design, Data-driven UI/UX, User journey mapping, Conversion-focused design, Figma UI/UX design, Responsive design implementation, Micro-animation design",
  openGraph: {
    type: "website",
    title: "Professional UI/UX Design Services in Kolkata, India",
    description:
      "Enhance user engagement with stunning and intuitive UI/UX Design. We craft seamless digital experiences for web and mobile apps in Kolkata.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional UI/UX Design Services in Kolkata, India",
    description:
      "Enhance user engagement with stunning and intuitive UI/UX Design. We craft seamless digital experiences for web and mobile apps in Kolkata.",
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
      <UiUxDesign />
    </>
  );
}
