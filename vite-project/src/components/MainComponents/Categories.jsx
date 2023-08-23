import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    category: 'Tecnologia',
    image: 'https://via.placeholder.com/200x200?text=Tecnologia'
  },
  {
    category: 'Supermercado',
    image: 'https://via.placeholder.com/200x200?text=Casa+e+cozinha'
  },
  {
    category: 'Bebidas',
    image: 'https://via.placeholder.com/200x200?text=Livros'
  },
  {
    category: 'Ferramentas',
    image: 'https://via.placeholder.com/200x200?text=Moda'
  },
  {
    category: 'Saúde',
    image: 'https://via.placeholder.com/200x200?text=Games'
  },
  {
    category: 'Esportes e Fitness',
    image: 'https://via.placeholder.com/200x200?text=Esportes'
  },
  {
    category: 'Moda',
    image: 'https://via.placeholder.com/200x200?text=Música'
  }
];

export default function Categories() {
  return (
    <section>
      {categories.map((category, index) => (
        <CategoryCard key={index} category={category} />
      ))
        }
    </section>
  )
}
