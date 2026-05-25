import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = e => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="logo-title">
          <img src={logo} alt="Sai Mendoza logo" className="logo-icon" />
          <span className="site-title">sai.dev</span>
        </div>
        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div />
          <div />
          <div />
        </button>
      </nav>

      <div
        className={`nav-side-overlay${menuOpen ? " show" : ""}`}
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
        aria-hidden={!menuOpen}
      />

      <aside className={`nav-side-drawer${menuOpen ? " show" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-logo-wrap">
            <img src={logo} alt="Sai Mendoza logo" className="drawer-logo" />
          </div>
          <span className="drawer-title">sai.dev</span>
          <button
            className="drawer-close"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="30" height="30" viewBox="0 0 30 30">
              <circle cx="15" cy="15" r="14"
                fill="rgba(253,45,68,0.09)" />
              <path d="M10 10 L20 20 M20 10 L10 20" stroke="#fd2d44" strokeWidth="2.3" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="drawer-links">
          <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#works" onClick={() => setMenuOpen(false)}>Works</a>
          <a href="#hobbies" onClick={() => setMenuOpen(false)}>Hobbies</a>
          <a href="#credentials" onClick={() => setMenuOpen(false)}>Credentials</a>
        </nav>
      </aside>

      <style>{`
        .navbar {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 1.1em 1.15em 1em 1.15em;
          background: transparent;
          z-index: 22;
        }
        .logo-title {
          display: flex;
          align-items: center;
        }
        .logo-icon {
          height: 2em;
          width: 2em;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 0.85em;
          box-shadow: 0 2px 8px #fd2d4455;
        }
        .site-title {
          font-size: 1.17em;
          font-weight: 800;
          letter-spacing: 0.035em;
          color: #fd2d44;
          font-family: 'Bebas Neue', 'Orbitron', 'Roboto', sans-serif;
          text-shadow: 0 2px 10px #fd2d4419;
        }
        .nav-hamburger {
          margin-left: auto;
          background: none;
          border: none;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 7px;
          width: 35px;
          height: 35px;
          cursor: pointer;
          border-radius: 10px;
          z-index: 1002;
        }
        .nav-hamburger div {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 10px;
          transition: .32s cubic-bezier(.73,0,.13,1.4);
          box-shadow: 0 1px 3px #0006;
        }
        .nav-hamburger.open div:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .nav-hamburger.open div:nth-child(2) {
          opacity: 0;
          transform: scaleX(0.2);
        }
        .nav-hamburger.open div:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Overlay */
        .nav-side-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20,7,28,0.27);
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.22s;
        }
        .nav-side-overlay.show {
          opacity: 1;
          pointer-events: auto;
        }
        /* Glassy Side Drawer */
        .nav-side-drawer {
          position: fixed;
          top: 0; right: 0;
          height: 100vh;
          width: 88vw;
          max-width: 330px;
          background: 
            linear-gradient(132deg, rgba(36,28,50,0.93) 80%, rgba(253,45,68,0.07) 100%), 
            rgba(28,10,36,0.85);
          backdrop-filter: blur(18px) saturate(1.11);
          box-shadow: -2px 0 20px #fd2d4444, -8px 0 56px #000a;
          z-index: 1003;
          transform: translateX(103%);
          display: flex;
          flex-direction: column;
          align-items: stretch;
          transition: transform 0.34s cubic-bezier(.65,0,.37,1.01);
          border-top-left-radius: 2.3em;
          border-bottom-left-radius: 2.3em;
          overflow-y: auto;
        }
        .nav-side-drawer.show {
          transform: translateX(0);
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding: 1.3em 1.15em 1.18em 1.2em;
          min-height: 72px;
          gap: 0.92em;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .drawer-logo-wrap {
          background: linear-gradient(135deg,#fd2d4422 5%,#5d2bb533 70%);
          border-radius: 50%;
          padding: 0.26em;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 15px #bb123425;
        }
        .drawer-logo {
          width: 2.23em;
          height: 2.23em;
          object-fit: cover;
          border-radius: 50%;
          background: #180413;
          box-shadow: 0 2px 11px #fd2d4450;
        }
        .drawer-title {
          color: #fd2d44;
          font-weight: 900;
          font-size: 1.15em;
          letter-spacing: 0.07em;
          text-shadow: 0 1px 22px #fd2d4422;
          font-family: 'Bebas Neue','Orbitron',sans-serif;
        }
        .drawer-close {
          margin-left: auto;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.36em 0.35em 0.36em 0.36em;
          display: flex;
          align-items: center;
          opacity: 0.75;
          transition: opacity 0.12s, background 0.15s;
          border-radius: 50%;
        }
        .drawer-close:hover {
          background: rgba(253,45,68,0.12);
          opacity: 1;
        }
        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 0.12em;
          margin-top: 0.25em;
        }
        .drawer-links a {
          position: relative;
          display: block;
          font-family: inherit;
          font-weight: 700;
          font-size: 1.23em;
          color: #fff;
          text-decoration: none;
          text-align: left;
          letter-spacing: 0.08em;
          border-radius: 0.5em;
          padding: 0.8em 1.42em 0.8em 1.5em;
          background: none;
          margin-bottom: 0.15em;
          transition:
            background 0.20s,
            color 0.17s,
            transform 0.13s;
          overflow: hidden;
        }
        .drawer-links a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 24%;
          bottom: 24%;
          width: 0.23em;
          border-radius: 10px;
          background: linear-gradient(177deg,#fd2d44 40%,#380c8f 100%);
          opacity: 0;
          transition: opacity 0.17s;
        }
        .drawer-links a:active, .drawer-links a:hover, .drawer-links a:focus {
          background: rgba(253,45,68,0.11);
          color: #fd2d44;
          transform: translateX(-7px) scale(1.03);
        }
        .drawer-links a:hover::before,
        .drawer-links a:focus::before {
          opacity: 1;
        }

        @media (max-width: 470px) {
          .nav-side-drawer {
            width: 99vw;
            max-width: 99vw;
            border-top-left-radius: 1.4em;
            border-bottom-left-radius: 1.4em;
            padding: 0;
          }
          .drawer-header {
            padding: 1.1em 0.45em 1.02em 0.55em;
            gap: 0.45em;
          }
          .drawer-logo{ width: 1.5em; height: 1.5em; }
          .drawer-links a { font-size: 1.05em; padding: 0.67em 1em 0.67em 1.13em;}
        }
      `}</style>
    </>
  );
}
