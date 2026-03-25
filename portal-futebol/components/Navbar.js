// components/Navbar.js
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-900/80 backdrop-blur border-b border-gray-800 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-400">⚽ Portal Futebol</h1>

      <div className="flex gap-6 text-gray-300">
        <Link href="/" className="hover:text-green-400">Home</Link>
        <Link href="/times" className="hover:text-green-400">Times</Link>
        <Link href="/favoritos" className="hover:text-green-400">Favoritos</Link>
      </div>

    </nav>
  );
}