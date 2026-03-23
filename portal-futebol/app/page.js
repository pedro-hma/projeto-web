import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* HERO */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-400 p-10 rounded-2xl shadow-2xl border border-green-500/20">
        <h1 className="text-5xl font-extrabold mb-2"></h1>
        <p className="text-gray-100">
          Acompanhe times, jogadores e estatísticas em tempo real
        </p>
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
          <p className="text-gray-400">
            Explore jogadores e estatísticas
          </p>
        </div>
        <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
          <h2 className="text-xl font-bold mb-2">⭐ Favoritos</h2>
          <p className="text-gray-400">
            Gerencie seus favoritos
          </p>
        </div>

      </section>

    </div>
  );
}