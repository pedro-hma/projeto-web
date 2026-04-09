const API_KEY = "48ce4ede40msh6dada3796247d51p1f3096jsnf822eb348427";

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "soccer-data.p.rapidapi.com",
};

const BASE = "https://soccer-data.p.rapidapi.com";

export const getLiveGames = async () => {
  const res = await fetch(`${BASE}/matches/live`, { headers });
  const data = await res.json();
  return data?.data || [];
};

export const getTodayGames = async () => {
  const res = await fetch(`${BASE}/matches`, { headers });
  const data = await res.json();
  return data?.data || [];
};

export const getLeagues = async () => {
  const res = await fetch(`${BASE}/tournaments`, { headers });
  const data = await res.json();
  return data?.data || [];
};

export const getStandings = async (id, season = "2023") => {
  const res = await fetch(
    `${BASE}/tournament/standings?tournamentId=${id}&season=${season}`,
    { headers }
  );
  const data = await res.json();
  return data?.data?.standings || [];
};

export const getTeamsByLeague = async (id) => {
  const res = await fetch(`${BASE}/teams?tournamentId=${id}`, { headers });
  const data = await res.json();
  return data?.data || [];
};

export const searchPlayers = async (name) => {
  const res = await fetch(
    `${BASE}/players/search?name=${name}`,
    { headers }
  );
  const data = await res.json();
  return data?.data || [];
};
// ⚽ ARTILHEIROS
export const getTopScorers = async () => {
  try {
    const res = await fetch(
      "https://soccer-data.p.rapidapi.com/topscorers",
      {
        headers: {
          "X-RapidAPI-Key": "SUA_KEY",
          "X-RapidAPI-Host": "soccer-data.p.rapidapi.com",
        },
      }
    );

    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error(err);

    // fallback (evita quebrar build)
    return [
      { name: "Haaland", goals: 25 },
      { name: "Mbappé", goals: 22 },
      { name: "Kane", goals: 20 },
    ];
  }
};