// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { usePathname } from "next/navigation";
// import { IoReorderThree } from "react-icons/io5";
// import Image from "next/image";
// import Link from "next/link";
// import { XMarkIcon } from "@heroicons/react/24/outline";  
// import {
//   FaPhoneAlt,
//   FaEnvelope,
//   FaWhatsapp,
//   FaMapMarkerAlt,
//   FaInstagram,
//   FaLinkedin,
//   FaFacebookF,
//   FaAngleDown,
//   FaAngleUp,
//   FaLaptopCode,
//   FaMobileAlt,
//   FaCode,
//   FaPalette,
//   FaBullhorn,
//   FaBrush,
// } from "react-icons/fa";
// import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
// import { HomeIcon, Cog6ToothIcon, InformationCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
// import { SiGoogleanalytics } from "react-icons/si";

// export default function Navbar() {
//   const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
//   const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
//   const closeTimeoutRef = useRef(null);
//   const pathname = usePathname();

//   // Services data
//   const services = [
//     { name: "Web Development", icon: <FaLaptopCode />, subtext: "Custom, scalable web apps", href: "/services/web-development" },
//     { name: "App Development", icon: <FaMobileAlt />, subtext: "iOS & Android native solutions", href: "/services/app-development" },
//     { name: "Software Development", icon: <FaCode />, subtext: "Tailored enterprise solutions", href: "/services/software-development" },
//     { name: "UI/UX Design", icon: <FaPalette />, subtext: "Designs that convert users", href: "/services/ui-ux-design" },
//     { name: "Digital Marketing", icon: <FaBullhorn />, subtext: "Boost your brand visibility", href: "/services/digital-marketing" },
//     { name: "Graphic Design", icon: <FaBrush />, subtext: "Creative branding visuals", href: "/services/graphic-design" },
//     { name: "Research & Analytics", icon: <SiGoogleanalytics />, subtext: "Data-driven insights", href: "/services/research-and-analytics" },
//   ];

//   const socialLinks = [
//     { name: "Call", icon: <FaPhoneAlt />, link: "tel:7980715765" },
//     { name: "Mail", icon: <FaEnvelope />, link: "mailto:cyberspaceworksofficial@gmail.com" },
//     { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/7980715765" },
//     { name: "Location", icon: <FaMapMarkerAlt />, link: "https://maps.app.goo.gl/Js9GiAJvnopVrJgB8" },
//     { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/cyberspaceworks" },
//     { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/company/cyberspace-works" },
//     { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100086774724799" },
//   ];

//   // Close menus on outside click or scroll
//   useEffect(() => {
//     const handleClickOrTouchOutside = (event) => {
//       const leftMenu = document.querySelector(".left-menu-container-mobile");
//       const rightMenu = document.querySelector(".right-menu-container-mobile");
//       const leftButton = document.querySelector(".left-hamburger");
//       const rightButton = document.querySelector(".right-hamburger");

//       if (
//         !leftMenu?.contains(event.target) &&
//         !rightMenu?.contains(event.target) &&
//         !leftButton?.contains(event.target) &&
//         !rightButton?.contains(event.target)
//       ) {
//         setIsLeftMenuOpen(false);
//         setIsRightMenuOpen(false);
//       }
//     };

//     const handleScroll = () => {
//       setIsLeftMenuOpen(false);
//       setIsRightMenuOpen(false);
//     };

//     document.addEventListener("mousedown", handleClickOrTouchOutside);
//     document.addEventListener("touchstart", handleClickOrTouchOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOrTouchOutside);
//       document.removeEventListener("touchstart", handleClickOrTouchOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Desktop Services dropdown hover
//   const handleMouseEnter = () => {
//     if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
//     setIsServicesOpen(true);
//   };

//   const handleMouseLeave = () => {
//     closeTimeoutRef.current = setTimeout(() => {
//       setIsServicesOpen(false);
//     }, 200);
//   };
// const isActive = (href) => {
//   const current = pathname ?? ""; // Safe fallback
//   if (href === current) return true;
//   if (href === "/services" && current.startsWith("/services")) return true;
//   return false;
// };


//   return (
//     <>
//       <header className="w-full fixed top-0 z-50">
//         {/* Neon top strip */}
//         <div className="relative h-[10px] bg-cyan-400 lg:block hidden">
//           <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_15px_#00ffff]">
//             <div className="absolute left-1/2 -translate-x-1/2 w-[175px] h-full"></div>
//           </div>
//         </div>

//         {/* Navbar */}
//         <nav className="text-white">
//           <div className="relative flex items-center justify-between h-[70px] px-4">

//             {/* Left Hamburger (Mobile) */}
//             <div
//               className="lg:hidden flex items-center left-hamburger fixed left-8 z-50 group bg-black/30 border border-white/10 shadow-xl rounded-md"
//               onMouseEnter={() => {
//                 setIsLeftMenuOpen(true);
//                 setIsRightMenuOpen(false);
//               }}
//             >
//               <button className="text-3xl text-cyan-400">
//                 <IoReorderThree />
//               </button>
//             </div>

//             {/* Center Logo */}
//             <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] items-center justify-center lg:block hidden">
//               <Link href="/">
//                 <div className="w-[180px] h-[70px] rounded-xl pt-2.5 bg-cyan-400 border-l-[10px] border-r-[10px] border-b-[10px] border-cyan-400 flex items-center justify-center">
//                   <Image src="/logo.png" alt="Logo" width={180} height={70} className="h-25 w-auto" priority />
//                 </div>
//               </Link>
//             </div>

