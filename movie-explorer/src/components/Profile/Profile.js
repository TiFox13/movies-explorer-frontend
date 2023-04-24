import React from 'react';

import './Profile.css';

function Profile() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  return (
    <section className='profile'>
      <form className='profile-form' name='profile-form' method='post'>
        <h2 className=" profile__heading">Привет, Виталий!</h2>
        <fieldset className='text-inputs-fieldset' disabled>
          <label className='profile-form__label'>
            Имя          
            <input type="text"  className="profile-form__input" value="Виталий" onChange={handleChangeName}/>
          </label>
          <label className='profile-form__label'>
            E-mail
            <input type="text"  className="profile-form__input" value="pochta@yandex.ru" onChange={handleChangeEmail}/>
          </label>
        </fieldset>
    
        <input type="button"  className="profile-button" value='Редактировать' aria-label="Редактировать" />
        <input type="submit"  className="profile-button" value="Сохранить" aria-label="Сохранить" hidden/>
        <input type="button"  className="profile-button profile-button_sign-out" value="Выйти из аккаунта" aria-label="Выйти из аккаунта" />
      </form>
    </section>

  )
}

export default Profile;
