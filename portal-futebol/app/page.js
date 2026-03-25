import GameCard from "../components/GameCard";
import { getGames } from "../lib/api";

export default async function Home() {
  const games = await getGames();
  return (
    <div style={styles.container}>
      {/* HERO */}
      <div style={styles.hero}>
        <h1>⚽ Football Hub</h1>
        <p>Acompanhe jogos ao vivo e estatísticas em tempo real</p>
      </div>
      {/* SEÇÃO */}
      <h2 style={styles.title}>🔥 Jogos ao vivo</h2>
      <div style={styles.grid}>
        {games.map((g) => (
          <GameCard key={g.id} {...g} />
        ))}
      </div>
    </div>
  );
}
const styles = {
  container: {
    padding: "30px",
  },
  hero: {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "40px",
    borderRadius: "15px",
    marginBottom: "30px",
  },
  title: {
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gap: "15px",
  },
};