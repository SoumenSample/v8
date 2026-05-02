// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";

// // Icons
// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaCode,
//   FaPalette,
//   FaBullhorn,
//   FaBrush,
//   FaUsers,
//   FaLightbulb,
//   FaHandshake,
//   FaStar,
//   FaGem,
// } from "react-icons/fa";
// import { SiGoogleanalytics } from "react-icons/si";

// // RE-USE YOUR ServiceCardSketch from Services page
// import ServiceCardSketch from "@/components/HomeComponents/ServiceCardSketch"; // Adjust path if needed

// // Values Data
// const values = [
//   {
//     title: "Customer-Centric Approach",
//     description:
//       "We place our clients at the forefront, focusing on their unique needs and providing our efforts to ensure sustainable and long-term success.",
//     icon: <FaUsers className="text-cyan-400 text-4xl mb-3 mx-auto" />,
//   },
//   {
//     title: "Collaboration",
//     description:
//       "We deeply value teamwork, collaboration, and collective effort, ensuring consistently aligned outcomes toward goals and excellence.",
//     icon: <FaHandshake className="text-cyan-400 text-4xl mb-3 mx-auto" />,
//   },
//   {
//     title: "Integrity",
//     description:
//       "Honesty and transparency guide every interaction we pursue to understand, acknowledge, and fulfill high ethical standards.",
//     icon: <FaStar className="text-cyan-400 text-4xl mb-3 mx-auto" />,
//   },
//   {
//     title: "Innovation",
//     description:
//       "We passionately implement creativity and unique top-selling strategies, technologies, and approaches that transform thinking and provide results.",
//     icon: <FaLightbulb className="text-cyan-400 text-4xl mb-3 mx-auto" />,
//   },
//   {
//     title: "Commitment to Excellence",
//     description:
//       "Our unwavering drive for excellence relentlessly motivates us to consistently improve, innovate, and exceed expectations in every project we take on.",
//     icon: <FaGem className="text-cyan-400 text-4xl mb-3 mx-auto" />,
//   },
// ];

// // Services Data (with icons sized for ServiceCardSketch)
//  const services = [
//     { name: "Web Development", icon: <FaLaptopCode size={32} />, desc: "Crafting high-performance, visually stunning websites tailored for your business.", href: "/services/web-development" },
//     { name: "App Development", icon: <FaMobileAlt size={32} />, desc: "Building intuitive, scalable, and engaging mobile app experiences for businesses.", href: "/services/app-development" },
//     { name: "Software Development", icon: <FaCode size={32} />, desc: "Custom software solutions engineered to streamline operations and drive growth.", href: "/services/software-development" },
//     { name: "UI/UX Design", icon: <FaPalette size={32} />, desc: "Designing sleek, user-focused interfaces that enhance experience and usability.", href: "/services/ui-ux-design" },
//     { name: "Digital Marketing", icon: <FaBullhorn size={32} />, desc: "Boosting brand visibility and engagement through strategic online campaigns.", href: "/services/digital-marketing" },
//     { name: "Graphic Design", icon: <FaBrush size={32} />, desc: "Transforming ideas into powerful, captivating visuals that leave a lasting impression.", href: "/services/graphic-design" },
//     { name: "Research & Analytics", icon: <SiGoogleanalytics size={32} />, desc: "Delivering data-driven insights to fuel smarter decisions and business innovation.", href: "/services/research-and-analytics" },
//   ];

// const AboutUs = () => {
//   const swiperRef = useRef(null);

