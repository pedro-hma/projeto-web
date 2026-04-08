"use client";

import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("favoritos");
    if (data) setFavoritos(JSON.parse(data));
  }, []);

  if (favoritos.length === 0) {
    return (
      <div className="text-center mt-20 text-zinc-400">
        Nenhum favorito ainda ⭐
      </div>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">⭐ Favoritos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((game) => (
          <div key={game.id} className="bg-zinc-900 p-4 rounded-xl">
            {game.home} {game.score} {game.away}
          </div>
        ))}
      </div>
    </main>
  );
}