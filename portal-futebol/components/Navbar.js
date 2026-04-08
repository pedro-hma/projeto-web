import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-xl font-bold text-green-400">
        ⚽ Portal Futebol
      </h1>

      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-green-400 transition">
          Jogos
        </Link>
        <Link href="/favoritos" className="hover:text-green-400 transition">
          Favoritos
        </Link>
        <Link href="/times" className="hover:text-green-400 transition">
          Times
        </Link>
        <Link href="/jogadores" className="hover:text-green-400 transition">
          Jogadores
        </Link>
      </div>

    </nav>
  );
}