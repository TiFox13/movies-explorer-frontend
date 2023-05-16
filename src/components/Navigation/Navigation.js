import React from 'react';
import { Link } from 'react-router-dom'; 

import './Navigation.css'

function Navigation(props) {

  const [menuOpened, setMenuOpened] = React.useState(false);
  const [linkOpenedClass, setLinkOpenedClass] = React.useState('')
  const [navigationOpenedClass, setNavigationOpenedClass] = React.useState('')
  const [burgerOpenedClass, setBurgerOpenedClass] = React.useState('')

  function handlerBurgerClick() {
    if (!menuOpened) {
      setMenuOpened(true);
      setLinkOpenedClass('link-for-burger_opened');
      setNavigationOpenedClass('navigation_opened')
      setBurgerOpenedClass('menu__burger_active');
    } else {
      setMenuOpened(false)
      setLinkOpenedClass('')
      setBurgerOpenedClass('')
      setNavigationOpenedClass('')
    }
  }

  return (
    <>
      <input className='menu__toggle' type='checkbox'/>
      <button onClick={handlerBurgerClick} className={`button menu__burger ${burgerOpenedClass}`} 
        for='menu__toggle'></button>
      <nav className={`navigation ${navigationOpenedClass}`}>
      <div className='menu'>
        <Link to='/' className={`link  menu__link-for-burger   ${linkOpenedClass}` }>
            <p className={`link menu__link`} >Главная</p>
          </Link>
          <Link to='/movies' className='link'>
            <p className={`link menu__link ${props.linkMoviesActiveClass}`}>Фильмы</p>
          </Link>
          <Link to='/saved-movies' className='link'>
            <p className={`link menu__link ${props.linkActiveClass}`}>Сохранённые фильмы</p>
          </Link>
          </div>
        <Link to='/profile' className={`link link_account ${props.profileLinkActiveClass}`}>
          Аккаунт
          <div className='navigation__icon'></div>
        </Link>
    </nav>
    </>
  )
}


export default Navigation;