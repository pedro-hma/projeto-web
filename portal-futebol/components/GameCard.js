export default function GameCard({ home, away, score, status }) {
  return (
    <div style={styles.card}>
      <div style={styles.teams}>
        <span>{home}</span>
        <strong>{score}</strong>
        <span>{away}</span>
      </div>
      <div style={styles.status}>{status}</div>
    </div>
  );
}
const styles = {
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    transition: "0.3s",
  },
  teams: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  status: {
    background: "#ef4444",
    padding: "5px 10px",
    borderRadius: "8px",
    fontSize: "12px",
  },
};