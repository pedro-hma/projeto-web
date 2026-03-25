"use client"
import { useEffect, useState } from "react"
export default function Times() {
  const [teams, setTeams] = useState([])
  useEffect(() => {
    fetch("https://api-football-v1.p.rapidapi.com/v3/teams?league=71&season=2023", {
      headers: {
        "X-RapidAPI-Key": "SUA_CHAVE",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
      }
    })
      .then(res => res.json())
      .then(data => setTeams(data.response))
  }, [])
  return (
    <div>
      <h1>Times</h1>
      {teams.map((item: any) => (
        <div key={item.team.id}>
          <img src={item.team.logo} width={50} />
          <p>{item.team.name}</p>

          <button onClick={() => addFavorite(item.team)}>
            ⭐ Favoritar
          </button>
        </div>
      ))}
    </div>
  )
}