"use client";
import React, { useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ChevronDownIcon } from "lucide-react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

type DropdownItem = {
  name: string;
  href: string;
  icon?: React.ReactNode;
  subtext?: string;
};

type NavItem = {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
};

interface SparkleNavbarProps {
  items: NavItem[];
  color?: string;
  textColor?: string;
  onQuickEnquiry?: () => void;
}

const SparkleNavbar: React.FC<SparkleNavbarProps> = ({
  items,
  color = "#00fffc",
  textColor = "white",
  onQuickEnquiry,
}) => {
  const getInitialIndex = () => {
    if (typeof window === "undefined") return 0;
    const path = window.location.pathname;
    const found = items.findIndex((item) => {
      if (item.href === "/" || item.href === "") {
        return path === "/" || path === "";
      }
      return path.startsWith(item.href);
    });
    return found >= 0 ? found : 0;
  };

  const [activeIndex, setActiveIndex] = useState(getInitialIndex);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navRef = useRef<HTMLElement>(null);
  const activeElementRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const createSVG = (element: HTMLDivElement) => {
    element.innerHTML = `
    <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
      <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
      <defs>
        <linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="${color}"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="strike">
      <svg viewBox="0 0 114 12" preserveAspectRatio="none">
        <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
          <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
          <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
          <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        </g>
      </svg>
    </div>
    `;
  };

  const getOffsetLeft = (button: HTMLButtonElement) => {
    if (!navRef.current || !activeElementRef.current) return 0;
    const buttonRect = button.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    const indicatorWidth = activeElementRef.current.offsetWidth;
    return (
      buttonRect.left -
      navRect.left +
      (buttonRect.width - indicatorWidth) / 2
    );
  };

  useLayoutEffect(() => {
    const activeButton = buttonRefs.current[activeIndex];
    if (!navRef.current || !activeElementRef.current || !activeButton) return;

    gsap.set(activeElementRef.current, {
      x: getOffsetLeft(activeButton),
    });
    gsap.to(activeElementRef.current, {
      "--active-element-show": "1",
      duration: 0.2,
    });
    
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (index: number) => {
    const navElement = navRef.current;
    const activeElement = activeElementRef.current;
    const oldButton = buttonRefs.current[activeIndex];
    const newButton = buttonRefs.current[index];

    if (
      index === activeIndex ||
      !navElement ||
      !activeElement ||
      !oldButton ||
      !newButton
    ) return;

    const x = getOffsetLeft(newButton);
    const oldX = getOffsetLeft(oldButton);
    const direction = index > activeIndex ? "after" : "before";
    const spacing = Math.abs(x - oldX);

    navElement.classList.add(direction);

    gsap.set(activeElement, {
      rotateY: direction === "before" ? "180deg" : "0deg",
    });

    gsap.to(activeElement, {
      keyframes: [
        {
          "--active-element-width": `${
            spacing > navElement.offsetWidth - 60
              ? navElement.offsetWidth - 60
              : spacing
          }px`,
          duration: 0.3,
          ease: "none",
          onStart: () => {
            createSVG(activeElement);
            gsap.to(activeElement, {
              "--active-element-opacity": 1,
              duration: 0.1,
            });
          },
        },
        {
          "--active-element-scale-x": "0",
          "--active-element-scale-y": ".25",
          "--active-element-width": "0px",
          duration: 0.3,
          onStart: () => {
            gsap.to(activeElement, {
              "--active-element-mask-position": "40%",
              duration: 0.5,
            });
            gsap.to(activeElement, {
              "--active-element-opacity": 0,
              delay: 0.45,
              duration: 0.25,
            });
          },
          onComplete: () => {
            activeElement.innerHTML = "";
            navElement.classList.remove("before", "after");
            gsap.set(activeElement, {
              x: getOffsetLeft(newButton),
              "--active-element-show": "1",
              "--active-element-scale-x": "1",
              "--active-element-scale-y": "1",
              "--active-element-mask-position": "0%",
              "--active-element-strike-x": "0%",
            });
            setActiveIndex(index);
          },
        },
      ],
    });

    gsap.to(activeElement, {
      x,
      "--active-element-strike-x": "-50%",
      duration: 0.6,
      ease: "none",
    });
  };

  return (
    <>
      <style>{`
        .sparkle-nav {
          margin: 10px 0;
          position: relative;
          z-index: 1;
        }

        .sparkle-nav__list {
          // margin: 0;
          padding: 0;
          // margin-top:20px;
          // border-radius: 12px;
          height:25px;
          list-style: none;
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .sparkle-nav__item {
          position: relative;
          list-style: none;
          border-radius: 8px;
          transition: background 0.2s ease;
        }

        .sparkle-nav__item:not(.sparkle-nav__item--active):hover {
          background: rgba(255, 255, 255, 0.07);
        }

        .sparkle-nav__item--active {
          background: rgba(0,255,252, 0.08);
        }

        .sparkle-nav__btn {
          -webkit-appearance: none;
          appearance: none;
          border: none;
          cursor: pointer;
          background: transparent;
          color: #ffffff;
          padding: 0px 10px;
          margin: 0;
          font-size: 16px;
          font-weight: 500;
          letter-spacing: 0.03em;
          font-family: system-ui, -apple-system, sans-serif;
          transition: color 0.25s, text-shadow 0.25s;
          border-radius: 8px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          gap: 2px;
          height:0px;
          // font-weight:600;
        }

        .sparkle-nav__item--active .sparkle-nav__btn {
          color: #00FFFF;
          // text-shadow: 0 0 12px ${color}80, 0 0 24px ${color}40;
        }

        .sparkle-nav__item:not(.sparkle-nav__item--active):hover .sparkle-nav__btn {
          color: #ffffff;
          text-shadow: 0 0 10px ${color}, 0 0 20px ${color};
        }

        .sparkle-nav__enquiry-btn {
          margin-left: 20px;
        }

        .sparkle-nav__indicator {
          --active-element-scale-x: 1;
          --active-element-scale-y: 1;
          --active-element-show: 0;
          --active-element-opacity: 0;
          --active-element-width: 0px;
          --active-element-strike-x: 0%;
          --active-element-mask-position: 0%;
          position: absolute;
          // left: -7px;
          top: 30px;
          // width:20px;
          height: 3px;
          width: 40px;
          border-radius: 2px;
          background-color: ${color};
          opacity: var(--active-element-show);
          pointer-events: none;

        }

        .sparkle-nav__indicator > svg,
        .sparkle-nav__indicator .strike {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: var(--active-element-opacity);
          width: var(--active-element-width);
          mix-blend-mode: multiply;
        }

        .sparkle-nav__indicator > svg {
          display: block;
          overflow: visible;
          height: 5px;
          filter: blur(0.5px)
            drop-shadow(2px 0px 8px ${color}40)
            drop-shadow(1px 0px 2px ${color}80)
            drop-shadow(0px 0px 3px ${color}40)
            drop-shadow(2px 0px 8px ${color}45)
            drop-shadow(8px 0px 16px ${color}50);
        }

        .sparkle-nav__indicator .strike {
          padding: 24px 0;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent calc(0% + var(--active-element-mask-position)),
            black calc(15% + var(--active-element-mask-position)),
            black 80%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent calc(0% + var(--active-element-mask-position)),
            black calc(15% + var(--active-element-mask-position)),
            black 80%,
            transparent
          );
        }

        .sparkle-nav__indicator .strike svg {
          display: block;
          overflow: visible;
          height: 12px;
          width: calc(var(--active-element-width) * 2);
          transform: translate(var(--active-element-strike-x), 30%)
            scale(var(--active-element-scale-x), var(--active-element-scale-y));
        }

        .sparkle-nav__indicator .strike svg:last-child {
          transform: translate(var(--active-element-strike-x), -30%) scale(-1);
        }

        .sparkle-nav__indicator .strike svg g path:nth-child(2) {
          filter: blur(2px);
        }

        .sparkle-nav__indicator .strike svg g path:nth-child(3) {
          filter: blur(4px);
        }

        .sparkle-nav.before .sparkle-nav__indicator {
          transform: rotateY(180deg);
        }

        /* ── DROPDOWN: matches cyberspaceworks.com screenshot exactly ── */
    .sparkle-nav__dropdown {
  position: fixed;
  top: 65px;
  left: 30px;
  right: 0;
  width: 80vw;
  background: #000000;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-top: 1px solid rgba(0, 255, 252, 0.15);
  border-bottom: 1px solid rgba(0, 255, 252, 0.10);
  box-shadow: 
    0 30px 100px rgba(0, 0, 0, 0.9),
    inset 0 0 40px rgba(0, 255, 255, 0.05);
  z-index: 9999;
  padding: 28px 48px 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
  border-radius: 20px;
  animation: dropdownFadeIn 0.18s ease forwards;
  overflow: hidden;
}

    .sparkle-nav__dropdown::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 300px;
      height: 300px;
      transform: translate(-128px, -128px);
      background: radial-gradient(circle, #06b6d4 0%, transparent 100%);
      filter: blur(160px);
      opacity: 0.6;
      pointer-events: none;
      z-index: 0;
    }

    .sparkle-nav__dropdown::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 300px;
      height: 300px;
      transform: translate(128px, 128px);
      background: radial-gradient(circle, #6366f1 0%, transparent 100%);
      filter: blur(160px);
      opacity: 0.6;
      pointer-events: none;
      z-index: 0;
    }

        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .sparkle-nav__dropdown-item {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 14px;
          padding: 18px 16px;
          border-radius: 10px;
          text-decoration: none;
          color: white;
          transition: background 0.18s ease;
          border: 1px solid transparent;
          position: relative;
          z-index: 1;
        }

        .sparkle-nav__dropdown-item:hover {
          background: rgba(0, 255, 252, 0.05);
          border-color: rgba(0, 255, 252, 0.12);
        }

        .sparkle-nav__dropdown-icon {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          background: rgba(0, 255, 252, 0.08);
          border-radius: 8px;
          border: 1px solid rgba(0, 255, 252, 0.18);
        }

        .sparkle-nav__dropdown-icon svg {
          width: 22px;
          height: 22px;
          color: ${color};
          stroke: ${color};
        }

        .sparkle-nav__dropdown-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .sparkle-nav__dropdown-name {
          font-size: 14px;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.01em;
          line-height: 1.3;
        }

        .sparkle-nav__dropdown-subtext {
          font-size: 12px;
          color: ${color};
          line-height: 1.5;
          font-weight: 400;
          opacity: 0.85;
        }
      `}</style>

      <nav className="sparkle-nav" ref={navRef}>
        <ul className="sparkle-nav__list">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            const hasDropdown = !!item.dropdown?.length;

            return (
              <li
                key={item.label}
                className={`sparkle-nav__item${isActive ? " sparkle-nav__item--active" : ""}`}
              >
                <div
                  onMouseEnter={() => {
                    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                    if (hasDropdown) setOpenDropdown(item.label);
                  }}
                  onMouseLeave={() => {
                    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = setTimeout(() => {
                      setOpenDropdown(null);
                    }, 200);
                  }}
                  className=""
                >
                  <button
                    ref={(el) => { buttonRefs.current[index] = el; }}
                    className="sparkle-nav__btn"
                    onClick={() => {
                      handleClick(index);
                      if (item.href) window.location.href = item.href;
                    }}
                  >
                    {item.label}
                    {hasDropdown && (
                      <ChevronDownIcon
                        size={14}
                        style={{
                          transition: "transform 0.2s",
                          transform:
                            openDropdown === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                        }}
                      />
                    )}
                  </button>
                </div>

                {hasDropdown && openDropdown === item.label && (
                  <div
                    className="sparkle-nav__dropdown"
                    onMouseEnter={() => {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                      setOpenDropdown(item.label);
                    }}
                    onMouseLeave={() => {
                      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                      closeTimeoutRef.current = setTimeout(() => {
                        setOpenDropdown(null);
                      }, 200);
                    }}
                  >
                    {item.dropdown!.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="sparkle-nav__dropdown-item"
                      >
                        {sub.icon && (
                          <span className="sparkle-nav__dropdown-icon">
                            {sub.icon}
                          </span>
                        )}
                        <span className="sparkle-nav__dropdown-text">
                          <span className="sparkle-nav__dropdown-name">
                            {sub.name}
                          </span>
                          {sub.subtext && (
                            <span className="sparkle-nav__dropdown-subtext">
                              {sub.subtext}
                            </span>
                          )}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
          <li className="sparkle-nav__enquiry-btn">
            <HoverBorderGradient 
              onClick={() => {
                if (typeof onQuickEnquiry === "function") {
                  onQuickEnquiry();
                } else {
                  console.log("Quick enquiry clicked (no handler)");
                }
              }}
              style={{
                background: "#0f172a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                border: "none",
                color: textColor,
                fontWeight: "600",
              }}
            >
              Quick Enquiry
            </HoverBorderGradient>
          </li>
        </ul>

        <div className="sparkle-nav__indicator" ref={activeElementRef} />
      </nav>
    </>
  );
};

export default SparkleNavbar;