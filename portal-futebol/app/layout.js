import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-900 text-white">
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}