import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import { CurrentSavedMoviesContext } from '../../contexts/CurrentSavedMoviesContext';

function SavedMoviesList({ saveMovie, deleteMovie, deleteClass}) {

  const {savedMoviesList} = React.useContext(CurrentSavedMoviesContext);
  console.log(savedMoviesList)


  return (
    <section className='card-list'>
    <div className={`card-list__movies ${''}`}>
    {savedMoviesList.map((item) => (
      <MoviesCard  thisMovie={item} name={item.nameRU} duration={item.duration} image={`${item.image}`} deleteClass={deleteClass} saveMovie={saveMovie} deleteMovie={deleteMovie}/> 
      )
      )}
    </div>
  </section>
  )
}

export default SavedMoviesList;