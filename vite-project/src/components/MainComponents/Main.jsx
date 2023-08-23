import React from 'react'
import Categories from './Categories';
import Partners from './Partners';
import Products from './Products';
import RelatedProducts from './RelatedProducts';
import Brands from './Brands';

const relatedProducts = [
  'Celular', 'Acessários', 'Tablets', 'Notebooks', 'Tvs'];

export default function Main() {
  return (
    <main>
      <Categories />
      <h2>Produtos relacionados</h2>
      <nav>
        {relatedProducts.map((product) => (
          <a href="#" key={product}>{product}</a>
        ))}
        <a href="#">VER TODOS</a>
      </nav>
      <Products />
      <Partners />
      <RelatedProducts />
      <Brands />
    </main>
  )
}
