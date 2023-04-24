import React from 'react';

import './MoviesCard.css';

function MoviesCard({name, duration, image, deleteClass}) {
  // console.log(deleteClass)
  return (
    <article className='movie'>
        <div className='movie-info'>
            <div className='text-container'>
                <p className='movie-name'>{name}</p>
                <p className='movie-duration'>{duration}</p>
            </div>
            <div className={`favofite-icon ${deleteClass}`}></div> 
        </div>
    <img className='movie-image' alt='кадр из фильма.' src={image}></img>
    </article>
  )
}

export default MoviesCard;