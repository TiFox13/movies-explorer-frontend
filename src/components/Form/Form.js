import React, { useEffect } from 'react';
import './Form.css';

function Form(props) {



  const [formValid, setFormValid] = React.useState(false);
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [nameError, setNameError] = React.useState('');


///////////////////////////////////////
// валидация формы
  useEffect(() => {
    if (emailError || passwordError || nameError ) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError, nameError]);

  function handleChangeName(e) {
    props.handleChange(e);
    if (2 <= e.target.value.length || e.target.value.length >= 30)  {

      setNameError('');
    } else {
      setNameError('Имя должно содержать больше 2 символов и менее 30')
    }
  }
  
  function handleChangeEmail(e) {
    props.handleChange(e);
    const link =/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;
    if (!link.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некорректный формат E-mail')
    } else {
      setEmailError('')
    }
  }

  function handleChangePassword(e) {
    props.handleChange(e);
    if (4 <= e.target.value.length)  {
      setPasswordError('');
    } else {
      setPasswordError('Пароль не может быть короче 4 символов')
    }
  }
///////////////////////////////////////

function submit(e){
  e.preventDefault();
  props.handleSubmit()
}

  return (
    <form className='form' name={props.name} method='post' onSubmit={submit} >
      <h2 className='form__heading'>{props.title}</h2>
      <label className = {`form__input-field name-input-field ${props.hiddenClass}`}>Имя
          <input value={props.userData.name} onChange={handleChangeName} type='text' id ='name-input' placeholder='Введите ваше имя (2 - 30 символов)' className='form__item form__item_name' name='name' required={props.isRequire} minLength='2' maxLength='40' />
          <span className = 'form__item-error name-input-error'>{nameError}</span>
        </label>
      <label className = 'form__input-field'>E-mail
          <input value={props.userData.email} onChange={handleChangeEmail} type='text' id ='email-input' placeholder='Введите ваш email' className='form__item form__item_email' name='email'  required minLength='2' maxLength='200' />
          <span className = 'form__item-error email-input-error'>{emailError}</span>
      </label>
      <label className = 'form__input-field password-input-field'>Пароль
          <input value={props.userData.password} onChange={handleChangePassword} type='text' id ='password-input' placeholder='Длина пароля не меньше 4 символов' className='form__item form__item_password' name='password'  required minLength='4' maxLength='200' />
          <span className = 'form__item-error password-input-error'>{passwordError}</span>
      </label>
      <input type='submit' disabled={!formValid} className={`button save-button ${props.buttonClass}`} value={props.buttonText}  aria-label={props.buttonText} />
    </form>
  )
}

export default Form;