"use client";
import React, { useEffect, useState } from "react";
import { FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import {
  FaLightbulb,
  FaCogs,
  FaBullseye,
  FaHandshake,
  FaClock,
  FaShieldAlt,
  FaPaintBrush,
  FaGlobeAmericas,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const WhyChooseUsWithGraph = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setCoords({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const spotlightStyle = {
    background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(0,150,255,0.2), transparent 60%)`,
    transition: "background-position 90ms linear, opacity 160ms ease",
  };

  // === COOL GRAPH ENHANCEMENTS ===
  const createGradient = (ctx, color1, color2) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  };

const dataLine = {
  labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
  datasets: [
    {
      label: "Google",
      data: [15, 18, 20, 25, 28, 30, 33, 35, 45],
      borderColor: "#6366F1", // Indigo-500
      fill: true,
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(99,102,241,0.35)", // Indigo gradient start
          "rgba(99,102,241,0.05)"  // Indigo gradient end
        ),
      tension: 0.45,
      pointBackgroundColor: "#6366F1",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 3,
    },
    {
      label: "Social Media",
      data: [10, 11, 13, 17, 18, 21, 22, 23, 30],
      borderColor: "#38BDF8", // Sky-400
      fill: true,
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(56,189,248,0.35)", // Sky gradient start
          "rgba(56,189,248,0.05)"  // Sky gradient end
        ),
      tension: 0.45,
      pointBackgroundColor: "#38BDF8",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 3,
    },
    {
      label: "Referral",
      data: [5, 6, 7, 8, 9, 10, 11, 12, 20],
      borderColor: "#00cc99",
      fill: true,
      backgroundColor: (context) =>
        createGradient(
          context.chart.ctx,
          "rgba(0,204,153,0.4)",
          "rgba(0,204,153,0.05)"
        ),
      tension: 0.45,
      pointBackgroundColor: "#00cc99",
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 8,
      borderWidth: 3,
    },
  ],
};


  const optionsLine = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1800,
      easing: "easeInOutQuart",
    },
    plugins: {
      legend: {
        display: false, 
      },
      title: {
        display: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#aaa" },
        grid: { color: "rgba(255,255,255,0.1)", drawBorder: false },
      },
      x: {
        ticks: { color: "#aaa" },
        grid: { display: false },
      },
    },
    elements: {
      line: { borderJoinStyle: "round" },
    },
  };

  const CardWrapper = ({ children, className = "" }) => (
    <div
      className={`relative group rounded-2xl p-[2px] bg-gradient-to-b from-cyan-500/20 to-transparent overflow-hidden ${className}`}
    >
      <div className="relative bg-black/60 backdrop-blur-lg rounded-2xl p-6 flex flex-col gap-4 h-full transition-all duration-500 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-2/3 blur-2xl pointer-events-none"></div>
        {children}
      </div>
    </div>
  );

  const CardContent = ({ icon, title, description, className = "" }) => (
    <div className={`relative z-10 ${className}`}>
      <div className="mb-4 bg-cyan-400 rounded-md inline-flex p-2 text-black">{icon}</div>
      <h3 className="text-white text-lg font-semibold mb-2 leading-tight">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
/// === Animation Controls ===
const { ref: leftRef, inView: leftInView } = useInView({
  threshold: 0,               // trigger as soon as it enters
  rootMargin: "0px 0px -150px 0px", // trigger 150px before visible
  triggerOnce: true,
});

const { ref: rightRef, inView: rightInView } = useInView({
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
  triggerOnce: true,
});

const { ref: bottomRef, inView: bottomInView } = useInView({
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
  triggerOnce: true,
});

  return (
    <main className="relative" style={{ background: "#000000" }}>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 50%)",
        }}
      />

      <div
        className="absolute top-0 left-0 w-full pointer-events-none"
        aria-hidden
        style={{
          height: "120px",
          zIndex: 1,
          background: "linear-gradient(to bottom, #030508 0%, #000000 100%)",
        }}
      />

      <section className="pt-15 relative z-10 px-6 ">
        <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Left content */}
           <motion.div
  ref={leftRef}
  initial={{ opacity: 0, x: -120 }}
  animate={leftInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="flex justify-center md:justify-start flex-col"
>
          
           
            <div className="flex items-baseline mb-4 lg:text-left text-center">
              <FaBolt className="text-white text-3xl mr-2 " />
              <h2 className=" font-bold text-white text-4xl">Why <span className="text-cyan-400">Choose Us</span></h2>
            </div>
            <p className="text-gray-300 mb-8 text-center lg:text-left">
              At Cyberspace Works, we go beyond just delivering digital solutions — we build experiences that drive growth. Our team of passionate developers, designers, and strategists work hand in hand to craft innovative, user-focused, and result-driven products. From concept to launch, we ensure every project reflects precision, creativity, and measurable impact. With transparent communication, on-time delivery, and cutting-edge technology, we’re the digital partner you can rely on to bring your vision to life.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              <CardWrapper>
                <CardContent
                  icon={<FaLightbulb className="text-black" size={20} />}
                  title="Innovative Solutions"
                  description="Smart, modern, and scalable digital products."
                />
              </CardWrapper>

              <CardWrapper>
                <CardContent
                  icon={<FaCogs className="text-black" size={20} />}
                  title="Full-Cycle Development"
                  description="From concept to deployment, we handle all."
                />
              </CardWrapper>

              <CardWrapper>
                <CardContent
                  icon={<FaBullseye className="text-black" size={20} />}
                  title=" Result-Driven Approach"
                  description=" Focused on outcomes, not just output."
                />
              </CardWrapper>

              <CardWrapper>
                <CardContent
                  icon={<FaHandshake className="text-black" size={20} />}
                  title="Client-Centric Process"
                  description=" Your goals guide every project decision."
                />
              </CardWrapper>
            </div>
         </motion.div>

          {/* Chart Section */}
         {/* RIGHT CHART SECTION */}
<motion.div
  ref={rightRef}
  initial={{ opacity: 0, x: 120 }}
  animate={rightInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="relative rounded-2xl p-8 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,150,255,0.5)]"
>
          
            {/* <div
              className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(0,150,255,0.7) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
              }}
            /> */}
            <div className="relative z-10">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <p className="text-3xl font-bold text-white">Clients Acquired</p>
                </div>
              </div>

              {/* COOL GLOW GRAPH */}
              <div className="h-64 mb-8">
                <Line data={dataLine} options={optionsLine} />
              </div>

              {/* Minimal color indicators only */}
              <div className="flex justify-around mt-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#6366F1]" />
                  <p className="text-white text-sm">Google</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#38BDF8]" />
                  <p className="text-white text-sm">Social Media</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#00cc99]" />
                  <p className="text-white text-sm">Referral</p>
                </div>
              </div>
            </div>
            <p className=" mt-20">
              Clients come to us because we turn ideas into impactful digital <br/>experiences — fast, reliable, and beautifully built.

            </p>
         </motion.div>
        </div>

        {/* Bottom Reason Cards */}
         <motion.div
  ref={bottomRef}
  initial={{ opacity: 0, y: 100 }}
  animate={bottomInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-3"
>
          <CardWrapper>
            <CardContent
              icon={<FaClock className="text-black" size={20} />}
              title=" On-Time Delivery"
              description="We deliver quality work, always on schedule."
            />
          </CardWrapper>

          <CardWrapper>
            <CardContent
              icon={<FaShieldAlt className="text-black" size={20} />}
              title="Reliable & Secure"
              description="Built with performance, safety, and trust."
            />
          </CardWrapper>

          <CardWrapper>
            <CardContent
              icon={<FaPaintBrush className="text-black" size={20} />}
              title="Creative Expertise"
              description="Designs that inspire, engage, and convert."
            />
          </CardWrapper>

          <CardWrapper>
            <CardContent
              icon={<FaGlobeAmericas className="text-black" size={20} />}
              title="Global Experience"
              description="Serving startups and enterprises worldwide."
            />
          </CardWrapper>
        </motion.div>
        </div>
      </section>
    </main>
  );
};

export default WhyChooseUsWithGraph;