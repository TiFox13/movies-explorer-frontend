import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';
import Preloader from '../Preloader/Preloader'

function SavedMovies({ 
  filterKeyword,
  filterShortAllMovies,
  filterMovies,
  setFilteredSavedMovies,
  savedMoviesList,
  filteredSavedMovies,
  deleteClass,
  deleteMovie,

  isLoading,
  errorMessageSavedMovies,
}) {

  const [isShort, setIsShort] = React.useState(false);
  const [key, setKey] = React.useState('');
  const [isFound, setIsFound] = React.useState(true);

  React.useEffect(() => {
    if (filteredSavedMovies.length !== 0) {
      setIsFound(true); 
    }
    }, [setIsFound, filteredSavedMovies])  

  function onChangeCheckboxMovies() {
    setIsShort(!isShort);
    if (filteredSavedMovies.length !== 0) {  
      const filteredMovies = filterAllMovies(key, !isShort) 
    } else {
      setFilteredSavedMovies(filterMovies(savedMoviesList, key))
    }
  }

  // локальная функция для модуля Movies   
  function filterAllMovies(key, isShort) {
    const filteredByKeywordMovies = filterKeyword(savedMoviesList, key);// ищем по ключевому слову
    if (filteredByKeywordMovies.length !== 0) {
      setIsFound(true);  
    } else {
      setIsFound(false);
    }
    
    if (isShort) {
      const filteredMovies = filterShortAllMovies(filteredByKeywordMovies, isShort)
      setFilteredSavedMovies(filteredMovies)
      if (filteredMovies.length !== 0) {
        setIsFound(true);  
      } else {
        setIsFound(false);
      }
    } else {
      setFilteredSavedMovies(filteredByKeywordMovies)
    }
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