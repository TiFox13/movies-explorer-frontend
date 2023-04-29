import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';
import Form from '../Form/Form';

import './Register.css';

function Register({handleSubmit}) {
  const nameIsRequire = true;


  const [userData, setUserData] = React.useState({
    name: '',
    email: '',
    password: '',
  })

  function handleChange(e){
    const {name, value} = e.target;

    setUserData({
      ...userData,
      [name]: value
    })
  }
  
  function submit() {
    let {name, email, password} = userData;
   handleSubmit(name, email, password)
  }


  return (
    <div className='register'>
      <Link to='/'>
        <img className='logo logo_register' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
      <Form name='register' title='Добро пожаловать!' buttonClass ='save-button_register' buttonText='Зарегистрироваться' handleSubmit={submit} userData={userData} handleChange={handleChange} isRequire={nameIsRequire}/>
      <p className='register-paragraph'>Уже зарегистрированы? <Link to='/signin' className='link link_register'>Войти</Link></p>
      </div>
  )
}

export default Register;
