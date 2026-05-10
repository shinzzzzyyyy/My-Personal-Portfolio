import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="bg-text">ABOUT</div>
      <div className="section-header reveal">
        <span className="section-num">// 01</span>
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>
      <div className="about-grid">
        <div className="about-visual reveal delay-1">
          <div className="orbit orbit1"><div className="orbit-dot" /></div>
          <div className="orbit orbit2"><div className="orbit-dot" /></div>
          <div className="about-hex"><span className="about-hex-inner">SM</span></div>
        </div>
        <div className="about-text reveal delay-2">
          <p>Hey — I'm <strong>Sai Mendoza</strong>, a passionate student diving deep into the world of code and design. I build things for the web and craft visuals that catch eyes.</p>
          <p>From spinning up <strong>React apps</strong> to architecting backends with <strong>Django &amp; Laravel</strong>, I love the full-stack grind. On the creative side, Photoshop and Canva are my daily canvases.</p>
          <p>Currently leveling up my skills and building work that bridges tech and design.</p>
          <div className="about-tags">
            {['Student','Full-Stack Dev','UI Designer','Problem Solver','Filipino 🇵🇭'].map(t=>(
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}