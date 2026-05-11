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

      {/* --- The red animated orb background --- */}
      <div className="hero-orb" />

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

      {/* --- Red orb animated CSS --- */}
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

        .hero-logo {
          height: clamp(113px, 31.7vw, 229px);
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
          filter: drop-shadow(0 0 20px rgba(232,0,13,0.45));
        }

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

        #hero .hero-subtitle {
          text-align: center;
          margin-top: 24px;
        }
        #hero .hero-status-badge {
          align-self: center;
        }
        .scroll-hint {
          position: relative;
          z-index: 2;
        }

        /* ---- RED ORB --- */
        .hero-orb {
          position: absolute;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          z-index: 0;
          pointer-events: none;
        }
        .hero-orb::before {
          content: '';
          position: absolute;
          left: 30vw;
          top: 35vh;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(232,0,13,0.58) 0%, rgba(232,0,13,0.33) 60%, transparent 100%);
          filter: blur(21px);
          animation: orbMove 11s ease-in-out infinite alternate;
        }

        @keyframes orbMove {
          0% {
            left: 12vw; top: 30vh;
            filter: blur(24px) brightness(1.11);
            opacity: 0.8;
          }
          18% {
            left: 20vw; top: 8vh;
            filter: blur(20px) brightness(1.09);
            opacity: 0.65;
          }
          35% {
            left: 54vw; top: 19vh;
            filter: blur(29px) brightness(1.05);
            opacity: 0.72;
          }
          55% {
            left: 65vw; top: 64vh;
            filter: blur(18px) brightness(1.12);
            opacity: 0.92;
          }
          78% {
            left: 32vw; top: 70vh;
            filter: blur(25px) brightness(0.95);
            opacity: 0.7;
          }
          100% {
            left: 8vw; top: 42vh;
            filter: blur(29px) brightness(1.10);
            opacity: 0.85;
          }
        }

        /* ----- Small phones ----- */
        @media (max-width: 480px) {
          .hero-logo-row { gap: 0.22em; }
          .hero-logo { height: clamp(90px, 29vw, 113px); }
          .hero-orb::before {
            width: 108px;
            height: 108px;
            left: 32vw;
            top: 22vh;
          }
        }
      `}</style>
    </section>
  );
}