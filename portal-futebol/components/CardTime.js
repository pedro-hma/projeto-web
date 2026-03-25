"use client";
export default function CardTime({ team, onFavorite, isFavorite }) {
  return (
    <div className="relative bg-gray-900 rounded-2xl p-5 shadow-lg hover:scale-105 transition">
      {/* ⭐ Favorito */}
      <button onClick={() => onFavorite(team)}className={`absolute top-3 right-3 text-xl ${isFavorite ? "text-yellow-400 scale-110" : "text-gray-500" }`}>⭐</button>
      {/* Logo */}
      <img src={team.strTeamBadge}alt={team.strTeam}className="w-20 h-20 mx-auto mb-3"/>
      {/* Nome */}
      <h2 className="text-center text-white font-bold">{team.strTeam}</h2>
      {/* Liga */}
      <p className="text-center text-gray-400 text-sm">{team.strLeague}</p>
    </div>
  );
}