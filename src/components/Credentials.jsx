import React from "react";
import { FaFacebook, FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";

export default function Credentials() {
  const creds = [
    {
      icon: <FaFacebook />,
      platform: "Facebook",
      handle: "Sai Mendoza",
      link: "facebook.com/SaiMendoza",
      href: "https://www.facebook.com/edsimon.mendoza.92.92/profile.php?id=100003456789012",
    },
    {
      icon: <FaGithub />,
      platform: "GitHub",
      handle: "shinzzzzyyyy",
      link: "github.com/shinzzzzyyyy",
      href: "https://github.com/shinzzzzyyyy",
    },
    {
      icon: <FaDiscord />,
      platform: "Discord",
      handle: "notShinzy",
      link: "discord: notShinzy",
      href: "https://discord.com/users/notShinzy",
    },
    {
      icon: <FaEnvelope />,
      platform: "Email",
      handle: "edsimonmendoza@gmail.com",
      link: "mailto:edsimonmendoza@gmail.com",
      href: "mailto:edsimonmendoza@gmail.com",
    },
  ];
  return (
    <section id="credentials">
      <div className="section-header reveal">
        <span className="section-num">// 05</span>
        <h2 className="section-title">Find Me At</h2>
        <div className="section-line" />
      </div>
      <div className="cred-grid">
        {creds.map((c, i) => (
          <a
            key={i}
            href={c.href}
            target="_blank"
            rel={c.platform === "Email" ? undefined : "noreferrer"}
            className={`cred-card reveal delay-${i + 1}`}
            style={{ textDecoration: "none" }}
          >
            <span className="cred-icon">{c.icon}</span>
            <div className="cred-platform">{c.platform}</div>
            <div className="cred-handle">{c.handle}</div>
            <div className="cred-link">{c.link}</div>
            <span className="cred-arrow">↗</span>
          </a>
        ))}
      </div>
      <style>{`
        .cred-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2em;
          max-width: 900px;
          margin: 2.5em auto 1.5em auto;
        }
        .cred-card {
          background: #181818;
          border-radius: 1em;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.13);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2em 1.3em 1.6em 1.3em;
          min-height: 145px;
          transition: box-shadow 0.14s, transform 0.12s;
          border: 1px solid #232323;
          color: #fff;
          position: relative;
        }
        .cred-card:hover {
          box-shadow: 0 8px 28px 0 rgba(30,0,64,0.14);
          transform: translateY(-4px) scale(1.025);
        }
        .cred-icon {
          font-size: 1.8em;
          color: #7fd4f7;
          margin-bottom: 0.72em;
        }
        .cred-platform {
          font-weight: 600;
          font-size: 1.08em;
          margin-bottom: 0.25em;
          letter-spacing: 0.01em;
        }
        .cred-handle {
          font-size: 1em;
          color: #93f6e4;
          margin-bottom: 0.18em;
          word-break: break-all;
        }
        .cred-link {
          color: #c2c2c2;
          font-size: 0.96em;
          word-break: break-all;
        }
        .cred-arrow {
          position: absolute;
          bottom: 1.3em;
          right: 1.3em;
          font-size: 1.2em;
          color: #72dbf8;
        }
        @media (max-width: 700px) {
          .cred-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}