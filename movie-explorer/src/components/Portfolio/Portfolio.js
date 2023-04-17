import React from 'react';

import './Portfolio.css';

import link from '../../images/link.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__contaner'>
          <a className='portfolio__link' href='#' target='_blank'>Статичный сайт 
            <img src={link}></img>
          </a>
          <a className='portfolio__link' href='#' target='_blank'>Адаптивный сайт
            <img src={link}></img>
          </a>
          <a className='portfolio__link' href='#' target='_blank'>Одностраничное приложение
            <img src={link}></img>
          </a>
        </div>
     </section>
  )
}

export default Portfolio;