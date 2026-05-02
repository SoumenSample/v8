"use client";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import Chart from "chart.js/auto";
import Card from "@/components/Card"
import { motion } from "framer-motion";
// Counter component with smooth animation
function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) {
      setCount(0); // Reset count when not in view
      return;
    }

    const duration = 2000;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(target * progress));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame); // Cleanup animation frame
  }, [start, target]);

  return <span>{count}+</span>;
}

export default function Achivements() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const chartRef1 = useRef(null); // Ref for first chart
  const chartRef2 = useRef(null); // Ref for second chart
  const canvasRef1 = useRef(null); // Ref for first canvas
  const canvasRef2 = useRef(null); // Ref for second canvas
  const canvasRef3 = useRef(null);
  const chartRef3 = useRef(null);
  const canvasRef4 = useRef(null);
  const chartRef4 = useRef(null);
  const { ref: cardsRef, inView: cardsInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  });

  const topCards = [
    { title: "Years of Experience", value: "8+", color: "cyan", percentage: 80, target: 8 },
    { title: "Completed Projects", value: "500+", color: "blue", percentage: 70, target: 500 },
    { title: "5⭐ Reviews", value: "100+", color: "purple", percentage: 90, target: 100 },
    { title: "Countries Served", value: "5+", color: "emerald", percentage: 60, target: 5 },
  ];

  useEffect(() => {
    // Spotlight effect
    setCoords({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
// Chart 1 setup
const ctx1 = canvasRef1.current?.getContext("2d");
if (ctx1) {
  chartRef1.current = new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Competitors",
          data: [80, 90, 95, 100, 100, 115, 118, 120, 122],
          borderColor: "#2DD4BF",  
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
            gradient.addColorStop(0, "rgba(45,212,191,0.8)");  // top
            gradient.addColorStop(1, "rgba(45,212,191,0.1)");  // bottom
            return gradient;
          },
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: "#2DD4BF",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          label: "Our Clients",
          data: [80, 120, 140, 160, 160, 200, 220, 240, 260],
          borderColor: "#3B82F6",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
            gradient.addColorStop(0, "rgba(59,130,246,0.9)");
            gradient.addColorStop(1, "rgba(59,130,246,0.1)");
            return gradient;
          },
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: "#3B82F6",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: true, grid: { display: true } },
        y: { display: false, grid: { display: false } },
      },
      elements: { point: { radius: 4, hoverRadius: 6 } },
    },
  });
}

// Chart 2 setup
const ctx2 = canvasRef2.current?.getContext("2d");
if (ctx2) {
  chartRef2.current = new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Competitors",
          data: [80, 90, 95, 100, 100, 115, 118, 120, 122],
          borderColor: "#2DD4BF",  
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
            gradient.addColorStop(0, "rgba(45,212,191,0.8)");
            gradient.addColorStop(1, "rgba(45,212,191,0.1)");
            return gradient;
          },
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: "#2DD4BF",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
        {
          label: "Our Clients",
          data: [80, 120, 140, 160, 160, 200, 220, 240, 260],
          borderColor: "#3B82F6",
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height);
            gradient.addColorStop(0, "rgba(59,130,246,0.9)");
            gradient.addColorStop(1, "rgba(59,130,246,0.1)");
            return gradient;
          },
          fill: true,
          tension: 0.4,
          borderWidth: 3,
          pointBackgroundColor: "#3B82F6",
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: true, grid: { display: true } },
        y: { display: false, grid: { display: false } },
      },
      elements: { point: { radius: 4, hoverRadius: 6 } },
    },
  });
}

   // Chart 3 setup (Green glowing bar chart)
