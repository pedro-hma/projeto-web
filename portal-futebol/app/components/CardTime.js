"use client";
export default function CardTime({ nome, logo }) {
  async function salvar() {
    await addFavorito({ nome, logo });
    alert("⭐ Adicionado aos favoritos!");
  }
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow hover:scale-105 transition">
     {logo ? (
  <img src={logo}alt={nome}className="w-20 h-20 object-contain mx-auto"/>
) : (
  <div className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full mx-auto text-xl font-bold">
    {nome.charAt(0)}
  </div>
)}
      <h2 className="text-center mt-2">{nome}</h2>
      <button onClick={salvar}className="mt-3 w-full bg-green-500 hover:bg-green-600 p-2 rounded">⭐ Favoritar</button>
    </div>
  );
}