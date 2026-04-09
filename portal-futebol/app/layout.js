import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="bg-gradient-to-br from-gray-950 to-gray-900 text-white">
        <Navbar />
        <main className="p-6 max-w-7xl mx-auto">{children}</main>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}