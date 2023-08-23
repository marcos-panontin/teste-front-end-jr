import { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/api';
import ProductCard from './ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [indexLimit, setIndexLimit] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);

  const productCount = products.length;
  const itemsToShow = 4;

  const handlePrevClick = () => {
    setIndexLimit((indexLimit - 1 + productCount) % productCount);
  };

  const handleNextClick = () => {
    setIndexLimit((indexLimit + 1) % productCount);
  };

  const visibleProducts = products.slice(indexLimit, indexLimit + itemsToShow);
  if (visibleProducts.length < itemsToShow) {
    visibleProducts.push(...products.slice(0, itemsToShow - visibleProducts.length));
  }

  return (
    <section className='main__products carousel-animation' style={{ transform: `translateX(270px)` }}>
      <button onClick={handlePrevClick}>PREV</button>
      {visibleProducts.map((product, index) => (
        <ProductCard key={`${product}${index}`} product={product} />
      ))}
      <button onClick={handleNextClick}>NEXT</button>
    </section>
  );
}
