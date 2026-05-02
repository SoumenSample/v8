"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLaptopCode, FaMobileAlt, FaCode,
  FaPalette, FaBullhorn, FaBrush, FaBrain,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import SpotlightCard, { Spotlight } from "../SpotlightCard";

/* ── dot-grid bg ── */
const StyledPattern = styled.div`
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 0;
  // background-image: radial-gradient(rgba(6,182,212,0.55) 1.5px, transparent 1.5px);
    background-image: radial-gradient(rgba(14,116,144,0.55) 1.5px, transparent 1.5px);

  background-size: 22px 22px; opacity: 0.75;
  mask-image: linear-gradient(to bottom,transparent 0%,black 18%,black 82%,transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom,transparent 0%,black 18%,black 82%,transparent 100%);
`;
const Pattern = () => <StyledPattern />;

/* ── services ── */
const TOP_SERVICES = [
  { icon:<FaBrain size={34}/>,      title:"AI & Intelligent Systems", desc:"Unlock AI power through intelligent automation & machine learning.", color:"#047857", rgb:[4,120,87]    },  // emerald-700
  { icon:<FaLaptopCode size={34}/>, title:"Web Development",          desc:"Crafting responsive and dynamic websites tailored to your needs.",  color:"#0f766e", rgb:[15,118,110]  },  // teal-700
  { icon:<FaMobileAlt size={34}/>,  title:"App Development",          desc:"Building innovative and user-friendly mobile applications.",        color:"#0e7490", rgb:[14,116,144]  },  // cyan-700
  { icon:<FaCode size={34}/>,       title:"Software Development",     desc:"Custom software solutions to optimize your business processes.",    color:"#0369a1", rgb:[3,105,161]   },  // sky-700
];
const BOTTOM_SERVICES = [
  { icon:<FaPalette size={34}/>,        title:"UI/UX Design",          desc:"Creating intuitive and visually appealing user interfaces.",       color:"#1d4ed8", rgb:[29,78,216]   },  // blue-700
  { icon:<FaBullhorn size={34}/>,       title:"Digital Marketing",     desc:"Boost your online presence with targeted marketing strategies.",   color:"#4338ca", rgb:[67,56,202]   },  // indigo-700
  { icon:<FaBrush size={34}/>,          title:"Graphic Design",        desc:"Designing stunning visuals to enhance your brand identity.",       color:"#6d28d9", rgb:[109,40,217]  },  // violet-700
  { icon:<SiGoogleanalytics size={34}/>,title:"Research & Analytics",  desc:"We help businesses make sharper, faster decisions.",               color:"#7e22ce", rgb:[126,34,206]  },  // purple-700
];

