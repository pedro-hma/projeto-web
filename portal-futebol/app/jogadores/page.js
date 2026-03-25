"use client";
import { useState } from "react";
import { searchPlayers } from "../../lib/api";

export default function Jogadores() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");

  async function handleSearch() {
    const data = await searchPlayers(search);
    setPlayers(data);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>🔎 Buscar Jogadores</h1>
      <input
        placeholder="Ex: Neymar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Buscar</button>
      {players.map((p) => (
        <div key={p.id} style={styles.card}>
          <img src={p.photo} width={60} />
          <p>{p.name}</p>
          <p>{p.team}</p>
        </div>
      ))}
    </div>
  );
}
const styles = {
  card: {
    background: "#fff",
    color: "#000",
    padding: "10px",
    marginTop: "10px",
  },
};