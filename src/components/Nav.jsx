import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = e => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

  const links = [
    { href: '#hero',        label: 'Home',        icon: '⌂' },
    { href: '#works',       label: 'Works',       icon: '⊞' },
    { href: '#hobbies',     label: 'Hobbies',     icon: '♡' },
    { href: '#credentials', label: 'Credentials', icon: '✦' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="logo-title">
          <img src={logo} alt="Sai Mendoza logo" className="logo-icon" />
          <span className="site-title">sai.dev</span>
        </div>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className="hb-line hb-top" />
          <span className="hb-line hb-mid" />
          <span className="hb-line hb-bot" />
        </button>
      </nav>

      <div
        className={`overlay${menuOpen ? ' show' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden
      />

      <aside className={`drawer${menuOpen ? ' show' : ''}`} aria-label="Site navigation">
        <div className="drawer-head">
          <span className="drawer-label">Menu</span>
          <button
            className="drawer-close"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <nav className="drawer-links">
          {links.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              className="drawer-link"
              onClick={() => setMenuOpen(false)}
            >
              <span className="link-icon" aria-hidden="true">{icon}</span>
              {label}
            </a>
          ))}
        </nav>

        <div className="drawer-footer">
          <div className="footer-avatar">
            <img src={logo} alt="" className="footer-logo" />
          </div>
          <div className="footer-info">
            <span className="footer-name">Sai Mendoza</span>
            <span className="footer-sub">Portfolio</span>
          </div>
        </div>
      </aside>

      <style>{`
        /* ── Navbar ── */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.9rem 1.25rem;
          background: transparent;
          position: relative;
          z-index: 50;
        }
        .logo-title {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .logo-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
        .site-title {
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #fd2d44;
        }

        /* ── Hamburger button ── */
        .hamburger {
          width: 36px;
          height: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 8px;
          cursor: pointer;
          padding: 0;
          transition: border-color 0.2s, background 0.2s;
        }
        .hamburger:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.22);
        }
        .hb-line {
          display: block;
          height: 1.5px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.25s cubic-bezier(0.4,0,0.2,1),
                      opacity 0.2s,
                      width 0.2s;
        }
        .hb-top { width: 17px; }
        .hb-mid { width: 17px; }
        .hb-bot { width: 11px; align-self: flex-start; margin-left: 3px; }

        .hamburger.open .hb-top { transform: translateY(6.5px) rotate(45deg); }
        .hamburger.open .hb-mid { opacity: 0; transform: scaleX(0); }
        .hamburger.open .hb-bot {
          transform: translateY(-6.5px) rotate(-45deg);
          width: 17px;
          margin-left: 0;
        }

        /* ── Overlay ── */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0);
          z-index: 100;
          pointer-events: none;
          transition: background 0.22s;
        }
        .overlay.show {
          background: rgba(0,0,0,0.35);
          pointer-events: auto;
        }

        /* ── Drawer ── */
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 260px;
          background: #111016;
          border-left: 1px solid rgba(255,255,255,0.07);
          z-index: 200;
          display: flex;
          flex-direction: column;
          transform: translateX(100%);
          transition: transform 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .drawer.show {
          transform: translateX(0);
        }

        /* ── Drawer head ── */
        .drawer-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.25rem 0.9rem;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .drawer-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
        }
        .drawer-close {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 6px;
          cursor: pointer;
          color: rgba(255,255,255,0.5);
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .drawer-close:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.2);
          color: #fff;
        }

        /* ── Drawer links ── */
        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding: 0.75rem;
          flex: 1;
        }
        .drawer-link {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0.65rem 0.75rem;
          border-radius: 7px;
          text-decoration: none;
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.01em;
          border: 1px solid transparent;
          transition: background 0.15s, color 0.15s, border-color 0.15s;
        }
        .drawer-link:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.08);
          color: #fff;
        }
        .drawer-link:hover .link-icon {
          color: #fd2d44;
        }
        .link-icon {
          font-size: 15px;
          color: rgba(255,255,255,0.3);
          width: 18px;
          text-align: center;
          transition: color 0.15s;
          flex-shrink: 0;
        }

        /* ── Drawer footer ── */
        .drawer-footer {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 1rem 1.25rem;
          border-top: 1px solid rgba(255,255,255,0.07);
        }
        .footer-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .footer-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .footer-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }
        .footer-name {
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
        }
        .footer-sub {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
        }

        @media (max-width: 480px) {
          .drawer {
            width: 100vw;
            border-left: none;
          }
        }
      `}</style>
    </>
  );
}
