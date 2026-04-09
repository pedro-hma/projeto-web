"use client";

import { useEffect, useState } from "react";
import { getLeagues, getStandings } from "@/lib/api";

export default function Tabela() {
  const [leagues, setLeagues] = useState([]);
  const [table, setTable] = useState([]);
  const [league, setLeague] = useState("");
  const [season, setSeason] = useState("2023");

  useEffect(() => {
    const fetch = async () => {
      const l = await getLeagues();
      setLeagues(l);
      if (l[0]) {
        setLeague(l[0].id);
        const t = await getStandings(l[0].id, season);
        setTable(t);
      }
    };
    fetch();
  }, []);

  const update = async (id, s) => {
    const t = await getStandings(id, s);
    setTable(t);
  };

  return (
    <div className="space-y-6">

      <div className="flex gap-2">
        <select onChange={(e) => {
          setLeague(e.target.value);
          update(e.target.value, season);
        }}>
          {leagues.map(l => (
            <option key={l.id} value={l.id}>{l.name}</option>
          ))}
        </select>

        <select onChange={(e) => {
          setSeason(e.target.value);
          update(league, e.target.value);
        }}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div className="card">
        {table.map((t, i) => (
          <div key={i} className="flex justify-between p-2 border-b">
            <span>{i + 1}. {t.name}</span>
            <span>{t.points}</span>
          </div>
        ))}
      </div>

    </div>
  );
}