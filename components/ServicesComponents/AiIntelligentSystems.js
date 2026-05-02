// "use client";
// import React from "react";
// import {
//   FaBrain,
//   FaRobot,
//   FaDatabase,
//   FaCode,
//   FaChartLine,
//   FaSearch,
//   FaCog,
//   FaEye,
//   FaComments,
//   FaNetworkWired,
// } from "react-icons/fa";
// import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface } from "react-icons/si";
// import ServicePage from "@/components/ServicePage";

// export default function AiIntelligentSystems() {
//   const subServices = [
//     {
//       title: "AI Strategy & Implementation",
//       description:
//         "We help businesses identify the best opportunities to implement AI. Our team designs an AI roadmap including data strategy, automation opportunities, and scalable implementation plans aligned with business goals.",
//     },
//     {
//       title: "Large Language Model (LLM) Integration",
//       description:
//         "Integrate advanced LLM capabilities into your applications. We develop AI chatbots, AI copilots, and intelligent assistants using models like GPT, open-source LLMs, and custom fine-tuned models.",
//     },
//     {
//       title: "Custom AI Model Development",
//       description:
//         "We build machine learning models tailored to your specific business needs such as recommendation engines, predictive models, fraud detection systems, and classification algorithms.",
//     },
//     {
//       title: "AI Chatbots & Virtual Assistants",
//       description:
//         "Develop intelligent conversational agents for customer support, internal automation, knowledge management, and lead generation across websites, apps, and messaging platforms.",
//     },
//     {
//       title: "Model Training & Fine-Tuning",
//       description:
//         "We train and fine-tune AI models using your business data to improve accuracy, domain knowledge, and performance for specialized tasks.",
//     },
//     {
//       title: "Natural Language Processing (NLP)",
//       description:
//         "Build AI systems that understand and process human language including sentiment analysis, document summarization, entity extraction, translation, and content generation.",
//     },
//     {
//       title: "Computer Vision Solutions",
//       description:
//         "Use AI to analyze images and videos for applications like product recognition, document scanning, quality inspection, facial recognition, and surveillance analytics.",
//     },
//     {
//       title: "AI Automation & Workflow Optimization",
//       description:
//         "Automate repetitive tasks using AI-powered workflows such as data processing, document analysis, report generation, and business operations automation.",
//     },
//     {
//       title: "Recommendation Systems",
//       description:
//         "Build intelligent recommendation engines for e-commerce, media platforms, SaaS products, and marketplaces to personalize user experiences.",
//     },
//     {
//       title: "AI-Powered Analytics & Forecasting",
//       description:
//         "Use predictive analytics and machine learning models to forecast demand, customer behavior, marketing performance, and business growth.",
//     },
//     {
//       title: "Data Engineering for AI",
//       description:
//         "Prepare, clean, and structure large datasets to enable effective AI model training and deployment.",
//     },
//     {
//       title: "AI API Development",
//       description:
//         "Develop scalable APIs that allow your applications to interact with AI models for real-time inference, automation, and data analysis.",
//     },
//     {
//       title: "Generative AI Applications",
//       description:
//         "Create AI tools capable of generating text, images, marketing content, product descriptions, UI designs, and creative assets.",
//     },
//     {
//       title: "AI Search & Knowledge Systems",
//       description:
//         "Build AI-powered knowledge bases and semantic search systems using embeddings, vector databases, and retrieval-augmented generation (RAG).",
//     },
//     {
//       title: "AI for Product Development",
//       description:
//         "Embed AI capabilities into SaaS products, mobile apps, and enterprise platforms to create intelligent and competitive digital products.",
//     },
//   ];

