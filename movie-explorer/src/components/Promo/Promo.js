import React from 'react';

import './Promo.css';

import promoImage from '../../images/promoImage.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__contaner'>
        <div className='text-contaner'>
          <hi className='title'>Учебный проект студента факультета Веб-разработки.</hi>
          <p className='paragraph'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='promo__image' alt='схематичное изображение планеты земля из скоплений слова WEB' src={promoImage} />
      </div>
      <button className='promo__button'>Узнать больше</button>
    </section>
  )
}

export default Promo;