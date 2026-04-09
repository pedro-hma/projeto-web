"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getLiveGames } from "@/lib/api";
import GameCard from "@/components/GameCard";
import Skeleton from "@/components/Skeleton";

export default function Home() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const data = await getLiveGames();
      setGames(data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <div className="space-y-10">

      {/* MENU */}
      <div className="grid md:grid-cols-3 gap-4">
        <Link href="/times" className="card">🧑‍🤝‍🧑 Times</Link>
        <Link href="/jogadores" className="card">🔍 Jogadores</Link>
        <Link href="/tabela" className="card">🏆 Tabela</Link>
        <Link href="/favoritos" className="card">⭐ Favoritos</Link>
        <Link href="/ligas" className="card">🌍 Ligas</Link>
        <Link href="/ranking" className="card">📊 Ranking</Link>
      </div>

      {/* PREVIEW */}
      <div>
        <h2 className="text-2xl font-bold mb-4">🔴 Jogos</h2>

        {loading && <Skeleton />}

        <div className="grid md:grid-cols-3 gap-4">
          {games.slice(0, 6).map((g, i) => (
            <GameCard key={i} game={g} />
          ))}
        </div>
      </div>

    </div>
  );
}