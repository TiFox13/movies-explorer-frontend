import React from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';

import './Register.css';

function Register({}) {

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className='register'>
      <Link to='/'>
        <img className='logo' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
      <form className='form' name='register' method='post' >
        <h2 className="form__heading">Добро пожаловать!</h2>
        <label className = "form__input-field">Имя
          <input value={name} onChange={handleChangeName} type="text" id ="name-input" className="form__item form__item_name" name="name" required minLength="2" maxLength="40" />
          <span className = "form__item-error name-input-error"></span>
        </label>
        <label className = "form__input-field">E-mail
            <input value={email} onChange={handleChangeEmail} type="text" id ="email-input" className="form__item form__item_email" name="email"  required minLength="2" maxLength="200" />
            <span className = "form__item-error email-input-error"></span>
        </label>
        <label className = "form__input-field">Пароль
            <input value={password} onChange={handleChangePassword} type="text" id ="password-input" className="form__item form__item_password" name="password"  required minLength="4" maxLength="200" />
            <span className = "form__item-error password-input-error"></span>
        </label>
        <input type="submit"  className=" button register-save-button" value='Зарегистрироваться'  aria-label="Зарегистрироваться" />
      </form>
      <p className='register-paragraph'>Уже зарегистрированы? <Link to='/signin' className='link link_register'>Войти</Link></p>
      </div>
  )
}

export default Register;
