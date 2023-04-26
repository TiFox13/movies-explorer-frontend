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
        <div className='movie-info'>
            <div className='text-container'>
                <p className='movie-name'>{name}</p>
                <p className='movie-duration'>{duration}</p>
            </div>
            <button onClick={handleFavorClick} className={isActive ? `button favofite-button ${deleteClass} favofite-button_active` : `button favofite-button ${deleteClass}`} /> 
        </div>
    <img className='movie-image' alt='кадр из фильма.' src={image}></img>
    </article>
  )
}

export default MoviesCard;