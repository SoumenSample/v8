// app/about-us/page.js
import GraphicDesign  from "@/components/ServicesComponents/GraphicDesign";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Creative Graphics Design Services in Kolkata, India",
  description:
    "Professional Graphics Design for branding, marketing, and web assets. We create visually compelling materials to elevate your brand presence in Kolkata.",
    keywords:
      "Corporate graphic design, Professional branding services, Brand identity design agency, Visual communication design, Logo design services, Brand style guide development, Rebranding services, Visual asset creation, Motion graphics design, Social media post design, Infographic design services, Website graphic design, Brochure design, Marketing material design, Packaging designBrochure design, Marketing material design, Packaging design",
  openGraph: {
    type: "website",
    title: "Creative Graphics Design Services in Kolkata, India",
    description:
      "Professional Graphics Design for branding, marketing, and web assets. We create visually compelling materials to elevate your brand presence in Kolkata.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creative Graphics Design Services in Kolkata, India",
    description:
      "Professional Graphics Design for branding, marketing, and web assets. We create visually compelling materials to elevate your brand presence in Kolkata.",
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
      <GraphicDesign />
    </>
  );
}
