import { buscarProdutos } from '../api/api.js';
import { criarHeader } from './header.js';
import { renderCabecalho } from './cabecalho.js';
import { App } from './app.js';
import { estado } from './estado.js';
import { inicializarTema } from './tema.js';

const root = document.getElementById("app");

document.body.prepend(criarHeader());

const btnModoNoturno = document.getElementById('btn-modo-noturno');
const icon = btnModoNoturno.querySelector('.icon');
inicializarTema(btnModoNoturno, icon);

async function iniciar() {
  root.innerHTML = "<p>Carregando...</p>";
  estado.produtos = await buscarProdutos();
  root.innerHTML = "";
  const cabecalho = renderCabecalho();
  root.appendChild(cabecalho);
  root.appendChild(App());
  const categorias = [...new Set(estado.produtos.map(p => p.category))];
  const selectCategoria = cabecalho.querySelector("#filtro-categoria");
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    selectCategoria.appendChild(option);
  });
}

iniciar();