//             {/* Right Hamburger (Mobile) */}
//             <div
//               className="lg:hidden flex items-center right-hamburger absolute right-10 top-1/2 -translate-y-1/2 group bg-black/30 border border-white/10 shadow-xl rounded-md"
//               onMouseEnter={() => {
//                 setIsRightMenuOpen(true);
//                 setIsLeftMenuOpen(false);
//               }}
//             >
//               <button className="text-3xl text-cyan-400">
//                 <IoReorderThree />
//               </button>
//             </div>

//             {/* Left Menu (Desktop) */}
//             <ul className="hidden lg:flex space-x-6 font-bold px-8 py-1.5 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute left-2.5 ml-4 left-menu-container">
//               <li className="relative group">
//                 <Link href="/" className={`transition-colors duration-300 ${isActive("/") ? "text-cyan-400" : "hover:text-cyan-400"}`}>
//                   Home
//                 </Link>
//                 <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
//                   isActive("/") ? "bg-cyan-400 scale-x-100" : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
//                 }`}>
//                 </span>
//               </li>

// {/* service */}
// <li className="relative group services-dropdown-container" 
//     onMouseEnter={handleMouseEnter} 
//     onMouseLeave={handleMouseLeave}>
  
//   <Link 
//     href="/services" 
//     className={`flex items-center gap-1 transition-colors duration-300 ${
//       pathname.startsWith("/services") ? "text-cyan-400" : "text-white hover:text-cyan-400"
//     }`}>
//     Services
//     <span className="text-xs mt-[2px]">{isServicesOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
//   </Link>

//   {/* Underline: Solid when ANY /service* page */}
//   <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
//     pathname.startsWith("/services") 
//       ? "bg-cyan-400 scale-x-100" 
//       : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
//   }`}>
//   </span>

//   {/* Dropdown */}
//   <div className={`absolute left-0 w-[900px] rounded-xl bg-black backdrop-blur-xl border border-white/10 transition-all duration-300 ease-in-out origin-top z-[999] backdrop-filter mt-6 ${
//     isServicesOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
//   } flex overflow-hidden p-6`}>
//                   <div className="absolute top-0 left-0 w-[300px] h-[300px] -translate-x-32 -translate-y-32 blur-[160px] opacity-60 pointer-events-none"
//                     style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}></div>
//                   <div className="absolute bottom-0 right-0 w-[300px] h-[300px] translate-x-32 translate-y-32 blur-[160px] opacity-60 pointer-events-none"
//                     style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}></div>

//                   <div className="grid grid-cols-3 gap-6 w-full">
//                     {services.map((service) => (
//                       <Link key={service.name} href={service.href}
//                         className="flex items-start gap-3 p-3 rounded-lg transition-all duration-300 transform hover:bg-white/10 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]">
//                         <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/50 border border-white/10 text-xl text-cyan-400">
//                           {service.icon}
//                         </div>
//                         <div>
//                           <p className="font-semibold text-white text-sm">{service.name}</p>
//                           <p className="text-gray-400 text-xs">{service.subtext}</p>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </li>

//               <li className="relative group">
//                 <Link href="/about-us" className={`transition-colors duration-300 ${isActive("/about-us") ? "text-cyan-400" : "hover:text-cyan-400"}`}>
//                   About
//                 </Link>
//                 <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
//                   isActive("/about-us") ? "bg-cyan-400 scale-x-100" : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
//                 }`}></span>
//               </li>

//               <li className="relative group">
//                 <Link href="/contact-us" className={`transition-colors duration-300 ${isActive("/contact-us") ? "text-cyan-400" : "hover:text-cyan-400"}`}>
//                   Contact
//                 </Link>
//                 <span className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full transition-transform duration-300 origin-left ${
//                   isActive("/contact-us") ? "bg-cyan-400 scale-x-100" : "bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100"
//                 }`}></span>
//               </li>

//               <li>
//                 <Link href="/contact-us"
//                   className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]">
//                   Get a Quote
//                 </Link>
//               </li>
//             </ul>

//             {/* Right Menu - Social Icons */}
//             <ul className="hidden lg:flex space-x-6 font-bold px-6 py-1 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute right-6 top-1/2 -translate-y-1/2 mr-4 right-menu-container">
//               <div className="flex items-center space-x-5 ">
//                 {socialLinks.map((item) => (
//                   <li key={item.name} className="flex flex-col items-center justify-center w-10 h-9" title={item.name}>
//                     <Link href={item.link} className="text-cyan-400 text-xl hover:text-cyan-600 cursor-pointer size-5">
//                       {item.icon}
//                     </Link>
//                   </li>
//                 ))}
//               </div>
//             </ul>

//             {/* Left Side Menu (Mobile) */}
//             <div className={`lg:hidden left-menu-container-mobile fixed top-0 left-0 h-full w-64 bg-black/90 border-r border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
//               isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"
//             }`}>
//               <div className="flex flex-col p-6 space-y-6 text-white">
//                 <div className="flex flex-col items-start space-y-2">
//                   <Link href="/" onClick={() => setIsLeftMenuOpen(false)}>
//                     <Image src="/logo2.png" alt="Logo" 
//                      width={180} 
//                      height={70}
//                     className="w-32 h-auto" />
//                   </Link>
//                   <p className="text-sm text-gray-300">
//                     Cyberspace Works - Website, Software, App Developer | Digital Marketing | Graphics Design | UI/UX | Research & Analysis
//                   </p>
//                  <p className="text-gray-400 flex items-start gap-2 mt-3">
//   <IoCallOutline className="text-cyan-400 mt-1" />
//   <a
//     href="tel:+917980715765"
//     className="hover:underline leading-snug pl-6"
//   >
//     +91 7980715765
//   </a>
// </p>

