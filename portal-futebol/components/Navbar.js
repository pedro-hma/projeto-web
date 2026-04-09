import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 shadow">
  <h1 className="text-xl font-bold text-yellow-400">⚽ Football Hub</h1>
  <div className="flex gap-4">
    <a href="/times" className="hover:text-yellow-400">Times</a>
    <a href="/jogadores" className="hover:text-yellow-400">Jogadores</a>
    <a href="/favoritos" className="hover:text-yellow-400">Favoritos</a>
  </div>
</nav>
  );
}