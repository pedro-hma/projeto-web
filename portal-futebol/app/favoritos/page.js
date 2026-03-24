"use client";
import { useState } from "react";
export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);
  function adicionar() {
    const novo = {
      id: Date.now(),
      nome: "Time Exemplo",
    };
    setFavoritos([...favoritos, novo]);
  }
  function remover(id) {
    setFavoritos(favoritos.filter((f) => f.id !== id));
  }
  return (
    <div>
      <h1 className="text-2xl mb-4">Favoritos ⭐</h1>
      <button onClick={adicionar}className="bg-green-500 p-2 rounded mb-4" >Adicionar exemplo </button>
      {favoritos.map((f) => (
        <div key={f.id}className="bg-gray-800 p-3 mb-2 flex justify-between">
          <span>{f.nome}</span>
          <button onClick={() => remover(f.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}