"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>⚽ Football Hub</h2>
      <div style={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/times">Times</Link>
        <Link href="/jogadores">Jogadores</Link>
        <Link href="/favoritos">Favoritos</Link>
      </div>
    </nav>
  );
}
const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "#0f172a",
    color: "#fff",
  },
  logo: {
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    gap: "20px",
  },
};