/* ── service card ── */
function ServiceCard({ service, refCallback, cardIndex, isBottom }) {
  const { icon, title, desc, color, rgb } = service;
  const cardRef = useRef(null);
  const spotlightRef = useRef(null);
  const flashRef = useRef(null);

  // Expose flash method via a global registry
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.__cardFlashRegistry) window.__cardFlashRegistry = {};
      window.__cardFlashRegistry[cardIndex] = () => {
        const el = flashRef.current;
        if (!el) return;
        // Cancel any in-progress fade
        clearTimeout(el._flashTimer);
        // Snap to visible, then smoothly fade out
        el.style.transition = "opacity 0.08s ease-in";
        el.style.opacity = "1";
        el._flashTimer = setTimeout(() => {
          el.style.transition = "opacity 0.6s ease-out";
          el.style.opacity = "0";
        }, 80);
      };
    }
    return () => {
      if (typeof window !== "undefined" && window.__cardFlashRegistry) {
        delete window.__cardFlashRegistry[cardIndex];
      }
    };
  }, [cardIndex]);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (!card || !spotlight) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1) + "%";
    const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1) + "%";
    spotlight.style.opacity = "1";
    spotlight.style.background = `radial-gradient(circle 110px at ${x} ${y}, rgba(0,210,255,0.13) 0%, transparent 70%)`;
    card.style.borderColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.45)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const spotlight = spotlightRef.current;
    if (!card || !spotlight) return;
    spotlight.style.opacity = "0";
    spotlight.style.background = "";
    card.style.borderColor = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.20)`;
    card.style.transform = "translateY(0)";
  };

  const handleMouseEnter = (e) => {
    if (cardRef.current) cardRef.current.style.transform = "translateY(-3px)";
  };

  return (
    <div
      ref={(el) => { cardRef.current = el; if (refCallback) refCallback(el); }}
      className="relative w-[220px] min-h-[180px] rounded-2xl flex-shrink-0 overflow-hidden cursor-pointer"
      style={{
        background: "rgba(8,10,18,0.90)",
        border: `1px solid rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.20)`,
        boxShadow: `inset 0 0 0px rgba(${rgb[0]},${rgb[1]},${rgb[2]},0)`,
        backdropFilter: "blur(14px)",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Cyan hover spotlight layer */}
      <div
        ref={spotlightRef}
        style={{
          position: "absolute", inset: 0, borderRadius: "1rem",
          opacity: 0, transition: "opacity 0.25s", pointerEvents: "none", zIndex: 1,
        }}
      />

      {/* Wire-triggered flash line — bottom edge for top cards, top edge for bottom cards */}
      <div
        ref={flashRef}
        style={{
          position: "absolute",
          ...(isBottom ? { top: 0 } : { bottom: 0 }),
          left: "10%", width: "80%", height: "1px",
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          opacity: 0,
          transition: "opacity 0.6s ease-out",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* Corner decorative blobs — removed permanent glow, kept subtle ambient */}
      <div className="absolute top-0 left-0 w-28 h-28 -translate-x-12 -translate-y-12 blur-2xl opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(circle,${color},transparent 70%)` }} />
      <div className="absolute bottom-0 right-0 w-28 h-28 translate-x-12 translate-y-12 blur-2xl opacity-[0.04] pointer-events-none"
        style={{ background: `radial-gradient(circle,${color},transparent 70%)` }} />

      <div className="relative z-10 p-5 flex flex-col items-center h-full">
        <div className="mb-4" style={{ color }}>{icon}</div>
        <h3 className="text-[13.5px] font-bold text-white text-center mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-[11.5px] text-gray-400 leading-relaxed text-center">{desc}</p>
      </div>
    </div>
  );
}

/* ── polyline point at parameter t ── */
function ptOnLine(pts, t) {
  if (!pts || pts.length < 2) return pts?.[0] ?? { x: 0, y: 0 };
  let total = 0;
  const lens = pts.slice(0, -1).map((_, i) => {
    const l = Math.hypot(pts[i+1].x - pts[i].x, pts[i+1].y - pts[i].y);
    total += l;
    return l;
  });
  if (total === 0) return pts[0];
  let rem = t * total;
  for (let i = 0; i < lens.length; i++) {
    if (rem <= lens[i]) {
      const f = lens[i] === 0 ? 0 : rem / lens[i];
      return { x: pts[i].x + (pts[i+1].x - pts[i].x) * f, y: pts[i].y + (pts[i+1].y - pts[i].y) * f };
    }
    rem -= lens[i];
  }
  return pts[pts.length - 1];
}



