import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/movie1.svg'

import { CurrentMovieContext } from '../../contexts/CurrentMovieContext';

function MoviesCardList({deleteClass}) {

  const currentMovie = React.useContext(CurrentMovieContext);

  const [cardListOpenedClass, setCardListOpenedClass] = React.useState('')
  const [moreButtonIsHidden, setMoreButtonIsHidden] = React.useState(true)
  const [movieCounter, setMovieCounter] = React.useState(3)

  React.useEffect(() => {
  if (currentMovie != 0) {
    setMoreButtonIsHidden(false)
  }
  if (movieCounter + 3 >= currentMovie.length){
    console.log(currentMovie.length)
    setMoreButtonIsHidden(true)
  }
  }, [currentMovie, movieCounter])


  function handleMoreButtonClick() {

//////////////////////////////////// кусочек под вопросом
    setCardListOpenedClass('card-list__movies_opened');
////////////////////////////////////////

    setMovieCounter(movieCounter + 50)
  }

  

  function renderMovies() {
    return [...currentMovie.slice(0, movieCounter)];
  }

  return (
    <section className='card-list'>
      <div className={`card-list__movies ${cardListOpenedClass}`}>
      {renderMovies().map((item) => (
        <MoviesCard name={item.nameRU} duration={item.duration} image={`https://api.nomoreparties.co/${item.image.url}`} deleteClass={deleteClass}/> 
        )
        )}
      </div>
      <button hidden={moreButtonIsHidden} onClick={handleMoreButtonClick} className={`button card-list__button `}>Еще</button>
    </section>

  )
}

export default MoviesCardList;
