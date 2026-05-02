// app/about-us/page.js
import DigitalMarketing  from "@/components/ServicesComponents/DigitalMarketing";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Digital Marketing Services in Kolkata, India",
  description:
    "Boost your traffic and leads with our full range of Digital Marketing services (SEO, PPC, SMM) in Kolkata, West Bengal. Start growing today!",
    keywords:
      "Digital marketing agency, SEO services company, PPC management services, Content marketing strategy, AI-driven SEO, Generative AI content strategy, E-E-A-T optimization, Technical SEO audit, Local SEO services, Social media marketing (SMM) agency, Google Ads management, Link building services, Inbound marketing solutions, Lead generation agency, Organic traffic growth, Conversion rate optimization (CRO)",
  openGraph: {
    type: "website",
    title: "Digital Marketing Services in Kolkata, India",
    description:
      "Boost your traffic and leads with our full range of Digital Marketing services (SEO, PPC, SMM) in Kolkata, West Bengal. Start growing today!",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Services in Kolkata, India",
    description:
      "Boost your traffic and leads with our full range of Digital Marketing services (SEO, PPC, SMM) in Kolkata, West Bengal. Start growing today!",
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
      <DigitalMarketing />
    </>
  );
}
