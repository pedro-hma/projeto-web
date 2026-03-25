"use client";

import { useEffect, useState } from "react";
import { getStandings } from "../../lib/api";

export default function Tabela() {
  const [table, setTable] = useState([]);
  useEffect(() => {
    async function load() {
      const data = await getStandings();
      setTable(data || []);
    }
    load();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>📊 Brasileirão - Tabela</h1>

      <table style={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Time</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>D</th>
          </tr>
        </thead>
        <tbody>
          {table.map((team) => (
            <tr key={team.team.id}>
              <td>{team.rank}</td>

              <td style={styles.team}>
                <img src={team.team.logo} width={25} />
                {team.team.name}
              </td>

              <td>{team.points}</td>
              <td>{team.all.played}</td>
              <td>{team.all.win}</td>
              <td>{team.all.lose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const styles = {
  table: {
    width: "100%",
    background: "#fff",
    color: "#000",
    borderRadius: "10px",
    overflow: "hidden",
  },

  team: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};