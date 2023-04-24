import React from 'react';

function Form({ title, children }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <div className='register'>
        <img className='logo' alt='логотип в виде зеленой баранки.' src={headerLogo}></img>
        <form className='form' name='register' method='post' >
          <h2 className="form__heading">{title}</h2>
      
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
        <p className='register-paragraph'>Уже зарегистрированы? <a href='#' className='link link_register'>Войти</a></p>
      </div>
  )
}
export default Form;