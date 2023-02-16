// import { saveCartID } from './helpers/cartFunctions';
import './style.css';
import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);
// const itemCart = document.querySelector('.cart__products');
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

window.onload = () => {
  productsApi();
};