//   const useCases = [
//     {
//       title: "E-Commerce Personalization",
//       description: "Recommend products, predict churn, and automate customer support.",
//     },
//     {
//       title: "Healthcare & Diagnostics",
//       description: "Analyze medical images, predict patient outcomes, and automate records.",
//     },
//     {
//       title: "Finance & Banking",
//       description: "Detect fraud, automate compliance, and forecast market trends.",
//     },
//     {
//       title: "Legal Tech",
//       description: "Summarize contracts, extract clauses, and automate document review.",
//     },
//     {
//       title: "Customer Support Automation",
//       description: "Deploy AI agents that resolve tickets, answer FAQs, and escalate intelligently.",
//     },
//     {
//       title: "HR & Recruitment",
//       description: "Screen resumes, rank candidates, and automate onboarding workflows.",
//     },
//     {
//       title: "Manufacturing & Quality Control",
//       description: "Use computer vision to detect defects and optimize production lines.",
//     },
//     {
//       title: "Real Estate",
//       description: "Predict property prices, automate listings, and generate property reports.",
//     },
//     {
//       title: "Education & E-Learning",
//       description: "Create adaptive learning systems, AI tutors, and automated grading.",
//     },
//     {
//       title: "Media & Content Creation",
//       description: "Generate articles, social posts, video scripts, and creative assets at scale.",
//     },
//     {
//       title: "Logistics & Supply Chain",
//       description: "Forecast demand, optimize routes, and automate inventory management.",
//     },
//     {
//       title: "SaaS Products",
//       description: "Embed AI features like smart search, auto-complete, and usage analytics.",
//     },
//     {
//       title: "Marketing & Advertising",
//       description: "Predict campaign performance, segment audiences, and generate ad copy.",
//     },
//     {
//       title: "Retail & FMCG",
//       description: "Analyze shelf data, track trends, and forecast seasonal demand.",
//     },
//     {
//       title: "Government & Public Sector",
//       description: "Automate citizen services, analyze public data, and detect anomalies.",
//     },
//     {
//       title: "Cybersecurity",
//       description: "Detect threats in real-time using anomaly detection and behavioral AI.",
//     },
//     {
//       title: "Telecom",
//       description: "Predict network failures, reduce churn, and personalize offers.",
//     },
//     {
//       title: "Agriculture",
//       description: "Monitor crops with computer vision, predict yield, and optimize irrigation.",
//     },
//     {
//       title: "Energy & Utilities",
//       description: "Forecast energy usage, detect faults, and automate grid management.",
//     },
//     {
//       title: "Hospitality & Travel",
//       description: "Personalize travel packages, automate bookings, and analyze guest feedback.",
//     },
//   ];

//   const technologies = [
//     { name: "OpenAI GPT", icon: <SiOpenai size={22} /> },
//     { name: "TensorFlow", icon: <SiTensorflow size={22} /> },
//     { name: "PyTorch", icon: <SiPytorch size={22} /> },
//     { name: "Hugging Face", icon: <SiHuggingface size={22} /> },
//     { name: "LangChain", icon: <FaNetworkWired size={22} /> },
//     { name: "Vector DBs", icon: <FaDatabase size={22} /> },
//     { name: "Python", icon: <FaCode size={22} /> },
//     { name: "Computer Vision", icon: <FaEye size={22} /> },
//     { name: "NLP", icon: <FaComments size={22} /> },
//     { name: "ML Pipelines", icon: <FaCog size={22} /> },
//     { name: "Predictive Analytics", icon: <FaChartLine size={22} /> },
//     { name: "RAG Systems", icon: <FaSearch size={22} /> },
//   ];

//   return (
//     <ServicePage
//       title="AI & Intelligent Systems"
//       description="We help businesses unlock the power of Artificial Intelligence through intelligent automation, machine learning models, and large language models. From AI assistants to predictive analytics and custom-trained models, our solutions help organizations work smarter, automate processes, and discover new insights from data."
//       subServices={subServices}
//       useCases={useCases}
//       technologies={technologies}
//     />
//   );
// }
"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaChartLine,
  FaSearch,
  FaCog,
  FaEye,
  FaComments,
  FaNetworkWired,
  FaFlask,
  FaRocket,
  FaSyncAlt,
} from "react-icons/fa";
import { SiOpenai, SiTensorflow, SiPytorch, SiHuggingface } from "react-icons/si";
import ServicePage from "@/components/ServicePage";

// ─── Violet Dot Pattern ───────────────────────────────────────────────────────
const StyledPattern = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  background-color: #000;
  background-image: radial-gradient(rgba(139, 92, 246, 0.38) 10%, transparent 10%);
  background-size: 11px 11px;
  opacity: 0.5;
  mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
  mask-size: 100% 100%;
  mask-repeat: no-repeat;
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%);
  -webkit-mask-size: 100% 100%;
  -webkit-mask-repeat: no-repeat;
