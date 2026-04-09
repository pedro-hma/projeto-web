"use client";
import { useRouter } from "next/navigation";
import { addFavoriteGame } from "@/lib/favoritos";
import toast from "react-hot-toast";

export default function GameCard({ game }) {
  const router = useRouter();

  const handleFav = async (e) => {
    e.stopPropagation();
    await addFavoriteGame(game);
    toast.success("Jogo favoritado ⭐");
  };

  return (
    <div onClick={() => router.push(`/jogo/${game.idEvent}`)}className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:scale-105 transition cursor-pointer">
      {/* HEADER */}
      <div className="flex justify-between mb-2">
        <span className="text-xs text-gray-400">
          {game.strLeague}
        </span>
        <span className="text-red-500 text-xs animate-pulse">🔴 LIVE</span>
      </div>

      {/* TIMES */}
      <div className="flex justify-between items-center mt-4">
        <p className="w-1/3 text-center">{game.strHomeTeam}</p>
        <p className="text-lg font-bold">{game.intHomeScore ?? "-"} x {game.intAwayScore ?? "-"}</p>
        <p className="w-1/3 text-center">{game.strAwayTeam}</p>
      </div>

      {/* STATUS */}
      <p className="text-center text-xs text-gray-400 mt-3">{game.strStatus}</p>

      {/* BOTÃO FAVORITO */}
      <button onClick={handleFav}className="mt-4 bg-yellow-400 text-black w-full py-1 rounded" >⭐ Favoritar</button>
    </div>
  );
}