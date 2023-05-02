import React from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function Movies({getMovies}) {
  

function handleSearch() {
  getMovies()
}

  return (
    <main>
    <SearchForm handleSubmit={handleSearch}/>
    <MoviesCardList />
  </main>
  )
}

export default Movies;