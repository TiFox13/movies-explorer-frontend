import React from 'react';

import './Portfolio.css';

import link from '../../images/link.svg';

function Portfolio() {
  return (
    <section className='portfolio'>
      <a className='link link_git-in-portfolio' href='#' target='_blank'>Github</a>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__contaner'>
          <a className='link link_portfolio' href='#' target='_blank'>Статичный сайт 
            <img src={link}></img>
          </a>
          <a className='link link_portfolio' href='#' target='_blank'>Адаптивный сайт
            <img src={link}></img>
          </a>
          <a className=' link link_portfolio' href='#' target='_blank'>Одностраничное приложение
            <img src={link}></img>
          </a>
        </div>
     </section>
  )
}

export default Portfolio;