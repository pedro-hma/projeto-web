"use client";
import Navbar from "../../components/Navbar";
import { getFavoritos, removeFavorito } from "../../lib/favoritos";
import { useEffect, useState } from "react";

export default function Favoritos() {
  const [lista, setLista] = useState([]);
  useEffect(() => {
    setLista(getFavoritos());
  }, []);
  function handleRemove(id) {
    removeFavorito(id);
    setLista(getFavoritos());
  }
  return (
    <div style={{ background: "#020617", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ padding: "20px", color: "#fff" }}>
        <h1>❤️ Favoritos</h1>
        {lista.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <button onClick={() => handleRemove(item.id)}>
              Remover
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
const styles = {
  card: {
    background: "#1e293b",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "10px",
  },
};