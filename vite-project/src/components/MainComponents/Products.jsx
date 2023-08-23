import { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/api';
import ProductCard from './ProductCard';


export default function Products() {
    useEffect(() => {
    async function fetchData() {
      const products = await fetchProducts();
      setProducts(products)
    }
      fetchData();     

    }, [])
  
  const [products, setProducts] = useState([])
  
  return (
    <section className='main__products'>
      {products.filter((product, index) => index < 4).map((product, index) => (
        <ProductCard key={`${product}${index}`} product={product} />
      ))}
    </section>
  )
}
