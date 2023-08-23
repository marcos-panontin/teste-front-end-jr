import React from 'react'
import RelatedProductsCard from './RelatedProductsCard';

export default function RelatedProducts() {
  return (
    <section className='main__related'>
      <hr className='main__horizontal-line' />
      <h2 className='main__related--heading'>Produtos relacionados</h2>
      <p className='main__related--paragraph'>Ver todos</p>
      <div className="cards-container">
        <RelatedProductsCard/>
        <RelatedProductsCard/>
      </div>
    </section>
  )
}
