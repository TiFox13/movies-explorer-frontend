import React from 'react';

import { useForm } from '../../hooks/useForm';
import { VALIDATION } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

import './Form.css';

function Form(props) {

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useForm();

function submit(e){
  e.preventDefault();
  props.handleSubmit(values)
}

  return (
    <form className='form' isValid={isValid}  name={props.name} method='post' onSubmit={submit} >
      <h2 className='form__heading'>{props.title}</h2>
      <label className = {`form__input-field name-input-field ${props.hiddenClass}`}>Имя
          <input value={values.name} onChange={handleChange} type='text' id ='name-input' placeholder='Введите ваше имя (2 - 30 символов)' className='form__item form__item_name' name='name' required={props.isRequire} minLength='2' maxLength='30' disabled={props.isLoading} />
          <span className = 'form__item-error name-input-error'>{errors.name}</span>
        </label>
      <label className = 'form__input-field'>E-mail
          <input pattern={VALIDATION.email.pattern} value={values.email} onChange={handleChange} type='text' id ='email-input' placeholder='Введите ваш email' className='form__item form__item_email' name='email'  required minLength='2' maxLength='200' disabled={props.isLoading} />
          <span className = 'form__item-error email-input-error'>{errors.email}</span>
      </label>
      <label className = 'form__input-field password-input-field'>Пароль
          <input value={values.password} onChange={handleChange} type='password' id ='password-input' placeholder='Длина пароля не меньше 4 символов' className='form__item form__item_password' name='password'  required minLength='4' maxLength='200' disabled={props.isLoading} />
          <span className = 'form__item-error password-input-error'>{errors.password}</span>
      </label>
      {props.isLoading ? <Preloader /> : ''}
      <input type='submit' disabled={!isValid || props.isLoading} className={`button save-button ${props.buttonClass}`} value={props.buttonText}  aria-label={props.buttonText} />
    </form>
  )
}

export default Form;