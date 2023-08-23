// A função fetchProducts busca produtos de uma API usando a URL fornecida. Ela retorna a lista de produtos em formato JSON

const API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.products;
};

