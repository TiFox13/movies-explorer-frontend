import React from 'react';

import './AboutMe.css';

import promoImage from '../../images/promoImage.svg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='block__title'>Студент</h2>
      <div className='about-me__contaner'>
      <div className='about-me-contaner'>
        <div className='text-contaner'>
            <h3 className='about-me__subtitle'>Полина</h3>
            <p className='about-me__info'>Фронтенд-разработчик, 24 года</p>
            <p className='about-me__paragraph'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и&nbsp;дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур».
            После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        </div>
        <img className='about-me__photo' src={promoImage} alt='фото создателя сайта.'></img>
      </div>
    </div>
    </section>
  )
}

export default AboutMe;