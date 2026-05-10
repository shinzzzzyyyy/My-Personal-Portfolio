import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const txt = "MENDOZA";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= txt.length) {
        setTyped(txt.slice(0, i));
        i++;
      } else clearInterval(t);
    }, 110);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="hero">
      <div className="hero-bg-grid" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-eyebrow">Portfolio 2025</div>

        {/* Centered logo + name block */}
        <div className="hero-logo-row">
          <img src={logo} alt="Sai Mendoza" className="hero-logo" />

          <h1 className="hero-name">
            SAI
            <span className="accent glitch" data-text={typed}>
              {typed}
              <span
                style={{
                  color: "var(--red)",
                  opacity: typed.length < 7 ? 1 : 0,
                }}
              >
                |
              </span>
            </span>
          </h1>
        </div>

        <p className="hero-subtitle">Developer · Designer · Creator</p>

        <div className="hero-status-badge">
          <span className="status-dot" />
          CURRENTLY ENROLLED AS A STUDENT
        </div>
      </div>

      <div className="scroll-hint">SCROLL DOWN</div>

      <style>{`
        /* ── Center everything in hero-content ── */
        #hero .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100%;
        }

        /* Eyebrow: centered, remove left line */
        #hero .hero-eyebrow {
          justify-content: center;
        }
        #hero .hero-eyebrow::before {
          display: none;
        }

        /* ── Logo + Name row ── */
        .hero-logo-row {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.35em;
          width: 100%;
        }

        /*
          Logo height = ~1.76× hero-name font-size (two lines at line-height 0.88).
          hero-name is clamp(64px, 18vw, 130px), so logo = clamp(113px, 31.7vw, 229px).
        */
        .hero-logo {
          height: clamp(113px, 31.7vw, 229px);
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 0 20px rgba(232,0,13,0.45));
        }

        /* ── Name: SAI stacked above MENDOZA ── */
        .hero-name {
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(64px, 18vw, 130px);
          line-height: 0.88;
          color: var(--white);
          letter-spacing: 2px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* Subtitle + badge centered below */
        #hero .hero-subtitle {
          text-align: center;
          margin-top: 24px;
        }
        #hero .hero-status-badge {
          align-self: center;
        }

        /* Small phones */
        @media (max-width: 480px) {
          .hero-logo-row { gap: 0.22em; }
          .hero-logo { height: clamp(90px, 29vw, 113px); }
        }
      `}</style>
    </section>
  );
}