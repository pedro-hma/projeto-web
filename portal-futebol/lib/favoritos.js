export function getFavoritos() {
  return JSON.parse(localStorage.getItem("favoritos")) || [];
}
export function addFavorito(item) {
  const lista = getFavoritos();
  const exists = lista.find((f) => f.id === item.id);
  if (exists) return;
  lista.push(item);
  localStorage.setItem("favoritos", JSON.stringify(lista));
}
export function removeFavorito(id) {
  const lista = getFavoritos().filter((f) => f.id !== id);
  localStorage.setItem("favoritos", JSON.stringify(lista));
}