// "use client";

// import { useEffect, useState } from "react";
// import { Rubik } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Loader from "@/components/Loader";
// import BackToTopButton from "@/components/BackToTopButton";
// import cursor from "@/public/cursor.png";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import Script from "next/script";

// const GTM_ID = "GTM-KCNJRZVR";

// const rubik = Rubik({
//   weight: ["400", "500", "700"],
//   variable: "--font-rubik",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <html lang="en">
//       <head>

//         {/* GTM Script must be inside <head> */}
//         <Script
//           id="gtm-script"
//           strategy="beforeInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','${GTM_ID}');
//             `,
//           }}
//         />

//         <link rel="icon" type="image/png" href="/logo2.png" />
//         <title>Cyberspace Works - Website, Software and App Developer in Howrah, Kolkata</title>
//       </head>

//       <body
//         className={`${rubik.variable} antialiased relative min-h-screen bg-black`}
//         style={{ cursor: `url(${cursor.src}) 16 16, default` }}
//       >
//         {/* GTM noscript must be first inside <body> */}
//         <noscript>
//           <iframe
//             src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         {loading && (
//           <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
//             <Loader />
//           </div>
//         )}

//         {!loading && (
//           <div className="relative min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-1 relative z-10">{children}</main>
//             <Footer />
//             <BackToTopButton />
//           </div>
//         )}

//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import { Rubik } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Loader from "@/components/Loader";
// import BackToTopButton from "@/components/BackToTopButton";
// import cursor from "@/public/cursor.png";
// import { Analytics } from "@vercel/analytics/next";
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import Script from "next/script";

// const GTM_ID = "GTM-KCNJRZVR";

// const rubik = Rubik({
//   weight: ["400", "500", "700"],
//   variable: "--font-rubik",
//   subsets: ["latin"],
// });

// export default function RootLayout({ children }) {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <html lang="en">
//       <head>
//         {/* GTM Script */}
//         <Script
//           id="gtm-script"
//           strategy="beforeInteractive"
//           dangerouslySetInnerHTML={{
//             __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','${GTM_ID}');
//             `,
//           }}
//         />

//         <link rel="icon" type="image/png" href="/logo2.png" />

//         {/* ✅ Updated Home Page Title */}
//         <title>Cyberspace Works - Innovations Powered By AI</title>

//         {/* ✅ Updated Home Page Meta Description */}
//         <meta
//           name="description"
//           content="Complete Solutions on AI | Website, Software & App Development | UI/UX & Graphics Design | Digital Marketing | Research & Analysis | Howrah, Kolkata, India"
//         />

//         {/* ✅ Home Page Keywords — existing + all AI keywords */}
//         <meta
//           name="keywords"
//           content="ai development company kolkata, ai development company howrah, machine learning company kolkata, ai solutions west bengal, llm development services, llm integration company, ai chatbot development kolkata, generative ai development company, ai model training services, ai automation services india, artificial intelligence company india, ai consulting company kolkata, ai software development company, custom ai model development, ai powered applications, ai integration services, ai business solutions, ai product development company, generative ai services india, ai development agency india, ai technology company kolkata, enterprise ai solutions india, ai startup development services, ai chatbot agency india, machine learning solutions company, ai company in howrah, ai company in kolkata, ai developers in west bengal, ai services kolkata india, machine learning services howrah, ai automation company kolkata, web development kolkata, app development kolkata, software development howrah, website development kolkata, mobile app development kolkata, digital marketing kolkata, ui ux design kolkata, graphic design kolkata, research and analytics kolkata, cyberspace works, software company howrah, it company kolkata, web design kolkata"
//         />

//         {/* ✅ OpenGraph tags for social sharing */}
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="Cyberspace Works - Innovations Powered By AI" />
//         <meta
//           property="og:description"
//           content="Complete Solutions on AI | Website, Software & App Development | UI/UX & Graphics Design | Digital Marketing | Research & Analysis | Howrah, Kolkata, India"
//         />
//         <meta property="og:image" content="/logo.png" />

//         {/* ✅ Twitter Card tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Cyberspace Works - Innovations Powered By AI" />
//         <meta
//           name="twitter:description"
//           content="Complete Solutions on AI | Website, Software & App Development | UI/UX & Graphics Design | Digital Marketing | Research & Analysis | Howrah, Kolkata, India"
//         />
//         <meta name="twitter:image" content="/logo.png" />
//       </head>

//       <body
//         className={`${rubik.variable} antialiased relative min-h-screen bg-black`}
//         style={{ cursor: `url(${cursor.src}) 16 16, default` }}
//       >
//         {/* GTM noscript must be first inside <body> */}
//         <noscript>
//           <iframe
//             src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         {loading && (
//           <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
//             <Loader />
//           </div>
//         )}

//         {!loading && (
//           <div className="relative min-h-screen flex flex-col">
//             <Navbar />
//             <main className="flex-1 relative z-10">{children}</main>
//             <Footer />
//             <BackToTopButton />
//           </div>
//         )}

//         <Analytics />
//         <SpeedInsights />
//       </body>
//     </html>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import BackToTopButton from "@/components/BackToTopButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
import { NotificationProvider } from "@/context/NotificationContext";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";

const GTM_ID = "GTM-KCNJRZVR";

const rubik = Rubik({
  weight: ["400", "500", "700"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const { theme, resolvedTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var stored = localStorage.getItem("theme");
                var systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                var theme = stored || (systemDark ? "dark" : "light");
                document.documentElement.classList.toggle("dark", theme === "dark");
              } catch (e) {}
            })();
            `,
          }}
        />
        {/* Google Analytics (gtag.js) */}
  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-P3Y4Y98F84"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-P3Y4Y98F84');
    `}
  </Script>

  {/* Your existing GTM Script remains here too */}
  <Script
    id="gtm-script"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTM_ID}');
      `,
    }}
  />
        

        <link rel="icon" type="image/png" href="/logo2.png" />

        {/* ✅ Canonical REMOVED from here — each page controls its own canonical
            via alternates.canonical in their metadata export.
            Having it here was overriding every page with the home URL. */}

        {/* OpenGraph — global fallback */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyberspaceworks.com" />
        <meta property="og:image" content="https://cyberspaceworks.com/logo.png" />

        {/* Twitter Card — global fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://cyberspaceworks.com" />
        <meta name="twitter:image" content="https://cyberspaceworks.com/logo.png" />
      </head>

      {/* <body
        className={`${rubik.variable} antialiased relative min-h-screen bg-background text-foreground`}
        style={{ cursor: "url('/cursor.png') 16 16, default" }}
      > */}
         <body
  className={`${rubik.variable} antialiased relative min-h-screen bg-background text-foreground`}
  style={{
    cursor:
      resolvedTheme === "dark"
        ? "url('') 16 16, default"
        : "url('') 16 16, default",
  }}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>
            <NotificationProvider>
              {loading && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
                  <Loader />
                </div>
              )}

              {!loading && (
                <div className="relative min-h-screen flex flex-col">
                  <Navbar />
                  <main className="flex-1 relative z-10 w-full">{children}</main>
                  <Footer />
                  <BackToTopButton />
                </div>
              )}
            </NotificationProvider>
          </SessionProvider>
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