//   return (
//     <section className="bg-black text-white lg:pt-10 px-6 pt-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Hero Section */}
//         <div className="grid lg:grid-cols-2 items-center gap-10 relative bg-black/10 rounded-2xl shadow-lg p-8 lg:p-0">
//           <div className="flex flex-col gap-4 lg:text-left text-center">
//             <h1 className="text-4xl lg:text-5xl font-bold">
//               Empowering <span className="text-cyan-400">Businesses</span> <br /> Through <span className="text-cyan-400">Technology</span>
//             </h1>
//             <p className="text-gray-300 mb-5">
//               We provide end-to-end support and are committed to helping businesses achieve their goals efficiently.
//             </p>
//             <div>
//               <Link
//                 href="/contact-us"
//                 className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-600 transition shadow-lg font-medium text-black inline-block"
//               >
//                 Contact Us
//               </Link>
//             </div>
//           </div>
//           <div className="relative w-full h-80 lg:h-96 grid place-items-center">
//             <div className="absolute w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 animate-pulseGlow"></div>
//             <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-black border border-gray-700 rounded-full flex items-center justify-center">
//               <Image
//                 src="/logo2.png"
//                 alt="Logo"
//                 width={100}
//                 height={100}
//                 className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Our Values Section */}
//         <div className="mt-5">
//           <h2 className="text-4xl font-semibold text-center mb-10">Our <span className="text-cyan-400">Values</span></h2>
//           <p className="text-gray-400 text-center mb-12 max-w-4xl mx-auto">
//             As a company, we prioritize a customer-first mindset, innovation, and integrity. Through collaboration and commitment to<br className="hidden lg:block" />  excellence, we deliver impactful solutions that exceed expectations.
//           </p>

//           {/* First Row: 3 Cards */}
//           <div className="grid lg:grid-cols-3 gap-6 mb-12">
//             {values.slice(0, 3).map((val, idx) => (
//               <div
//                 key={idx}
//                 className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] transition group overflow-hidden"
//               >
//                 <div
//                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
//                   style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
//                 />
//                 <div
//                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
//                   style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
//                 />
//                 <h3 className="font-semibold text-xl mb-2 relative z-10 lg:text-left text-center">{val.title}</h3>
//                 <p className="text-gray-400 relative z-10 lg:text-left text-center">{val.description}</p>
//                 <div className="mt-4">{val.icon}</div>
//               </div>
//             ))}
//           </div>

//           {/* Second Row: 2 Cards */}
//           <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {values.slice(3).map((val, idx) => (
//               <div
//                 key={idx}
//                 className="relative bg-gray-900 p-6 rounded-2xl shadow-lg transition group overflow-hidden hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
//               >
//                 <div
//                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
//                   style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
//                 />
//                 <div
//                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
//                   style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
//                 />
//                 <h3 className="font-semibold text-xl mb-2 relative z-10 lg:text-left text-center">{val.title}</h3>
//                 <p className="text-gray-400 relative z-10 lg:text-left text-center">{val.description}</p>
//                 <div className="mt-4">{val.icon}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* What We Do + Services Swiper */}
//         <div className="pt-20 flex flex-col gap-10 items-start">
//           <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] w-full">
//             <div
//               className="absolute top-0 left-0 w-60 h-60 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
//               style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }}
//             />
//             <div
//               className="absolute bottom-0 right-0 w-60 h-60 translate-x-20 translate-y-20 blur-2xl opacity-40"
//               style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }}
//             />
//             <div className="relative z-10">
//               <h2 className="lg:text-3xl text-2xl font-semibold mb-4 text-white lg:text-left text-center">
//                 Your <span className="text-cyan-400">Vision</span>, Powered by Innovation.
//               </h2>
//               <p className="text-gray-400 mb-6 lg:text-left text-center">
//                 Discover the boundless potential of your online presence with Cyberspace Works – where innovation meets imagination, and web development is elevated to an art form. Our journey is fueled by innovation and guided by your unique goals. We believe in the power of collaboration, working closely with you to understand your needs and aspirations. Whether you’re a startup striving for a digital debut or an established business aiming to revamp your online presence, we are your trusted partner on this transformative journey. We’re not just here to build websites or apps; we’re here to build your success. At Cyberspace Works, we merge cutting-edge technology with visionary design to create web solutions that not only impress but also drive growth.
//               </p>
//             </div>
//           </div>

//        {/* SERVICES SWIPER - USING ServiceCardSketch */}
// <div className="relative w-full pt-10 pb-20">
//   {/* Left/Right Fade only on desktop */}
//   <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
//   <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

