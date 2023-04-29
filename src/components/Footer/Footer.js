import React from 'react';

import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__paragraph'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='footer__info'>
        <p className='copyright'>&#169; {new Date().getFullYear()}</p>
        <div className='footer__links'>
          <a className='link link_footer' href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a>
          <a className='link link_footer' href='https://github.com/TiFox13' target='_blank'>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;