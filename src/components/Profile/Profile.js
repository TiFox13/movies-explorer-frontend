import React from 'react';
import './Profile.css';

import {CurrentUserContext} from '../../contexts/CurrentUserContext.js'

import { useForm } from '../../hooks/useForm';
import { VALIDATION } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Profile({onUpdate, signOut, isLoading}) {

  const {
    values,
    setValues,
    handleChange,
    errors,
    isValid,
    resetForm
  } = useForm();

  const [formActive, setFormActive] = React.useState(false)

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setValues(currentUser)
  }, []); 

  function handlePatchClick() {
    if (formActive === false) {
     return setFormActive(true)
    }
}

function handleSubmit(e) {
  e.preventDefault();
  onUpdate({name: values.name, email: values.email})
  setFormActive(false)
  resetForm({currentUser})
}

  return (
    <section className='profile'>
      <form className='profile-form' name='profile-form' method='post' isValid={isValid} > 
        <h2 className=' profile__heading'>{`Привет, ${currentUser.name}!`}</h2>
        <fieldset className='text-inputs-fieldset' disabled={!formActive || isLoading}>
          <label className='profile-form__label'>
            Имя          
            <input required minLength='2' maxLength='30' value={values.name} name='name' type='text'  id ='profile-name-input' placeholder='Введите ваше новое имя' className='profile-form__input'  onChange={handleChange}/>
          </label>
          <label className='profile-form__label'>
            E-mail
            <input required value={values.email} pattern={VALIDATION.email.pattern} name='email' type='text' id ='profile-email-input' placeholder='Введите ваш новый email' className='profile-form__input' onChange={handleChange} />
          </label>
        </fieldset>
        {isLoading ? <Preloader /> : ''}
        <span className = 'form__item-error name-input-error_profile'>{errors.name || errors.email}</span>
        <input type='button' onClick={handlePatchClick} className='button profile-button' value='Редактировать' aria-label='Редактировать' hidden={formActive}/>
        <input type='submit'  onClick={handleSubmit} className=' button profile-save-button' value='Сохранить' aria-label='Сохранить' hidden={!formActive} disabled={!isValid || isLoading}/>
        <input type='button' onClick={signOut} className='button profile-button profile-button_sign-out' value='Выйти из аккаунта' aria-label='Выйти из аккаунта' hidden={formActive}/>
      </form>
    </section>

  )
}

export default Profile;