//   <Swiper
//     onSwiper={(swiper) => (swiperRef.current = swiper)}
//     slidesPerView="auto"
//     spaceBetween={30}
//     loop={true}
//     speed={5000}
//     autoplay={{
//       delay: 0,
//       disableOnInteraction: false,
//       pauseOnMouseEnter: false,
//     }}
//     allowTouchMove={true}
//     grabCursor={true}
//     freeMode={false}
//     modules={[Autoplay]}
//     className="mySwiper"
//   >
//     {[...services, ...services, ...services].map((service, index) => (
//       <SwiperSlide
//         key={index}
//         className="
//           flex justify-center items-center
//           sm:w-[260px] md:w-[260px] w-full h-full max-w-[300px]
//          py-5 px-3 mb-4
//         "
//       >
//         <ServiceCardSketch
//           icon={service.icon}
//           title={service.name}
//           desc={service.desc}
//           href={service.href}
//         />
//       </SwiperSlide>
//     ))}
//   </Swiper>
// </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Icons
import {
  FaLaptopCode,
  FaMobileAlt,
  FaCode,
  FaPalette,
  FaBullhorn,
  FaBrush,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaGem,
  FaBrain,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

import ServiceCardSketch from "@/components/HomeComponents/ServiceCardSketch";

const values = [
  {
    title: "Customer-Centric Approach",
    description:
      "We place our clients at the forefront, focusing on their unique needs and providing our efforts to ensure sustainable and long-term success.",
    icon: <FaUsers className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Collaboration",
    description:
      "We deeply value teamwork, collaboration, and collective effort, ensuring consistently aligned outcomes toward goals and excellence.",
    icon: <FaHandshake className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Integrity",
    description:
      "Honesty and transparency guide every interaction we pursue to understand, acknowledge, and fulfill high ethical standards.",
    icon: <FaStar className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Innovation",
    description:
      "We passionately implement creativity and unique top-selling strategies, technologies, and approaches that transform thinking and provide results.",
    icon: <FaLightbulb className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
  {
    title: "Commitment to Excellence",
    description:
      "Our unwavering drive for excellence relentlessly motivates us to consistently improve, innovate, and exceed expectations in every project we take on.",
    icon: <FaGem className="text-cyan-400 text-4xl mb-3 mx-auto" />,
  },
];

// ✅ AI & Intelligent Systems added as FIRST service
const services = [
  { name: "AI & Intelligent Systems", icon: <FaBrain size={32} />, desc: "Unlocking AI power through automation, machine learning, and large language models.", href: "/services/ai-intelligent-systems" },
  { name: "Web Development", icon: <FaLaptopCode size={32} />, desc: "Crafting high-performance, visually stunning websites tailored for your business.", href: "/services/web-development" },
  { name: "App Development", icon: <FaMobileAlt size={32} />, desc: "Building intuitive, scalable, and engaging mobile app experiences for businesses.", href: "/services/app-development" },
  { name: "Software Development", icon: <FaCode size={32} />, desc: "Custom software solutions engineered to streamline operations and drive growth.", href: "/services/software-development" },
  { name: "UI/UX Design", icon: <FaPalette size={32} />, desc: "Designing sleek, user-focused interfaces that enhance experience and usability.", href: "/services/ui-ux-design" },
  { name: "Digital Marketing", icon: <FaBullhorn size={32} />, desc: "Boosting brand visibility and engagement through strategic online campaigns.", href: "/services/digital-marketing" },
  { name: "Graphic Design", icon: <FaBrush size={32} />, desc: "Transforming ideas into powerful, captivating visuals that leave a lasting impression.", href: "/services/graphic-design" },
  { name: "Research & Analytics", icon: <SiGoogleanalytics size={32} />, desc: "Delivering data-driven insights to fuel smarter decisions and business innovation.", href: "/services/research-and-analytics" },
];

const AboutUs = () => {
  const swiperRef = useRef(null);

  return (
    <section className="bg-black text-white lg:pt-10 px-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 items-center gap-10 relative bg-black/10 rounded-2xl shadow-lg p-8 lg:p-0">
          <div className="flex flex-col gap-4 lg:text-left text-center">
            <h1 className="text-4xl lg:text-5xl font-bold">
              Empowering <span className="text-cyan-400">Businesses</span> <br /> Through <span className="text-cyan-400">Technology</span>
            </h1>
            <p className="text-gray-300 mb-5">
              We provide end-to-end support and are committed to helping businesses achieve their goals efficiently.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-600 transition shadow-lg font-medium text-black inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="relative w-full h-80 lg:h-96 grid place-items-center">
            <div className="absolute w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-white via-cyan-400 to-cyan-600 blur-3xl opacity-80 animate-pulseGlow"></div>
            <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-black border border-gray-700 rounded-full flex items-center justify-center">
              <Image
                src="/logo2.png"
                alt="Logo"
                width={100}
                height={100}
                className="w-24 h-24 lg:w-28 lg:h-28 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-5">
          <h2 className="text-4xl font-semibold text-center mb-10">Our <span className="text-cyan-400">Values</span></h2>
          <p className="text-gray-400 text-center mb-12 max-w-4xl mx-auto">
            As a company, we prioritize a customer-first mindset, innovation, and integrity. Through collaboration and commitment to<br className="hidden lg:block" /> excellence, we deliver impactful solutions that exceed expectations.
          </p>

          {/* First Row: 3 Cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {values.slice(0, 3).map((val, idx) => (
              <div
                key={idx}
                className="relative bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] transition group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40" style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }} />
                <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }} />
                <h3 className="font-semibold text-xl mb-2 relative z-10 lg:text-left text-center">{val.title}</h3>
                <p className="text-gray-400 relative z-10 lg:text-left text-center">{val.description}</p>
                <div className="mt-4">{val.icon}</div>
              </div>
            ))}
          </div>

          {/* Second Row: 2 Cards */}
          <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.slice(3).map((val, idx) => (
              <div
                key={idx}
                className="relative bg-gray-900 p-6 rounded-2xl shadow-lg transition group overflow-hidden hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]"
              >
                <div className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40" style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }} />
                <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }} />
                <h3 className="font-semibold text-xl mb-2 relative z-10 lg:text-left text-center">{val.title}</h3>
                <p className="text-gray-400 relative z-10 lg:text-left text-center">{val.description}</p>
                <div className="mt-4">{val.icon}</div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Do + Services Swiper */}
        <div className="pt-20 flex flex-col gap-10 items-start">
          <div className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)] w-full">
            <div className="absolute top-0 left-0 w-60 h-60 -translate-x-20 -translate-y-20 blur-2xl opacity-40" style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 100%)" }} />
            <div className="absolute bottom-0 right-0 w-60 h-60 translate-x-20 translate-y-20 blur-2xl opacity-40" style={{ background: "radial-gradient(circle, #6366f1 0%, transparent 100%)" }} />
            <div className="relative z-10">
              <h2 className="lg:text-3xl text-2xl font-semibold mb-4 text-white lg:text-left text-center">
                Your <span className="text-cyan-400">Vision</span>, Powered by Innovation.
              </h2>
              <p className="text-gray-400 mb-6 lg:text-left text-center">
                Discover the boundless potential of your online presence with Cyberspace Works – where innovation meets imagination, and web development is elevated to an art form. Our journey is fueled by innovation and guided by your unique goals. We believe in the power of collaboration, working closely with you to understand your needs and aspirations. Whether you are a startup striving for a digital debut or an established business aiming to revamp your online presence, we are your trusted partner on this transformative journey. We are not just here to build websites or apps; we are here to build your success. At Cyberspace Works, we merge cutting-edge technology with visionary design to create web solutions that not only impress but also drive growth.
              </p>
            </div>
          </div>

          {/* SERVICES SWIPER */}
          <div className="relative w-full pt-10 pb-20">
            <div className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="hidden lg:block pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

            <Swiper
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              slidesPerView="auto"
              spaceBetween={30}
              loop={true}
              speed={5000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              allowTouchMove={true}
              grabCursor={true}
              freeMode={false}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {[...services, ...services, ...services].map((service, index) => (
                <SwiperSlide
                  key={index}
                  className="flex justify-center items-center sm:w-[260px] md:w-[260px] w-full h-full max-w-[300px] py-5 px-3 mb-4"
                >
                  <ServiceCardSketch
                    icon={service.icon}
                    title={service.name}
                    desc={service.desc}
                    href={service.href}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;