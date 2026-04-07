const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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

    if (!data.response) throw new Error("Erro na API");

    return data.response.slice(0, 10).map((item) => ({
      id: item.fixture.id,
      home: item.teams.home.name,
      away: item.teams.away.name,
      league: item.league.name,
      score: `${item.goals.home ?? 0}-${item.goals.away ?? 0}`,
    }));

  } catch (err) {
    console.error(err);
    throw err;
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

    if (!data || !data.response) return [];

    return data.response;

  } catch (err) {
    console.error(err);
    return [];
  }
}