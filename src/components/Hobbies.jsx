import React from "react";

const hobbies = [
  {
    title: "Photography",
    desc: "Capturing moments, landscapes, and creative compositions during travels and daily life.",
  },
  {
    title: "Gaming",
    desc: "Enjoying tactical shooters and immersive story-driven games for fun and inspiration.",
  },
  {
  
    title: "Watching Movies",
    desc: "Watching TWD Series and retro and inspirational films.",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" style={{ padding: "2em 0" }}>
      <div className="section-header reveal">
        <span className="section-num">// 04</span>
        <h2 className="section-title">Hobbies</h2>
        <div className="section-line" />
      </div>
      <div className="hobbies-grid">
        {hobbies.map((hobby, i) => (
          <div key={i} className="hobby-card reveal delay-1">
            <div className="hobby-title">{hobby.title}</div>
            <div className="hobby-desc">{hobby.desc}</div>
          </div>
        ))}
      </div>
      <style>{`
        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2em;
          max-width: 900px;
          margin: 2.5em auto 1.5em auto;
        }
        .hobby-card {
          background: #181818;
          border-radius: 1em;
          box-shadow: 0 2px 16px 0 rgba(0,0,0,0.13);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 2em 1.3em 1.6em 1.3em;
          min-height: 150px;
          transition: box-shadow 0.18s, transform 0.14s;
          border: 1px solid #232323;
        }
        .hobby-card:hover {
          box-shadow: 0 8px 28px 0 rgba(30,0,64,0.15);
          transform: translateY(-4px) scale(1.025);
        }
        .hobby-title {
          font-weight: bold;
          font-size: 1.13em;
          color: #fff;
          margin-bottom: 0.38em;
          letter-spacing: 0.01em;
        }
        .hobby-desc {
          color: #c2c2c2;
          font-size: 0.99em;
        }
        @media (max-width: 700px) {
          .hobbies-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}