import React from 'react';

import './Navigation.css'

function Navigation() {
  return (
    <nav className='navigation'>
        <div>
          <a className='link link_nav' href='#'>Фильмы</a>
          <a className='link link_nav' href='#'>Сохранённые фильмы</a>
        </div>
        <div>
          <a className='link link_account' href='#'>Аккаунт
          <div className='navigation__icon'></div>
          </a>
          
        </div>
    </nav>
  )
}


export default Navigation;