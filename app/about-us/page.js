// app/about-us/page.js
import AboutUs from "@/components/AboutPage";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "About Cyberspace Works - IT Agency in Kolkata, India",
  description:
    "Learn about Cyberspace Works, a leading Kolkata-based agency specializing in high-impact Web, App, and Software Development since 2022.",
    keywords:
      "Our story, company mission, team background, leadership team, Cyberspace Works history, why choose us, corporate values, Web development, App Development, Software Development, UI/UX Designer, Graphics Designer, Digital Marketing, Research and Analytics expertise, certified Web developer, App Developer, Software Developer, UI/UX Designer, Graphics Designer, Digital Marketing Expert, Research and Analytics Expert, decades of experience, industry leaders, Cyberspace Works, Howrah, Kolkata location, local Web development, App Development, Software Development, UI/UX Designer, Graphics Designer, Digital Marketing, Research and Analytics provider",
  openGraph: {
    type: "website",
    title: "About Cyberspace Works - IT Agency in Kolkata, India",
    description:
      "Learn about Cyberspace Works, a leading Kolkata-based agency specializing in high-impact Web, App, and Software Development since 2022.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Cyberspace Works - IT Agency in Kolkata, India",
    description:
      "Learn about Cyberspace Works, a leading Kolkata-based agency specializing in high-impact Web, App, and Software Development since 2022.",
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
      <AboutUs />
    </>
  );
}
