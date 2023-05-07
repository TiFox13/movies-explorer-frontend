import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ 
  savedMoviesList, 
  movies, 

  saveMovie, 
  deleteMovie,

  deleteClass, 
  errorMessage, 
  notFound}) {

///////////////////////////////////////
  const [cardListOpenedClass, setCardListOpenedClass] = React.useState('')
  //////////////////////////////////////
  const [moreButtonIsHidden, setMoreButtonIsHidden] = React.useState(true)
  const [movieCounter, setMovieCounter] = React.useState(3)

  React.useEffect(() => {
  if (movies != 0) {
    setMoreButtonIsHidden(false)
  }
  if (movieCounter + 3 >= movies.length){
    setMoreButtonIsHidden(true)
  }
  }, [movies, movieCounter])


  function handleMoreButtonClick() {

//////////////////////////////////// кусочек под вопросом
    setCardListOpenedClass('card-list__movies_opened');
////////////////////////////////////////
    setMovieCounter(movieCounter + 3)
  }


  function renderMovies() {
    return [...movies.slice(0, movieCounter)];
  }


  return (
    <section className='card-list'>
      <p hidden={errorMessage} className='card-list__error'>
        Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.
      </p>
      <p hidden={notFound} className='card-list__error'>
        Ничего не найдено
      </p>
      <div className={`card-list__movies ${cardListOpenedClass}`}>
      {renderMovies().map((item) => (
        <MoviesCard  
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
