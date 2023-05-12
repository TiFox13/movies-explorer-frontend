import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader'

function Movies({ 
  filterMovies,
  setIsFound,
  currentMovies,
  setFilteredMovies,
  filterShortAllMovies,
  filteredMovies,
  savedMoviesList,
  saveMovie,
  deleteMovie,
  isLoading,
  errorMessageMovies,
  isFound,
  deleteClass
}) {

  const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) || false)
  const [key, setKey] = React.useState(localStorage.getItem('key') || '')


  React.useEffect(() => {
    if (isChecked) {
      const filterMovies = filterShortAllMovies(filteredMovies)

      const movies = JSON.parse(localStorage.getItem('filteredMovies'))
      if (movies !== null) {
        return setFilteredMovies(movies)
      } 
    }
  }, [])

  function onChangeCheckboxAllMovies() {
       setIsChecked(!isChecked);
       localStorage.setItem('checkbox', JSON.stringify(!isChecked));
       if (filteredMovies.length !== 0) {
       const filteredShortMovies = filterAllMovies(key, !isChecked)
    } else {
      if (key !== '') {
        const filteredMovies = filterMovies(currentMovies, key, !isChecked)
      // localStorage.setItem('filteredMovies', JSON.stringify(filteredShortMovies));
        return setFilteredMovies(filteredMovies)
      }
    }
  }

  // локальная функция для модуля Movies   
function filterAllMovies(key, isShort) {
  const filteredMovies = filterMovies(currentMovies, key, isShort)
  if (filteredMovies.length !== 0) {
    setIsFound(true);  
  } else {
    setIsFound(false);
  }
  localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
  setFilteredMovies(filteredMovies)

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