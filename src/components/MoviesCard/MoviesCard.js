import React, {useState} from 'react';

import './MoviesCard.css';

function MoviesCard({name, duration, image, deleteClass}) {

  const [isActive, setActive] = useState(false);

  function handleFavorClick() {
    if (!isActive) {
      setActive(true)
      // тут нужно запустить вункцию создания фильма
    } else {
      setActive(false)
      // тут надо запустить функцию удаления
    }
  }


function formatDuration(time) {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
  
    return `${hours}ч ${minutes}м`;
  };

  return (
    <article className='movie'>
        <div className='movie__contaner'>
          <div className='movie__text-container'>
            <p className='movie__name'>{name}</p>
            <p className='movie__duration'>{formatDuration(duration)}</p>
          </div>
          <button onClick={handleFavorClick} className={isActive ? `button movie__button ${deleteClass} movie__button_active` : `button movie__button ${deleteClass}`} /> 
        </div>
    <img className='movie__image' alt='кадр из фильма.' src={image}></img>
    </article>
  )
}

export default MoviesCard;