"use client";
import { useEffect, useState } from "react";
import { getLeagues } from "../../lib/api";

export default function Ligas() {
  const [leagues, setLeagues] = useState([]);
  useEffect(() => {
    async function load() {
      const data = await getLeagues();
      setLeagues(data);
    }
    load();
  }, []);
  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Ligas por País</h1>
      {leagues.map((l) => (
        <div key={l.league.id} style={styles.card}>
          <img src={l.country.flag} width={30} />
          <strong>{l.country.name}</strong>
          <p>{l.league.name}</p>
        </div>
      ))}
    </div>
  );
}
const styles = {
  card: {
    background: "#fff",
    color: "#000",
    padding: "10px",
    marginBottom: "10px",
  },
};