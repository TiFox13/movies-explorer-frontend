import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'

import './Profile.css';

function Profile() {
  const [name, setName] = React.useState('Виталий');
  const [email, setEmail] = React.useState('pochta@yandex.ru');
  const [formActive, setFormActive] = React.useState(false)
  

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handlePatchClick() {
    if (formActive === false) {
     return setFormActive(true)
    }
}

const [formValid, setFormValid] = React.useState(false);
const [nameError, setNameError] = React.useState('');
const [emailError, setEmailError] = React.useState('');

useEffect(() => {
  if (nameError || emailError) {
    setFormValid(false)
  } else {
    setFormValid(true)
  }
}, [nameError, emailError]);


function handleChangeName(e) {
  setName(e.target.value);
  if (2 <= e.target.value.length || e.target.value.length >= 30)  {
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

const [userName, setUserName] = React.useState('Виталий');

function handleSubmit(e) {
  e.preventDefault();
  setUserName(name);
  setFormActive(false);
}

const navigate = useNavigate();
  
  const navigateLogin = (e) => {
      navigate('/signin');
  };


  return (
    <section className='profile'>
      <form className='profile-form' name='profile-form' method='post'>
        <h2 className=' profile__heading'>{`Привет, ${userName}!`}</h2>
        <fieldset className='text-inputs-fieldset' disabled={!formActive}>
          <label className='profile-form__label'>
            Имя          
            <input type='text' placeholder='Введите ваше новое имя' className='profile-form__input' value={name} onChange={handleChangeName}/>
          </label>
          <label className='profile-form__label'>
            E-mail
            <input type='text' placeholder='Введите ваш новый email' className='profile-form__input' value={email} onChange={handleChangeEmail}/>
          </label>
        </fieldset>

        <span className = 'form__item-error name-input-error_profile'>{nameError ||  emailError}</span>
        <input type='button' onClick={handlePatchClick} className='button profile-button' value='Редактировать' aria-label='Редактировать' hidden={formActive}/>
        <input type='submit'  onClick={handleSubmit} className=' button profile-save-button' value='Сохранить' aria-label='Сохранить' hidden={!formActive} disabled={!formValid}/>
        <input type='button' onClick={navigateLogin} className='button profile-button profile-button_sign-out' value='Выйти из аккаунта' aria-label='Выйти из аккаунта' hidden={formActive}/>
      </form>
    </section>

  )
}

export default Profile;
