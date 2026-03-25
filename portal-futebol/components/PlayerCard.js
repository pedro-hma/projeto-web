export default function PlayerCard({ name, team, goals, photo }) {
  return (
    <div style={styles.card}>
      <img src={photo} style={styles.img} />
      <h3>{name}</h3>
      <p>{team}</p>
      <p>⚽ {goals}</p>
    </div>
  );
}
const styles = {
  card: {
    background: "#fff",
    color: "#000",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
  },
  img: {
    width: "80px",
    borderRadius: "50%",
  },
};