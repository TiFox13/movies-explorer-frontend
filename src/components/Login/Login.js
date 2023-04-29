import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';
import Form from '../Form/Form';

import './Login.css';

function Login({}) {

  return (
    <div className='login'>
      <Link to='/'>
        <img className='logo logo_login' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>  
      <Form hiddenClass='name-input-field_hidden' name='login' title='Рады видеть!' buttonText='Войти' />
        <p className='login-paragraph'>Eще не зарегистрированы?  <Link to='/signup' className='link link_login'>Регистрация</Link></p>
      </div>
  )
}

export default Login;