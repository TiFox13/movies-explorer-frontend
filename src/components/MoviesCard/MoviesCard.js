import React, {useState} from 'react';

import './MoviesCard.css';


function MoviesCard({ 
  
  filteredMovies,
  isSaved,
  key,
  savedMoviesList,
  thisMovie, 
  name, 
  duration, 
  image, 
  deleteClass, 

  saveMovie, 
  deleteMovie}) {

React.useEffect(() => {
  console.log(key)
}, [])

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
      setIsLiked(true)
    } else {
  deleteMovie(thisMovie)
  setIsLiked(false)
    }
    }
  

  function handleDeleteClick() {
    deleteMovie(thisMovie)
    setIsLiked(false)
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
    <img className='movie__image' alt={name} src={image}></img>
    </article>
  )
}

export default MoviesCard;