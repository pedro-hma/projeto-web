export default function GameCard({
  home,
  away,
  homeLogo,
  awayLogo,
  score,
  status,
}) {
  return (
    <div style={styles.card}>
      <div style={styles.team}>
        <img src={homeLogo} width={30} />
        <span>{home}</span>
      </div>
      <strong>{score}</strong>
      <div style={styles.team}>
        <img src={awayLogo} width={30} />
        <span>{away}</span>
      </div>

      <span style={styles.status}>{status}</span>
    </div>
  );
}
const styles = {
  card: {
    background: "#fff",
    color: "#000",
    padding: "15px",
    borderRadius: "12px",
    display: "grid",
    gridTemplateColumns: "1fr auto 1fr auto",
    alignItems: "center",
    gap: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
  team: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  status: {
    background: "red",
    color: "#fff",
    padding: "5px 8px",
    borderRadius: "6px",
    fontSize: "12px",
  },
};