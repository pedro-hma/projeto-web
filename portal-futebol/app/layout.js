"use client";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-white">

        <div className="flex">

          {/* SIDEBAR */}
          <Sidebar />

          {/* CONTEÚDO */}
          <div className="flex-1 ml-64">

            <Navbar />

            <main className="p-6 mt-16">
              {children}
            </main>

          </div>
        </div>

        <Toaster position="top-right" />
      </body>
    </html>
  );
}