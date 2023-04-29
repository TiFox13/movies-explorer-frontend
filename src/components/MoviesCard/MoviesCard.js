import React, {useState} from 'react';

import './MoviesCard.css';

function MoviesCard({name, duration, image, deleteClass}) {

  const [isActive, setActive] = useState(false);

  function handleFavorClick() {
    if (!isActive) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  return (
    <article className='movie'>
        <div className='movie__contaner'>
          <div className='movie__text-container'>
            <p className='movie__name'>{name}</p>
            <p className='movie__duration'>{duration}</p>
          </div>
          <button onClick={handleFavorClick} className={isActive ? `button movie__button ${deleteClass} movie__button_active` : `button movie__button ${deleteClass}`} /> 
        </div>
    <img className='movie__image' alt='кадр из фильма.' src={image}></img>
    </article>
  )
}

export default MoviesCard;