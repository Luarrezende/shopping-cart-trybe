export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (element) => {
  if (element === undefined) {
    throw new Error('Termo de busca não informado');
  }
  const api = `https://api.mercadolibre.com/sites/MLB/search?q=${element}`;
  const searchInApi = await fetch(api);
  const result = await searchInApi.json();
  return result.results;
};
