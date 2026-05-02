// app/about-us/page.js
import ContactPage from "@/components/ContactPage";
import DynamicCanonical from "@/components/DynamicCanonical"; 
// ✅ Server Component metadata
export const metadata = {
  metadataBase: new URL("https://cyberspaceworks.com"),
  title: "Contact Cyberspace Works in Kolkata, West Bengal",
  description:
    "Get in touch with the Cyberspace Works team in Kolkata for consultation on Web Development, Digital Marketing, or Software projects. Call us!",
    keywords:
      "Contact Cyberspace Works, Web developer, App Developer, Software Developer, UI/UX Designer, Graphics Designer, Digital Marketing Expert, Research and Analytics Expert , phone number, email address, physical address, business hours, get in touch, reach out, map location",
  openGraph: {
    type: "website",
    title: "Contact Cyberspace Works in Kolkata, West Bengal",
    description:
      "Get in touch with the Cyberspace Works team in Kolkata for consultation on Web Development, Digital Marketing, or Software projects. Call us!",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Cyberspace Works in Kolkata, West Bengal",
    description:
      "Get in touch with the Cyberspace Works team in Kolkata for consultation on Web Development, Digital Marketing, or Software projects. Call us!",
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
      <ContactPage />
    </>
  );
}
