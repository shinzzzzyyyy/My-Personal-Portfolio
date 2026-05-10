import React from 'react';
import logo from '../assets/logo.png'; // <-- Use the correct relative path

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo-title">
        <img
          src={logo}
          alt="Sai Mendoza logo"
          className="logo-icon"
        />
        <span className="site-title">sai.dev</span>
      </div>
      {/* ...your nav links... */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 1em 2em;
          background: transparent;
        }
        .logo-title {
          display: flex;
          align-items: center;
        }
        .logo-icon {
          height: 2.2em;     /* adjust size as needed */
          width: 2.2em;
          object-fit: contain;
          margin-right: 0.77em;
        }
        .site-title {
          font-size: 1.35em;
          font-weight: 700;
          letter-spacing: 0.035em;
          color: #cc0000;
          font-family: inherit;
        }
      `}</style>
    </nav>
  );
}