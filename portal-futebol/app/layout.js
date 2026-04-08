import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-zinc-950 text-white">
        <Navbar />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}