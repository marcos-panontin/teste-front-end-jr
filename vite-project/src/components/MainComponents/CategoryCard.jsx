import React from 'react'

export default function CategoryCard({ category }) {
  return (
    <section>
      <img src={category.image} alt={category.category} />
      <section>{category.category}</section>
    </section>
  )
}
