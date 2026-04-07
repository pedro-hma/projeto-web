"use client";

import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  // 🔄 carregar favoritos do localStorage
  useEffect(() => {
    const data = localStorage.getItem("favoritos");
    if (data) {
      setFavoritos(JSON.parse(data));
    }
  }, []);

  // ❌ remover favorito
  function removeFavorito(id) {
    const novos = favoritos.filter((item) => item.id !== id);
    setFavoritos(novos);
    localStorage.setItem("favoritos", JSON.stringify(novos));
  }

  // 🟡 EMPTY STATE (importante!)
  if (favoritos.length === 0) {
    return (
      <div className="text-center mt-10 text-zinc-400">
        Nenhum favorito ainda ⚽
      </div>
    );
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">⭐ Favoritos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((game) => (
          <div
            key={game.id}
            className="bg-zinc-900 p-4 rounded-2xl shadow-md hover:scale-105 transition duration-200"
          >
            <div className="flex items-center justify-between">
              <span>{game.home}</span>
              <strong>{game.score}</strong>
              <span>{game.away}</span>
            </div>

            <button
              onClick={() => removeFavorito(game.id)}
              className="mt-4 w-full bg-red-600 hover:bg-red-700 py-2 rounded-xl text-white transition"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}