const API_KEY = "77c27e2481a0307bcc6abce6927e1918";
export async function getGames() {
  const res = await fetch(
    "https://v3.football.api-sports.io/fixtures?league=71&season=2023",
    {
      headers: {
        "x-apisports-key": API_KEY,
      },
      cache: "no-store",
    }
  );

  const data = await res.json();

  return data.response.map((item) => ({
    id: item.fixture.id,
    home: item.teams.home.name,
    away: item.teams.away.name,
    homeLogo: item.teams.home.logo,
    awayLogo: item.teams.away.logo,
    score: `${item.goals.home ?? 0}-${item.goals.away ?? 0}`,
    status: item.fixture.status.short,
  }));
}
// 🏆 TIMES
export async function getTeams() {
  const res = await fetch(
    "https://v3.football.api-sports.io/teams?league=71&season=2023",
    {
      headers: {
        "x-apisports-key": API_KEY,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();
  return data.response;
}
export async function getPlayers() {
  const res = await fetch(
    "https://v3.football.api-sports.io/players?league=71&season=2023&page=1",
    {
      headers: {
        "x-apisports-key": API_KEY,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data.response.map((item) => ({
    id: item.player.id,
    name: item.player.name,
    photo: item.player.photo,
    team: item.statistics[0]?.team?.name,
    goals: item.statistics[0]?.goals?.total || 0,
  }));
}