import toast from "react-hot-toast";

async function loadGames() {
  try {
    const data = await getGames();
    setGames(data);
  } catch (err) {
    toast.error("Erro ao carregar jogos");
  }
}
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
      homeLogo: item.teams.home.logo,
      awayLogo: item.teams.away.logo,
      score: `${item.goals.home ?? 0}-${item.goals.away ?? 0}`,
      status: item.fixture.status.short,
    }));

  } catch (err) {
    console.error(err);
    throw err;
  }
}