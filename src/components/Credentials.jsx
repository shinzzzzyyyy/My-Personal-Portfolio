import React from "react";
import { FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";

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
            rel="noreferrer"
            className={`cred-card reveal delay-${i + 1}`}
          >
            <span className="cred-icon">{c.icon}</span>
            <div className="cred-platform">{c.platform}</div>
            <div className="cred-handle">{c.handle}</div>
            <div className="cred-link">{c.link}</div>
            <span className="cred-arrow">↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}