import React from 'react';

import './MoviesCard.css';
import { Link } from 'react-router-dom';

function MoviesCard({ 
  filteredMovies,
  isSaved,
  savedMoviesList,
  thisMovie, 
  name, 
  duration, 
  image, 
  deleteClass, 
  saveMovie, 
  deleteMovie}) {

// приводит длительность фильма в нужный вид
  function formatDuration(time) {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
    return `${hours}ч ${minutes}м`;
  };

  const [isliked, setIsLiked] = React.useState(false)

  // когда фильм отрисовывается, проверим, сохранял ли его себе пользователь?
  React.useEffect(() => {
    const isliked = savedMoviesList.some((savedMovie) => savedMovie.movieId === thisMovie.id);  
    setIsLiked(isliked)
  }, [savedMoviesList, filteredMovies])
  

// переключатель сохранить/удалить
  function handleSaveClick() {
    if (!isliked) {
      saveMovie(thisMovie)
    } else {
    deleteMovie(thisMovie)
    }
  }
  
  function handleDeleteClick() {
    deleteMovie(thisMovie)
  }

  return (
    <article className='movie'>
      <div className='movie__contaner'>
        <div className='movie__text-container'>
          <p className='movie__name'>{name}</p>
          <p className='movie__duration'>{formatDuration(duration)}</p>
        </div>
        <button onClick={isliked || isSaved ? handleDeleteClick : handleSaveClick} className={isliked ? `button movie__button  movie__button_active` : `button movie__button ${deleteClass}`} /> 
      </div>
      <Link className='link' to={thisMovie.trailerLink} target='_blanck'>
        <img className='movie__image' alt={name} src={image}></img>
      </Link>
    </article>
  )
}

export default MoviesCard;