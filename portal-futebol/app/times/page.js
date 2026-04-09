"use client";
import { useEffect, useState } from "react";
import { getTeams } from "../../lib/api";
import { addFavoriteGame } from "@/lib/favoritos";

export default function Times() {
  const [teams, setTeams] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function load() {
      const data = await getTeams();
      setTeams(data || []);
    }
    load();
  }, []);
  function handleFav(team) {
    addFavorito({
      id: team.team.id,
      name: team.team.name,
      logo: team.team.logo,
    });
    alert("⭐ Time adicionado aos favoritos!");
  }
  const filtered = teams.filter((t) =>
    t.team.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div style={{ padding: "20px" }}>
      <h1>🏆 Times</h1>

      {/* 🔎 BUSCA */}
      <input placeholder="Buscar time..."value={search} onChange={(e) => setSearch(e.target.value)}style={styles.input}/>
      <div style={styles.grid}>
        {filtered.map((item) => (
          <div key={item.team.id} style={styles.card}>
            <img src={item.team.logo} width={60} />
            <button onClick={() => addFavorite(team)}>⭐ Favoritar</button>
            <h3>{item.team.name}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">{teams.map(team => (<GameCard key={team.id} team={team} />))}</div>
    </div>
  );
}
const styles = {
  input: {
    padding: "10px",
    marginBottom: "20px",
    width: "100%",
    borderRadius: "8px",
    border: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    color: "#000",
    padding: "20px",
    borderRadius: "12px",
    textAlign: "center",
  },
};