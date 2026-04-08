"use client";

import { useGames } from "../hooks/useGames";
import GameCard from "@/components/GameCard";

export default function Home() {
  const { games, loading } = useGames();

  return (
    <main className="min-h-screen bg-zinc-950 text-white px-6 py-8">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          ⚽ Jogos ao vivo
        </h1>
        <p className="text-zinc-400 mt-1">
          Acompanhe os principais jogos em tempo real
        </p>
      </div>

      {/* Loading */}
      {loading && (
        <div className="text-zinc-400">Carregando...</div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

    </main>
  );
}