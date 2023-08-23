import React from 'react';
import backgroundImage from '../../assets/backgroundImages/Partners.png';


export default function PartnerCard() {
  return (
    <section className='main__partners--card' style={{
      // opacity: '0.8',
      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`
    }}>
      <h2 className='main__partners--heading'>Parceiros</h2>
      <p className='main__partners--paragraph'>Lorem ipsum dolor sit amet, consectetur</p>
      <button className='main__partners--button'>Confira</button>
    </section>
  )
}
