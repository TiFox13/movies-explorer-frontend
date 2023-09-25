import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

import { breakpoints, numbersOfFilms, searchMessages } from '../../utils/constants';

function MoviesCardList({ 
  savedMoviesList, 
  movies, 
  saveMovie, 
  deleteMovie,
  deleteClass, 
  errorMessage, 
  isFound}) {

  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [moreButtonIsHidden, setMoreButtonIsHidden] = React.useState(true)
  const [movieCounter, setMovieCounter] = React.useState(3)

  React.useEffect(() => {
  if (movies !== 0) {
    setMoreButtonIsHidden(false)
  }
  if (movieCounter + 2 >= movies.length){
    setMoreButtonIsHidden(true)
  }
  }, [movies, movieCounter])

  function handleMoreButtonClick() {
if (width <= breakpoints.SCREEN_M) {
    return setMovieCounter(movieCounter + 2)
  } 
   return setMovieCounter(movieCounter + 3)
  }

  React.useEffect(() => {
    if (width <= breakpoints.SCREEN_S) {
      return setMovieCounter(numbersOfFilms.MOBILE);
    } else if (width <= breakpoints.SCREEN_M) {
      setMovieCounter(numbersOfFilms.TABLET);
    } else {
      setMovieCounter(numbersOfFilms.DESKTOP);
    }
  }, [width, movies.length]);

  
  function renderMovies() {
    return [...movies.slice(0, movieCounter)];
  }

  return (
    <section className='card-list'>
       <p hidden={!errorMessage} className='card-list__error'>{searchMessages.SEARCH_ERROR}</p>
      <p hidden={isFound} className='card-list__error'>{searchMessages.NOT_FOUND}</p>
      <div className={`card-list__movies`}>
        {renderMovies().map((item) => (
          <MoviesCard  
            key={item.id}
            filteredMovies={movies}
            isSaved={false}
            savedMoviesList={savedMoviesList}
            thisMovie={item} 
            name={item.nameRU} 
            duration={item.duration} 
            image={`https://api.nomoreparties.co/${item.image.url}`} 
            deleteClass={deleteClass} 
            saveMovie={saveMovie} 
            deleteMovie={deleteMovie}/> 
          )
        )}
      </div>
      <button hidden={moreButtonIsHidden} onClick={handleMoreButtonClick} className={`button card-list__button `}>Еще</button>
    </section>
  )
}

export default MoviesCardList;
