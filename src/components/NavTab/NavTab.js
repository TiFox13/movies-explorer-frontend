import React from 'react';
import { useNavigate } from 'react-router-dom'

import './NavTab.css'

function NavTab() {


  const navigate = useNavigate();
  
  const navigateRegister = (event) => {
      navigate('/signup');
  };

  const navigateLogin = (event) => {
      navigate('/signin');
  };

  return (
    <nav className='nav-tab'>
      <button onClick={navigateRegister} className='button register-button'>Регистрация</button>
      <button onClick={navigateLogin} className='button login-button'>Войти</button>
    </nav>
  )
}

export default NavTab;