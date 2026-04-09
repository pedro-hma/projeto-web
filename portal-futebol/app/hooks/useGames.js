"use client";

import { useEffect, useState } from "react";

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/livescore.php?s=Soccer"
        );

        const data = await res.json();
        setGames(data.events || []);
      } catch (error) {
        console.error("Erro ao buscar jogos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return { games, loading };
}