"use client";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 fixed p-6">
      <h1 className="text-xl font-bold mb-8 text-yellow-400">⚽ Football Hub</h1>
      <nav className="flex flex-col gap-4">
        <Link href="/" className="hover:text-yellow-400">🏠 Home</Link>
        <Link href="/times" className="hover:text-yellow-400"> 🏆 Times</Link>
        <Link href="/jogadores" className="hover:text-yellow-400">🔎 Jogadores</Link>
        <Link href="/favoritos" className="hover:text-yellow-400"> ⭐ Favoritos </Link>
      </nav>
    </div>
  );
}