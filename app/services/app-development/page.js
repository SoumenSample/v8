// app/about-us/page.js
import AppDevelopment  from "@/components/ServicesComponents/AppDevelopment";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Top Mobile App Development Company in Kolkata, India",
  description:
    "Build custom, robust Mobile Apps (iOS/Android) with our expert developers in Kolkata. Transform your idea into a market-ready application.",
    keywords:
      "Mobile app development company, Custom mobile application development, Hire app developers, App development services, iOS app development, Android app development, Cross-platform app development, React Native development, Flutter development services, AI integration in mobile apps, IoT application development, Mobile payment integration, App development best practices, MVP development service, Fintech app development, Healthcare app development, On-demand app solution",
  openGraph: {
    type: "website",
    title: "Top Mobile App Development Company in Kolkata, India",
    description:
      "Build custom, robust Mobile Apps (iOS/Android) with our expert developers in Kolkata. Transform your idea into a market-ready application.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Mobile App Development Company in Kolkata, India",
    description:
      "Build custom, robust Mobile Apps (iOS/Android) with our expert developers in Kolkata. Transform your idea into a market-ready application.",
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
      <AppDevelopment />
    </>
  );
}
