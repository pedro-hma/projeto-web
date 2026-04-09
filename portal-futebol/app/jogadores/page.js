"use client";

import { useState } from "react";
import { searchPlayers } from "@/lib/api";

export default function Jogadores() {
  const [players, setPlayers] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const handleSearch = async () => {
    const data = await searchPlayers(query);
    setPlayers(data);
  };

  return (
    <div className="space-y-6">

      <div className="flex gap-2">
        <input
          className="input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Messi..."
        />
        <button onClick={handleSearch} className="btn">
          Buscar
        </button>
      </div>

      {/* LISTA */}
      <div className="grid md:grid-cols-3 gap-4">
        {players.map((p, i) => (
          <div
            key={i}
            onClick={() => setSelected(p)}
            className="card cursor-pointer"
          >
            {p.name}
          </div>
        ))}
      </div>

      {/* PERFIL */}
      {selected && (
        <div className="card">
          <h2 className="text-xl font-bold">{selected.name}</h2>
          <p>{selected.team}</p>
          <p>{selected.position}</p>
        </div>
      )}
    </div>
  );
}