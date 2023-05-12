import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';
import Preloader from '../Preloader/Preloader'

function SavedMovies({ 
  filterMovies,
  setIsFound,
  setFilteredSavedMovies,
  savedMoviesList,
  filteredSavedMovies,
  deleteClass,
  deleteMovie,

  isLoading,

  errorMessageSavedMovies,
  isFound
}) {

const [isShort, setIsShort] = React.useState(false);
const [key, setKey] = React.useState('');

function onChangeCheckboxMovies() {
  setIsShort(!isShort);
  if (filteredSavedMovies.length !== 0) {
    const filteredMovies = filterAllMovies(key, !isShort) 
  } else {
    setFilteredSavedMovies(filterMovies(savedMoviesList, key))
  }
}

// локальная функция для модуля SavedMovies   
function filterAllMovies(key, isShort) {
  const filteredMovies = filterMovies(savedMoviesList, key, isShort)
  if (filteredMovies.length !== 0) {
    setIsFound(true);  
  } else {
    setIsFound(false);
  }
  setFilteredSavedMovies(filteredMovies)
}

function submitSearch(key) {
  setKey(key)
  filterAllMovies(key, isShort)
}

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch}
      onChange={onChangeCheckboxMovies} 
      isChecked={isShort}
      />
    {isLoading ? <Preloader />
      :  <SavedMoviesList
          submitSearch={submitSearch}
          setIsFound={setIsFound}
          setFilteredSavedMovies={setFilteredSavedMovies}
          filteredSavedMovies={filteredSavedMovies} 
          savedMoviesList={savedMoviesList} 
          deleteMovie={deleteMovie} 
          deleteClass={deleteClass}
          errorMessage={errorMessageSavedMovies} 
          isFound={isFound}
        />
    }
  </main>
  )
}

export default SavedMovies;