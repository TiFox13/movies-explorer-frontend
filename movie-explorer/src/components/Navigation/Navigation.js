import React from 'react';
import { Link } from 'react-router-dom'; 

import './Navigation.css'

function Navigation(props) {

const [menuOpened, setMenuOpened] = React.useState(false);
const [menuOpenedClass, setMenuOpenedClass] = React.useState('')
const [burgerOpenedClass, setBurgerOpenedClass] = React.useState('')

  function handlerBurgerClick() {
    if (!menuOpened) {
      setMenuOpened(true)
      setMenuOpenedClass('link-for-burger_opened')
      setBurgerOpenedClass('menu__burger_active')
    } else {
      setMenuOpened(false)
      setMenuOpenedClass('')
      setBurgerOpenedClass('')
    }
  }

  return (
    <>
    
     <div className="hamburger-menu">
    <input className="menu__toggle" type="checkbox"/>
    <button onClick={handlerBurgerClick} className={`button menu__burger ${burgerOpenedClass}`} for="menu__toggle">
    </button>
</div>
    <nav className={`navigation ${menuOpenedClass}`}>
      <div className='menu'>
        <Link to='/' className={`link  link-for-burger  ${menuOpenedClass}` }>
            <p className={`link link_nav`} >Главная</p>
          </Link>
          <Link to='/movies' className='link'>
            <p className={`link link_nav ${props.linkMoviesActiveClass}`}>Фильмы</p>
          </Link>
          <Link to='/saved-movies' className='link'>
            <p className={`link link_nav ${props.linkActiveClass}`}>Сохранённые фильмы</p>
          </Link>
          </div>
        <Link to='/profile' className='link'>
          <p className={`link link_account ${props.profileLinkActiveClass}`}>Аккаунт
          <div className='navigation__icon'></div>
          </p>
        </Link>
    </nav>
    
    </>
  )
}


export default Navigation;