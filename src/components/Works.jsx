import React, { useState } from "react";

const works = [
  {
    title: "Charity Match",
    image: "/portfolio/CHAIRTY MATCH.png",
    desc: "Pubmat for Valorant Charity Match.",
  },
  {
    title: "IT Urios Lanyard",
    image: "/portfolio/IT FINALEEE.png",
    desc: "Eye-catching poster for an annual festival.",
  },
  {
    title: "The Korap Pubmat",
    image: "/portfolio/KORAP PUBMAT.png",
    desc: "My Personal Response Design of Corrupt System.",
  },
  {
    title: "The Kazee Esports Jersey Design",
    image: "/portfolio/KAZEE DESIGN.png",
    desc: "Kazee Esports Jersey Design.",
  },
  {
    title: "GT Valorant Pubmat",
    image: "/portfolio/GT VLRNT.png",
    desc: "The GranT Valorant.",
  },
  {
    title: "Match Day PUBG Pubmat",
    image: "/portfolio/match day pubg.png",
    desc: "Match Day Scheduled Scrim in PUBG.",
  },
  {
    title: "MVP Calling Card",
    image: "/portfolio/MVP.png",
    desc: "Template for CODM MVP.",
  },
  {
    title: "LIVE TV Match Pubmat",
    image: "/portfolio/tv match.png",
    desc: "wala nakoy ma caption ahak.",
  },
];

export default function Works() {
  const [modal, setModal] = useState(null);

  return (
    <section id="works" style={{ padding: "2.5em 0" }}>
      <div className="section-header reveal">
        <span className="section-num">// 03</span>
        <h2 className="section-title">Design Works</h2>
        <div className="section-line" />
      </div>
      <div className="works-image-grid">
        {works.map((work, i) => (
          <div key={i} className="image-tile" tabIndex={0} onClick={() => setModal(i)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setModal(i); }}>
            <img
              src={work.image}
              alt={work.title}
              loading="lazy"
              onError={e => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/1080x1080?text=No+Image";
              }}
              title={work.title}
            />
            <div className="image-overlay">
              <div className="overlay-title">{work.title}</div>
              <div className="overlay-desc">{work.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {modal !== null && (
        <div className="modal-bg" onClick={() => setModal(null)}>
          <div className="modal-image-container" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setModal(null)} aria-label="Close">&times;</button>
            <img
              src={works[modal].image}
              alt={works[modal].title}
              className="modal-image"
              onError={e => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/1080x1080?text=No+Image";
              }}
            />
            <div className="modal-caption">
              <div className="modal-title">{works[modal].title}</div>
              <div className="modal-desc">{works[modal].desc}</div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .works-image-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5em;
          max-width: 900px;
          margin: 2.5em auto 1.5em auto;
        }
        .image-tile {
          width: 100%;
          aspect-ratio: 1 / 1;
          position: relative;
          border-radius: 0.7em;
          overflow: hidden;
          cursor: pointer;
          outline: none;
        }
        .image-tile img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.7em;
          display: block;
          transition: filter 0.18s;
        }
        .image-tile:focus img {
          filter: brightness(0.7);
        }
        .image-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(15,15,20,0.78);
          color: #fff;
          padding: 1em 0.8em 0.7em 0.8em;
          font-size: 1em;
          box-sizing: border-box;
          opacity: 1;
          transition: background 0.2s;
        }
        .overlay-title {
          font-weight: bold;
          font-size: 1.08em;
          margin-bottom: 0.2em;
          text-shadow: 0 2px 6px #0005;
        }
        .overlay-desc {
          font-size: 0.98em;
          color: #e1e1e1;
          text-shadow: 0 1px 5px #0003;
        }
        .image-tile:hover .image-overlay, .image-tile:focus .image-overlay {
          background: rgba(15,15,20,0.92);
        }

        /* Modal Styles */
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(20,20,24,0.93);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
          animation: modalBgFadeIn 0.18s;
        }
        @keyframes modalBgFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .modal-image-container {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          border-radius: 1em;
          background: #18191b;
          box-shadow: 0 8px 44px 0 rgba(0,0,0,0.36);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2.3em 2.1em 1.5em 2.1em;
          animation: modalZoomIn 0.22s cubic-bezier(.69,-0.18,.34,1.36);
        }
        @keyframes modalZoomIn {
          from {
            transform: scale(0.84);
            opacity: 0.6;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .modal-image {
          width: auto;
          height: auto;
          max-width: 72vw;
          max-height: 62vh;
          border-radius: 0.7em;
          margin-bottom: 1.2em;
          box-shadow: 0 3px 24px #0007;
          background: #232325;
        }
        .modal-caption {
          color: #fff;
          text-align: center;
        }
        .modal-title {
          font-weight: bold;
          font-size: 1.21em;
          margin-bottom: 0.28em;
        }
        .modal-desc {
          font-size: 1em;
          color: #ececec;
        }
        .modal-close {
          position: absolute;
          top: 0.7em;
          right: 1.2em;
          font-size: 2.2em;
          color: #fff;
          background: none;
          border: none;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.18s;
          z-index: 12;
        }
        .modal-close:hover {
          opacity: 1;
        }
        @media (max-width: 900px) {
          .works-image-grid {
            grid-template-columns: 1fr;
          }
          .modal-image-container {
            max-width: 99vw;
            padding: 1.2em 0.3em 1.2em 0.3em;
          }
          .modal-image {
            max-width: 95vw;
            max-height: 52vh;
          }
        }
      `}</style>
    </section>
  );
}