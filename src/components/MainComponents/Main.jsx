import React from 'react'
import Categories from './Categories';
import Partners from './Partners';
import Products from './Products';
import RelatedProducts from './RelatedProducts';
import Brands from './Brands';

const relatedCategories = [
  'Celular', 'Acessórios', 'Tablets', 'Notebooks', 'Tvs'];

export default function Main() {
  return (
    <main className='main'>
      <Categories />
      <hr className='main__horizontal-line' />
      <h2 className='main__heading'>Produtos relacionados</h2>
      <nav className='main__nav'>
        {relatedCategories.map((product) => (
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
