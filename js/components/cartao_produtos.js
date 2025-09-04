import { estado, salvarFavoritos } from "./estado.js";

export function CartaoProduto(produto) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${produto.image}" alt="${produto.title}">
    <h3>${produto.title}</h3>
    <p>R$ ${produto.price.toFixed(2)}</p>
    <button class="favorito">${estado.favoritos.includes(produto.id) ? "❤️" : "🤍"}</button>
  `;

  card.querySelector(".favorito").addEventListener("click", () => {
    if (estado.favoritos.includes(produto.id)) {
      estado.favoritos = estado.favoritos.filter(id => id !== produto.id);
    } else {
      estado.favoritos.push(produto.id);
    }
    salvarFavoritos();
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  return card;
}
