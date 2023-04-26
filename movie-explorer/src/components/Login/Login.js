import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';

import './Login.css';

function Login({}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);

  useEffect(() => {
    if (emailError ) {
      setFormValid(false)
    } else {
      setFormValid(true)

    }
  }, [emailError, passwordError]);


  function handleChangeEmail(e) {
    setEmail(e.target.value);
    const link =/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
    if (!link.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный формат E-mail')
    } else {
      setEmailError('')
    }
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (2 <= e.target.value.length)  {
      console.log(e.target.value.length)
      setPasswordError('');
    } else {
      setPasswordError('Пароль не может быть короче 2 символов')
    }
  }


  return (
    <div className='login'>
      <Link to='/'>
        <img className='logo logo_login' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
        <form className='form' name='login' method='post' >
          <h2 className="form__heading">Рады видеть!</h2>
          <label className = "form__input-field">E-mail
              <input value={email} onChange={handleChangeEmail} type="text" id ="email-input" className="form__item form__item_email" name="email"  required minLength="2" maxLength="200" />
              <span className = "form__item-error email-input-error">{emailError}</span>
          </label>
          <label className = "form__input-field">Пароль
              <input value={password} onChange={handleChangePassword} type="text" id ="password-input" className="form__item form__item_password" name="password"  required minLength="4" maxLength="200" />
              <span className = "form__item-error password-input-error">{passwordError}</span>
          </label>
          <input type="submit" disabled={!formValid} className=" button login-save-button" value='Войти'  aria-label="Войти" />
        </form>
        <p className='login-paragraph'>Eще не зарегистрированы?  <Link to='/signup' className='link link_login'>Регистрация</Link></p>
      </div>
  )
}

export default Login;