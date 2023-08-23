import React from 'react'

export default function Footer() {
  return (
    <footer>
      <section className='upper-footer'>
        <section className='upper-footer-left'>

          <h4 id="footer-about">Sobre nós</h4>
          <ul aria-labelledby="footer-about">
            <li>Conheça</li>
            <li>Como comprar</li>
            <li>Indicação e desconto</li>
          </ul>

          <ul>
            <li><img alt='Facebook Logo'></img></li>
            <li><img alt='Instagram Logo'></img></li>
            <li><img alt='Youtube Logo'></img></li>
          </ul>

          <h4 id="footer-info">Informações úteis</h4>
          <ul aria-labelledby="footer-info">
            <li>Fale conosco</li>
            <li>Dúvidas</li>
            <li>Prazos de entrega</li>
            <li>Formas de pagamento</li>
            <li>Política de privacidade</li>
            <li>Trocas e devoluções</li>
          </ul>

          <h4 id="footer-payment">Formas de pagamento</h4>
          <ul aria-labelledby="footer-payment">
           <li><img alt='Visa Logo'></img></li>
            <li><img alt='Elo Logo'></img></li>
            <li><img alt='Cielo Logo'></img></li>
            <li><img alt='Diners Club Logo'></img></li>
            <li><img alt='Diners Club Logo'></img></li>
            <li><img alt='Ifood Logo'></img></li>
            <li><img alt='Mastercard Logo'></img></li>
            <li><img alt='Pix Logo'></img></li>
            <li><img alt='Amex Logo'></img></li>
            <li><img alt='Ticket Logo'></img></li>
            <li><img alt='Sodexo Logo'></img></li>
          </ul>

        </section>
        <section className='upper-footer-right'>
        </section>

      </section>
      <section className='lower-footer'>
        <section className='lower-footer-left'>
          <p>Created by</p>
          <p>Powered by</p>
        </section>
        <section className='lower-footer-right'>
          <img></img>
          <img></img>
        </section>
      </section>
    </footer>
  )
}