const ctx3 = canvasRef3.current?.getContext("2d");
if (ctx3) {
  const gradient3 = ctx3.createLinearGradient(0, 0, 0, 400);
  gradient3.addColorStop(0, "rgba(16, 185, 129, 0.9)");
  gradient3.addColorStop(1, "rgba(16, 185, 129, 0.1)");

  chartRef3.current = new Chart(ctx3, {
    type: "bar",
    data: {
      labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "New Clients",
          data: [30, 35, 40, 50, 55, 60, 65, 70, 95],
          backgroundColor: gradient3,
          borderRadius: 15,
          borderSkipped: false,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          display: false,
          grid: { display: false },
        },
        x: {
          display: true,
          grid: { display: true },
        },
      },
    },
  });
}

// Chart 4 setup
const ctx4 = canvasRef4.current?.getContext("2d");
if (ctx4) {

  const gradient4 = ctx4.createLinearGradient(0, 0, 0, 400);
  gradient4.addColorStop(0, "rgba(99,102,241,0.9)"); 
  gradient4.addColorStop(1, "rgba(99,102,241,0.1)"); 

  chartRef4.current = new Chart(ctx4, {
    type: "bar",
    data: {
      labels: ["2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      datasets: [
        {
          label: "Returning Clients",
          data: [10, 12, 15, 18, 25, 27, 30, 31, 32],
          backgroundColor: gradient4,
          borderRadius: 15,
          borderSkipped: false,
          borderWidth: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: {
          display: false,
          grid: { display: false },
        },
        x: {
          display: true,
          grid: { display: true },
        },
      },
    },
  });
}
  
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (chartRef1.current) chartRef1.current.destroy();
      if (chartRef2.current) chartRef2.current.destroy();
      if (chartRef3.current) chartRef3.current.destroy();
      if (chartRef4.current) chartRef4.current.destroy();
    };
  }, []);

  const getGradientStops = (color) => {
    switch (color) {
      case "cyan":
        return { start: "#22D3EE", end: "#0891B2" };
      case "blue":
        return { start: "#3B82F6", end: "#2563EB" };
      case "purple":
        return { start: "#A855F7", end: "#7E22CE" };
      case "emerald":
        return { start: "#10B981", end: "#047857" };
      default:
        return { start: "#fff", end: "#fff" };
    }
  };
