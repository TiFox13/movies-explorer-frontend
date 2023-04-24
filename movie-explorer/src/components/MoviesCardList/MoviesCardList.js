import React, { Children } from 'react';

import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import movie1 from '../../images/movie1.svg'

function MoviesCardList(props) {
  return (
    <section className='card-list'>
<div className='movies-card-list'>
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
{props.children}
    </section>

  )
}


export default MoviesCardList;
