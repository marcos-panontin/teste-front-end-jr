import shieldCheck from '../assets/icons/ShieldCheck.png';
import truck from '../assets/icons/Truck.png';
import creditCard from '../assets/icons/CreditCard.png';
import logo from '../assets/icons/Logo.svg';
import UserIcon from './SVGIcons/UserIcon';
import GroupIcon from './SVGIcons/GroupIcon';
import HeartIcon from './SVGIcons/HeartIcon';
import CartIcon from './SVGIcons/CartIcon';
import MagnifyingGlassIcon from './SVGIcons/MagnifyingGlassIcon';
import CrownIcon from './SVGIcons/CrownIcon';

export default function Header() {
  return (
    <header className='header'>

      <section className='header__upper'>
        <div className="header__upper--container">
          <img src={shieldCheck} alt="" />
          <p className='header__upper--paragraph'>Compra <span className='pink-text'>100% segura</span></p>
        </div>
        <div className="header__upper--container">
          <img src={truck} alt="" />
        <p className='header__upper--paragraph'><span className='pink-text'>Frete grátis</span> acima de R$200</p>
        </div>
        <div className="header__upper--container">
          <img src={creditCard} alt="" />
        <p className='header__upper--paragraph'><span className='pink-text'>Parcele</span> suas compras</p>
        </div>
      </section>

      <section className='header__search'>
        
        <img src={logo} alt='VTEX logo' className='header__search--logo'/>
        <input placeholder='O que você está buscando?'  className='header__search--input'></input>
        <MagnifyingGlassIcon/>

        <section className='header__search--buttonscontainer'>
          <button className='header__search--button'>
            <GroupIcon />
          </button>
          <button className='header__search--button'>
            <HeartIcon />
          </button>
          <button className='header__search--button'>
            <UserIcon />
          </button>
          <button className='header__search--button'>
            <CartIcon />
          </button>
        </section>
      </section>

      <nav className='header__nav'>
        <a className='header__nav--item'>TODAS CATEGORIAS</a>
        <a className='header__nav--item'>SUPERMERCADO</a>
        <a className='header__nav--item'>LIVROS</a>
        <a className='header__nav--item'>MODA</a>
        <a className='header__nav--item'>LANÇAMENTOS</a>
        <a className='header__nav--item'>OFERTAS DO DIA</a>
        <a className='header__nav--item header__nav--membership-item'>
          <CrownIcon />
          <span>ASSINATURA</span></a>
      </nav>
    </header>
  )
}
