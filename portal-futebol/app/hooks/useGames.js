import { useEffect, useState } from "react";
import { getGames } from "@/lib/api";

export function useGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadGames() {
    setLoading(true);
    const data = await getGames();
    setGames(data);
    setLoading(false);
  }

  useEffect(() => {
    loadGames();
  }, []);

  return { games, loading };
}