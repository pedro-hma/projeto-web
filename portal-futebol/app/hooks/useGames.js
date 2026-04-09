"use client";
import { useEffect, useState } from "react";

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchGames = async () => {
    try {
      const res = await fetch(
        "https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id=4328"
      );
      const data = await res.json();
      setGames(data.events || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchGames();
  }, []);
  return { games, loading };
}