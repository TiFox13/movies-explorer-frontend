import React from 'react';
import { useNavigate } from "react-router-dom"

import './Promo.css';

import promoImage from '../../images/promoImage.svg';

function Promo() {

  const navigate = useNavigate();
  const navigateMovies = (event) => {
    navigate("/movies");
  };

  return (
    <section className='promo'>
      <div className='promo__contaner'>
        <div className='promo__text-contaner'>
          <h1 className='title'>Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className='paragraph'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
        <img className='promo__image' alt='схематичное изображение планеты Земля из скоплений слова WEB' src={promoImage} />
      </div>
      <button className=' button promo__button' onClick={navigateMovies}>Узнать больше</button>
    </section>
  )
}

export default Promo;