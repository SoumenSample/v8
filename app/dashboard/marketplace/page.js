// import DashboardMarketplace from "@/components/dashboard/DashboardMarketplace";

// export const metadata = {
//   title: "Marketplace | Dashboard",
//   description: "Browse and explore portfolio products from our team.",
// };

// export default function DashboardMarketplacePage() {
//   return <h1 className="text-black dark:text-white">COMMING SOON ...</h1>;
// }



import DashboardMarketplace from "@/components/dashboard/DashboardMarketplace";

export const metadata = {
  title: "Marketplace | Dashboard",
  description: "Browse and explore portfolio products from our team.",
};

export default function DashboardMarketplacePage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Mono:wght@300;400&display=swap');

        .cs-root {
          font-family: 'DM Mono', monospace;
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 3rem 1.5rem;
          position: relative;
          overflow: hidden;
        }

        /* ── Animated grid background ── */
        .cs-root::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0,0,0,0.055) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.055) 1px, transparent 1px);
          background-size: 56px 56px;
          animation: gridDrift 28s linear infinite;
          pointer-events: none;
        }
        :is(.dark) .cs-root::before {
          background-image:
            linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px);
        }
        @keyframes gridDrift {
          0%   { background-position: 0 0; }
          100% { background-position: 56px 56px; }
        }

        /* ── Diagonal scan line ── */
        .cs-root::after {
          content: '';
          position: absolute;
          inset: -100%;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(0,0,0,0.015) 50%,
            transparent 60%
          );
          animation: scanDiag 6s ease-in-out infinite;
          pointer-events: none;
        }
        :is(.dark) .cs-root::after {
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255,255,255,0.03) 50%,
            transparent 60%
          );
        }
        @keyframes scanDiag {
          0%   { transform: translateX(-60%) translateY(-30%); }
          100% { transform: translateX(60%)  translateY(30%); }
        }

        /* ── Card ── */
        .cs-card {
          position: relative;
          z-index: 10;
          max-width: 560px;
          width: 100%;
          text-align: center;
        }

        /* ── Badge ── */
        .cs-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: 1px solid rgba(0,0,0,0.15);
          border-radius: 2px;
          padding: 0.3rem 0.9rem;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.45);
          margin-bottom: 2.5rem;
          animation: fadeUp 0.6s ease 0.1s both;
        }
        :is(.dark) .cs-badge {
          border-color: rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.45);
        }
        .cs-badge-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: currentColor;
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(0.7); }
        }

        /* ── Heading ── */
        .cs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-size: clamp(3.5rem, 9vw, 6.5rem);
          line-height: 1;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          animation: fadeUp 0.7s ease 0.2s both;
          margin: 0;
        }
        :is(.dark) .cs-heading { color: #f5f5f5; }

        .cs-heading em {
          font-style: italic;
          font-weight: 300;
          color: rgba(0,0,0,0.35);
        }
        :is(.dark) .cs-heading em { color: rgba(255,255,255,0.3); }

        /* ── Divider ── */
        .cs-divider {
          width: 48px;
          height: 1px;
          background: rgba(0,0,0,0.2);
          margin: 2rem auto;
          animation: expandWidth 0.8s ease 0.4s both;
        }
        :is(.dark) .cs-divider { background: rgba(255,255,255,0.2); }
        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to   { width: 48px; opacity: 1; }
        }

        /* ── Description ── */
        .cs-desc {
          font-size: 0.78rem;
          font-weight: 300;
          letter-spacing: 0.06em;
          line-height: 1.8;
          color: rgba(0,0,0,0.5);
          max-width: 380px;
          margin: 0 auto 2.5rem;
          animation: fadeUp 0.7s ease 0.45s both;
        }
        :is(.dark) .cs-desc { color: rgba(255,255,255,0.45); }

        /* ── Progress track ── */
        .cs-progress-wrap {
          animation: fadeUp 0.7s ease 0.55s both;
          margin-bottom: 2.5rem;
        }
        .cs-progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.35);
        }
        :is(.dark) .cs-progress-label { color: rgba(255,255,255,0.3); }
        .cs-progress-track {
          height: 1px;
          width: 100%;
          background: rgba(0,0,0,0.1);
          border-radius: 0;
          overflow: hidden;
        }
        :is(.dark) .cs-progress-track { background: rgba(255,255,255,0.1); }
        .cs-progress-fill {
          height: 100%;
          width: 0;
          background: #0a0a0a;
          animation: fillProgress 2s cubic-bezier(0.22,1,0.36,1) 0.8s forwards;
        }
        :is(.dark) .cs-progress-fill { background: #f5f5f5; }
        @keyframes fillProgress {
          to { width: 68%; }
        }

        /* ── Notify row ── */
        .cs-notify {
          display: flex;
          gap: 0;
          max-width: 360px;
          margin: 0 auto 2.5rem;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: 2px;
          overflow: hidden;
          animation: fadeUp 0.7s ease 0.65s both;
        }
        :is(.dark) .cs-notify { border-color: rgba(255,255,255,0.12); }
        .cs-notify input {
          flex: 1;
          padding: 0.7rem 1rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.72rem;
          letter-spacing: 0.04em;
          background: transparent;
          border: none;
          outline: none;
          color: #0a0a0a;
        }
        :is(.dark) .cs-notify input { color: #f5f5f5; }
        .cs-notify input::placeholder { color: rgba(0,0,0,0.3); }
        :is(.dark) .cs-notify input::placeholder { color: rgba(255,255,255,0.25); }
        .cs-notify button {
          padding: 0.7rem 1.2rem;
          font-family: 'DM Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: #0a0a0a;
          color: #f5f5f5;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        :is(.dark) .cs-notify button { background: #f5f5f5; color: #0a0a0a; }
        .cs-notify button:hover { opacity: 0.8; }

        /* ── Feature pills ── */
        .cs-features {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          animation: fadeUp 0.7s ease 0.75s both;
        }
        .cs-feature {
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 2px;
          padding: 0.3rem 0.75rem;
          font-size: 0.6rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0,0,0,0.4);
          transition: border-color 0.2s, color 0.2s;
        }
        :is(.dark) .cs-feature {
          border-color: rgba(255,255,255,0.1);
          color: rgba(255,255,255,0.35);
        }
        .cs-feature:hover {
          border-color: rgba(0,0,0,0.3);
          color: rgba(0,0,0,0.7);
        }
        :is(.dark) .cs-feature:hover {
          border-color: rgba(255,255,255,0.3);
          color: rgba(255,255,255,0.7);
        }

        /* ── Corner decorations ── */
        .cs-corner {
          position: absolute;
          width: 20px;
          height: 20px;
          opacity: 0.25;
        }
        :is(.dark) .cs-corner { opacity: 0.2; }
        .cs-corner-tl { top: 0; left: 0; border-top: 1px solid #0a0a0a; border-left: 1px solid #0a0a0a; }
        .cs-corner-tr { top: 0; right: 0; border-top: 1px solid #0a0a0a; border-right: 1px solid #0a0a0a; }
        .cs-corner-bl { bottom: 0; left: 0; border-bottom: 1px solid #0a0a0a; border-left: 1px solid #0a0a0a; }
        .cs-corner-br { bottom: 0; right: 0; border-bottom: 1px solid #0a0a0a; border-right: 1px solid #0a0a0a; }
        :is(.dark) .cs-corner-tl,
        :is(.dark) .cs-corner-tr,
        :is(.dark) .cs-corner-bl,
        :is(.dark) .cs-corner-br { border-color: #f5f5f5; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="cs-root bg-white dark:bg-black">
        <div className="cs-card">
          {/* Corner marks */}
          <div className="cs-corner cs-corner-tl" />
          <div className="cs-corner cs-corner-tr" />
          <div className="cs-corner cs-corner-bl" />
          <div className="cs-corner cs-corner-br" />

          {/* Badge */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="cs-badge">
              <span className="cs-badge-dot" />
              Under construction
            </div>
          </div>

          {/* Heading */}
          <h1 className="cs-heading">
            Market<em>place</em>
          </h1>

          {/* Divider */}
          <div className="cs-divider" />

          {/* Description */}
          <p className="cs-desc">
            Our team is curating a collection of portfolio products, templates, and tools. Something worth the wait.
          </p>

          {/* Progress */}
          <div className="cs-progress-wrap">
            <div className="cs-progress-label">
              <span>Build progress</span>
              <span>68%</span>
            </div>
            <div className="cs-progress-track">
              <div className="cs-progress-fill" />
            </div>
          </div>

          {/* Notify input */}
          <div className="cs-notify">
            <input type="email" placeholder="your@email.com" />
            <button type="button">Notify me</button>
          </div>

          {/* Feature pills */}
          <div className="cs-features">
            {["Portfolio products", "Templates", "Tools", "Resources", "Components"].map((item) => (
              <span key={item} className="cs-feature">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}