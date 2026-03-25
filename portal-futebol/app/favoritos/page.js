"use client";

import { useEffect, useState } from "react";
import Parse from "@/services/back4app";
export default function Favoritos() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const query = new Parse.Query("Favorites");
      const results = await query.find();

      const data = results.map(item => ({
        id: item.id,
        name: item.get("name"),
        logo: item.get("logo")
      }));

      setFavorites(data);
    }

    loadFavorites();
  }, []);

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">⭐ Favoritos</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {favorites.map(fav => (
          <div key={fav.id} className="bg-gray-900 p-4 rounded-lg text-center">

            <img src={fav.logo} className="w-16 mx-auto mb-2" />
            <p className="text-white">{fav.name}</p>

          </div>
        ))}
      </div>
    </div>
  );
}