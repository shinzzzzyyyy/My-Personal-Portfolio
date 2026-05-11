import React from "react";

const games = [
  {
    name: "Call of Duty: Mobile",
    image: "/games/codm.png", // place the image in public/games/
    ign: "RAIZEN Isaiah 63587451233545",
  },
  {
    name: "Mobile Legends: Bang Bang",
    image: "/games/mlbb.png", // place the image in public/games/
    id: "Althea 45487451122132",
  },
  {
    name: "Steam",
    image: "/games/steam.png", // place the image in public/games/
    account: "shinzzy186",
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
        {games.map((game, i) => (
          <div key={i} className="game-card reveal delay-1">
            <div className="game-image-wrap">
              <img
                src={game.image}
                alt={game.name}
                className="game-image"
                onError={e => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/300x300?text=No+Image";
                }}
              />
            </div>
            <div className="game-info">
              <div className="game-title">{game.name}</div>
              {game.ign && (
                <div className="game-detail"><span>CODM IGN:</span> {game.ign}</div>
              )}
              {game.id && (
                <div className="game-detail"><span>MLBB ID:</span> {game.id}</div>
              )}
              {game.account && (
                <div className="game-detail">
                  <span>Steam:</span>{" "}
                  <a
                    href={`https://${game.account.replace(/^https?:\/\//, "")}`}
                    target="_blank" rel="noopener noreferrer"
                    className="game-link"
                  >
                    {game.account}
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 2em;
          max-width: 900px;
          margin: 2.5em auto 1.5em auto;
        }
        .game-card {
          background: #181818;
          border-radius: 1.1em;
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.16);
          padding: 2em 1.2em 1.7em 1.2em;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #232323;
          position: relative;
          transition: box-shadow 0.18s, transform 0.13s;
        }
        .game-card:hover {
          box-shadow: 0 12px 38px 0 rgba(30,0,64,0.18);
          transform: translateY(-6px) scale(1.03);
        }
        .game-image-wrap {
          width: 110px;
          height: 110px;
          margin-bottom: 1.4em;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 17px;
          overflow: hidden;
          box-shadow: 0 4px 20px #0007;
          background: #232323;
          /* Tilt effect */
          transform: rotate(-8deg);
          transition: transform 0.17s;
        }
        .game-card:hover .game-image-wrap {
          transform: rotate(2.5deg) scale(1.06);
        }
        .game-image {
          width: 110px;
          height: 110px;
          object-fit: cover;
          display: block;
        }
        .game-info {
          width: 100%;
          text-align: center;
        }
        .game-title {
          font-weight: bold;
          font-size: 1.18em;
          color: #fff;
          margin-bottom: 0.33em;
          letter-spacing: 0.02em;
        }
        .game-detail {
          color: #c2c2c2;
          font-size: 1.03em;
          margin-bottom: 0.16em;
        }
        .game-detail span {
          color: #72dbf8;
          font-weight: 500;
        }
        .game-link {
          color: #93f6e4;
          text-decoration: underline;
          word-break: break-all;
        }
        @media (max-width: 700px) {
          .hobbies-grid {
            grid-template-columns: 1fr;
          }
          .game-card {
            min-height: 250px;
            padding: 1.3em 0.7em 1.2em 0.7em;
          }
        }
      `}</style>
    </section>
  );
}