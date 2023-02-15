export const fetchProduct = async (id) => {
  if (!id) {
    throw new Error('ID não informado');
  }
  const idBusca = `https://api.mercadolibre.com/items/${id}`;
  const searchInApi = await fetch(idBusca);
  const result = await searchInApi.json();
  return result;
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
