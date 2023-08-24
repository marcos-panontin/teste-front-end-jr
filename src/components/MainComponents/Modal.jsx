import {useState} from 'react'

export default function Modal({ product, handleClick }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <section className='modal-overlay'>
    <dialog className='modal'>
      <img src={product.photo} alt={product.productName} />
      <section className='product-container'>
        <button className='close-modal-button' onClick={() => handleClick()}>X</button>
        <p className='product-name'>{product.productName}</p>
        <p className='product-price'>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
        <p className='product-description'>{product.descriptionShort}</p>
        <p className='product-details'>Veja mais detalhes do produto &gt;</p>
        <section className='incrementer-container'>
          <button className='incrementer-button' onClick={() => setQuantity(quantity >= 1 ? quantity - 1 : 0)}>-</button>
          <span>{quantity}</span>
          <button className='incrementer-button' onClick={() => setQuantity(quantity + 1)}>+</button>
        </section>
        <button className='product-button'>Comprar</button>
      </section>
    </dialog>
    </section>
  )
}
