import React from 'react';
import BrandCard from './BrandCard';

export default function Brands() {
  return (
    <section className='main__brands'>
      <h2 className='main__brands--heading'>Navegue por marcas</h2>
      <section className='main__brands--container'>
        <BrandCard/>
        <BrandCard/>
        <BrandCard/>
        <BrandCard/>
        <BrandCard/>
      </section>
    </section>
  )
}
