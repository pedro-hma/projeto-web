export default function GameCard({ home, away, score, status }) {
  return (
    <div style={styles.card}>
      <div style={styles.info}>
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
    background: "#ffffff",
    color: "#000",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 6px 15px rgba(0,0,0,0.25)",
  },
  info: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    fontWeight: "bold",
  },
  status: {
    background: "#ef4444",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: "8px",
    fontSize: "12px",
  },
};