"use client";

import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import { getGames } from "../lib/api";

export default function Home() {
  const [games, setGames] = useState([]);
  async function loadGames() {
    const data = await getGames();
    setGames(data || []);
  }
  useEffect(() => {
    loadGames();
    const interval = setInterval(() => {
      loadGames();
    }, 30000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      <h1>🔴 Jogos ao vivo</h1>
      {games.length === 0 ? (
        <p>Carregando jogos...</p>
      ) : (
        <div style={styles.grid}>
          {games.map((g) => (
            <GameCard key={g.id} {...g} />
          ))}
        </div>
      )}
    </div>
  );
}
const styles = {
  grid: {
    display: "grid",
    gap: "15px",
  },
};