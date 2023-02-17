import './style.css';
import { searchCep } from './helpers/cepFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';
import { fetchProductsList, fetchProduct } from './helpers/fetchFunctions';
import { createProductElement, createCartProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
const itemCart = document.querySelector('.cart__products');
const products = document.querySelector('.products');
// const total = document.querySelector('.total-price');
// const btnsProducts = document.getElementsByClassName('product__add');

const productsApi = async () => {
  const div = document.createElement('div');
  div.classList.add('loading');
  div.innerHTML = 'carregando...';
  products.appendChild(div);
  try {
    const sequencias = await fetchProductsList('computador');
    products.innerHTML = '';
    sequencias.forEach((sequencia) => {
      const productHtml = createProductElement(sequencia);
      products.appendChild(productHtml);
    });
  } catch (error) {
    const erro = document.createElement('div');
    erro.classList.add('error');
    erro.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
    products.innerHTML = '';
    products.appendChild(erro);
  }
};
const carts = getSavedCartIDs();
const it = carts.filter(async (id) => {
  const fetch = await fetchProduct(id);
  const element = await createCartProductElement(fetch);
  itemCart.appendChild(element);
});
console.log(it);

window.onload = () => {
  productsApi();
};
