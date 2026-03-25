"use client";
import { useEffect, useState } from "react";
import Parse from "../services/back4app";
import CardTime from "../components/CardTime";
import Loading from "../components/Loading";

export default function Times() {
  const [times, setTimes] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
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

        setTimes([...timesBR, ...timesEN]);
      } catch (error) {
        console.error("Erro ao buscar times:", error);
        setTimes([]);
      } finally {
        setLoading(false);
      }
    }
    fetchTimes();
  }, []);
  async function saveFavorite(team) {
    const query = new Parse.Query("Favorites");
    query.equalTo("teamId", team.idTeam);

    const existing = await query.first();
    if (existing) {
      alert("Já está nos favoritos!");
      return;
    }
    const Favorite = Parse.Object.extend("Favorites");
    const favorite = new Favorite();

    favorite.set("teamId", team.idTeam);
    favorite.set("name", team.strTeam);
    favorite.set("logo", team.strTeamBadge);
    try {
      await favorite.save();
      setFavorites((prev) => [...prev, team]);
      alert("⭐ Favoritado!");
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  }
  const filtrados = times.filter((t) =>
    t.strTeam.toLowerCase().includes(busca.toLowerCase())
  );
  if (loading) return <Loading />;
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-2">⚽ Times</h1>
      <p className="text-gray-400 mb-6">Explore os clubes disponíveis e adicione aos favoritos</p>
      {/* 🔎 BUSCA */}
      <input type="text"placeholder="🔎 Buscar time..."value={busca}onChange={(e) => setBusca(e.target.value)}className="w-full mb-6 p-3 rounded-xl bg-gray-900 border border-gray-800" />
      <p className="text-sm text-gray-500 mb-4">{filtrados.length} times encontrados</p>
      {/* 📦 GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtrados.length > 0 ? (
          filtrados.map((team) => (
            <CardTime key={team.idTeam}team={team}onFavorite={saveFavorite}isFavorite={favorites.some((fav) => fav.idTeam === team.idTeam)}/>))
          ) : (
          <p className="text-gray-500">
            Nenhum time encontrado 😕
          </p>
        )}
      </div>
    </div>
  );
}