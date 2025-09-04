export const estado = {
  produtos: [],
  favoritos: JSON.parse(localStorage.getItem("favoritos")) || [],
  pagina: "produtos",
  filtroNome: "",
  filtroCategoria: "",
  filtroPrecoMin: null,
  filtroPrecoMax: null
};

export function salvarFavoritos() {
  localStorage.setItem("favoritos", JSON.stringify(estado.favoritos));
}
