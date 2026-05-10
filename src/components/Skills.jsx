// src/components/Skills.jsx

import React from "react";
import photoshopLogo from "../assets/photoshop.png";
import illustratorLogo from "../assets/illustrator.png";
import indesignLogo from "../assets/indesign.png";
import canvaLogo from "../assets/canva.png";
import pythonLogo from "../assets/python.png";
import javascriptLogo from "../assets/javascript.png";

export default function Skills() {
  const skills = [
    {
      icon: photoshopLogo,
      cat: "Design",
      name: "Adobe Photoshop",
      desc: "Photo manipulation, poster design, and graphic creation at a professional level.",
      techs: ["Photo Edit", "Compositing", "Typography"],
    },
    {
      icon: illustratorLogo,
      cat: "Design",
      name: "Adobe Illustrator",
      desc: "Vector graphic design, logo creation, and advanced illustration.",
      techs: ["Vector", "Logo Design", "Illustration"],
    },
    {
      icon: indesignLogo,
      cat: "Design",
      name: "Adobe InDesign",
      desc: "Professional desktop publishing for brochures, flyers, and magazines.",
      techs: ["Layout", "Typography", "Print"],
    },
    {
      icon: canvaLogo,
      cat: "Design",
      name: "Canva",
      desc: "Quick and creative branding, presentations, and marketing graphics.",
      techs: ["Branding", "Templates", "Presentation"],
    },
    {
      icon: pythonLogo,
      cat: "Programming Language",
      name: "Python",
      desc: "Scripting, data analysis, backend automation, and rapid prototyping.",
      techs: ["Flask", "Pandas", "Scripting"],
    },
    {
      icon: javascriptLogo,
      cat: "Programming Language",
      name: "JavaScript",
      desc: "Frontend and full-stack web development.",
      techs: ["React", "ES6", "Node.js"],
    },
  ];

  return (
    <section id="skills">
      <div className="section-header reveal">
        <span className="section-num">// 02</span>
        <h2 className="section-title">Skills &amp; Stack</h2>
        <div className="section-line" />
      </div>
      <div className="skills-grid">
        {skills.map((s, i) => (
          <div key={i} className="skill-card reveal delay-1">
            <span
              className="skill-icon"
              style={{
                display: "inline-block",
                background: "#fff",
                borderRadius: "50%",
                padding: "0.3em",
                boxShadow: "0 1px 6px 0 rgba(0,0,0,0.07)",
                marginBottom: "0.6em",
              }}
            >
              <img
                src={s.icon}
                alt={s.name}
                style={{
                  width: "1.8em",
                  height: "1.8em",
                  display: "block",
                }}
              />
            </span>
            <div className="skill-cat">{s.cat}</div>
            <div className="skill-name">{s.name}</div>
            <p className="skill-desc">{s.desc}</p>
            <div className="skill-techs">
              {s.techs.map((t) => (
                <span key={t} className="skill-tech">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}