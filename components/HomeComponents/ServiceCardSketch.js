"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const ServiceCardSketch = ({ icon, title, desc, href }) => (
  <div
    className="
      relative group bg-gradient-to-br from-[#0b223f]/70 to-[#06263f]/50 
      border border-white/10 rounded-2xl overflow-visible shadow-lg 
      transition duration-300 mt-6 hover:shadow-[0_0_30px_rgba(0,150,255,0.5)]
      min-h-[160px]
    "
  >
    {/* Icon Circle */}
    <div className="absolute -top-10 -left-2 w-14 h-14 sm:w-16 sm:h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-cyan-800 shadow-lg transition-transform duration-300 group-hover:scale-105">
      <div className="text-cyan-400 transition-transform duration-300 group-hover:scale-125">
        {icon}
      </div>
    </div>

    {/* Main Card Content */}
    <div className="p-4 sm:p-6 pt-10">
      <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>
    </div>

    {/* Bottom-right Arrow (Link) */}
    <motion.div
      className="relative"
      whileHover={{ x: 16 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Link href={href} className="block">
        <motion.div
          className="absolute -bottom-4 -right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"
            initial={{ backdropFilter: "blur(0px)" }}
            whileHover={{ backdropFilter: "blur(12px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ zIndex: -1 }}
          />

          <motion.svg
            className="relative z-10 w-full h-full text-cyan-400 p-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            whileHover={{
              backgroundColor: "rgba(34, 211, 238, 0.25)",
              borderColor: "#22d3ee",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
            }}
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </motion.svg>

          <motion.div
            className="absolute inset-0 rounded-full border-2 border-cyan-800"
            whileHover={{ borderColor: "#22d3ee" }}
          />
        </motion.div>
      </Link>
    </motion.div>
  </div>
);

export default ServiceCardSketch;
