"use client";
import { useEffect, useState } from "react";

export function useGames() {
  const [liveGames, setLiveGames] = useState([]);
  const [todayGames, setTodayGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchGames = async () => {
    try {
      const today = new Date().toISOString().split("T")[0];

      const [liveRes, todayRes] = await Promise.all([
        fetch("https://www.thesportsdb.com/api/v1/json/3/livescore.php?s=Soccer"),
        fetch(`https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=${today}&s=Soccer`)
      ]);

      const liveData = await liveRes.json();
      const todayData = await todayRes.json();

      setLiveGames(liveData.events || []);
      setTodayGames(todayData.events || []);

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGames();

    // 🔥 atualiza a cada 30s
    const interval = setInterval(fetchGames, 30000);

    return () => clearInterval(interval);
  }, []);

  return { liveGames, todayGames, loading };
}