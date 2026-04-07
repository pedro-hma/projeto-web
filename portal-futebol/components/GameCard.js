import toast from "react-hot-toast";

function addFavorito(game) {
  const data = localStorage.getItem("favoritos");
  const favoritos = data ? JSON.parse(data) : [];

  const novo = [...favoritos, game];

  localStorage.setItem("favoritos", JSON.stringify(novo));

  toast.success("Adicionado aos favoritos ⭐");
}

export default function GameCard({ game }) {
  return (
    <div className="bg-zinc-900 text-white p-5 rounded-2xl shadow-lg hover:scale-105 transition duration-200">
      
      {/* Liga */}
      <h2 className="text-xs text-zinc-400 uppercase tracking-wide">
        {game.league}
      </h2>

      {/* Times */}
      <div className="flex justify-between items-center mt-4 text-lg font-semibold">
        <span>{game.home}</span>
        <span className="text-green-400">{game.score}</span>
        <span>{game.away}</span>
      </div>

      {/* Botão */}
      <button
        onClick={() => addFavorito(game)}
        className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded-xl transition"
      >
        ⭐ Favoritar
      </button>

    </div>
  );
}