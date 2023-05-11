import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

function Movies({ 
  filterShortAllMovies,
setFilteredMovies,
  filteredMovies,
  savedMoviesList,
  saveMovie,
  deleteMovie,
  submitSearch,
  isChecked,
  isLoading,
  onChangeCheckbox,
  errorMessage,
  isFound,
  deleteClass
}) {

  React.useEffect(() => {
    if (isChecked) {
      filterShortAllMovies(filteredMovies)
    } 
    else {
      const movies = JSON.parse(localStorage.getItem('filteredMovies'))
      if (movies !== null) {
        return setFilteredMovies(movies)
      } 
    }
  }, [])

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch} 
      onChange={onChangeCheckbox} 
      isChecked={isChecked}
    />
    {isLoading ? <Preloader /> 
      : <MoviesCardList 
          savedMoviesList={savedMoviesList}
          movies={filteredMovies}
          saveMovie={saveMovie} 
          deleteMovie={deleteMovie} 
          deleteClass={deleteClass} 
          errorMessage={errorMessage} 
          isFound={isFound}
        />
    }
    
  </main>
  )
}

export default Movies;