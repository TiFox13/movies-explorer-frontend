import React from 'react';

import './Portfolio.css';


function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__contaner'>
          <a className='link link_portfolio' href='#' target='_blank'>Статичный сайт 
            <div className='portfolio-link-icon'></div>
          </a>
          <a className='link link_portfolio' href='#' target='_blank'>Адаптивный сайт
            <div className='portfolio-link-icon'></div>
          </a>
          <a className=' link link_portfolio' href='#' target='_blank'>Одностраничное приложение
            <div className='portfolio-link-icon'></div>
          </a>
        </div>
     </section>
  )
}

export default Portfolio;