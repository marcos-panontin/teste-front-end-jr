import React from 'react';
import SupermarketIcon from '../SVGIcons/SupermarketIcon';


export default function CategoryCard({ category }) {
  return (
    <section className='main__categories--category-card'>
      <div className="main__categories--image-container">
        <img src={category.imageURL} alt={category.category} />
        {/* <SupermarketIcon /> */}
      </div>
      <p className={category.category === 'Tecnologia' ? 'pink-text' : ''} >{category.category}</p>
    </section>
  )
}
