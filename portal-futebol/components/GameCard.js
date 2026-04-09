"use client";
import { useRouter } from "next/navigation";

export default function GameCard({ game }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/jogo/${game.id}`)}
      className="bg-gray-900 border border-gray-800 rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition-all"
    >
      <p className="text-xs text-gray-400 mb-2">
        {game?.competition?.name || "Liga"}
      </p>

      <div className="flex justify-between items-center">
        <span>{game?.homeTeam?.name}</span>
        <span className="font-bold text-green-400">
          {game?.homeTeam?.score?.current ?? 0}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span>{game?.awayTeam?.name}</span>
        <span className="font-bold text-green-400">
          {game?.awayTeam?.score?.current ?? 0}
        </span>
      </div>

      <p className="text-xs text-red-400 mt-2">● LIVE</p>
    </div>
  );
}