import React from 'react';

import './AboutMe.css';

import authorPhoto from '../../images/authorPhoto.jpeg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='section__title about-me__title'>Студент</h2>
        <div className='about-me__text-contaner'>
          <h3 className='about-me__subtitle'>Полина</h3>
          <p className='about-me__info'>Фронтенд-разработчик, 24 года</p>
          <p className='about-me__paragraph'>Я живу в подмосковном городе Пушкино. Окончила РГУ им. А. Н. Косыгина 
            по специальности "Управление персоналом". Я люблю выращивать суккуленты, а еще занимаюсь танцами.
            На данный момент прохожу курс по веб-разработке в Я.Практикуме.</p>
          <a className='link link_git-in-profile' href='https://github.com/TiFox13' target='_blank'>Github</a>
        </div>
        <img className='about-me__photo' src={authorPhoto} alt='Фото создателя сайта.'></img>
    </section>
  )
}

export default AboutMe;