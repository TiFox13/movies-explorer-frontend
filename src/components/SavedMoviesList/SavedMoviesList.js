import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';
import { searchMessages } from '../../utils/constants';

function SavedMoviesList({
  setIsFound,
  isFound,
  setFilteredSavedMovies,
  filteredSavedMovies,
  savedMoviesList,
  deleteMovie,
  saveMovie,
  deleteClass,
  errorMessage,
}) {

  const [notSaved, setNotSaved] = React.useState(true);

  React.useEffect(() => {
    setIsFound(true);
    setFilteredSavedMovies(savedMoviesList);
    if (savedMoviesList.length !== 0) {
     return setNotSaved(false);
    }
  }, [savedMoviesList])


  return (
    <section className='card-list'>
      <p hidden={!errorMessage} className='card-list__error'>{searchMessages.SEARCH_ERROR}</p>
      <p hidden={isFound} className='card-list__error'>{searchMessages.NOT_FOUND}</p>
      <p hidden={!notSaved} className='card-list__error'>{searchMessages.NOT_SAVED}</p>
      <div className={`card-list__movies ${''}`}>
        {filteredSavedMovies.map((item) => (
          <MoviesCard
            key={item.movieId}
            saveMovie={saveMovie}  
            isSaved={true}
   
            savedMoviesList={savedMoviesList}
            thisMovie={item} 
            name={item.nameRU} 
            duration={item.duration} 
            image={`${item.image}`} 
            deleteClass={deleteClass} 
            deleteMovie={deleteMovie}/> 
        )
        )}
    </div>
  </section>
  )
}

export default SavedMoviesList;