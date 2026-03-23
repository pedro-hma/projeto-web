"use client";

import { useEffect, useState } from "react";
import CardTime from "../../components/CardTime";
import Loading from "../../components/Loading";

export default function Times() {
  const [times, setTimes] = useState([]);
  const [busca, setBusca] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTimes() {
      try {
        const res = await fetch(
          "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=Brazilian%20Serie%20A"
        );

        const data = await res.json();

        console.log(data);

        setTimes(data.teams || []);
      } catch (error) {
        console.error(error);
        setTimes([]);
      } finally {
        setLoading(false);
      }
    }

    fetchTimes();
  }, []);

  const filtrados = times.filter((t) =>
    t.strTeam.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">⚽ Times</h1>
      <p className="text-gray-400 mb-6">
        Explore os clubes disponíveis e adicione aos favoritos
      </p>
      <input
        type="text"
        placeholder="🔎 Buscar time..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full mb-6 p-3 rounded-xl bg-gray-900 border border-gray-800"
      />
      <p className="text-sm text-gray-500 mb-4">
        {filtrados.length} times encontrados
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtrados.length > 0 ? (
          filtrados.map((t) => (
            <CardTime
              key={t.idTeam}
              nome={t.strTeam}
              logo={t.strTeamBadge}
              time={t}
            />
          ))
        ) : (
          <p className="text-gray-500">Nenhum time encontrado 😕</p>
        )}
      </div>
    </div>
  );
}