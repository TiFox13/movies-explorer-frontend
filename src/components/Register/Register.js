import React from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';
import Form from '../Form/Form';

import './Register.css';

function Register({handleSubmit, isLoading}) {

  const nameIsRequire = true;

  function submit( values) {
    handleSubmit(values.name, values.email, values.password)
  }

  return (
    <div className='register'>
      <Link to='/'>
        <img className='logo logo_register' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
      <Form name='register' title='Добро пожаловать!' buttonClass ='save-button_register' buttonText='Зарегистрироваться' handleSubmit={submit} isRequire={nameIsRequire} isLoading={isLoading} />
      <p className='register-paragraph'>Уже зарегистрированы? <Link to='/signin' className='link link_register'>Войти</Link></p>
      </div>
  )
}

export default Register;
