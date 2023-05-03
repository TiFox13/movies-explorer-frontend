import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { mainApi } from '../../utils/MainApi';


function Movies({ getMovies,  saveMovie, deleteMovie}) {

function handleSearch() {
  getMovies()
}

  return (
    <main>
    <SearchForm handleSubmit={handleSearch}/>
    <MoviesCardList  saveMovie={saveMovie} deleteMovie={deleteMovie}/>
  </main>
  )
}

export default Movies;