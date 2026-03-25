"use client";
import { useEffect, useState } from "react";
import { getTopScorers } from "../../lib/api";

export default function Ranking() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function load() {
      const data = await getTopScorers();
      setPlayers(data || []);
    }
    load();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>🧠 Artilheiros</h1>
      {players.map((p, i) => (
        <div key={p.id} style={styles.card}>
          <span>#{i + 1}</span>
          <strong>{p.name}</strong>
          <span>{p.team}</span>
          <span>⚽ {p.goals}</span>
        </div>
      ))}
    </div>
  );
}
const styles = {
  card: {
    background: "#fff",
    color: "#000",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "space-between",
  },
};