import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';
import Preloader from '../Preloader/Preloader'

function SavedMovies({ 
  filterShortSavedMovies,

  setIsFound,
  setFilteredSavedMovies,
  savedMoviesList,
  filteredSavedMovies,
  deleteClass,
  submitSearch,
  deleteMovie,

  isLoading,

  errorMessageSavedMovies,
  isFound
}) {

const [isShort, setIsShort] = React.useState(false);

 function onChange() {
  setIsShort(!isShort);
  onChangeCheckboxSavedMovies()
 }

 
 function onChangeCheckboxSavedMovies() {
  setIsShort(!isShort);
  if (filteredSavedMovies.length !== 0) {
      if (!isShort) {
    filterShortSavedMovies(filteredSavedMovies)
  } else {
    setIsFound(true);
    setFilteredSavedMovies(JSON.parse(localStorage.getItem('savedMovies')))
  }
  }
}

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch}
      onChange={onChange} 
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