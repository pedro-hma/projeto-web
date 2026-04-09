"use client";
import { useEffect, useState } from "react";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };
    fetch();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">⭐ Favoritos</h1>

      {favorites.length === 0 && (
        <p className="text-gray-400">Nenhum favorito ainda</p>
      )}

      <div className="grid md:grid-cols-3 gap-4">
        {favorites.map((f) => (
          <div key={f.id} className="bg-gray-800 p-4 rounded-xl">
            {f.name}
          </div>
        ))}
      </div>
    </div>
  );
}