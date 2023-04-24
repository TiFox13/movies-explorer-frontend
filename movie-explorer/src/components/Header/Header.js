import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';

import headerLogo from '../../images/headerLogo.svg';

function Header(props) {
  return (
    <header className={`header ${props.class}`} >
      <Link to='/'>
        <img className='logo' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
      {props.children}
    </header>
  )
}

export default Header;