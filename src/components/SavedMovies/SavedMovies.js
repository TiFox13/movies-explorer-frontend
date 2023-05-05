import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SavedMoviesList from '../SavedMoviesList/SavedMoviesList';



function SavedMovies({ getMovies, saveMovie, deleteMovie, deleteClass}) {

function handleSearch() {
  getMovies()   // надо поменять. поставить свою собственную функцию. чтобы свои фильмы забирала, а не вообще все и их же отрисовывала (и перерисовывала при обновлении данных)
}

  return (
    <main>
    <SearchForm handleSubmit={''}/>
    <SavedMoviesList  saveMovie={saveMovie} deleteMovie={deleteMovie} deleteClass={deleteClass}/>
  </main>
  )
}

export default SavedMovies;