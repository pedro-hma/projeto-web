// components/CardTime.js
"use client";
import { useState } from "react";
export default function CardTime({ nome, logo }) {
  const [favorito, setFavorito] = useState(false);
  const [times, setTimes] = useState([]);
  function toggleFavorito() {
    setFavorito(!favorito);
  }
  async function salvarFavorito(time) {
  try {
    await fetch("https://SEU_BACK4APP/classes/Favoritos", {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": "APP_ID",
        "X-Parse-REST-API-Key": "REST_KEY",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: time.team.name,
        logo: time.team.logo,
      }),
    });
    alert("Salvo nos favoritos!");
  } catch (error) {
    console.error(error);
  }
}
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 shadow-lg hover:shadow-green-500/10 hover:scale-105 transition duration-300 cursor-pointer">
      {/* Logo */}
      <div className="flex justify-center">
      <img src={logo}alt={nome}className="w-20 h-20 object-contain mx-auto drop-shadow-lg"/>
      </div>
      {/* Nome */}
      <h2 className="text-center text-lg font-semibold mt-3">
        {nome}
      </h2>
      {/* Botão */}
      <button onClick={() => salvarFavorito(time)}className="mt-4 w-full bg-green-500 hover:bg-green-600 hover:scale-105 transition p-2 rounded-lg">⭐ Salvar</button>
      <button onClick={toggleFavorito}className={`mt-4 w-full p-2 rounded-lg font-semibold transition${favorito? "bg-yellow-400 text-black": "bg-green-500 hover:bg-green-600"}`}>{favorito ? "⭐ Favorito" : "Adicionar aos Favoritos"}</button>
    </div>
  );
}