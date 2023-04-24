import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

import headerLogo from '../../images/headerLogo.svg';

import './Register.css';

function Register({}) {


 
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const [formValid, setFormValid] = React.useState(false);
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');


  useEffect(() => {
    if (nameError || emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError, emailError, passwordError]);

  
  function handleChangeName(e) {
    setName(e.target.value);
    if (2 <= e.target.value.length || e.target.value.length >= 30)  {
      console.log(e.target.value.length)
      setNameError('');
    } else {
      setNameError('Имя должно содержать больше 2 символов и менее 30')
    }

  }
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
    <div className='register'>
      <Link to='/'>
        <img className='logo' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
      </Link>
      <form className='form' name='register' method='post' >
        <h2 className="form__heading">Добро пожаловать!</h2>
        <label className = "form__input-field">Имя
          <input value={name} onChange={handleChangeName} type="text" id ="name-input" className="form__item form__item_name" name="name" required minLength="2" maxLength="40" />
          <span className = "form__item-error name-input-error">{nameError}</span>
        </label>
        <label className = "form__input-field">E-mail
            <input value={email} onChange={handleChangeEmail} type="text" id ="email-input" className="form__item form__item_email" name="email"  required minLength="2" maxLength="200" />
            <span className = "form__item-error email-input-error">{emailError}</span>
        </label>
        <label className = "form__input-field">Пароль
            <input value={password} onChange={handleChangePassword} type="text" id ="password-input" className="form__item form__item_password" name="password"  required minLength="4" maxLength="200" />
            <span className = "form__item-error password-input-error">{passwordError}</span>
        </label>
        <input type="submit" disabled={!formValid} className=" button register-save-button" value='Зарегистрироваться'  aria-label="Зарегистрироваться" />
      </form>
      <p className='register-paragraph'>Уже зарегистрированы? <Link to='/signin' className='link link_register'>Войти</Link></p>
      </div>
  )
}

export default Register;
