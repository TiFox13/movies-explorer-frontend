import React from 'react';

import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__paragraph'>Учебный проект Яндекс.Практикум х BeatFilm.</p>

      <div className='blok'>
        <p className="copyright">&#169; 2023</p>
        <div className='blok-author'>
          <p className="author">Мозина Полина</p>
          <a className='link' href='#'>Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;