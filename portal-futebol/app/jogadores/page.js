"use client";

import Navbar from "../../components/Navbar";
import PlayerCard from "../../components/PlayerCard";
import { getPlayers } from "../../lib/api";
import { addFavorito } from "../../lib/favoritos";
import { useEffect, useState } from "react";

export default function Jogadores() {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    async function load() {
      const data = await getPlayers();
      setPlayers(data);
    }
    load();
  }, []);
  function handleFav(player) {
    addFavorito(player);
    alert("Adicionado aos favoritos!");
  }
  return (
    <div style={{ background: "#020617", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "20px", color: "#fff" }}>
        <h1>⭐ Jogadores</h1>
        {players.map((p) => (
          <PlayerCard
            key={p.id}
            {...p}
            onFav={() => handleFav(p)}
          />
        ))}
      </div>
    </div>
  );
}