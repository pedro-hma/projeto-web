"use client";

import { useGames } from "./hooks/useGames";
import GameCard from "@/components/GameCard";

export default function Home() {
  const { games, loading } = useGames();

  return (
    <main className="min-h-screen p-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">⚽ Jogos ao vivo</h1>
        <p className="text-zinc-400">
          Acompanhe os principais jogos em tempo real
        </p>
      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-zinc-400">Carregando jogos...</p>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

    </main>
  );
}