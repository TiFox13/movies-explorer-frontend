import React from 'react';

import './Portfolio.css';


function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <div className='portfolio__contaner'>
          <a className='link link_portfolio' href='https://github.com/TiFox13/how-to-learn' target='_blank'>Статичный сайт 
            <div className='portfolio__link-icon'></div>
          </a>
          <a className='link link_portfolio' href='https://tifox13.github.io/russian-travel/' target='_blank'>Адаптивный сайт
            <div className='portfolio__link-icon'></div>
          </a>
          <a className=' link link_portfolio' href='https://github.com/TiFox13/react-mesto-api-full-gha' target='_blank'>Одностраничное приложение
            <div className='portfolio__link-icon'></div>
          </a>
        </div>
     </section>
  )
}

export default Portfolio;