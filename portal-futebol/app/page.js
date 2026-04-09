"use client";

import { useGames } from "@/app/hooks/useGames";
import GameCard from "@/components/GameCard";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const { liveGames, loading } = useGames();
  const [league, setLeague] = useState("all");

  const filteredGames =
    league === "all"
      ? liveGames
      : liveGames.filter((g) => g.strLeague === league);
  return (
    <div className="p-6 space-y-10">
      {/* 🔥 HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-slate-900 p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2">⚽ Football Hub</h1>
        <p className="text-gray-300"> Acompanhe jogos ao vivo, jogadores e muito mais</p>
      </section>
      {/* 🔗 NAVEGAÇÃO */}
      <section>
        <h2 className="text-xl font-bold mb-4">Explorar</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/times">
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition cursor-pointer">🏆
              <p className="mt-2 font-semibold">Times</p>
            </div>
          </Link>
          <Link href="/jogadores">
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition cursor-pointer">🔎
              <p className="mt-2 font-semibold">Jogadores</p>
            </div>
          </Link>
          <Link href="/tabela">
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition cursor-pointer">📊
              <p className="mt-2 font-semibold">Tabela</p>
            </div>
          </Link>

          <Link href="/favoritos">
            <div className="bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition cursor-pointer">⭐
              <p className="mt-2 font-semibold">Favoritos</p>
            </div>
          </Link>
        </div>
      </section>
      {/* 🎯 FILTRO */}
      <section>
        <select onChange={(e) => setLeague(e.target.value)}className="bg-gray-800 p-2 rounded mb-4">
          <option value="all">Todas</option>
          <option value="English Premier League">Premier League</option>
          <option value="Spanish La Liga">La Liga</option>
        </select>
      </section>
      {/* 🔴 JOGOS */}
      <section>
        <h2 className="text-2xl font-bold mb-4">🔴 Ao vivo</h2>
        {loading && <p>Carregando...</p>}
        {filteredGames.length === 0 && (
          <p className="text-gray-400">Nenhum jogo ao vivo agora 😴</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.idEvent} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
}