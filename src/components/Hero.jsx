import React from 'react';
import backgroundImage from '../assets/backgroundImages/backgroundImage.png';

export default function Hero() {
  return (
    <section className='hero' style={{
      // opacity: '0.8',
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 96.04%), url(${backgroundImage})`
    }}>
      <div className='hero__container'>
        <h1 className='hero__container--heading'>Venha conhecer nossas promoções</h1>
        <h2 className='hero__container--subheading'>50% Off nos produtos</h2>
        <button className='hero__container--button'>Ver produto</button>
      </div>
    </section>
  );
}
