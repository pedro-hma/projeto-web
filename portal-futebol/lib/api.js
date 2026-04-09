const API_KEY = "48ce4ede40msh6dada3796247d51p1f3096jsnf822eb348427";

const headers = {
  "X-RapidAPI-Key": API_KEY,
  "X-RapidAPI-Host": "soccer-data.p.rapidapi.com",
};

const BASE_URL = "https://soccer-data.p.rapidapi.com";

/* =========================
   🔴 JOGOS AO VIVO
========================= */
export const getLiveGames = async () => {
  try {
    const res = await fetch(`${BASE_URL}/daily-match-list-live`, {
      headers,
    });

    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("Erro live:", err);
    return [];
  }
};

/* =========================
   📅 JOGOS DO DIA
========================= */
export const getTodayGames = async () => {
  try {
    const res = await fetch(`${BASE_URL}/daily-match-list-all`, {
      headers,
    });

    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("Erro today:", err);
    return [];
  }
};

/* =========================
   🏆 LIGAS
========================= */
export const getLeagues = async () => {
  try {
    const res = await fetch(`${BASE_URL}/tournaments`, {
      headers,
    });

    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("Erro leagues:", err);
    return [];
  }
};

/* =========================
   📊 TABELA (STANDINGS)
========================= */
export const getStandings = async (tournamentId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/tournament/standings?tournamentId=${tournamentId}`,
      { headers }
    );

    const data = await res.json();

    // ⚠️ pode variar estrutura
    return data?.data?.standings || data?.data || [];
  } catch (err) {
    console.error("Erro standings:", err);
    return [];
  }
};

/* =========================
   🧑‍🤝‍🧑 TIMES
========================= */
export const getTeams = async (tournamentId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/teams?tournamentId=${tournamentId}`,
      { headers }
    );

    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("Erro teams:", err);
    return [];
  }
};

/* =========================
   🔍 JOGADORES (BUSCA)
========================= */
export const searchPlayers = async (name) => {
  try {
    const res = await fetch(
      `${BASE_URL}/players/search?name=${name}`,
      { headers }
    );

    const data = await res.json();
    return data?.data || [];
  } catch (err) {
    console.error("Erro players:", err);
    return [];
  }
};