const API_URL = "https://fakestoreapi.com/products";

export async function buscarProdutos() {
  const resposta = await fetch(API_URL);
  return await resposta.json();
}