// <p className="text-gray-400 flex items-start gap-2 mt-3">
//   <IoMailOutline className="text-cyan-400 mt-1 size-5" />
//   <a
//     href="mailto:cyberspaceworksofficial@gmail.com"
//     className="hover:underline leading-snug text-center"
//   >
//     cyberspaceworks
//     official@gmail.com
//   </a>
// </p>

// <p className="text-gray-400 flex items-start gap-2 mt-3">
//   <IoLocationOutline className="text-cyan-400 mt-1 size-12" />
//   <a
//     href="https://maps.app.goo.gl/QABsaPuw5qL3BwRa7"
//     className="hover:underline leading-snug text-center"
//   >
//     Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
//   </a>
// </p>

//                 </div>
//                 <div className="mt-auto">
//                   <Link href="/contact-us"
//                     className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
//                     onClick={() => setIsLeftMenuOpen(false)}>
//                     Get a Free Quote
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* Right Side Menu (Mobile) */}
//             <div className={`lg:hidden right-menu-container-mobile fixed top-0 right-0 h-full w-64 bg-black/90 border-l border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
//               isRightMenuOpen ? "translate-x-0" : "translate-x-full"
//             }`}>
//               <div className="flex flex-col p-6 space-y-4 text-white">
//                 {socialLinks.map((item) => (
//                   <Link key={item.name} href={item.link} className="flex items-center gap-2 text-lg hover:text-cyan-400">
//                     <span className="text-cyan-400 text-base">{item.icon}</span>
//                     <span>{item.name}</span>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>
// {/* Mobile & Tablet Bottom Navigation */}
// <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[350px] mx-auto bg-black/10 border border-white/10 shadow-xl backdrop-blur-sm rounded-2xl z-50">
//  {/* FAB */}
// <div className="relative">
//   <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
    
//     {/* Outer Pulsing Glow Ring */}
//     <div
//       className="absolute inset-0 w-14 h-14 rounded-full animate-pulseGlowRing"
//       style={{
//         background: 'conic-gradient(from 0deg, #0ea5e9, #06b6d4, #0ea5e9)',
//         filter: 'blur(16px)',
//         opacity: 0.9,
//         zIndex: -1,
//         transform: 'translateY(-8px)',
//         pointerEvents: 'none',
//       }}
//       aria-hidden="true"
//     />

//     {/* Inner Solid Circle */}
//     <div className="relative bg-black border border-gray-700 rounded-full p-2 shadow-lg w-14 h-14 flex items-center justify-center overflow-visible cursor-pointer">
//        <Link 
//     href="/" >
//       <Image
//         src="/logo2.png"
//         alt="Logo"
//         width={100}
//         height={100}
//         className="object-contain w-auto h-12"
//       />
//       </Link>
//     </div>
//   </div>

//   {/* Global CSS for Animation */}
//   <style jsx global>{`
//     @keyframes pulseGlowRing {
//       0%, 100% {
//         transform: translateY(-4px) scale(0.75);
//         opacity: 0.7;
//         filter: blur(10px);
//       }
//       50% {
//         transform: translateY(-4px) scale(0.75);
//         opacity: 1;
//         filter: blur(15px);
//       }
//     }

//     .animate-pulseGlowRing {
//       animation: pulseGlowRing 1.8s ease-in-out infinite;
//     }

//     @media (prefers-reduced-motion: reduce) {
//       .animate-pulseGlowRing {
//         animation: none;
//         opacity: 0.8;
//         filter: blur(16px);
//       }
//     }
//   `}</style>
// </div>
//   {/* Bottom nav items */}
//   <div className="flex justify-around items-center py-3 relative">


 
// {/* Home */}
// <Link
//   href="/"
//   className="flex flex-col items-center relative group"
// >
//   <HomeIcon
//     className={`w-6 h-6 transition-colors duration-300 ${
//       isActive("/") 
//         ? "text-cyan-400" 
//         : "text-cyan-100 group-hover:text-cyan-400"
//     }`}
//   />
//   <span
//     className={`text-xs mt-1 transition-colors duration-300 ${
//       isActive("/") 
//         ? "text-cyan-400" 
//         : "text-cyan-100 group-hover:text-cyan-400"
//     }`}
//   >
//     Home
//   </span>

//   {/* Hover underline */}
//   {!isActive("/") && (
//     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
//   )}

//   {/* Active underline */}
//   {isActive("/") && (
//     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>
//   )}
// </Link>

      
//  {/* Services */}
// <div className="relative">
//   <div
//     className="flex flex-col items-center relative cursor-pointer group"
//     onClick={() => setIsServicesOpenMobile(prev => !prev)}
//     onMouseEnter={() => window.innerWidth >= 1024 && setIsServicesOpenMobile(true)}
//     onMouseLeave={() => window.innerWidth >= 1024 && setIsServicesOpenMobile(false)}
//   >
//     <Cog6ToothIcon
//       className={`w-6 h-6 transition-colors duration-300 ${
//         pathname.startsWith("/services")
//           ? "text-cyan-400"
//           : "text-cyan-100 group-hover:text-cyan-400"
//       }`}
//     />
//     <span
//       className={`text-xs mt-1 transition-colors duration-300 ${
//         pathname.startsWith("/services")
//           ? "text-cyan-400"
//           : "text-gray-100 group-hover:text-cyan-400"
//       }`}
//     >
//       Services
//     </span>

