export function getFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}
export function addFavorito(item) {
  const lista = getFavoritos();
  lista.push(item);
  localStorage.setItem("favoritos", JSON.stringify(lista));
}
export function removeFavorito(id) {
  const lista = getFavoritos().filter((f) => f.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(lista));
}