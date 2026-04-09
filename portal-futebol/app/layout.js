"use client";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-white">
        <div className="flex">
          <div className="flex-1 ml-64">
            <main className="p-6 mt-16">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  );
}