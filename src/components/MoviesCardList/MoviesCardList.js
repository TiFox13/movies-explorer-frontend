import React from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/movie1.svg'

function MoviesCardList(props) {

  const [cardListOpenedClass, setCardListOpenedClass] = React.useState('')
  const [moreButtonHiddenClass, setMoreButtonHiddenClass] = React.useState('')
  function handleMoreButtonClick() {
    setCardListOpenedClass('card-list__movies_opened');
    setMoreButtonHiddenClass('card-list__button_hidden')
  }
  return (
    <section className='card-list'>
      <div className={`card-list__movies ${cardListOpenedClass}`}>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>

        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass} />
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>

        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>

        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
        < MoviesCard name='33 слова о дизайне' duration='1ч 47м' image={movie1} deleteClass={props.deleteClass}/>
      </div>
      <button onClick={handleMoreButtonClick} className={`button card-list__button ${moreButtonHiddenClass}`}>Еще</button>
    </section>

  )
}

export default MoviesCardList;
