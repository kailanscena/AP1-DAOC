import { estado } from './estado.js';

export function renderCabecalho() {
  const cabecalho = document.createElement("nav");
  cabecalho.id = "cabecalho";
  cabecalho.className = "cabecalho";
  cabecalho.innerHTML = `
    <input id="filtro-nome" placeholder="Buscar produto..." />
    <select id="filtro-categoria">
      <option value="">Todas categorias</option>
    </select>
    <input id="filtro-preco-min" type="number" placeholder="Preço mínimo" />
    <input id="filtro-preco-max" type="number" placeholder="Preço máximo" />
    <button id="btn-favoritos">Favoritos</button>
    <button id="btn-produtos">Produtos</button>
  `;

  cabecalho.querySelector("#btn-produtos").addEventListener("click", () => {
    estado.pagina = "produtos";
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  cabecalho.querySelector("#btn-favoritos").addEventListener("click", () => {
    estado.pagina = "favoritos";
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  cabecalho.querySelector("#filtro-nome").addEventListener("input", (e) => {
    estado.filtroNome = e.target.value.toLowerCase();
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  cabecalho.querySelector("#filtro-categoria").addEventListener("change", (e) => {
    estado.filtroCategoria = e.target.value;
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  cabecalho.querySelector("#filtro-preco-min").addEventListener("input", (e) => {
    estado.filtroPrecoMin = e.target.value ? parseFloat(e.target.value) : null;
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  cabecalho.querySelector("#filtro-preco-max").addEventListener("input", (e) => {
    estado.filtroPrecoMax = e.target.value ? parseFloat(e.target.value) : null;
    window.dispatchEvent(new Event("estadoAtualizado"));
  });

  return cabecalho;
}
