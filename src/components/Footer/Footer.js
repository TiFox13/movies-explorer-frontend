import React from 'react';

import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__paragraph'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='footer__info'>
        <p className="copyright">&#169; 2023</p>
        <div className='footer__author'>
          <p className="author">Мозина Полина</p>
          <a className='link link_footer' href='https://github.com/TiFox13'>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;