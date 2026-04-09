"use client";

import { useEffect, useState } from "react";
import { getFavorites, deleteFavorite } from "@/lib/favoritos";

export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    loadFavorites();
  }, []);

  const loadFavorites = async () => {
    const data = await getFavorites();
    setFavorites(data);
  };

  const handleDelete = async (id) => {
    await deleteFavorite(id);
    loadFavorites();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">⭐ Favoritos</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map(fav => (
          <div key={fav.id} className="bg-white p-4 rounded-xl shadow">
            <img src={fav.image} className="w-16 mx-auto" />
            <p className="text-center mt-2">{fav.name}</p>

            <button
              onClick={() => handleDelete(fav.id)}
              className="mt-3 w-full bg-red-500 text-white py-1 rounded"
            >
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}