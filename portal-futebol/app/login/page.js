"use client";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  function handleLogin() {
    localStorage.setItem("user", user);
    alert("Login feito!");
  }
  return (
    <div style={styles.container}>
      <h1>🔐 Login</h1>
      <input
        placeholder="Digite seu nome"
        onChange={(e) => setUser(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
const styles = {
  container: {
    padding: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    display: "block",
  },
};