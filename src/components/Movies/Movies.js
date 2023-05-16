import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

function Movies({ 
  filterKeyword,
  filterMovies,
  filterShortAllMovies,
  currentMovies,
  setFilteredMovies,
  filteredMovies,
  savedMoviesList,
  saveMovie,
  deleteMovie,
  isLoading,
  errorMessageMovies,
  deleteClass
}) {

  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) || false)
  const [key, setKey] = React.useState(localStorage.getItem('key') || '')
  const [isFound, setIsFound] = React.useState(true);

  React.useEffect(() => {
    if (isChecked) {
      const movies = JSON.parse(localStorage.getItem('filteredMovies'))
      if (movies !== null) {
        return setFilteredMovies(movies)
      }   
    }
  }, [])

  React.useEffect(() => {
    filteredMovies.length !== 0 ? setIsFound(true) : setIsFound(false) 
  }, [setIsFound, filteredMovies])  

  React.useEffect(() => {
    setIsFound(true) 
     }, [])  

  // функция для работы с чекбоксом
  function onChangeCheckboxAllMovies() {
       setIsChecked(!isChecked);
       localStorage.setItem('checkbox', JSON.stringify(!isChecked));
       if (filteredMovies.length !== 0) {
       const filteredShortMovies = filterAllMovies(key, !isChecked)
    } else {
      const filteredByKeyAndShort = filterMovies(currentMovies, key, !isChecked)
      setFilteredMovies(filteredByKeyAndShort)
      localStorage.setItem('filteredMovies', JSON.stringify(filteredByKeyAndShort));
    }
  }

  // локальная функция-фильтр для модуля Movies   
  function filterAllMovies(key, isShort) {
    const filteredByKeywordMovies = filterKeyword(currentMovies, key);// ищем по ключевому слову
   localStorage.setItem('filteredMovies', JSON.stringify(filteredByKeywordMovies));
    if (filteredByKeywordMovies.length !== 0) {
      setIsFound(true);  
    } else {
      setIsFound(false);
    }
    if (isShort) {
      const filteredMovies = filterShortAllMovies(filteredByKeywordMovies, isShort)
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
      setFilteredMovies(filteredMovies)
      if (filteredMovies.length !== 0) {
        setIsFound(true);  
      } else {
        setIsFound(false);
      }
    } else {
      setFilteredMovies(filteredByKeywordMovies)
    }
  }

  function submitSearch(key) {
    setKey(key)
    localStorage.setItem('key', key)
    filterAllMovies(key, isChecked)
  }

  return (
    <main>
    <SearchForm 
      handleSubmit={submitSearch} 
      onChange={onChangeCheckboxAllMovies} 
      isChecked={isChecked}
    />
    {isLoading ? <Preloader /> 
      : <MoviesCardList 
          savedMoviesList={savedMoviesList}
          movies={filteredMovies}
          saveMovie={saveMovie} 
          deleteMovie={deleteMovie} 
          deleteClass={deleteClass} 
          errorMessage={errorMessageMovies} 
          isFound={isFound}
        />
    }
  </main>
  )
}

export default Movies;