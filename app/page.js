import HeroSection from "@/components/HomeComponents/HeroSection";
import WhyChooseUs from "@/components/HomeComponents/WhyChooseUs";
import OurClients from "@/components/HomeComponents/OurClients";
import Achivements from "@/components/HomeComponents/Achivements";
import AboutSection from "@/components/HomeComponents/AboutSection";
import HowWeDoIt from "@/components/HomeComponents/HowWeDoIt";
import Testimonial from "@/components/HomeComponents/Testimonial";
import OurPartners from "@/components/HomeComponents/OurPartners";
import ContactForm from "@/components/HomeComponents/ContactForm";
import DynamicCanonical from "@/components/DynamicCanonical";

export const metadata = {
  // ✅ THIS fixes localhost showing — tells Next.js the production domain
  metadataBase: new URL("https://cyberspaceworks.com"),

  // ✅ Canonical URL for home page
  alternates: {
    canonical: "https://cyberspaceworks.com",
  },

  title: "Cyberspace Works - Innovations Powered By AI",
  description:
    "Complete Solutions on AI | Website, Software & App Development | UI/UX & Graphics Design | Digital Marketing | Research & Analysis | Howrah, Kolkata, India",
  keywords:
    "ai development company kolkata, ai development company howrah, machine learning company kolkata, ai solutions west bengal, llm development services, llm integration company, ai chatbot development kolkata, generative ai development company, ai model training services, ai automation services india, artificial intelligence company india, ai consulting company kolkata, ai software development company, custom ai model development, ai powered applications, ai integration services, ai business solutions, ai product development company, generative ai services india, ai development agency india, ai technology company kolkata, enterprise ai solutions india, ai startup development services, ai chatbot agency india, machine learning solutions company, ai company in howrah, ai company in kolkata, ai developers in west bengal, ai services kolkata india, machine learning services howrah, ai automation company kolkata, web development kolkata, app development kolkata, software development howrah, website development kolkata, mobile app development kolkata, digital marketing kolkata, ui ux design kolkata, graphic design kolkata, research and analytics kolkata, cyberspace works, software company howrah, it company kolkata, web design kolkata, Web Development Services near me, best Web Development service in Howrah, Kolkata, hire Web Developer, top Web Development company, affordable Web development, App Development Services near me, best App Development service in Howrah, Kolkata, hire App Developer, top App Development company, affordable App development, Software Development Services near me, best Software Development service in Howrah, Kolkata, hire Software Developer, top Software Development company, affordable Software development, UI/UX Designing Services near me, best UI/UX Designing service in Howrah, Kolkata, hire UI/UX Designer, top UI/UX Designing company, Digital Marketing Services near me, best Digital Marketing service in Howrah, Kolkata, hire Digital Marketer, top Digital Marketing company, affordable Digital Marketing, Research and Analytical Services near me, best Research and Analytical service in Howrah, Kolkata, Cyberspace Works, official Cyberspace Works",

  openGraph: {
    type: "website",
    url: "https://cyberspaceworks.com",
    title: "Cyberspace Works - Innovations Powered By AI",
    description:
      "Complete Solutions on AI | Website, Software & App Development | UI/UX & Graphics Design | Digital Marketing | Research & Analysis | Howrah, Kolkata, India",
    images: ["https://cyberspaceworks.com/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyberspace Works - Innovations Powered By AI",
    description:
      "Complete Solutions on AI | Website, Software & App Development | UI/UX & Graphics Design | Digital Marketing | Research & Analysis | Howrah, Kolkata, India",
    images: ["https://cyberspaceworks.com/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HomePage() {
  return (
    <>
      <DynamicCanonical />
      <main className="relative min-h-screen bg-black overflow-hidden">
        <HeroSection />
        <WhyChooseUs />
        <OurClients />
        <Achivements />
        <AboutSection />
        <HowWeDoIt />
        <Testimonial />
        <OurPartners />
        <ContactForm />
      </main>
    </>
  );
}