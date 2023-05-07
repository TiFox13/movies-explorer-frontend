import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Preloader from '../Preloader/Preloader'


function Movies({ 
  filteredMovies,
  savedMoviesList,

  saveMovie,
  deleteMovie,
  submitSearch,

  isChecked,
  isLoading,
  onChangeCheckbox,

  errorMessage,
  notFound,
  deleteClass}) {

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch} 
      onChange={onChangeCheckbox} 
      isChecked={isChecked}
    />
    {isLoading && <Preloader />}
    <MoviesCardList 
    savedMoviesList={savedMoviesList}
      movies={filteredMovies}
      
      saveMovie={saveMovie} 
      deleteMovie={deleteMovie} 

      deleteClass={deleteClass} 
      errorMessage={errorMessage} 
      notFound={notFound}
    />
  </main>
  )
}

export default Movies;