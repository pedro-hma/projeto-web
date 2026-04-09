"use client";

import { useEffect, useState } from "react";
import { getStandings } from "@/lib/api";
import { motion } from "framer-motion";

const leagues = [
  { name: "Premier League", id: "4328" },
  { name: "La Liga", id: "4335" },
  { name: "Serie A", id: "4332" },
];
export default function Tabela() {
  const [table, setTable] = useState([]);
  const [league, setLeague] = useState("4328");
  useEffect(() => {
  const fetchTable = async () => {
    const data = await getStandings(league);

    console.log("Quantidade de times:", data.length);

    setTable(data);
  };

  fetchTable();
}, [league]);
  return (
    <div className="p-6">
      {/* 🔽 DROPDOWN */}
      <select onChange={(e) => setLeague(e.target.value)}className="bg-gray-800 p-2 rounded mb-6">
        {leagues.map((l) => (
          <option key={l.id} value={l.id}>
            {l.name}
          </option>
        ))}
      </select>
      <div className="overflow-x-auto">
        <table className="w-full text-sm bg-gray-800 rounded-xl overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th>#</th>
              <th>Time</th>
              <th>Pts</th>
              <th>J</th>
              <th>V</th>
              <th>E</th>
              <th>D</th>
            </tr>
          </thead>
          <tbody>
            {table.map((team) => {
              const rank = Number(team.intRank);
              let bg = "";
              if (rank <= 4) bg = "bg-green-900";
              else if (rank >= 18) bg = "bg-red-900";
              else if (rank <= 6) bg = "bg-blue-900";
              return (
                <tr key={team.idTeam}className={`${bg} text-center border-b border-gray-800 hover:bg-gray-800 transition`}>
                  <td>{rank}</td>
                  <td className="flex items-center gap-2 p-2">
                    <img src={team.strTeamBadge} className="w-6" />
                    {team.strTeam}
                  </td>
                  <td>{team.intPoints}</td>
                  <td>{team.intPlayed}</td>
                  <td>{team.intWin}</td>
                  <td>{team.intDraw}</td>
                  <td>{team.intLoss}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }}animate={{ opacity: 1, y: 0 }}>{/* tabela */}</motion.div>
    </div>
  );
}