// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
export const metadata = {
  title: "Portal de Futebol",
  description: "Projeto em Next.js",
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-950 text-white">
        <Navbar />
        <main className="p-6">
          {children}
        </main>
      </body>
    </html>
  );
}