import { useState, useEffect } from 'react';
import { fetchProducts } from '../../services/api';
import ProductCard from './ProductCard';
import PrevIcon from '../SVGIcons/PrevIcon';
import NextIcon from '../SVGIcons/NextIcon';


export default function Products() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    fetchData();
  }, []);

  const productCount = products.length;
  const visibleProducts = 4;

  const handlePrevClick = () => {
    if (index === 0) {
      setIndex(productCount - (visibleProducts + 1));
      return;
    }
    setIndex(index - 1);
  };

  const handleNextClick = () => {
    if (index === productCount - (visibleProducts + 1)) {
      setIndex(0);
      return;
    }
    setIndex(index + 1);
    console.log(index);
  };

  return (
    <section className="main__wrapper">
      <section className='main__products'>
        <section className='container' style={{
          left: `-${335 * index}px`}}>

        {products.map((product, index) => (
          <ProductCard key={`${product}${index}`} product={product} />
          ))}
          </section>
      </section>
      <section className='carousel-buttons-container'>
            <button className='carousel-button prev' onClick={handlePrevClick}>
              <PrevIcon />
            </button>
        <button className='carousel-button next' onClick={handleNextClick}>
          <NextIcon />
        </button>
      </section>
        </section>
  );
}