//     {/* Hover underline for inactive */}
//     {!pathname.startsWith("/services") && (
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
//     )}

//     {/* Active underline */}
//     {pathname.startsWith("/services") && (
//       <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>
//     )}
//   </div>

//   {/* Dropdown */}
//   <div
//     className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-gray-900/95 backdrop-blur-sm border border-cyan-400/20 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-bottom z-[9999]
//       ${isServicesOpenMobile ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}
//   >
//     <button
//       onClick={() => setIsServicesOpenMobile(false)}
//       className="absolute top-2 right-2 p-1 rounded-full hover:bg-cyan-400/20 transition-colors"
//       aria-label="Close services menu"
//     >
//       <XMarkIcon className="w-5 h-5 text-cyan-400 cursor-pointer" />
//     </button>

//     <div className="py-2 pt-8">
//       {/* Service Page */}
//       <Link
//         href="/services"
//         onClick={() => setIsServicesOpenMobile(false)}
//         className="flex items-center gap-3 px-4 py-2 text-sm text-cyan-100 font-semibold transition-colors duration-300 hover:text-cyan-400 hover:bg-cyan-400/10"
//       >
//         <span className="text-lg text-cyan-400"><Cog6ToothIcon /></span>
//         Our Services
//       </Link>

//       {/* Subservices */}
//       {services.map((service) => (
//         <Link
//           key={service.name}
//           href={service.href}
//           onClick={() => setIsServicesOpenMobile(false)}
//           className={`flex items-center gap-3 px-4 py-2 text-sm relative transition-colors duration-300
//             ${pathname === service.href
//               ? "text-cyan-400 bg-cyan-400/10"
//               : "text-gray-100 hover:text-cyan-400 hover:bg-cyan-400/10"
//             }`}
//         >
//           <span className="text-lg text-cyan-400">{service.icon}</span>
//           {service.name}
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>


//     <div className="w-12" /> {/* FAB gap */}

//  {/* About */}
// <Link
//   href="/about-us"
//   className="flex flex-col items-center relative group"
// >
//   <InformationCircleIcon
//     className={`w-6 h-6 transition-colors duration-300 ${
//       isActive("/about-us")
//         ? "text-cyan-400"
//         : "text-cyan-100 group-hover:text-cyan-400"
//     }`}
//   />
//   <span
//     className={`text-xs mt-1 transition-colors duration-300 ${
//       isActive("/about-us")
//         ? "text-cyan-400"
//         : "text-gray-100 group-hover:text-cyan-400"
//     }`}
//   >
//     About
//   </span>

//   {/* Hover underline for inactive */}
//   {!isActive("/about-us") && (
//     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
//   )}

//   {/* Active underline */}
//   {isActive("/about-us") && (
//     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>
//   )}
// </Link>

// {/* Contact */}
// <Link
//   href="/contact-us"
//   className="flex flex-col items-center relative group"
// >
//   <PhoneIcon
//     className={`w-6 h-6 transition-colors duration-300 ${
//       isActive("/contact-us")
//         ? "text-cyan-400"
//         : "text-cyan-100 group-hover:text-cyan-400"
//     }`}
//   />
//   <span
//     className={`text-xs mt-1 transition-colors duration-300 ${
//       isActive("/contact-us")
//         ? "text-cyan-400"
//         : "text-gray-100 group-hover:text-cyan-400"
//     }`}
//   >
//     Contact
//   </span>

//   {/* Hover underline for inactive */}
//   {!isActive("/contact-us") && (
//     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>
//   )}

//   {/* Active underline */}
//   {isActive("/contact-us") && (
//     <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>
//   )}
// </Link>


//   </div>
// </div>

