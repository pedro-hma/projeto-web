// services/apiFootball.ts
export async function getTeams() {
  const res = await fetch("https://api-football-v1.p.rapidapi.com/v3/teams", {
    headers: {
      "X-RapidAPI-Key": "SUA_CHAVE",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
  })
  const data = await res.json()
  return data.response
}