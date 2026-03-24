"use client";
import { useEffect, useState } from "react";
import CardTime from "../components/CardTime";
import Loading from "../components/Loading";
export default function Times() {
  const [times, setTimes] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(team) {
  const exists = favorites.find(fav => fav.idTeam === team.idTeam);

  if (exists) {
    setFavorites(favorites.filter(fav => fav.idTeam !== team.idTeam));
  } else {
    setFavorites([...favorites, team]);
  }
}
  useEffect(() => {
    async function fetchTimes() {
  try {
    setLoading(true);
    const [resBR, resEN] = await Promise.all([
      fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Brazilian%20Serie%20A"),
      fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League")
    ]);
    const dataBR = await resBR.json();
    const dataEN = await resEN.json();
    const timesBR = dataBR.teams || [];
    const timesEN = dataEN.teams || [];
    const todosTimes = [...timesBR, ...timesEN];
    setTimes(todosTimes);
  } catch (error) {
    console.error("Erro ao buscar times:", error);
    setTimes([]);
  } finally {
    setLoading(false);
  }
}
    fetchTimes();
  }, []);
  const filtrados = times.filter((t) =>
    t.strTeam.toLowerCase().includes(busca.toLowerCase())
  );
  if (loading) return <Loading />;
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">⚽ Times</h1>
      <p className="text-gray-400 mb-6">
        Explore os clubes disponíveis e adicione aos favoritos
      </p>
      <input type="text" placeholder="🔎 Buscar time..."value={busca}onChange={(e) => setBusca(e.target.value)}className="w-full mb-6 p-3 rounded-xl bg-gray-900 border border-gray-800"/>
      <p className="text-sm text-gray-500 mb-4">{filtrados.length} times encontrados</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {times.map((team) => (
  <div
    key={team.idTeam} className="relative bg-gray-900 rounded-2xl p-5 shadow-lg hover:scale-105 hover:shadow-green-500/20 transition duration-300 cursor-pointer">
      {/* ⭐ Botão Favoritar */}
    <button onClick={() => toggleFavorite(team)}className={`absolute top-3 right-3 text-xl transition ${favorites.find(fav => fav.idTeam === team.idTeam)? "text-yellow-400 scale-110": "text-gray-500"}`}>⭐</button>
      {/* 🛡️ Logo */}
    <img src={team.strTeamBadge}alt={team.strTeam}className="w-20 h-20 mx-auto mb-3 drop-shadow-lg"/>
    {/* 📛 Nome */}
    <h2 className="text-center text-white font-bold text-lg">{team.strTeam}</h2>
    {/* 🌍 Liga */}
    <p className="text-center text-gray-400 text-sm">{team.strLeague}</p>
  </div>
))}
  ) : (
          <p className="text-gray-500">Nenhum time encontrado 😕</p>
        )
      </div>
    </div>
  );
}