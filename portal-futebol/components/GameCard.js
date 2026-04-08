import toast from "react-hot-toast";

function addFavorito(game) {
  const data = localStorage.getItem("favoritos");
  const favoritos = data ? JSON.parse(data) : [];

  const exists = favoritos.some((f) => f.id === game.id);

  if (exists) {
    toast("Já está nos favoritos ⭐");
    return;
  }

  const updated = [...favoritos, game];
  localStorage.setItem("favoritos", JSON.stringify(updated));

  toast.success("Adicionado ⭐");
}

export default function GameCard({ game }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 hover:border-green-500 rounded-2xl p-5 transition duration-300 hover:shadow-xl hover:scale-[1.02]">

      {/* Liga + status */}
      <div className="flex justify-between items-center text-xs text-zinc-400 uppercase tracking-wide">
        <span>{game.league}</span>
        <span className="bg-green-600 text-white px-2 py-1 rounded-md text-[10px]">
          {game.status || "LIVE"}
        </span>
      </div>

      {/* Conteúdo */}
      <div className="flex items-center justify-between mt-5">

        {/* Time casa */}
        <div className="flex flex-col items-center w-1/3">
          <img src={game.homeLogo} className="w-10 h-10 object-contain mb-2" />
          <span className="text-sm text-center">{game.home}</span>
        </div>

        {/* Placar */}
        <div className="text-2xl font-bold text-green-400">
          {game.score}
        </div>

        {/* Time visitante */}
        <div className="flex flex-col items-center w-1/3">
          <img src={game.awayLogo} className="w-10 h-10 object-contain mb-2" />
          <span className="text-sm text-center">{game.away}</span>
        </div>
      </div>

      {/* Botão */}
      <button onClick={() => addFavorito(game)}className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-xl transition">⭐ Favoritar</button>
    </div>
  );
}