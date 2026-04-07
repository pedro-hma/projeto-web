import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import { Toaster } from "react-hot-toast";

toast.success("⚽ Gol!");
toast.error("Erro ao carregar");

export const metadata = {
  title: "Portal de Futebol",
  description: "Projeto em Next.js",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ background: "#020617", color: "white" }}>
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}