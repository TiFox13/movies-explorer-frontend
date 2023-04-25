import React from 'react';
import { Link } from 'react-router-dom'; 

import './Navigation.css'

function Navigation(props) {
  return (
     <div className="hamburger-menu">
    <input className="menu__toggle" type="checkbox"/>
    <label className="menu__btn" for="menu__toggle">
      <span></span>
    </label>
  
    <nav className='navigation'>
      <ul className='menu'>
        <Link to='/' className='link'>
            <li className={`link link_nav link-for-burger`} href='#'>Главная</li>
          </Link>
          <Link to='/movies' className='link'>
            <li className={`link link_nav ${props.linkMoviesActiveClass}`} href='#'>Фильмы</li>
          </Link>
          <Link to='/saved-movies' className='link'>
            <li className={`link link_nav ${props.linkActiveClass}`} href='#'>Сохранённые фильмы</li>
          </Link>

        <Link to='/profile' className='link'>
          <li className={`link link_account ${props.profileLinkActiveClass}`} href='#'>Аккаунт
          <div className='navigation__icon'></div>
          </li>
        </Link>
      </ul>
    
    </nav>
    </div>

  )
}


export default Navigation;