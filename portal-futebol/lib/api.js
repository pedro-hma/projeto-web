export async function getGames() {
  return [
    {
      id: 1,
      home: "Real Madrid",
      away: "Barcelona",
      score: "2-1",
      status: "LIVE",
    },
    {
      id: 2,
      home: "Liverpool",
      away: "City",
      score: "1-1",
      status: "HT",
    },
  ];
}
export async function getPlayers() {
  return [
    { id: 1, name: "Messi", team: "Inter Miami", goals: 10 },
    { id: 2, name: "Mbappé", team: "PSG", goals: 12 },
  ];
}