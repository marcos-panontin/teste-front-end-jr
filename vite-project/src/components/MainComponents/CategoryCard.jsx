import React from 'react';

export default function CategoryCard({ category }) {
  return (
    <section className='main__categories--category-card'>
      <div className="main__categories--image-container">
        <img src={category.imageURL} alt={category.category} />
      </div>
      <p className={category.category === 'Tecnologia' ? 'pink-text' : ''} >{category.category}</p>
    </section>
  )
}
