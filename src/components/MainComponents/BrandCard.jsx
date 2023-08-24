import logo from '../../assets/icons/Logo.svg'

export default function BrandCard() {
  return (
    <section className='main__brands--logocontainer'>
      <img className='main__brands--logo' src={logo}></img>
    </section>
  )
}