// 👇 Use separate refs for left & right animations
  const { ref: leftRef, inView: leftInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <>
      
      <style jsx>{`
        @keyframes gradientFade {
          from {
            background: transparent;
            -webkit-text-fill-color: transparent;
          }
          to {
            background: var(--gradient);
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
          }
        }
        @keyframes circleProgress {
          from {
            stroke-dashoffset: ${2 * Math.PI * 36};
          }
          to {
            stroke-dashoffset: var(--target-offset);
          }
        }
        .gradient-animate {
          animation: gradientFade 2000ms ease-in-out forwards;
          animation-delay: 0s;
        }
        .circle-animate {
          animation: circleProgress 2000ms ease-in-out forwards;
          animation-delay: 0s;
        }
      `}</style>
      <main className="relative overflow-hidden " style={{ background: "#000" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden
          // style={{
          //   background: "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.18), transparent 60%)",
          // }}
        />
        <div className="px-6 pt-15 relative z-10">
          <div  className=" max-w-7xl mx-auto">
          {/* Top Cards */}
          <Card/>
          {/* <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {topCards.map((item, i) => {
              const { start, end } = getGradientStops(item.color);
              const targetOffset = 2 * Math.PI * 36 * (1 - (item.percentage || 100) / 100);
              const playState = cardsInView ? "running" : "paused";
              return (
                <div
                  key={i}
                  className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 flex flex-col items-center justify-center"
                >
                  <div
                    className="absolute -inset-20 blur-[180px] opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        item.color === "cyan"
                          ? "radial-gradient(circle at center, rgba(34,211,238,0.6), transparent 70%)"
                          : item.color === "blue"
                          ? "radial-gradient(circle at center, rgba(59,130,246,0.6), transparent 70%)"
                          : item.color === "purple"
                          ? "radial-gradient(circle at center, rgba(168,85,247,0.6), transparent 70%)"
                          : "radial-gradient(circle at center, rgba(16,185,129,0.6), transparent 70%)",
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative w-24 h-24 mb-4" key={`svg-${i}-${cardsInView}`}>
                      <svg className="w-full h-full">
                        <defs>
                          <linearGradient id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor={start} />
                            <stop offset="100%" stopColor={end} />
                          </linearGradient>
                        </defs>
                        <circle
                          className="text-white/10"
                          strokeWidth="6"
                          stroke="currentColor"
                          fill="transparent"
                          r="36"
                          cx="48%"
                          cy="48%"
                        />
                        <circle
                          className="circle-animate"
                          stroke={`url(#gradient-${i})`}
                          strokeWidth="6"
                          strokeLinecap="round"
                          fill="transparent"
                          r="36"
                          cx="48%"
                          cy="48%"
                          strokeDasharray={2 * Math.PI * 36}
                          style={{ "--target-offset": targetOffset, animationPlayState: playState }}
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-white font-bold">
                        <span
                          className="text-lg font-extrabold bg-clip-text text-transparent gradient-animate"
                          style={{
                            "--gradient": `linear-gradient(to right, ${start}, ${end})`,
                            animationPlayState: playState,
                          }}
                        >
                          <Counter target={item.target} start={cardsInView} />
                        </span>
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2 tracking-wide">{item.title}</p>
                  </div>
                </div>
              );
            })}
          </div> */}

          {/* Chart + Transactions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
             {/* <motion.div
        ref={leftRef}
        initial={{ opacity: 0, x: -120 }}
        animate={leftInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-wrap relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,150,255,0.5)]"
      >
               
              <div className="mb-10">
                <div className="relative z-10">
                 
                  <h3 className="text-2xl font-medium">Business</h3>
                  <div className="flex justify-between items-center mb-4 mt-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#2DD4BF" }}></span>
                      <span className="text-white text-sm">Competitors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3B82F6" }}></span>
                      <span className="text-white text-sm">Our Clients</span>
                    </div>
                  </div>
                  <div className="h-80 flex items-end">
                    <canvas ref={canvasRef1} className="w-full h-full"></canvas>
                  </div>
                </div>
              </div>

             
              <div className="mb-10">
                <div className="relative z-10">
                  
                  <h3 className="text-2xl font-medium">Growth</h3>
                  <div className="flex justify-between items-center mb-4 mt-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#2DD4BF" }}></span>
                      <span className="text-white text-sm">Competitors</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#3B82F6" }}></span>
                      <span className="text-white text-sm">Our Clients</span>
                    </div>
                  </div>
                  <div className="h-80 flex items-end">
                    <canvas ref={canvasRef2} className="w-full h-full"></canvas>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* Right chart */}
            {/* <motion.div
        ref={rightRef}
        initial={{ opacity: 0, x: 120 }}
        animate={rightInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-[0_0_5px_rgba(0,150,255,0.5)]"
      >
             
              <div className="relative z-10">
                
                <div className="mb-10">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-medium">New Clients</h3>
                    <div className="flex justify-between items-center mb-4 mt-6">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#10B981" }}></span>
                        <span className="text-white text-sm">New Clients</span>
                      </div>
                    </div>
                    <div className="h-80 flex items-end">
                      <canvas ref={canvasRef3} className="w-full h-full"></canvas>
                    </div>
                  </div>
                </div>
                
                <div className="mb-10">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-medium">Returning Clients</h3>
                    <div className="flex justify-between items-center mb-4 mt-6">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#6366F1" }}></span>
                        <span className="text-white text-sm">Returning Clients</span>
                      </div>
                    </div>
                    <div className="h-80 flex items-end">
                      <canvas ref={canvasRef4} className="w-full h-full"></canvas>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div> */}
          </div>
          </div>
        </div>
      </main>
    </>
  );
}