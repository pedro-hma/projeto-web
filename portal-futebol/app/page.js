"use client";

import { useGames } from "@/app/hooks/useGames";
import GameCard from "@/components/GameCard";

export default function Home() {
  const { games, loading } = useGames();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">⚽ Jogos ao vivo</h1>

      <p className="text-gray-400"> Acompanhe os principais jogos em tempo real </p>

      {loading && (
        <div className="flex justify-center mt-10">
          <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!loading && games.length === 0 && (
        <p className="text-gray-500 mt-6">Nenhum jogo ao vivo no momento 😴</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {games.map((game) => (
          <GameCard key={game.idEvent} game={game} />
        ))}
      </div>
    </div>
  );
}