"use client";
import { useEffect, useState } from "react";
import { getTeams } from "../../lib/api";

export default function Times() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    async function load() {
      try {
        const data = await getTeams();
        setTeams(data || []);
      } catch (err) {
        console.error(err);
        setTeams([]);
      }
    }
    load();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>🏆 Times</h1>
      {teams.length === 0 ? (
        <p>Carregando times...</p>
      ) : (
        <div style={styles.grid}>
          {teams.map((item) => (
            <div key={item.team.id} style={styles.card}>
              <img src={item.team.logo} width={50} />
              <p>{item.team.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    background: "#fff",
    color: "#000",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
  },
};