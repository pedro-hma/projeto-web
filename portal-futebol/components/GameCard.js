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
     <div className="bg-zinc-900 p-4 rounded hover:scale-105 transition duration-200">
        <h2 className="text-lg font-bold">{league}</h2>
        
        <div className="flex justify-between items-center mt-3">
          <span>{homeTeam}</span>
          <strong>{score}</strong>
          <span>{awayTeam}</span>
          </div>
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