import React, {useState} from 'react';

import './MoviesCard.css';
import { CurrentSavedMoviesContext } from '../../contexts/CurrentSavedMoviesContext';
import { mainApi } from '../../utils/MainApi';

function MoviesCard({ thisMovie, name, duration, image, deleteClass, saveMovie, deleteMovie}) {

  const {savedMoviesList, setSavedMoviesList} = React.useContext(CurrentSavedMoviesContext);


function formatDuration(time) {
    const hours = Math.trunc(time / 60);
    const minutes = time % 60;
  
    return `${hours}ч ${minutes}м`;
  };

  const [isSaved, setIsSaved] = React.useState(false)


function saveMovie() {
      mainApi.saveMovie(thisMovie)
      .then((res) => {
        setSavedMoviesList([res, ...savedMoviesList])
      })
      .then((res) => {
        setIsSaved(true);
      })
      .catch((err) => {
        console.log(err)
      })
    }
    function deleteMovie() {
      const savedMovie = savedMoviesList.find((item) => {
        if (item.movieId === thisMovie.id) {
          return item
        } else {
          return savedMoviesList
        }
  
      })     
  mainApi.deleteMovie(savedMovie._id)
      .then((res) => {

  setIsSaved(false);
      })
      .catch((err) => {
        console.log(err)
      })
    }
    
  function handleSaveClick() {
    if (!isSaved) {
      saveMovie(thisMovie)
    } else {
  deleteMovie(thisMovie)
    }
  }

  return (
    <article className='movie'>
        <div className='movie__contaner'>
          <div className='movie__text-container'>
            <p className='movie__name'>{name}</p>
            <p className='movie__duration'>{formatDuration(duration)}</p>
          </div>
          <button onClick={handleSaveClick} className={isSaved ? `button movie__button  movie__button_active` : `button movie__button ${deleteClass}`} /> 
        </div>
    <img className='movie__image' alt={name} src={image}></img>
    </article>
  )
}

export default MoviesCard;