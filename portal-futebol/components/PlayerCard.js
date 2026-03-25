"use client";
export default function PlayerCard({ name, team, goals, onFav }) {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p>{team}</p>
      <p>⚽ {goals} gols</p>

      <button onClick={onFav}>⭐ Favoritar</button>
    </div>
  );
}
const styles = {
  card: {
    background: "#1e293b",
    padding: "15px",
    borderRadius: "10px",
    color: "#fff",
    marginBottom: "10px",
  },
};