`;
const Pattern = () => <StyledPattern />;

// ─── Process Step Data ────────────────────────────────────────────────────────
const processSteps = [
  {
    icon: <FaBrain size={38} />,
    title: "Business Problem Analysis",
    desc: "We deeply understand your goals, data landscape, and pain points to define the right AI opportunity and a clear problem statement.",
    color: [139, 92, 246],
    glow: "#8B5CF6",
  },
  {
    icon: <FaDatabase size={38} />,
    title: "Data Collection & Preparation",
    desc: "We gather, clean, and structure the data required to train your model — ensuring quality, relevance, and coverage for accurate results.",
    color: [14, 116, 144],
    glow: "#0E7490",
  },
  {
    icon: <FaFlask size={38} />,
    title: "Model Selection & Training",
    desc: "We select the best-fit algorithm or foundation model and train it on your data to meet your specific business objectives.",
    color: [21, 128, 61],
    glow: "#15803D",
  },
  {
    icon: <FaSearch size={38} />,
    title: "Testing & Optimization",
    desc: "Every model goes through rigorous evaluation — accuracy testing, bias checks, and edge case analysis — before deployment.",
    color: [3, 105, 161],
    glow: "#0369A1",
  },
  {
    icon: <FaRocket size={38} />,
    title: "Deployment & Integration",
    desc: "We deploy your AI via scalable APIs or embed it directly into your existing apps, platforms, or workflows with minimal disruption.",
    color: [29, 78, 216],
    glow: "#1D4ED8",
  },
  {
    icon: <FaSyncAlt size={38} />,
    title: "Monitoring & Continuous Improvement",
    desc: "Post-launch, we monitor performance, track drift, retrain on new data, and continuously improve accuracy as your business evolves.",
    color: [67, 56, 202],
    glow: "#4338CA",
  },
];

// ─── AI Development Process Section ──────────────────────────────────────────
function AiProcessSection() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const chipRef = useRef(null);
  const boxRefs = useRef([]);
  const rafRef = useRef(null);
  const resizeObserverRef = useRef(null);
  const [, setReady] = useState(false);

  const { ref: sectionRef, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const topControls = useAnimation();
  const bottomControls = useAnimation();

  useEffect(() => {
    if (inView) {
      topControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
      bottomControls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
    }
  }, [inView, topControls, bottomControls]);

  const getCenter = (elem, canvas) => {
    const cRect = canvas.getBoundingClientRect();
    const r = elem.getBoundingClientRect();
    return { x: r.left + r.width / 2 - cRect.left, y: r.top + r.height / 2 - cRect.top };
  };

  useEffect(() => {
    boxRefs.current = boxRefs.current.slice(0, processSteps.length);
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const chipEl = chipRef.current;
    if (!canvas || !container || !chipEl) return;
    const ctx = canvas.getContext("2d");

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = container.getBoundingClientRect();
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    resizeObserverRef.current = new ResizeObserver(setSize);
    resizeObserverRef.current.observe(container);

    const computeLayout = () => {
      const canvasRect = canvas.getBoundingClientRect();
      const chipRect = chipEl.getBoundingClientRect();
      const chipCenter = {
        x: chipRect.left + chipRect.width / 2 - canvasRect.left,
        y: chipRect.top + chipRect.height / 2 - canvasRect.top,
      };

      const chipVisualW = Math.max(180, chipRect.width);
      const chipVisualH = Math.max(70, chipRect.height);
      const hSpan = chipVisualW * 0.84;

      const topPins = Array.from({ length: 7 }, (_, i) => ({
        x: chipCenter.x - hSpan / 2 + (i / 6) * hSpan,
        y: chipCenter.y - chipVisualH / 2 - 10,
      }));
      const bottomPins = Array.from({ length: 7 }, (_, i) => ({
        x: chipCenter.x - hSpan / 2 + (i / 6) * hSpan,
        y: chipCenter.y + chipVisualH / 2 + 10,
      }));
      const vSpan = chipVisualH * 0.6;
      const leftPins = Array.from({ length: 3 }, (_, i) => ({
        x: chipCenter.x - chipVisualW / 2 - 10,
        y: chipCenter.y - vSpan / 2 + (i / 2) * vSpan,
      }));
      const rightPins = Array.from({ length: 3 }, (_, i) => ({
        x: chipCenter.x + chipVisualW / 2 + 10,
        y: chipCenter.y - vSpan / 2 + (i / 2) * vSpan,
      }));

      const dests = processSteps.map((_, idx) => {
        const el = boxRefs.current[idx];
        return el ? getCenter(el, canvas) : null;
      });

      // 3 top pins → steps 0,1,2 | 3 bottom pins → steps 3,4,5
      const connections = [
        { pin: topPins[1], to: dests[0] },
        { pin: topPins[3], to: dests[1] },
        { pin: topPins[5], to: dests[2] },
        { pin: bottomPins[1], to: dests[3] },
        { pin: bottomPins[3], to: dests[4] },
        { pin: bottomPins[5], to: dests[5] },
      ];

      const validPaths = connections
        .filter((c) => c.pin && c.to)
        .map((c) => ({ from: { ...c.pin }, to: { ...c.to } }));

      const connectedPins = connections.map((c) => c.pin);
      const allPins = [...topPins, ...bottomPins, ...leftPins, ...rightPins];
      const unconnected = allPins.filter(
        (pin) => !connectedPins.some((cp) => cp && cp.x === pin.x && cp.y === pin.y)
      );

      return { paths: validPaths, unconnected };
    };

    const cubicAt = (t, p0, p1, p2, p3) => {
      const u = 1 - t;
      return {
        x: u ** 3 * p0.x + 3 * u ** 2 * t * p1.x + 3 * u * t ** 2 * p2.x + t ** 3 * p3.x,
        y: u ** 3 * p0.y + 3 * u ** 2 * t * p1.y + 3 * u * t ** 2 * p2.y + t ** 3 * p3.y,
      };
    };

    const makeCP = (from, to) => {
      const dx = to.x - from.x, dy = to.y - from.y;
      const d = Math.hypot(dx, dy);
      const c = Math.min(160, d * 0.35);
      const hb = Math.abs(dx) > Math.abs(dy);
      const sx = dx >= 0 ? 1 : -1, sy = dy >= 0 ? 1 : -1;
      return [
        { x: from.x + (hb ? dx * 0.25 : -sx * c * 0.4), y: from.y + (hb ? sy * c * 0.18 : dy * 0.25) },
        { x: from.x + (hb ? dx * 0.75 : sx * c * 0.4), y: from.y + (hb ? dy * 0.75 : dy * 0.75 + sy * c * 0.18) },
      ];
    };

    const cableColor = [55, 65, 81];
    const cableGlow = [40, 50, 66];
    let lastTs = 0, tProg = 0;

    const draw = (ts) => {
      if (!canvas) return;
      const ctx2 = canvas.getContext("2d");
      ctx2.clearRect(0, 0, canvas.width, canvas.height);
      ctx2.save();

      const w = canvas.width, h = canvas.height;
      const grd = ctx2.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.max(w, h) * 0.6);
      grd.addColorStop(0, "rgba(0,20,40,0.06)");
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx2.fillStyle = grd;
      ctx2.fillRect(0, 0, w, h);

      const { paths, unconnected } = computeLayout();

      paths.forEach((p, idx) => {
        const [cp1, cp2] = makeCP(p.from, p.to);
        const segs = 120;
        for (let i = 0; i < segs; i++) {
          const t1 = i / segs, t2 = (i + 1) / segs;
          const pt1 = cubicAt(t1, p.from, cp1, cp2, p.to);
          const pt2 = cubicAt(t2, p.from, cp1, cp2, p.to);
          const fade = Math.pow(1 - t1, 1.8);
          ctx2.lineWidth = 1.6 + 2.2 * fade;
          ctx2.lineCap = "round";
          ctx2.strokeStyle = `rgba(${cableColor[0]},${cableColor[1]},${cableColor[2]},${0.22 * fade + 0.05})`;
          ctx2.beginPath(); ctx2.moveTo(pt1.x, pt1.y); ctx2.lineTo(pt2.x, pt2.y); ctx2.stroke();
        }
        ctx2.lineWidth = 0.8;
        ctx2.beginPath();
        for (let i = 0; i <= segs; i++) {
          const q = cubicAt(i / segs, p.from, cp1, cp2, p.to);
          i === 0 ? ctx2.moveTo(q.x, q.y) : ctx2.lineTo(q.x, q.y);
        }
        ctx2.strokeStyle = `rgba(${cableGlow[0]},${cableGlow[1]},${cableGlow[2]},0.12)`;
        ctx2.stroke();
        ctx2.fillStyle = `rgba(${cableColor[0]},${cableColor[1]},${cableColor[2]},0.72)`;
        [p.from, p.to].forEach((pt) => {
          ctx2.beginPath(); ctx2.arc(pt.x, pt.y, 3.2, 0, Math.PI * 2); ctx2.fill();
        });
      });

      tProg += (ts - lastTs) * 0.0006;
      if (tProg > 1) tProg -= 1;
      lastTs = ts;

      paths.forEach((p, idx) => {
        const [r, g, b] = processSteps[idx].color;
        const [cp1, cp2] = makeCP(p.from, p.to);
        const offset = (idx / Math.max(1, paths.length)) * 0.45;
        const t0 = (tProg + offset) % 1;
        const pt = cubicAt(t0, p.from, cp1, cp2, p.to);
        ctx2.beginPath(); ctx2.fillStyle = `rgba(${r},${g},${b},0.95)`; ctx2.arc(pt.x, pt.y, 3.6, 0, Math.PI * 2); ctx2.fill();
        ctx2.beginPath(); ctx2.fillStyle = `rgba(${r},${g},${b},0.14)`; ctx2.arc(pt.x, pt.y, 8, 0, Math.PI * 2); ctx2.fill();
      });

      unconnected.forEach((pin) => {
        const pulse = (Math.sin(ts * 0.004 + (pin.x + pin.y) * 0.001) + 1) / 2;
        const alpha = 0.28 + pulse * 0.42;
        const rr = 3.8 + pulse * 1.6;
        ctx2.beginPath(); ctx2.fillStyle = `rgba(139,92,246,${alpha})`; ctx2.arc(pin.x, pin.y, rr, 0, Math.PI * 2); ctx2.fill();
        ctx2.beginPath(); ctx2.strokeStyle = `rgba(167,139,250,${0.25 + pulse * 0.25})`; ctx2.lineWidth = 1; ctx2.arc(pin.x, pin.y, rr + 3, 0, Math.PI * 2); ctx2.stroke();
      });

      ctx2.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame((ts) => { lastTs = ts; draw(ts); setReady(true); });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, []);

  // Reusable card
  const StepCard = ({ step, refFn }) => (
    <div
      ref={refFn}
      className="relative group w-[220px] h-[170px] transition-transform duration-500 ease-out"
    >
      <div
        className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 h-full"
        style={{
          boxShadow: `0 0 15px rgba(${step.color[0]},${step.color[1]},${step.color[2]},0.3), inset 0 0 15px rgba(${step.color[0]},${step.color[1]},${step.color[2]},0.05)`,
        }}
      >
        <div
          className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
          style={{ background: `radial-gradient(circle, ${step.glow} 0%, transparent 100%)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
          style={{ background: `radial-gradient(circle, ${step.glow} 0%, transparent 100%)` }}
        />
        <div className="z-10 mb-2" style={{ color: step.glow }}>{step.icon}</div>
        <h3 className="text-xs font-semibold text-white z-10 leading-snug">{step.title}</h3>
        <p className="text-[10px] text-gray-400 mt-1 leading-tight z-10 line-clamp-3">{step.desc}</p>
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className="relative z-0 py-16 bg-black w-full">
      <Pattern />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[200px] h-[40px] rounded-full blur-[300px] bg-violet-500 opacity-10" />
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.10), transparent 45%)" }}
      />

      <div className="relative text-center z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-3 tracking-wide">
            AI <span className="text-violet-400">Development Process</span>
          </h2>
          <p className="text-gray-400 text-sm mb-12 max-w-xl mx-auto">
            A structured, transparent six-step approach to building AI solutions that deliver real-world results.
          </p>

          {/* Top 3 */}
          <motion.div
            ref={sectionRef}
            className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16"
            initial={{ opacity: 0, y: -80 }}
            animate={topControls}
          >
            {processSteps.slice(0, 3).map((step, i) => (
              <StepCard key={i} step={step} refFn={(el) => (boxRefs.current[i] = el)} />
            ))}
          </motion.div>

          {/* Chip */}
          <div className="flex items-center justify-center relative my-6">
            <div
              ref={chipRef}
              className="relative w-[300px] h-[92px] bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] rounded-lg border border-[#222] shadow-[0_18px_60px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-visible"
            >
              {/* Top pins */}
              <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
                {Array(7).fill(null).map((_, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-[2px] h-[14px] bg-gradient-to-b from-[#3a3a3a] via-[#7b7b7b] to-[#8B5CF6] opacity-80" />
                    <div className="w-[10px] h-[12px] bg-gradient-to-b from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-b-[3px]" />
                  </div>
                ))}
              </div>
              {/* Bottom pins */}
              <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
                {Array(7).fill(null).map((_, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-[10px] h-[12px] bg-gradient-to-t from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-t-[3px]" />
                    <div className="w-[2px] h-[14px] bg-gradient-to-t from-[#3a3a3a] via-[#7b7b7b] to-[#8B5CF6] opacity-80" />
                  </div>
                ))}
              </div>
              {/* Left pins */}
              <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
                {Array(3).fill(null).map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-[14px] h-[2px] bg-gradient-to-r from-[#3a3a3a] via-[#7b7b7b] to-[#8B5CF6] opacity-80" />
                    <div className="w-[12px] h-[10px] bg-gradient-to-r from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-r-[3px]" />
                  </div>
                ))}
              </div>
              {/* Right pins */}
              <div className="absolute -right-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
                {Array(3).fill(null).map((_, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="w-[12px] h-[10px] bg-gradient-to-l from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-l-[3px]" />
                    <div className="w-[14px] h-[2px] bg-gradient-to-l from-[#3a3a3a] via-[#7b7b7b] to-[#8B5CF6] opacity-80" />
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center text-violet-300 text-lg font-semibold tracking-wide">
                AI Engine
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.18),transparent_70%)] animate-pulse" />
              </div>
            </div>
          </div>

          {/* Bottom 3 */}
          <motion.div
            className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16"
            initial={{ opacity: 0, y: 80 }}
            animate={bottomControls}
          >
            {processSteps.slice(3).map((step, i) => (
              <StepCard key={i + 3} step={step} refFn={(el) => (boxRefs.current[i + 3] = el)} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ───────────────────────────────────────────────────────────────
export default function AiIntelligentSystems() {
  const subServices = [
    {
      title: "AI Strategy & Implementation",
      description:
        "We help businesses identify the best opportunities to implement AI. Our team designs an AI roadmap including data strategy, automation opportunities, and scalable implementation plans aligned with business goals.",
    },
    {
      title: "Large Language Model (LLM) Integration",
      description:
        "Integrate advanced LLM capabilities into your applications. We develop AI chatbots, AI copilots, and intelligent assistants using models like GPT, open-source LLMs, and custom fine-tuned models.",
    },
    {
      title: "Custom AI Model Development",
      description:
        "We build machine learning models tailored to your specific business needs such as recommendation engines, predictive models, fraud detection systems, and classification algorithms.",
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description:
        "Develop intelligent conversational agents for customer support, internal automation, knowledge management, and lead generation across websites, apps, and messaging platforms.",
    },
    {
      title: "Model Training & Fine-Tuning",
      description:
        "We train and fine-tune AI models using your business data to improve accuracy, domain knowledge, and performance for specialized tasks.",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Build AI systems that understand and process human language including sentiment analysis, document summarization, entity extraction, translation, and content generation.",
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Use AI to analyze images and videos for applications like product recognition, document scanning, quality inspection, facial recognition, and surveillance analytics.",
    },
    {
      title: "AI Automation & Workflow Optimization",
      description:
        "Automate repetitive tasks using AI-powered workflows such as data processing, document analysis, report generation, and business operations automation.",
    },
    {
      title: "Recommendation Systems",
      description:
        "Build intelligent recommendation engines for e-commerce, media platforms, SaaS products, and marketplaces to personalize user experiences.",
    },
    {
      title: "AI-Powered Analytics & Forecasting",
      description:
        "Use predictive analytics and machine learning models to forecast demand, customer behavior, marketing performance, and business growth.",
    },
    {
      title: "Data Engineering for AI",
      description:
        "Prepare, clean, and structure large datasets to enable effective AI model training and deployment.",
    },
    {
      title: "AI API Development",
      description:
        "Develop scalable APIs that allow your applications to interact with AI models for real-time inference, automation, and data analysis.",
    },
    {
      title: "Generative AI Applications",
      description:
        "Create AI tools capable of generating text, images, marketing content, product descriptions, UI designs, and creative assets.",
    },
    {
      title: "AI Search & Knowledge Systems",
      description:
        "Build AI-powered knowledge bases and semantic search systems using embeddings, vector databases, and retrieval-augmented generation (RAG).",
    },
    {
      title: "AI for Product Development",
      description:
        "Embed AI capabilities into SaaS products, mobile apps, and enterprise platforms to create intelligent and competitive digital products.",
    },
  ];

  const useCases = [
    { title: "E-Commerce Personalization", description: "Recommend products, predict churn, and automate customer support." },
    { title: "Healthcare & Diagnostics", description: "Analyze medical images, predict patient outcomes, and automate records." },
    { title: "Finance & Banking", description: "Detect fraud, automate compliance, and forecast market trends." },
    { title: "Legal Tech", description: "Summarize contracts, extract clauses, and automate document review." },
    { title: "Customer Support Automation", description: "Deploy AI agents that resolve tickets, answer FAQs, and escalate intelligently." },
    { title: "HR & Recruitment", description: "Screen resumes, rank candidates, and automate onboarding workflows." },
    { title: "Manufacturing & Quality Control", description: "Use computer vision to detect defects and optimize production lines." },
    { title: "Real Estate", description: "Predict property prices, automate listings, and generate property reports." },
    { title: "Education & E-Learning", description: "Create adaptive learning systems, AI tutors, and automated grading." },
    { title: "Media & Content Creation", description: "Generate articles, social posts, video scripts, and creative assets at scale." },
    { title: "Logistics & Supply Chain", description: "Forecast demand, optimize routes, and automate inventory management." },
    { title: "SaaS Products", description: "Embed AI features like smart search, auto-complete, and usage analytics." },
    { title: "Marketing & Advertising", description: "Predict campaign performance, segment audiences, and generate ad copy." },
    { title: "Retail & FMCG", description: "Analyze shelf data, track trends, and forecast seasonal demand." },
    { title: "Government & Public Sector", description: "Automate citizen services, analyze public data, and detect anomalies." },
    { title: "Cybersecurity", description: "Detect threats in real-time using anomaly detection and behavioral AI." },
    { title: "Telecom", description: "Predict network failures, reduce churn, and personalize offers." },
    { title: "Agriculture", description: "Monitor crops with computer vision, predict yield, and optimize irrigation." },
    { title: "Energy & Utilities", description: "Forecast energy usage, detect faults, and automate grid management." },
    { title: "Hospitality & Travel", description: "Personalize travel packages, automate bookings, and analyze guest feedback." },
  ];

  const technologies = [
    { name: "OpenAI GPT", icon: <SiOpenai size={22} /> },
    { name: "TensorFlow", icon: <SiTensorflow size={22} /> },
    { name: "PyTorch", icon: <SiPytorch size={22} /> },
    { name: "Hugging Face", icon: <SiHuggingface size={22} /> },
    { name: "LangChain", icon: <FaNetworkWired size={22} /> },
    { name: "Vector DBs", icon: <FaDatabase size={22} /> },
    { name: "Python", icon: <FaCode size={22} /> },
    { name: "Computer Vision", icon: <FaEye size={22} /> },
    { name: "NLP", icon: <FaComments size={22} /> },
    { name: "ML Pipelines", icon: <FaCog size={22} /> },
    { name: "Predictive Analytics", icon: <FaChartLine size={22} /> },
    { name: "RAG Systems", icon: <FaSearch size={22} /> },
  ];

  return (
    <>
      <ServicePage
        title="AI & Intelligent Systems"
        description="We help businesses unlock the power of Artificial Intelligence through intelligent automation, machine learning models, and large language models. From AI assistants to predictive analytics and custom-trained models, our solutions help organizations work smarter, automate processes, and discover new insights from data."
        subServices={subServices}
        useCases={useCases}
        technologies={technologies}
      />
      {/* ✅ AI Development Process — chip + wire section below ServicePage */}
      <AiProcessSection />
    </>
  );
}