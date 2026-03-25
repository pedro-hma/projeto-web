"use client";

import Link from "next/link";
import Parse from "./services/back4app";
export default function Home() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="hover:scale-105 transition transform cursor-pointer">
        <h1>Acompanhe o futebol em tempo real</h1>
        <p>Times, jogadores e estatísticas atualizadas</p>
        <button>Ver Times</button>
      </section>
      {/* CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/times">
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 hover:bg-gray-800 transition shadow-lg cursor-pointer border border-gray-800">
          <h2 className="text-xl font-bold mb-2">⚽ Times</h2><p className="text-gray-400">Veja todos os times e informações</p>
          </div>
          </Link>
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">👤 Jogadores</h2>
          <Link href="/jogadores">
          <p className="text-gray-400"> Explore jogadores e estatísticas</p>
          </Link>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">⭐ Favoritos</h2>
          <Link href="/favoritos">
          <p className="text-gray-400">Gerencie seus favoritos</p>
          </Link>
          <div className="grid">
            <div className="card">
              <h3>Jogos ao vivo</h3>
              <p>Flamengo 2 x 1 Palmeiras</p>
              <span>75'</span>
              </div>
              </div>
        </div>
      </section>
    </div>
  );
}