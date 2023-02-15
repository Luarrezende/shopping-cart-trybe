import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqu
describe('Teste a função fetchProduct', () => {
  it('saber se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProduct', () => {
    fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', () => {
    const endpoint = "https://api.mercadolibre.com/items/MLB1405519561";
    fetchProduct('MLB1405519561')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1405519561");
  });

  it('Teste se o retorno da função fetchProduct com o argumento do produto "MLB1405519561" é uma estrutura de dados igual ao objeto produto que já está importado no arquivo.', async () => {
    const result = await fetchProduct('MLB1405519561')
    expect(result).toEqual(product);
  });

  it('Teste se, ao chamar a função fetchProduct sem argumento, retorna um erro com a mensagem: ID não informado.', async () => {
    const erro = new Error('ID não informado');
    await expect(fetchProduct()).rejects.toEqual(erro);
  })
});
