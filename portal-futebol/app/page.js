"use client";
import { useEffect, useState } from "react";
import { getGames } from "@/lib/api";
import { useGames } from "./hooks/useGames";

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
     <main className="p-4">
    <h1 className="text-2xl font-bold mb-4">Jogos ao vivo</h1>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (<GameCard key={game.id} game={game} />))}</div>
      </main>
  );
}