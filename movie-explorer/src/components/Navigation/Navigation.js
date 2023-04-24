import React from 'react';
import { Link } from 'react-router-dom'; 

import './Navigation.css'

function Navigation(props) {
  return (
    <nav className='navigation'>
        <div>
          <Link to='/movies' className='link'>
            <a className={`link link_nav ${props.linkMoviesActiveClass}`} href='#'>Фильмы</a>
          </Link>
          <Link to='/saved-movies' className='link'>
            <a className={`link link_nav ${props.linkActiveClass}`} href='#'>Сохранённые фильмы</a>
          </Link>
          
        </div>
        <div>
        <Link to='/profile' className='link'>
          <a className='link link_account' href='#'>Аккаунт
          <div className='navigation__icon'></div>
          </a>
        </Link>
          </div>
    </nav>
  )
}


export default Navigation;