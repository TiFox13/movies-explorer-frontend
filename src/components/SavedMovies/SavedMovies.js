import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';

import Preloader from '../Preloader/Preloader'


function SavedMovies({ 
  setIsNotFound,
  setFilteredSavedMovies,
  savedMoviesList,
  filteredSavedMovies,
  deleteClass,

  submitSearch,
  deleteMovie,

  isChecked,
  isLoading,
  onChangeCheckbox,

  errorMessage,
  notFound
}) {

  

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch}
      onChange={onChangeCheckbox} 
      isChecked={isChecked}
      />
    {isLoading && <Preloader />}
    <SavedMoviesList 
    setIsNotFound={setIsNotFound}
    setFilteredSavedMovies={setFilteredSavedMovies}
      filteredSavedMovies={filteredSavedMovies}  //эту хрень нельзя передавать. нужна своя!
      savedMoviesList={savedMoviesList} 
      deleteMovie={deleteMovie} 
      deleteClass={deleteClass}
      errorMessage={errorMessage} 
      notFound={notFound}
      />
  </main>
  )
}

export default SavedMovies;