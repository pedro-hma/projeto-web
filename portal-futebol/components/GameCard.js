"use client";

export default function GameCard({ game }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 shadow-lg hover:scale-105 transition cursor-pointer">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-400">{game.strLeague}</span>
        <span className="text-red-500 text-xs font-bold animate-pulse">🔴 LIVE</span>
      </div>

      {/* TIMES */}
      <div className="flex justify-between items-center mt-4">

        <div className="text-center w-1/3">
          <p className="font-semibold text-sm">
            {game.strHomeTeam}
          </p>
        </div>

        <div className="text-center w-1/3">
          <p className="text-lg font-bold">
            {game.intHomeScore ?? "-"} x {game.intAwayScore ?? "-"}
          </p>
        </div>

        <div className="text-center w-1/3">
          <p className="font-semibold text-sm">
            {game.strAwayTeam}
          </p>
        </div>

      </div>

      {/* STATUS */}
      <p className="text-xs text-gray-400 text-center mt-3">
        {game.strStatus}
      </p>

    </div>
  );
}