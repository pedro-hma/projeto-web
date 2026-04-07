"use client";
import { useEffect, useState } from "react";
import { getGames } from "@/lib/api";
import { useGames } from "./hooks/useGames";
import GameCard from "@/components/GameCard";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function loadGames() {
    setLoading(true);
    try {
      const data = await getGames();
      setGames(data);
    } catch (err) {
      setError("Erro ao carregar jogos");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
  loadGames();

  const interval = setInterval(loadGames, 20000);

  return () => clearInterval(interval);
}, []);
  if (loading) return <p>Carregando jogos...</p>;
  if (error) return <p>{error}</p>;
  return (
     <main className="p-6 bg-zinc-950 min-h-screen text-white">
  <h1 className="text-3xl font-bold mb-6">⚽ Jogos ao vivo</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {games.map((game) => (
      <GameCard key={game.id} game={game} />
    ))}
  </div>
</main>
  );
}