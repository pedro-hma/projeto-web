"use client";

import { useEffect, useState } from "react";

export default function Jogo({ params }) {
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const res = await fetch(
        `https://www.thesportsdb.com/api/v1/json/3/lookupevent.php?id=${params.id}`
      );
      const data = await res.json();
      setGame(data.events[0]);
    };

    fetchGame();
  }, []);

  if (!game) return <p>Carregando...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        {game.strEvent}
      </h1>

      <p>{game.strLeague}</p>
      <p>Status: {game.strStatus}</p>
      <p>Data: {game.dateEvent}</p>
    </div>
  );
}