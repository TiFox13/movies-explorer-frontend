import React from 'react';

import './SearchForm.css';
import foundIcon from '../../images/foundIcon.svg';

function SearchForm({handleSubmit}) {

  function submit(e) {
    e.preventDefault();
    handleSubmit();
  }
  
  return (
    <form className='search-form' onSubmit={submit}>
      <img className='search-icon' alt='иконка поиска.' src={foundIcon}></img>
      <input className='search-input' type='text' placeholder='Фильм'></input>
      <button className='button search-button'></button>
      <div className='line'></div>
      <label className='checkbox'>
        <input type='checkbox' className='checkbox-input'></input>
        <span className='checkbox-switch'></span>
        <span className='checkbox-text'>Короткометражки</span>
      </label>
    </form>
  )
}

export default SearchForm;