import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';

import headerLogo from '../../images/headerLogo.svg';

function Header(props) {
  return (
    <header className={`header ${props.class}`} >
      <Link to='/' className='logo' />
      {props.children}
    </header>
  )
}

export default Header;