"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">⚽ Football Hub</h1>
        <p className="text-gray-400">
          Acompanhe jogos, tabelas e estatísticas
        </p>
      </div>

      {/* GRID DE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* AO VIVO */}
        <Link href="/live">
          <div className="bg-red-600/20 border border-red-500 p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h2 className="text-xl font-bold">🔴 Ao vivo</h2>
            <p className="text-sm text-gray-300">
              Jogos em tempo real
            </p>
          </div>
        </Link>

        {/* JOGOS */}
        <Link href="/jogos">
          <div className="bg-blue-600/20 border border-blue-500 p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h2 className="text-xl font-bold">📅 Jogos</h2>
            <p className="text-sm text-gray-300">
              Partidas do dia
            </p>
          </div>
        </Link>

        {/* TABELA */}
        <Link href="/tabela">
          <div className="bg-green-600/20 border border-green-500 p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h2 className="text-xl font-bold">🏆 Tabela</h2>
            <p className="text-sm text-gray-300">
              Classificação das ligas
            </p>
          </div>
        </Link>

        {/* TIMES */}
        <Link href="/times">
          <div className="bg-yellow-600/20 border border-yellow-500 p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h2 className="text-xl font-bold">🧑‍🤝‍🧑 Times</h2>
            <p className="text-sm text-gray-300">
              Clubes e elencos
            </p>
          </div>
        </Link>

        {/* JOGADORES */}
        <Link href="/jogadores">
          <div className="bg-purple-600/20 border border-purple-500 p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h2 className="text-xl font-bold">🔍 Jogadores</h2>
            <p className="text-sm text-gray-300">
              Buscar jogadores
            </p>
          </div>
        </Link>

        {/* FAVORITOS */}
        <Link href="/favoritos">
          <div className="bg-pink-600/20 border border-pink-500 p-6 rounded-xl hover:scale-105 transition cursor-pointer">
            <h2 className="text-xl font-bold">⭐ Favoritos</h2>
            <p className="text-sm text-gray-300">
              Seus times e jogos
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}