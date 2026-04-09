"use client";

import { useEffect, useState } from "react";
import { getLeagues, getTeamsByLeague } from "@/lib/api";

export default function Times() {
  const [leagues, setLeagues] = useState([]);
  const [teams, setTeams] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const data = await getLeagues();
      setLeagues(data);
      if (data[0]) {
        setSelected(data[0].id);
        const t = await getTeamsByLeague(data[0].id);
        setTeams(t);
      }
    };
    fetch();
  }, []);

  const changeLeague = async (id) => {
    setSelected(id);
    const t = await getTeamsByLeague(id);
    setTeams(t);
  };

  return (
    <div className="space-y-6">

      <select
        onChange={(e) => changeLeague(e.target.value)}
        className="bg-gray-800 p-2 rounded"
      >
        {leagues.map((l) => (
          <option key={l.id} value={l.id}>
            {l.name}
          </option>
        ))}
      </select>

      <div className="grid md:grid-cols-4 gap-4">
        {teams.map((t, i) => (
          <div key={i} className="card">
            {t.name}
          </div>
        ))}
      </div>

    </div>
  );
}