import React from 'react';
import { Link } from 'react-router-dom'; 

import './Header.css';

function Header(props) {
  return (
    <header className={`header ${props.class}`} >
      <Link to='/' className='logo' />
      {props.children}
    </header>
  )
}

export default Header;