import React from 'react'

export default function ProductCard({product}) {
  return (
    <section>
      <img src={product.photo} alt={product.productName} />
      <p>{product.productName}</p>
      <p className='former-price'>R${ (product.price * 1.10).toFixed(2) }</p>
      <p className='current-price'>R${product.price}</p>
      <p className='installment-price'>ou 2x de {product.price / 2} sem juros</p>
      <p>Frete grátis</p>
      <button>Comprar</button>
    </section>
  )
}
