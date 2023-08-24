import { useState, useEffect } from 'react';
import Modal from './Modal';

export default function ProductCard({ product }) {

  const [openModal, setOpenModal] = useState(false);

   useEffect(() => {
    if (openModal) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'auto'; // Restore scrolling when component unmounts
    };
  }, [openModal]);
  
  return (
    <section className='main__products--product-card'>
      <img src={product.photo} alt={product.productName} />
      <p className='product-name'>{product.productName}</p>
      <p className='former-price'>{ (product.price * 1.10).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</p>
      <p className='current-price'>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p className='installment-price'>ou 2x de {(product.price / 2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} sem juros</p>
      <p className='shipping'>Frete grátis</p>
      <button onClick={() => setOpenModal(true)}>Comprar</button>
      
      {openModal && (
        <Modal product={product} handleClick={() => setOpenModal(false)}/>
      )}
    </section>
  )
}
