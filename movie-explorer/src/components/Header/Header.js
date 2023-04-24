import React from 'react';

import './Header.css';

import headerLogo from '../../images/headerLogo.svg';

function Header(props) {
  return (
    <header className={`header ${props.class}`} >
      <img className='logo' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      {props.children}
    </header>
  )
}

export default Header;