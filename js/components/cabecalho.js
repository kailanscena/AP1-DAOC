import { estado } from "./estado.js";

export function Cabecalho() {
  const header = document.createElement("header");

  header.innerHTML = `
    <nav>
      <button id="btn-produtos">Produtos</button>
      <button id="btn-favoritos">Favoritos</button>
      <input type="text" id="filtro-nome" placeholder="Buscar por nome...">
      <select id="filtro-categoria">
        <option value="">Todas categorias</option>
      </select>
      <input type="number" id="filtro-preco-min" placeholder="Preço min">
      <input type="number" id="filtro-preco-max" placeholder="Preço max">
    </nav>
  `;

  header.querySelector("#btn-produtos").addEventListener("click", () => {
    estado.pagina = "produtos";
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  header.querySelector("#btn-favoritos").addEventListener("click", () => {
    estado.pagina = "favoritos";
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  header.querySelector("#filtro-nome").addEventListener("input", (e) => {
    estado.filtroNome = e.target.value.toLowerCase();
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  header.querySelector("#filtro-categoria").addEventListener("change", (e) => {
    estado.filtroCategoria = e.target.value;
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  header.querySelector("#filtro-preco-min").addEventListener("input", (e) => {
    estado.filtroPrecoMin = e.target.value ? parseFloat(e.target.value) : null;
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  header.querySelector("#filtro-preco-max").addEventListener("input", (e) => {
    estado.filtroPrecoMax = e.target.value ? parseFloat(e.target.value) : null;
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  return header;
}