/* ═══════════════ MAIN ═══════════════ */
export default function OurServicesWithWires() {
  const containerRef = useRef(null);
  const canvasRef    = useRef(null);
  const chipRef      = useRef(null);
  const boxRefs      = useRef([]);
  const pinRefs      = useRef([]);
  const rafRef       = useRef(null);
  const roRef        = useRef(null);
  const [, setReady] = useState(false);
  const cardRefs = useRef([]);

  const { ref: sectionRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const topCtrl = useAnimation(), botCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      topCtrl.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
      botCtrl.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.12 } });
    }
  }, [inView, topCtrl, botCtrl]);

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r   = container.getBoundingClientRect();
      canvas.width  = Math.round(r.width  * dpr);
      canvas.height = Math.round(r.height * dpr);
      canvas.style.width  = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    roRef.current = new ResizeObserver(resize);
    roRef.current.observe(container);

    /*
      PIN SLOT ASSIGNMENTS
      ─────────────────────────────────────
      Top pins  (refs 0-6 , left→right):
        Card 0 → slot 0   Card 1 → slot 2
        Card 2 → slot 4   Card 3 → slot 6

      Bottom pins (refs 7-13, left→right):
        Card 4 → slot 0   Card 5 → slot 2
        Card 6 → slot 4   Card 7 → slot 6
    */
    const TOP_PIN_SLOTS    = [0, 2, 4, 6];
    const BOTTOM_PIN_SLOTS = [0, 2, 4, 6];

    // Track last flash state per card to avoid re-triggering
    const lastFlashCycle = {};

    const buildPaths = () => {
      const cr = canvas.getBoundingClientRect();
      const paths = [];

      // ── Collect all card and pin positions ──
      const getRect = (el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          top:    r.top    - cr.top,
          bottom: r.bottom - cr.top,
          left:   r.left   - cr.left,
          right:  r.right  - cr.left,
          cx:     r.left   - cr.left + r.width  / 2,
          cy:     r.top    - cr.top  + r.height / 2,
          width:  r.width,
          height: r.height,
        };
      };

      // Pre-compute all card rects and pin rects
      const topCards = TOP_SERVICES.map((_, i) => getRect(boxRefs.current[i]));
      const botCards = BOTTOM_SERVICES.map((_, i) => getRect(boxRefs.current[i + 4]));
      const topPins  = TOP_PIN_SLOTS.map(s => getRect(pinRefs.current[s]));
      const botPins  = BOTTOM_PIN_SLOTS.map(s => getRect(pinRefs.current[7 + s]));

      // ── Compute routing margins ──
      // For outer cards we route OUTSIDE the card row — find the leftmost and rightmost extent
      const allCardsLeft  = Math.min(...topCards.filter(Boolean).map(r => r.left),
                                     ...botCards.filter(Boolean).map(r => r.left));
      const allCardsRight = Math.max(...topCards.filter(Boolean).map(r => r.right),
                                     ...botCards.filter(Boolean).map(r => r.right));

      // Outer routing margin: 32px beyond the outermost card edge
      const OUTER_MARGIN = 0;
      const leftRail  = allCardsLeft  - OUTER_MARGIN;
      const rightRail = allCardsRight + OUTER_MARGIN;

      // For inner cards (i=1,2) we use a simple Z routing with staggered midY bands
      // that sit in the gap between cards and chip, guaranteed non-overlapping.

      // ── TOP ROW ──
      // Compute the vertical gap between bottom of top cards and top of chip pins
      const topCardBottoms = topCards.filter(Boolean).map(r => r.bottom);
      const topPinTops     = topPins.filter(Boolean).map(r => r.top);
      const topGapTop      = Math.max(...topCardBottoms);
      const topGapBot      = Math.min(...topPinTops);
      const topGap         = Math.max(topGapBot - topGapTop, 60);

      for (let i = 0; i < 4; i++) {
        const card = topCards[i];
        const pin  = topPins[i];
        if (!card || !pin) continue;

        const svc    = TOP_SERVICES[i];
        const cardCx = card.cx;
        const cardY  = card.bottom;    // wire exits card bottom
        const pinX   = pin.cx;
        const pinY   = pin.top;        // wire enters chip pin from above

        let pts;

        if (i === 0) {
          // Far-left card: go left to outer rail, drop down, turn right to pin
          const exitY   = cardY + topGap * 0.12;
          const cornerY = pinY - topGap * 0.12;
          pts = [
            { x: cardCx,   y: cardY    },
            { x: cardCx,   y: exitY    },
            { x: leftRail, y: exitY    },
            { x: leftRail, y: cornerY  },
            { x: pinX,     y: cornerY  },
            { x: pinX,     y: pinY     },
          ];
        } else if (i === 3) {
          // Far-right card: mirror of i=0
          const exitY   = cardY + topGap * 0.12;
          const cornerY = pinY - topGap * 0.12;
          pts = [
            { x: cardCx,    y: cardY    },
            { x: cardCx,    y: exitY    },
            { x: rightRail, y: exitY    },
            { x: rightRail, y: cornerY  },
            { x: pinX,      y: cornerY  },
            { x: pinX,      y: pinY     },
          ];
        } else {
          const frac = i === 1 ? 0.35 : 0.65;
          const midY = topGapTop + topGap * frac;
          pts = [
            { x: cardCx, y: cardY },
            { x: cardCx, y: midY  },
            { x: pinX,   y: midY  },
            { x: pinX,   y: pinY  },
          ];
        }

        // Wire travels from chip → card (reversed), so cardPt is last pt (pts[0] after reverse)
        paths.push({
          pts: pts.slice().reverse(),
          rgb: svc.rgb,
          color: svc.color,
          pinPt: { x: pinX, y: pinY },
          cardPt: { x: cardCx, y: cardY },
          cardIndex: i,
          isBottom: false,
        });
      }

      // ── BOTTOM ROW (exact vertical mirror of top) ──
      const botCardTops = botCards.filter(Boolean).map(r => r.top);
      const botPinBots  = botPins.filter(Boolean).map(r => r.bottom);
      const botGapTop   = Math.max(...botPinBots);
      const botGapBot   = Math.min(...botCardTops);
      const botGap      = Math.max(botGapBot - botGapTop, 60);

      for (let i = 0; i < 4; i++) {
        const card = botCards[i];
        const pin  = botPins[i];
        if (!card || !pin) continue;

        const svc    = BOTTOM_SERVICES[i];
        const cardCx = card.cx;
        const cardY  = card.top;       // wire exits card top
        const pinX   = pin.cx;
        const pinY   = pin.bottom;     // wire enters chip pin from below

        let pts;

        if (i === 0) {
          const exitY   = cardY - botGap * 0.12;
          const cornerY = pinY + botGap * 0.12;
          pts = [
            { x: cardCx,   y: cardY    },
            { x: cardCx,   y: exitY    },
            { x: leftRail, y: exitY    },
            { x: leftRail, y: cornerY  },
            { x: pinX,     y: cornerY  },
            { x: pinX,     y: pinY     },
          ];
        } else if (i === 3) {
          const exitY   = cardY - botGap * 0.12;
          const cornerY = pinY + botGap * 0.12;
          pts = [
            { x: cardCx,    y: cardY    },
            { x: cardCx,    y: exitY    },
            { x: rightRail, y: exitY    },
            { x: rightRail, y: cornerY  },
            { x: pinX,      y: cornerY  },
            { x: pinX,      y: pinY     },
          ];
        } else {
          const frac = i === 1 ? 0.65 : 0.35;
          const midY = botGapTop + botGap * frac;
          pts = [
            { x: cardCx, y: cardY },
            { x: cardCx, y: midY  },
            { x: pinX,   y: midY  },
            { x: pinX,   y: pinY  },
          ];
        }

        paths.push({
          pts: pts.slice().reverse(),
          rgb: svc.rgb,
          color: svc.color,
          pinPt: { x: pinX, y: pinY },
          cardPt: { x: cardCx, y: cardY },
          cardIndex: i + 4,
          isBottom: true,
        });
      }

      // ── IDLE PINS ──
      const usedTopSlots    = new Set(TOP_PIN_SLOTS);
      const usedBottomSlots = new Set(BOTTOM_PIN_SLOTS);
      const idlePins = [];

      for (let s = 0; s < 7; s++) {
        if (!usedTopSlots.has(s)) {
          const el = pinRefs.current[s];
          if (el) {
            const r = el.getBoundingClientRect();
            idlePins.push({ x: r.left + r.width / 2 - cr.left, y: r.top - cr.top });
          }
        }
        if (!usedBottomSlots.has(s)) {
          const el = pinRefs.current[7 + s];
          if (el) {
            const r = el.getBoundingClientRect();
            idlePins.push({ x: r.left + r.width / 2 - cr.left, y: r.bottom - cr.top });
          }
        }
      }

      for (let s = 14; s < 20; s++) {
        const el = pinRefs.current[s];
        if (el) {
          const r = el.getBoundingClientRect();
          const isLeft = s < 17;
          idlePins.push({
            x: isLeft ? r.left - cr.left : r.right - cr.left,
            y: r.top + r.height / 2 - cr.top,
          });
        }
      }

      return { paths, idlePins };
    };

    let lastTs = 0, tG = 0;

    // ── Trail drawing helper ──
    // Draws a gradient trail from t=tailT to t=headT along pts[],
    // clamping t to [0,1] for ptOnLine. Segments where both endpoints
    // are outside [0,1] are skipped (past the card end).
    const drawTrail = (ctx, pts, r, g, b, tailT, headT) => {
      const STEPS = 60;
      const span  = headT - tailT;
      if (span <= 0) return;
      for (let i = 0; i < STEPS; i++) {
        const tA = tailT + (i / STEPS)       * span;
        const tB = tailT + ((i + 1) / STEPS) * span;
        // Skip segments that are entirely outside the wire
        if (tB < 0 || tA > 1) continue;
        const clampA = Math.min(Math.max(tA, 0), 1);
        const clampB = Math.min(Math.max(tB, 0), 1);
        const pA = ptOnLine(pts, clampA);
        const pB = ptOnLine(pts, clampB);
        // Alpha: 0 at tail, 1 at head (position within the full trail)
        const progress = (tA - tailT) / span;
        const alpha    = progress * 0.95;
        ctx.beginPath();
        ctx.moveTo(pA.x, pA.y);
        ctx.lineTo(pB.x, pB.y);
        ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.lineWidth   = 2.4;
        ctx.lineCap     = "round";
        ctx.stroke();
      }
    };

    const draw = (ts) => {
      ctx.clearRect(0, 0, 99999, 99999);
      ctx.save();

      // tG grows freely — never clamp/wrap here. Per-wire phase offset handles spacing.
      // Cycle period = 1.0. We let rawT exceed 1 so the tail can fully enter the card
      // before the cycle resets.
      tG += (ts - lastTs) * 0.00042;
      lastTs = ts;

      const { paths, idlePins } = buildPaths();

      /* 1 ── BASE WIRE (dim static trace) */
      paths.forEach(({ pts }) => {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = "rgba(65,78,108,0.32)";
        ctx.lineWidth   = 1.5;
        ctx.lineJoin    = "miter";
        ctx.lineCap     = "square";
        ctx.stroke();
      });

      /* 2 ── ANIMATED PULSE */
      // Model: each wire has a pulse that travels from pin (t=0) to card (t=1).
      // The trail has length `trailLen` in t-space.
      // headT = phase within [0, 1+trailLen) — the head can exceed 1.0, meaning
      // it has already entered the card and the tail is still on the wire.
      // Once tailT > 1 the whole trail has entered the card; cycle resets.
      const TRAIL_LEN = 0.22;
      const CYCLE     = 1.0 + TRAIL_LEN; // full period before next pulse starts

      paths.forEach(({ pts, rgb, cardIndex, cardPt }, idx) => {
        const [r, g, b] = rgb;

        // Phase within [0, CYCLE)
        const rawPhase = (tG + idx * 0.115) % CYCLE;
        const headT    = rawPhase;            // head position in wire-space [0..1+trailLen]
        const tailT    = headT - TRAIL_LEN;   // tail position (can be negative at cycle start)

        // Draw the gradient trail
        drawTrail(ctx, pts, r, g, b, tailT, headT);

        // ── Flash card when head first touches t=1 (card end) ──
        const cycleKey = `card_${cardIndex}`;
        const cycleNum = Math.floor((tG + idx * 0.115) / CYCLE);
        if (headT >= 1.0 && tailT < 1.0 && lastFlashCycle[cycleKey] !== cycleNum) {
          lastFlashCycle[cycleKey] = cycleNum;
          if (typeof window !== "undefined" && window.__cardFlashRegistry) {
            const flashFn = window.__cardFlashRegistry[cardIndex];
            if (flashFn) flashFn();
          }
        }
      });

      /* 3 ── PIN-END GLOW (chip side) */
      paths.forEach(({ pinPt, rgb }) => {
        const [r, g, b] = rgb;
        const { x, y }  = pinPt;
        const pulse = (Math.sin(ts * 0.003 + x * 0.04) + 1) / 2;
        const a     = 0.5 + pulse * 0.5;

        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(65,78,108,0.32)`; ctx.fill();

        const pg = ctx.createRadialGradient(x, y, 0, x, y, 14);
        pg.addColorStop(0, `rgba(${r},${g},${b},${a * 0.7})`);
        pg.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = pg;
        ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill();
      });

      /* 4 ── CARD-END JUNCTION GLOW
         Glow is visible from when head reaches t=0.85 until the full tail
         has entered the card (tailT reaches 1.0).
         Window: headT in [0.85, 1.0+TRAIL_LEN] → maps to proximity [0→1→0].
      */
      paths.forEach(({ cardPt, rgb }, idx) => {
        const [r, g, b] = rgb;
        const { x, y }  = cardPt;

        const rawPhase = (tG + idx * 0.115) % CYCLE;
        const headT    = rawPhase;
        const tailT    = headT - TRAIL_LEN;

        // Ramp IN:  headT from 0.97 → 1.0  (head approaching & entering card)
        // Ramp OUT: tailT from 1.0 → 1.0+TRAIL_LEN  (tail sliding into card)
        let proximity = 0;
        if (headT >= 0.97 && tailT <= 1.0) {
          // Head approaching card
          proximity = Math.min((headT - 0.97) / 0.03, 1.0);
        } else if (tailT > 1.0 && tailT <= CYCLE) {
          // Tail still entering: fade out as tail slides in
          proximity = 1.0 - ((tailT - 1.0) / TRAIL_LEN);
        }
        if (proximity <= 0) return;

        const pulse = (Math.sin(ts * 0.0025 + x * 0.035) + 1) / 2;
        const a     = (0.6 + pulse * 0.4) * proximity;

        // Inner bright dot
        ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.9})`; ctx.fill();

        // Outer soft halo
        const jg = ctx.createRadialGradient(x, y, 0, x, y, 28);
        jg.addColorStop(0,   `rgba(${r},${g},${b},${a * 0.55})`);
        jg.addColorStop(0.35,`rgba(${r},${g},${b},${a * 0.22})`);
        jg.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = jg;
        ctx.beginPath(); ctx.arc(x, y, 28, 0, Math.PI * 2); ctx.fill();
      });

      /* 5 ── IDLE PIN GLOW */
      idlePins.forEach(({ x, y }) => {
        const pulse = (Math.sin(ts * 0.004 + x * 0.024 + y * 0.018) + 1) / 2;
        const a     = 0.18 + pulse * 0.52;
        const rad   = 2.1 + pulse * 1.6;
        ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,210,255,${a})`; ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, rad + 3.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,200,255,${a * 0.28})`;
        ctx.lineWidth = 0.8; ctx.stroke();
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(ts => { lastTs = ts; draw(ts); setReady(true); });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (roRef.current)  roRef.current.disconnect();
    };
  }, []);

  const pinRef = (i) => (el) => { pinRefs.current[i] = el; };

  return (
    <section
      ref={containerRef}
      className="relative z-0 w-full overflow-hidden bg-[#030508]"
      style={{ paddingTop: "30px", paddingBottom: "72px" }}
    >
      <Pattern />

      {/* Top fade — blends section edge into whatever is above */}
      <div className="absolute top-0 left-0 w-full pointer-events-none" style={{
        height: "120px", zIndex: 3,
        background: "linear-gradient(to bottom, #030508 0%, transparent 100%)",
      }} />
      {/* Bottom fade — blends section edge into whatever is below */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{
        height: "120px", zIndex: 3,
        background: "linear-gradient(to top, #030508 0%, transparent 100%)",
      }} />

      {/* <SpotlightCard
        className="absolute top-20 left-0 md:left-60 md:-top-20 pointer-events-none"
        fill="#06B6D4"
      /> */}

      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 50% at 50% 50%,rgba(6,182,212,0.07) 0%,transparent 65%)"
      }} />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div ref={sectionRef} className="text-center mb-12 -mt-8">
          <h2
            className="text-3xl sm:text-5xl font-semibold text-cyan-400 tracking-tight"
            style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}
          >
            Our Services
            {/* <span style={{
              background: "linear-gradient(120deg,#22d3ee 0%,#818cf8 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}> */}
              
            {/* </span> */}
          </h2>
          {/* <p className="mt-2 text-xs tracking-[0.22em] uppercase text-gray-500">
            Everything your business needs to grow
          </p> */}
        </div>

        {/* TOP ROW */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={topCtrl}
          style={{ marginBottom: "72px" }}
        >
          {TOP_SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.title}
              service={svc}
              cardIndex={i}
              refCallback={el => { boxRefs.current[i] = el; }}
            />
          ))}
        </motion.div>

        {/* ── CHIP ── */}
        <div className="flex justify-center" style={{ marginBottom: "72px" }}>
          <div
            ref={chipRef}
            className="relative flex items-center justify-center overflow-visible"
            style={{
              width: "300px", height: "88px", borderRadius: "10px",
              background: "linear-gradient(150deg,#1a1a1a 0%,#0d0d0d 100%)",
              border: "1px solid #272727",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset,0 28px 64px rgba(0,0,0,0.92)",
            }}
          >
            {/* TOP 7 PINS */}
            <div className="absolute -top-[26px] left-1/2 -translate-x-1/2 flex justify-between w-[80%]">
              {Array(7).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-[2px] h-[13px] bg-gradient-to-b from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(i)}
                    className="w-[9px] h-[9px] bg-gradient-to-b from-[#d0d0d0] via-[#888] to-[#555] rounded-b-sm"
                  />
                </div>
              ))}
            </div>

            {/* BOTTOM 7 PINS */}
            <div className="absolute -bottom-[26px] left-1/2 -translate-x-1/2 flex justify-between w-[80%]">
              {Array(7).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col-reverse items-center">
                  <div className="w-[2px] h-[13px] bg-gradient-to-t from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(7 + i)}
                    className="w-[9px] h-[9px] bg-gradient-to-t from-[#d0d0d0] via-[#888] to-[#555] rounded-t-sm"
                  />
                </div>
              ))}
            </div>

            {/* LEFT 3 PINS */}
            <div className="absolute -left-[24px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[58px]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-[13px] h-[2px] bg-gradient-to-r from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(14 + i)}
                    className="w-[9px] h-[9px] bg-gradient-to-r from-[#d0d0d0] via-[#888] to-[#555] rounded-r-sm"
                  />
                </div>
              ))}
            </div>

            {/* RIGHT 3 PINS */}
            <div className="absolute -right-[24px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[58px]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex flex-row-reverse items-center">
                  <div className="w-[13px] h-[2px] bg-gradient-to-l from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(17 + i)}
                    className="w-[9px] h-[9px] bg-gradient-to-l from-[#d0d0d0] via-[#888] to-[#555] rounded-l-sm"
                  />
                </div>
              ))}
            </div>

            {/* inner glow */}
            <div className="absolute inset-0 rounded-[10px] pointer-events-none" style={{
              background: "radial-gradient(circle at 50% 50%,rgba(0,210,255,0.12) 0%,transparent 68%)",
              animation: "chipPulse 2.6s ease-in-out infinite",
            }} />

            {/* corner marks */}
            <div className="absolute top-[6px]    left-[6px]  w-3 h-3 border-t border-l border-cyan-900/40" />
            <div className="absolute top-[6px]    right-[6px] w-3 h-3 border-t border-r border-cyan-900/40" />
            <div className="absolute bottom-[6px] left-[6px]  w-3 h-3 border-b border-l border-cyan-900/40" />
            <div className="absolute bottom-[6px] right-[6px] w-3 h-3 border-b border-r border-cyan-900/40" />

            <Image 
              src="/logo2 copy.png" 
              alt="Cyberspace Works" 
              width={180}
              height={60}
              className="relative z-10 select-none" 
              style={{ maxHeight: "60px", maxWidth: "180px" }}
            />
          </div>
        </div>

        {/* BOTTOM ROW */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={botCtrl}
        >
          {BOTTOM_SERVICES.map((svc, i) => (
            <ServiceCard
              key={svc.title}
              service={svc}
              cardIndex={i + 4}
              isBottom={true}
              refCallback={el => { boxRefs.current[i + 4] = el; }}
            />
          ))}
        </motion.div>

      </div>

      <style>{`
        @keyframes chipPulse {
          0%,100% { opacity: 0.55 }
          50%      { opacity: 1    }
        }
      `}</style>
    </section>
  );
}