import React from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';

import './Login.css';

function Login({}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className='login'>
      <Link to='/'>
        <img className='logo' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
        <form className='form' name='login' method='post' >
          <h2 className="form__heading">Рады видеть!</h2>
          <label className = "form__input-field">E-mail
              <input value={email} onChange={handleChangeEmail} type="text" id ="email-input" className="form__item form__item_email" name="email"  required minLength="2" maxLength="200" />
              <span className = "form__item-error email-input-error"></span>
          </label>
          <label className = "form__input-field">Пароль
              <input value={password} onChange={handleChangePassword} type="text" id ="password-input" className="form__item form__item_password" name="password"  required minLength="4" maxLength="200" />
              <span className = "form__item-error password-input-error"></span>
          </label>
          <input type="submit"  className=" button login-save-button" value='Войти'  aria-label="Войти" />
        </form>
        <p className='login-paragraph'>Eще не зарегистрированы?  <Link to='/signup' className='link link_login'>Регистрация</Link></p>
      </div>
  )
}

export default Login;