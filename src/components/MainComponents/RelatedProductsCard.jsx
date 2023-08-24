import backgroundImage from '../../assets/backgroundImages/Partners.png';


export default function PartnerCard() {
  return (
    <section className='main__related--card' style={{
      // opacity: '0.8',
      backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.00), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`
    }}>
      <h2 className='main__related--heading2'>Produtos</h2>
      <p className='main__related--paragraph2'>Lorem ipsum dolor sit amet, consectetur</p>
      <button className='main__related--button'>Confira</button>
    </section>
  )
}
