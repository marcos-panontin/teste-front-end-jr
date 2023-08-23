import shieldCheck from '../assets/icons/ShieldCheck.png';
import truck from '../assets/icons/Truck.png';
import creditCard from '../assets/icons/CreditCard.png';
import logo from '../assets/icons/Logo.png';
import magnifyingGlass from '../assets/icons/MagnifyingGlass.png';

export default function Header() {
  return (
    <header>

      <section className='header_upper'>
        <div className="header_upper--container">
          <img src={shieldCheck} alt="" />
          <p className='header_upper--paragraph'>Compra <span className='pink-text'>100% segura</span></p>
        </div>
        <div className="header_upper--container">
          <img src={truck} alt="" />
        <p className='header_upper--paragraph'><span className='pink-text'>Frete grátis</span> acima de R$200</p>
        </div>
        <div className="header_upper--container">
          <img src={creditCard} alt="" />
        <p className='header_upper--paragraph'><span className='pink-text'>Parcele</span> suas compras</p>
        </div>
      </section>

      <section>
        
        <img src={logo} alt='VTEX logo'/>
        <input placeholder='O que você está buscando?'></input>
        <img src={magnifyingGlass} alt='VTEX logo'/>

        <section className='buttons-container'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </section>
      </section>

      <nav>
        <a>TODAS CATEGORIAS</a>
        <a>SUPERMERCADO</a>
        <a>LIVROS</a>
        <a>MODA</a>
        <a>LANÇAMENTOS</a>
        <a>OFERTAS DO DIA</a>
        <a>ASSINATURA</a>
      </nav>
    </header>
  )
}
