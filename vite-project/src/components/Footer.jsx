import FooterLogos from '../assets/icons/FooterLogos.png';
import Facebook from '../assets/icons/Facebook.png';
import Instagram from '../assets/icons/Instagram.png';
import Youtube from '../assets/icons/Youtube.png';
import Payment from '../assets/icons/Payment.png';
  
export default function Footer() {
  return (
    <footer>
      <section className='upper-footer'>
        <section className='upper-footer-left'>

          <section className='about-section'>
          <h4 id="footer-about" className='footer-about'>Sobre nós</h4>
          <ul aria-labelledby="footer-about">
            <li>Conheça</li>
            <li>Como comprar</li>
            <li>Indicação e desconto</li>
          </ul>
          <ul className='footer-social'>
            <li><img src={Facebook} alt='Facebook Logo'></img></li>
            <li><img src={Instagram} alt='Instagram Logo'></img></li>
              <li><img src={Youtube} alt='Youtube Logo'></img></li>
          </ul>
          </section>

          <section className='footer-info'>
          <h4 id="footer-info">Informações úteis</h4>
          <ul aria-labelledby="footer-info">
            <li>Fale conosco</li>
            <li>Dúvidas</li>
            <li>Prazos de entrega</li>
            <li>Formas de pagamento</li>
            <li>Política de privacidade</li>
            <li>Trocas e devoluções</li>
          </ul>
          </section>

          <section>
          <h4 id="footer-payment">Formas de pagamento</h4>
            <img src
            ={Payment} alt='Payment Methods'></img>
          </section>


        </section>

        <section className='upper-footer-right'>
          <h4>CADASTRE-SE E RECEBA NOSSAS <span>NOVIDADES E PROMOÇÕES</span></h4>
          <p>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <section className='email-container'>
            <input type="text" placeholder='SEU E-MAIL' />
            <button>OK</button>
          </section>
        </section>

      </section>
      <section className='lower-footer'>
        <section className='lower-footer-left'>
          <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br /> 
É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
        </section>
        <section className='lower-footer-right'>
          <img src={FooterLogos}></img>
          <img></img>
        </section>
      </section>
    </footer>
  )
}
