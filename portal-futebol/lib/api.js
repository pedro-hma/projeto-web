const API_KEY = "77c27e2481a0307bcc6abce6927e1918";
export async function getGames() {
  try {
    const res = await fetch(
      "https://v3.football.api-sports.io/fixtures?league=71&season=2024",
      {
        headers: {
          "x-apisports-key": API_KEY,
        },
      }
    );
    const data = await res.json();

    if (!data.response) return [];

    return data.response.slice(0, 10).map((item) => ({
      id: item.fixture.id,
      home: item.teams.home.name,
      away: item.teams.away.name,
      homeLogo: item.teams.home.logo,
      awayLogo: item.teams.away.logo,
      score: `${item.goals.home ?? 0}-${item.goals.away ?? 0}`,
      status: item.fixture.status.short,
    }));
  } catch (err) {
    return [];
  }
}
export async function getTeams() {
  try {
    const res = await fetch(
      "https://v3.football.api-sports.io/teams?league=71&season=2024",
      {
        headers: {
          "x-apisports-key": API_KEY,
        },
      }
    );
    const data = await res.json();
    console.log("TEAMS:", data);

    if (!data || !data.response) {
      console.error("Erro API:", data);
      return [];
    }
    return data.response;
  } catch (err) {
    console.error("Erro fetch:", err);
    return [];
  }
}
export async function getPlayers() {
  const res = await fetch(
    "https://v3.football.api-sports.io/players?league=71&season=2025&page=1",
    {
      headers: {
        "x-apisports-key": API_KEY,
      },
      cache: "no-store",
    }
  );
  const data = await res.json();

  if (!data.response) return [];
  console.log(data);

  return data.response.map((item) => ({
    id: item.player.id,
    name: item.player.name,
    photo: item.player.photo,
    team: item.statistics[0]?.team?.name,
    goals: item.statistics[0]?.goals?.total || 0,
  }));
}
export async function searchPlayers(name) {
  try {
    const res = await fetch(
      `https://v3.football.api-sports.io/players?search=${name}&season=2024`,
      {
        headers: {
          "x-apisports-key": API_KEY,
        },
      }
    );
    const data = await res.json();
    console.log("PLAYERS:", data);

    if (!data || !data.response) return [];
    return data.response.map((item) => ({
      id: item.player.id,
      name: item.player.name,
      photo: item.player.photo,
      team: item.statistics?.[0]?.team?.name || "Sem time",
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
}
export async function getLeagues() {
  const res = await fetch(
    "https://v3.football.api-sports.io/leagues",
    {
      headers: {
        "x-apisports-key": API_KEY,
      },
    }
  );
  const data = await res.json();
  if (!data.response) return [];
  
  console.log(data); 
}
export async function getTeamsByLeague(leagueId) {
  try {
    const res = await fetch(
      `https://v3.football.api-sports.io/teams?league=${leagueId}&season=2024`,
      {
        headers: {
          "x-apisports-key": API_KEY,
        },
      }
    );
    const data = await res.json();

    if (!data.response) return [];
    return data.response;
  } catch {
    return [];
  }
}