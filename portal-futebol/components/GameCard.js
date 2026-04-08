import toast from "react-hot-toast";

function addFavorito(game) {
  const data = localStorage.getItem("favoritos");
  const favoritos = data ? JSON.parse(data) : [];

  const existe = favoritos.find((f) => f.id === game.id);

  if (existe) {
    toast("Já está nos favoritos ⭐");
    return;
  }

  const novo = [...favoritos, game];
  localStorage.setItem("favoritos", JSON.stringify(novo));

  toast.success("Adicionado aos favoritos ⭐");
}

export default function GameCard({ game }) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 hover:border-green-500 p-5 rounded-2xl shadow-lg transition duration-300 hover:scale-[1.02]">

      {/* Liga + status */}
      <div className="flex justify-between items-center text-xs text-zinc-400 uppercase">
        <span>{game.league}</span>
        <span className="bg-green-600 text-white px-2 py-1 rounded-md text-[10px]">
          {game.status || "LIVE"}
        </span>
      </div>

      {/* Times */}
      <div className="flex justify-between items-center mt-5">

  <div className="flex flex-col items-center w-1/3 text-center">
    <img src={game.homeLogo} className="w-10 h-10 object-contain mb-1" />
    <span className="text-sm">{game.home}</span>
  </div>

  <div className="text-xl font-bold text-green-400">
    {game.score}
  </div>

  <div className="flex flex-col items-center w-1/3 text-center">
    <img src={game.awayLogo} className="w-10 h-10 object-contain mb-1" />
    <span className="text-sm">{game.away}</span>
  </div>

</div>
      {/* Botão */}
      <button
        onClick={() => addFavorito(game)}
        className="mt-5 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-xl transition"
      >
        ⭐ Favoritar
      </button>

    </div>
  );
}