export default function Skeleton() {
  return <div style={styles.skeleton}></div>;
}
const styles = {
  skeleton: {
    height: "60px",
    background: "#1e293b",
    borderRadius: "10px",
    marginBottom: "10px",
    animation: "pulse 1.5s infinite",
  },
};