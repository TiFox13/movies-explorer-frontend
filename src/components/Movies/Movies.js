import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { moviesApi } from '../../utils/MoviesApi';


function Movies({ saveMovie, deleteMovie, deleteClass}) {



// чекбокс 
const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')));
// сюда будем кидать отвильтрованные фильмы
  const [filteredMovies, setFilteredMovies] = React.useState(JSON.parse(localStorage.getItem('filteredMovies')) || [])

// меняет состояние чекбокса
function onChangeCheckbox() {
  setIsChecked(!isChecked);
}


React.useEffect (() => {
  localStorage.setItem('checkbox', JSON.stringify(isChecked));
  localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
}, [isChecked, filteredMovies])



  //фильтр по ключевым словам
  function filterKeyword(movies, key) {
    let filteredByKeywordMovies = [];
    movies.forEach((movie) => {
      if (movie.nameRU.toLowerCase().includes(key.toLowerCase())) {
        filteredByKeywordMovies.push(movie);
      }
    });
    return filteredByKeywordMovies;
  }

  //фильтр фильмов по времени
  function filterShortMovies(movies) {
      return  movies.filter((movie) => {
        return movie.duration <= 40;
      })
  }

  // общий фильтр
  function filterMovies(movies, key) {
    // ищем по ключевому слову
    const filteredByKeywordMovies = filterKeyword(movies, key);

    //высветить ошибку, если мы ничего не нашли
    // if (filteredMovies.length === 0) {
    //   setIsNotFound(true);
    // } else {
    //   setIsNotFound(false);
    // }
    setFilteredMovies(filteredByKeywordMovies);
 
    
    //ищем короткие фильмы, если нужно
    if (isChecked) {
      const filteredShortMovies = filterShortMovies(filteredByKeywordMovies);
      setFilteredMovies(filteredShortMovies);

    }
  }


function submitSearch(key) {
  localStorage.setItem('key', JSON.stringify(key))
  moviesApi.getMovies()
  .then((movies) => {
    filterMovies(movies, key)
  })
  .then (() => {
    console.log(filteredMovies)
  })
  .catch((err) => {
    console.log(err)
  })

}


  return (
    <main>
    <SearchForm handleSubmit={submitSearch} onChange={onChangeCheckbox} isChecked={isChecked}/>
    <MoviesCardList movies={filteredMovies} saveMovie={saveMovie} deleteMovie={deleteMovie} deleteClass={deleteClass}/>
  </main>
  )
}

export default Movies;