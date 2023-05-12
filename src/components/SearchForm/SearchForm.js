import React from 'react';

import foundIcon from '../../images/foundIcon.svg';
import { useForm } from '../../hooks/useForm';

import './SearchForm.css';

function SearchForm({handleSubmit, onChange, isChecked}) {

  const {
    values,
    handleChange,
    isValid,
    setValues,
  } = useForm();

  const value= localStorage.getItem('key')
  const [errorText, setErrorText] = React.useState('Фильм');
  
  React.useEffect(() => {
    setValues({search: value})
  }, []); 

  React.useEffect(() => {
    if (isValid) {
      setErrorText('Фильм');
    }
  }, [isValid]);

  function submit(e) {
    e.preventDefault();
    if (!isValid) {
      setErrorText("Нужно ввести ключевое слово");
      return;
    }
    handleSubmit(values.search, isChecked);
  }

  return (
    <form className='search-form' onSubmit={submit} noValidate>
      <img className='search-icon' alt='иконка поиска.' src={foundIcon}></img>
      <input className='search-input' type='text' required placeholder={errorText} minLength='1' onChange={handleChange} name='search' id ='search-input' value={values.search}></input>
      <button className='button search-button'></button>
      <div className='line'></div>
      <label className='checkbox'>
        <input type='checkbox' className='checkbox-input' checked={isChecked} onChange={() => {onChange()}}></input>
        <span className='checkbox-switch'></span>
        <span className='checkbox-text'>Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;