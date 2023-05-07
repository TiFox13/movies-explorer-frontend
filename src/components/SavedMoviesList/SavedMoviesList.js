import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';


function SavedMoviesList({
  setIsNotFound,
  setFilteredSavedMovies,
  filteredSavedMovies,
  savedMoviesList,
  deleteMovie,

  saveMovie,

  deleteClass,
  errorMessage,
  notFound,
}) {


  React.useEffect(() => {
    setIsNotFound(true);
    setFilteredSavedMovies(savedMoviesList);
  }, [savedMoviesList])



  return (
    <section className='card-list'>
      <p hidden={errorMessage} className='card-list__error'>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
      </p>
      <p hidden={notFound} className='card-list__error'>
        Ничего не найдено
      </p>
    <div className={`card-list__movies ${''}`}>
    { filteredSavedMovies.map((item) => (
      <MoviesCard
      saveMovie={saveMovie}  
      isSaved={true}
      filteredSavedMovies={filteredSavedMovies} 
      savedMoviesList={savedMoviesList}
        thisMovie={item} 

        
        name={item.nameRU} 
        duration={item.duration} 
        image={`${item.image}`} 
        deleteClass={deleteClass} 
        deleteMovie={deleteMovie}/> 
      )
      )}
    </div>
  </section>
  )
}

export default SavedMoviesList;