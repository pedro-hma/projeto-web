"use client";
import { useEffect, useState, useRef } from "react";
import GameCard from "../components/GameCard";
import { getGames } from "../lib/api";

export default function Home() {
  const [games, setGames] = useState([]);
  const prevGames = useRef([]);
  async function loadGames() {
    const data = await getGames();
    data.forEach((game) => {
      const old = prevGames.current.find((g) => g.id === game.id);
      if (old && old.score !== game.score) {
        alert(`⚽ GOL! ${game.home} ${game.score} ${game.away}`);
      }
    });
    prevGames.current = data;
    setGames(data);
  }
  useEffect(() => {
    loadGames();
    const interval = setInterval(loadGames, 20000); // 20s
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ padding: "30px" }}>
      <h1>🔴 Jogos ao vivo</h1>

      {games.map((g) => (
        <GameCard key={g.id} {...g} />
      ))}
    </div>
  );
}