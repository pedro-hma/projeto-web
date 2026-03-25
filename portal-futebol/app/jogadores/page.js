"use client";
import { useState } from "react";
import { searchPlayers } from "../../lib/api";

export default function Jogadores() {
  const [players, setPlayers] = useState([]);
  const [search, setSearch] = useState("");
  async function handleSearch() {
    if (!search) return;
    const data = await searchPlayers(search);
    setPlayers(data);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h1>🔎 Buscar Jogadores</h1>
      <div style={styles.searchBox}>
        <input placeholder="Digite o nome do jogador"value={search}nChange={(e) => setSearch(e.target.value)}/>
        <button onClick={handleSearch}>Buscar</button>
        </div>
      {players.length === 0 && <p>Nenhum jogador encontrado</p>}
      <div style={styles.grid}>
        {players.map((p) => (
          <div key={p.id} style={styles.card}>
            <img src={p.photo} width={70} />
            <h3>{p.name}</h3>
            <p>{p.team}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
const styles = {
  searchBox: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  card: {
    background: "#fff",
    color: "#000",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  },
};