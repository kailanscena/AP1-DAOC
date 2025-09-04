import { estado } from "./estado.js";
import { CartaoProduto } from "./cartao_produtos.js";

export function App() {
  const container = document.createElement("main");
  container.id = "conteudo";

  function render() {
    container.innerHTML = "";
    let produtosParaMostrar = estado.produtos;

    if (estado.pagina === "favoritos") {
      produtosParaMostrar = produtosParaMostrar.filter(p =>
        estado.favoritos.includes(p.id)
      );
    }

    if (estado.filtroNome) {
      produtosParaMostrar = produtosParaMostrar.filter(p =>
        p.title.toLowerCase().includes(estado.filtroNome)
      );
    }

    if (estado.filtroCategoria) {
      produtosParaMostrar = produtosParaMostrar.filter(p =>
        p.category === estado.filtroCategoria
      );
    }

    if (estado.filtroPrecoMin !== null) {
      produtosParaMostrar = produtosParaMostrar.filter(p =>
        p.price >= estado.filtroPrecoMin
      );
    }

    if (estado.filtroPrecoMax !== null) {
      produtosParaMostrar = produtosParaMostrar.filter(p =>
        p.price <= estado.filtroPrecoMax
      );
    }

    if (produtosParaMostrar.length === 0) {
      container.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }

    produtosParaMostrar.forEach(produto => {
      container.appendChild(CartaoProduto(produto));
    });
  }

  render();
  window.addEventListener("estadoAtualizado", render);

  return container;
}
