import React, { useEffect } from 'react';
import './Form.css';

function Form(props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [formValid, setFormValid] = React.useState(false);



  const [nameError, setNameError] = React.useState('');
  const [name, setName] = React.useState('');

  useEffect(() => {
    if (nameError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [nameError]);

  
  function handleChangeName(e) {
    setName(e.target.value);
    if (2 <= e.target.value.length || e.target.value.length >= 30)  {
      console.log(e.target.value.length)
      setNameError('');
    } else {
      setNameError('Имя должно содержать больше 2 символов и менее 30')
    }
  }


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
    if (4 <= e.target.value.length)  {
      setPasswordError('');
    } else {
      setPasswordError('Пароль не может быть короче 4 символов')
    }
  }

  return (
    <form className='form' name={props.name} method='post' >
      <h2 className="form__heading">{props.title}</h2>
      <label className = {`form__input-field name-input-field ${props.hiddenClass}`}>Имя
          <input value={name} onChange={handleChangeName} type="text" id ="name-input" className="form__item form__item_name" name="name" required minLength="2" maxLength="40" />
          <span className = "form__item-error name-input-error">{nameError}</span>
        </label>
      <label className = "form__input-field">E-mail
          <input value={email} onChange={handleChangeEmail} type="text" id ="email-input" className="form__item form__item_email" name="email"  required minLength="2" maxLength="200" />
          <span className = "form__item-error email-input-error">{emailError}</span>
      </label>
      <label className = "form__input-field password-input-field">Пароль
          <input value={password} onChange={handleChangePassword} type="text" id ="password-input" className="form__item form__item_password" name="password"  required minLength="4" maxLength="200" />
          <span className = "form__item-error password-input-error">{passwordError}</span>
      </label>
      <input type="submit" disabled={!formValid} className={`button save-button ${props.buttonClass}`} value={props.buttonText}  aria-label={props.buttonText}/>
    </form>
  )
}

export default Form;