//     </>
//   );
// }
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { IoReorderThree } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/24/outline";  
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaAngleDown,
  FaAngleUp,
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaBrain,
  FaShoppingBag,
} from "react-icons/fa";
import { IoCallOutline, IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { HomeIcon, Cog6ToothIcon, InformationCircleIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SiGoogleanalytics } from "react-icons/si";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SparkleNavbar from "./lightswind/sparkle-navbar";
export default function Navbar() {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesOpenMobile, setIsServicesOpenMobile] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [stepFormData, setStepFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: [],
    requirement: "",
    budget: "",
  });
  const [stepError, setStepError] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const closeTimeoutRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  const quoteSteps = [
    { key: "name", label: "What is your name?", type: "text", placeholder: "Enter your full name" },
    { key: "email", label: "What is your email address?", type: "email", placeholder: "Enter your email" },
    { key: "phone", label: "What is your phone number?", type: "tel", placeholder: "Enter your phone number" },
    { key: "service", label: "Which service do you need?", type: "checkbox" },
    { key: "requirement", label: "Briefly describe your requirement", type: "text", placeholder: "Tell us about your project" },
    { key: "budget", label: "What is your budget?", type: "text", placeholder: "Enter your budget" },
  ];
  const hideNavbar = pathname?.startsWith("/dashboard") || pathname===("/schedule") || pathname===("/login");

  // ✅ AI & Intelligent Systems added as FIRST service
  const services = [
    { name: "AI & Intelligent Systems", icon: <FaBrain />, subtext: "Automation, ML & LLM solutions", href: "/services/ai-intelligent-systems" },
    { name: "Web Development", icon: <FaLaptopCode />, subtext: "Custom, scalable web apps", href: "/services/web-development" },
    { name: "App Development", icon: <FaMobileAlt />, subtext: "iOS & Android native solutions", href: "/services/app-development" },
    { name: "Software Development", icon: <FaCode />, subtext: "Tailored enterprise solutions", href: "/services/software-development" },
    { name: "UI/UX Design", icon: <FaPalette />, subtext: "Designs that convert users", href: "/services/ui-ux-design" },
    { name: "Graphic Design", icon: <FaBrush />, subtext: "Creative branding visuals", href: "/services/graphic-design" },
    { name: "Digital Marketing", icon: <FaBullhorn />, subtext: "Boost your brand visibility", href: "/services/digital-marketing" },
    { name: "Research & Analytics", icon: <SiGoogleanalytics />, subtext: "Data-driven insights", href: "/services/research-and-analytics" },
  ];

  const socialLinks = [
    { name: "Call", icon: <FaPhoneAlt />, link: "tel:7980715765" },
    { name: "Mail", icon: <FaEnvelope />, link: "mailto:cyberspaceworksofficial@gmail.com" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/7980715765" },
    { name: "Location", icon: <FaMapMarkerAlt />, link: "https://maps.app.goo.gl/Js9GiAJvnopVrJgB8" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/cyberspaceworks" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/company/cyberspace-works" },
    { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/profile.php?id=100086774724799" },
  ];

  useEffect(() => {
    const handleClickOrTouchOutside = (event) => {
      const leftMenu = document.querySelector(".left-menu-container-mobile");
      const rightMenu = document.querySelector(".right-menu-container-mobile");
      const leftButton = document.querySelector(".left-hamburger");
      const rightButton = document.querySelector(".right-hamburger");

      if (
        !leftMenu?.contains(event.target) &&
        !rightMenu?.contains(event.target) &&
        !leftButton?.contains(event.target) &&
        !rightButton?.contains(event.target)
      ) {
        setIsLeftMenuOpen(false);
        setIsRightMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsLeftMenuOpen(false);
      setIsRightMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOrTouchOutside);
    document.addEventListener("touchstart", handleClickOrTouchOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOrTouchOutside);
      document.removeEventListener("touchstart", handleClickOrTouchOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  const isActive = (href) => {
    const current = pathname ?? "";
    if (href === current) return true;
    if (href === "/services" && current.startsWith("/services")) return true;
    return false;
  };

  const resetQuoteForm = useCallback(() => {
    setCurrentStepIndex(0);
    setIsComplete(false);
    setStepError("");
    setIsSubmittingLead(false);
    setStepFormData({
      name: "",
      email: "",
      phone: "",
      service: [],
      requirement: "",
      budget: "",
    });
  }, []);

  const openQuoteModal = () => {
    resetQuoteForm();
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = useCallback(() => {
    setIsQuoteModalOpen(false);
    resetQuoteForm();
  }, [resetQuoteForm]);

  const validateStepValue = (key, value) => {
    if (key === "service") {
      if (!Array.isArray(value) || value.length === 0) {
        return "Please select at least one service.";
      }
      return "";
    }

    const trimmedValue = value.trim();
    if (!trimmedValue) return "This field is required.";

    if (key === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(trimmedValue)) return "Please enter a valid email address.";
    }

    if (key === "phone") {
      const phonePattern = /^[0-9]{10,15}$/;
      if (!phonePattern.test(trimmedValue.replace(/\s+/g, ""))) {
        return "Please enter a valid phone number (10-15 digits).";
      }
    }

    return "";
  };

  const handleStepInputChange = (event) => {
    const { value } = event.target;
    const activeStep = quoteSteps[currentStepIndex];
    setStepFormData((prev) => ({ ...prev, [activeStep.key]: value }));
    if (stepError) setStepError("");
  };

  const handleServiceSelectionChange = (serviceName) => {
    setStepFormData((prev) => {
      const selectedServices = Array.isArray(prev.service) ? prev.service : [];
      const isSelected = selectedServices.includes(serviceName);

      return {
        ...prev,
        service: isSelected
          ? selectedServices.filter((item) => item !== serviceName)
          : [...selectedServices, serviceName],
      };
    });

    if (stepError) setStepError("");
  };

  const handleStepSubmit = async (event) => {
    event.preventDefault();
    const activeStep = quoteSteps[currentStepIndex];
    const currentValue = stepFormData[activeStep.key] ?? "";
    const validationMessage = validateStepValue(activeStep.key, currentValue);

    if (validationMessage) {
      setStepError(validationMessage);
      return;
    }

    const isLastStep = currentStepIndex === quoteSteps.length - 1;
    if (!isLastStep) {
      setCurrentStepIndex((prev) => prev + 1);
      return;
    }

    try {
      setIsSubmittingLead(true);
      setStepError("");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: stepFormData.name,
          email: stepFormData.email,
          phone: stepFormData.phone,
          services: stepFormData.service,
          requirement: stepFormData.requirement,
          budget: stepFormData.budget,
          source: "quick-enquiry",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setIsComplete(true);
      setTimeout(() => {
        closeQuoteModal();
        router.push("/");
      }, 2200);
    } catch (error) {
      setStepError(error.message || "Failed to submit enquiry.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  useEffect(() => {
    if (!isQuoteModalOpen) return;
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeQuoteModal();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isQuoteModalOpen, closeQuoteModal]);

  if (hideNavbar) {
    return null;
  }

  return (
    <>
      <header className="w-full fixed top-0 z-50">
        {/* <SparkleNavbar
        items={['home',"about","services","contact"]}
        color="#1e90ff"
        /> */}
        {/* Neon top strip */}
        <div className="relative h-[10px] bg-cyan-400 lg:block hidden">
          <div className="absolute bottom-0 left-0 w-full h-[4px] bg-cyan-400 shadow-[0_0_15px_#00ffff]">
            <div className="absolute left-1/2 -translate-x-1/2 w-[175px] h-full"></div>
          </div>
        </div>

        <nav className="text-white">
          <div className="relative flex items-center justify-between h-[70px] px-4">

            {/* Left Hamburger (Mobile) */}
            <div
              className="lg:hidden flex items-center left-hamburger fixed left-8 z-50 group bg-black/30 border border-white/10 shadow-xl rounded-md"
              onMouseEnter={() => {
                setIsLeftMenuOpen(true);
                setIsRightMenuOpen(false);
              }}
            >
              <button className="text-3xl text-cyan-400">
                <IoReorderThree />
              </button>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[-12px] items-center justify-center lg:block hidden">
              <Link href="/">
                <div className="w-[180px] h-[70px] rounded-xl pt-2.5 bg-cyan-400 border-l-[10px] border-r-[10px] border-b-[10px] border-cyan-400 flex items-center justify-center">
                  <Image src="/logo.png" alt="Logo" width={180} height={70} className="h-25 w-auto" priority />
                </div>
              </Link>
            </div>

            {/* Right Hamburger (Mobile) */}
            <div
              className="lg:hidden flex items-center right-hamburger absolute right-10 top-1/2 -translate-y-1/2 group bg-black/30 border border-white/10 shadow-xl rounded-md"
              onMouseEnter={() => {
                setIsRightMenuOpen(true);
                setIsLeftMenuOpen(false);
              }}
            >
              <button className="text-3xl text-cyan-400">
                <IoReorderThree />
              </button>
            </div>

            {/* Left Menu (Desktop) */}
            <ul className="hidden lg:flex  font-bold px-4  rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute left-2.5 ml-4 left-menu-container">
              {/* <SparkleNavbar
  items={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact-us" },
  ]}
  color="#1e90ff"
  textColor="white"
/> */}
<SparkleNavbar 
  items={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { 
      label: "Services", 
      href: "/services",
      dropdown: services
    },
    { label: "Contact", href: "/contact-us" },
  ]}
  color="#00BCD4"
  textColor="white"
  onQuickEnquiry={openQuoteModal}
/>
            </ul>

            {/* Right Menu - Social Icons */}
            <ul className="hidden lg:flex space-x-6 font-bold px-6 py-1 rounded-xl bg-black/10 border border-white/10 shadow-xl items-center backdrop-blur-sm absolute right-6 top-1/2 -translate-y-1/2 mr-4 right-menu-container">
              <div className="flex items-center space-x-5">
                {socialLinks.map((item) => (
                  <li key={item.name} className="flex flex-col items-center justify-center w-10 h-9" title={item.name}>
                    <Link href={item.link} className="text-cyan-400 text-xl hover:text-cyan-600 cursor-pointer size-5">
                      {item.icon}
                    </Link>
                  </li>
                ))}
              </div>
            </ul>

            {/* Left Side Menu (Mobile) */}
            <div className={`lg:hidden left-menu-container-mobile fixed top-0 left-0 h-full w-64 bg-black/90 border-r border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
              isLeftMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}>
              <div className="flex flex-col p-6 space-y-6 text-white">
                <div className="flex flex-col items-start space-y-2">
                  <Link href="/" onClick={() => setIsLeftMenuOpen(false)}>
                    <Image src="/logo2.png" alt="Logo" width={180} height={70} className="w-32 h-auto" />
                  </Link>
                  <p className="text-sm text-gray-300">
                    Cyberspace Works - Website, Software, App Developer | Digital Marketing | Graphics Design | UI/UX | Research & Analysis
                  </p>
                  <p className="text-gray-400 flex items-start gap-2 mt-3">
                    <IoCallOutline className="text-cyan-400 mt-1" />
                    <a href="tel:+917980715765" className="hover:underline leading-snug pl-6">+91 7980715765</a>
                  </p>
                  <p className="text-gray-400 flex items-start gap-2 mt-3">
                    <IoMailOutline className="text-cyan-400 mt-1 size-5" />
                    <a href="mailto:cyberspaceworksofficial@gmail.com" className="hover:underline leading-snug text-center">
                      cyberspaceworksofficial@<br/>gmail.com
                    </a>
                  </p>
                  <p className="text-gray-400 flex items-start gap-2 mt-3">
                    <IoLocationOutline className="text-cyan-400 mt-1 size-12" />
                    <a href="https://maps.app.goo.gl/QABsaPuw5qL3BwRa7" className="hover:underline leading-snug text-center">
                      Kolkata 19, Krishna Chatterjee Ln, Bally, Howrah, West Bengal 711201
                    </a>
                  </p>
                </div>
                <div className="mt-auto space-y-2">
                  {!isAuthenticated && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsLeftMenuOpen(false);
                        openQuoteModal();
                      }}
                      className="w-full flex items-center justify-center gap-1 px-4 py-1 text-cyan-100 border border-cyan-500/40 rounded-full transition-all duration-300 hover:bg-cyan-500/10"
                    >
                      Quick Enquiry
                    </button>
                  )}

                  {isAuthenticated ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                        onClick={() => setIsLeftMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setIsLeftMenuOpen(false);
                          signOut({ callbackUrl: "/login" });
                        }}
                        className="w-full flex items-center justify-center gap-1 px-4 py-1 text-cyan-100 border border-cyan-500/40 rounded-full transition-all duration-300 hover:bg-cyan-500/10"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-1 px-4 py-1 text-black bg-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,0,0,0.4)] transition-all duration-300 hover:shadow-[0_0_16px_rgba(0,0,0,0.6)]"
                      onClick={() => setIsLeftMenuOpen(false)}
                    >
                      Login
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side Menu (Mobile) */}
            <div className={`lg:hidden right-menu-container-mobile fixed top-0 right-0 h-full w-64 bg-black/90 border-l border-cyan-400/20 backdrop-blur-xl transform transition-transform duration-300 z-[9999] ${
              isRightMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}>
              <div className="flex flex-col p-6 space-y-4 text-white">
                {socialLinks.map((item) => (
                  <Link key={item.name} href={item.link} className="flex items-center gap-2 text-lg hover:text-cyan-400">
                    <span className="text-cyan-400 text-base">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile & Tablet Bottom Navigation */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[350px] mx-auto bg-black/10 border border-white/10 shadow-xl backdrop-blur-sm rounded-2xl z-50">
        {/* FAB */}
        <div className="relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-50">
            <div
              className="absolute inset-0 w-14 h-14 rounded-full animate-pulseGlowRing"
              style={{
                background: 'conic-gradient(from 0deg, #0ea5e9, #06b6d4, #0ea5e9)',
                filter: 'blur(16px)',
                opacity: 0.9,
                zIndex: -1,
                transform: 'translateY(-8px)',
                pointerEvents: 'none',
              }}
              aria-hidden="true"
            />
            <div className="relative bg-black border border-gray-700 rounded-full p-2 shadow-lg w-14 h-14 flex items-center justify-center overflow-visible cursor-pointer">
              <Link href="/">
                <Image src="/logo2.png" alt="Logo" width={100} height={100} className="object-contain w-auto h-12" />
              </Link>
            </div>
          </div>

          <style jsx global>{`
            @keyframes pulseGlowRing {
              0%, 100% { transform: translateY(-4px) scale(0.75); opacity: 0.7; filter: blur(10px); }
              50% { transform: translateY(-4px) scale(0.75); opacity: 1; filter: blur(15px); }
            }
            .animate-pulseGlowRing { animation: pulseGlowRing 1.8s ease-in-out infinite; }
            @media (prefers-reduced-motion: reduce) {
              .animate-pulseGlowRing { animation: none; opacity: 0.8; filter: blur(16px); }
            }
          `}</style>
        </div>

        {/* Bottom nav items */}
        <div className="flex justify-around items-center py-3 relative">

          {/* Home */}
          <Link href="/" className="flex flex-col items-center relative group">
            <HomeIcon className={`w-6 h-6 transition-colors duration-300 ${isActive("/") ? "text-cyan-400" : "text-cyan-100 group-hover:text-cyan-400"}`} />
            <span className={`text-xs mt-1 transition-colors duration-300 ${isActive("/") ? "text-cyan-400" : "text-cyan-100 group-hover:text-cyan-400"}`}>Home</span>
            {!isActive("/") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>}
            {isActive("/") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link>

          {/* Services */}
          <div className="relative">
            <div
              className="flex flex-col items-center relative cursor-pointer group"
              onClick={() => setIsServicesOpenMobile(prev => !prev)}
            >
              <Cog6ToothIcon className={`w-6 h-6 transition-colors duration-300 ${pathname.startsWith("/services") ? "text-cyan-400" : "text-cyan-100 group-hover:text-cyan-400"}`} />
              <span className={`text-xs mt-1 transition-colors duration-300 ${pathname.startsWith("/services") ? "text-cyan-400" : "text-gray-100 group-hover:text-cyan-400"}`}>Services</span>
              {!pathname.startsWith("/services") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>}
              {pathname.startsWith("/services") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
            </div>

            {/* Mobile Services Dropdown */}
            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-60 bg-gray-900/95 backdrop-blur-sm border border-cyan-400/20 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ease-in-out origin-bottom z-[9999]
              ${isServicesOpenMobile ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
              <button
                onClick={() => setIsServicesOpenMobile(false)}
                className="absolute top-2 right-2 p-1 rounded-full hover:bg-cyan-400/20 transition-colors"
                aria-label="Close services menu"
              >
                <XMarkIcon className="w-5 h-5 text-cyan-400 cursor-pointer" />
              </button>

              <div className="py-2 pt-8 max-h-[60vh] overflow-y-auto">
                <Link href="/services" onClick={() => setIsServicesOpenMobile(false)}
                  className="flex items-center gap-3 px-4 py-2 text-sm text-cyan-100 font-semibold transition-colors duration-300 hover:text-cyan-400 hover:bg-cyan-400/10">
                  <span className="text-lg text-cyan-400"><Cog6ToothIcon className="w-4 h-4" /></span>
                  Our Services
                </Link>

                {services.map((service) => (
                  <Link key={service.name} href={service.href}
                    onClick={() => setIsServicesOpenMobile(false)}
                    className={`flex items-center gap-3 px-4 py-2 text-sm relative transition-colors duration-300
                      ${pathname === service.href
                        ? "text-cyan-400 bg-cyan-400/10"
                        : "text-gray-100 hover:text-cyan-400 hover:bg-cyan-400/10"
                      }`}>
                    <span className={`text-lg ${service.href === "/services/ai-intelligent-systems" ? "text-violet-400" : "text-cyan-400"}`}>
                      {service.icon}
                    </span>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="w-12" /> {/* FAB gap */}

          {/* About */}
          <Link href="/about-us" className="flex flex-col items-center relative group">
            <InformationCircleIcon className={`w-6 h-6 transition-colors duration-300 ${isActive("/about-us") ? "text-cyan-400" : "text-cyan-100 group-hover:text-cyan-400"}`} />
            <span className={`text-xs mt-1 transition-colors duration-300 ${isActive("/about-us") ? "text-cyan-400" : "text-gray-100 group-hover:text-cyan-400"}`}>About</span>
            {!isActive("/about-us") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>}
            {isActive("/about-us") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link>

          {/* Marketplace
          <Link href="/dashboard/marketplace" className="flex flex-col items-center relative group">
            <FaShoppingBag className={`w-6 h-6 transition-colors duration-300 ${isActive("/dashboard/marketplace") ? "text-cyan-400" : "text-cyan-100 group-hover:text-cyan-400"}`} />
            <span className={`text-xs mt-1 transition-colors duration-300 ${isActive("/dashboard/marketplace") ? "text-cyan-400" : "text-gray-100 group-hover:text-cyan-400"}`}>Market</span>
            {!isActive("/dashboard/marketplace") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>}
            {isActive("/dashboard/marketplace") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link> */}

          {/* Contact */}
          <Link href="/contact-us" className="flex flex-col items-center relative group">
            <PhoneIcon className={`w-6 h-6 transition-colors duration-300 ${isActive("/contact-us") ? "text-cyan-400" : "text-cyan-100 group-hover:text-cyan-400"}`} />
            <span className={`text-xs mt-1 transition-colors duration-300 ${isActive("/contact-us") ? "text-cyan-400" : "text-gray-100 group-hover:text-cyan-400"}`}>Contact</span>
            {!isActive("/contact-us") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-700 via-cyan-400 to-cyan-200 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full"></span>}
            {isActive("/contact-us") && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></span>}
          </Link>
        </div>
      </div>

      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center px-4">
          <div
            className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"
            onClick={() => closeQuoteModal()}
          ></div>

          <div
            className="relative z-10 w-full max-w-md rounded-2xl border border-cyan-400/30 bg-[#050b14] p-6 shadow-[0_0_40px_rgba(6,182,212,0.22)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                closeQuoteModal();
              }}
              className="absolute right-3 top-3 text-cyan-200 hover:text-cyan-400"
              aria-label="Close form"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>

            {isComplete ? (
              <div className="py-8 text-center">
                <h3 className="text-2xl font-semibold text-cyan-300">Thank you</h3>
                <p className="mt-3 text-sm text-cyan-100/90">
                  Thanks for choosing us. We will contact you at the earliest.
                </p>
              </div>
            ) : (
              <form onSubmit={handleStepSubmit} className="space-y-4">
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-400/80">
                  Step {currentStepIndex + 1} of {quoteSteps.length}
                </p>
                <h3 className="text-xl font-semibold text-white">
                  {quoteSteps[currentStepIndex].label}
                </h3>

                {quoteSteps[currentStepIndex].type === "checkbox" ? (
                  <div className="max-h-52 space-y-2 overflow-y-auto rounded-lg border border-cyan-500/30 bg-black/40 p-3">
                    {services.map((serviceItem) => {
                      const isChecked = Array.isArray(stepFormData.service) && stepFormData.service.includes(serviceItem.name);
                      return (
                        <label
                          key={serviceItem.name}
                          className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 transition hover:bg-white/5"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleServiceSelectionChange(serviceItem.name)}
                            className="h-4 w-4 accent-cyan-400"
                          />
                          <span className="text-sm text-cyan-100">{serviceItem.name}</span>
                        </label>
                      );
                    })}
                  </div>
                ) : (
                  <input
                    type={quoteSteps[currentStepIndex].type}
                    value={stepFormData[quoteSteps[currentStepIndex].key]}
                    onChange={handleStepInputChange}
                    placeholder={quoteSteps[currentStepIndex].placeholder}
                    className="w-full rounded-lg border border-cyan-500/30 bg-black/40 px-4 py-3 text-white placeholder:text-gray-400 focus:border-cyan-400 focus:outline-none"
                    autoFocus
                  />
                )}

                {stepError && (
                  <p className="text-sm text-red-300">{stepError}</p>
                )}

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    type="button"
                    disabled={currentStepIndex === 0}
                    onClick={() => {
                      setStepError("");
                      setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
                    }}
                    className="rounded-full border border-cyan-500/40 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-500/10 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Back
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmittingLead}
                    className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    {isSubmittingLead
                      ? "Submitting..."
                      : currentStepIndex === quoteSteps.length - 1
                        ? "Final Submit"
                        : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}