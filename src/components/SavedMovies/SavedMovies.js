import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';
import Preloader from '../Preloader/Preloader'

function SavedMovies({ 
  setIsFound,
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
  isFound
}) {

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch}
      onChange={onChangeCheckbox} 
      isChecked={isChecked}
      />
    {isLoading ? <Preloader />
      :  <SavedMoviesList 
          setIsFound={setIsFound}
          setFilteredSavedMovies={setFilteredSavedMovies}
          filteredSavedMovies={filteredSavedMovies} 
          savedMoviesList={savedMoviesList} 
          deleteMovie={deleteMovie} 
          deleteClass={deleteClass}
          errorMessage={errorMessage} 
          isFound={isFound}
        />
    }
  </main>
  )
}

export default SavedMovies;