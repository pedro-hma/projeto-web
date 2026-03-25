"use client";
import { useState } from "react";
import { getTeamsByLeague } from "../../lib/api";
import { LEAGUES } from "../../lib/leagues";

export default function Ligas() {
  const [teams, setTeams] = useState([]);

  async function loadLeague(id) {
    const data = await getTeamsByLeague(id);
    setTeams(data);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Ligas</h1>
      <h2>🇧🇷 Brasil</h2>
      {LEAGUES.brasil.map((l) => (
        <button key={l.id} onClick={() => loadLeague(l.id)}>
          {l.name}
        </button>
      ))}
      <h2>🇪🇺 Europa</h2>
      {LEAGUES.europa.map((l) => (
        <button key={l.id} onClick={() => loadLeague(l.id)}>
          {l.name}
        </button>
      ))}
      <h2>🌍 Internacional</h2>
      {LEAGUES.internacionais.map((l) => (
        <button key={l.id} onClick={() => loadLeague(l.id)}>
          {l.name}
        </button>
      ))}
      <div style={styles.grid}>
        {teams.map((t) => (
          <div key={t.team.id} style={styles.card}>
            <img src={t.team.logo} width={50} />
            <p>{t.team.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    marginTop: "20px",
  },
  card: {
    background: "#fff",
    color: "#000",
    padding: "10px",
    borderRadius: "8px",
    textAlign: "center",
  },
};