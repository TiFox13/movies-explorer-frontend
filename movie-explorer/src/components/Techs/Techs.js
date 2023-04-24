import React from 'react';

import './Techs.css';

function Techs() {
  return (
    <section className='technologies'>
      <h2 className='block__title'>Технологии</h2>
      <div className='technologies__contaner'>
          <h3 className='technologies__subtitle'>7 технологий</h3>
          <p className='paragraph_technologies'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className='flex-contaner'>
        <div className='technologies-block'>
            <p className='paragraph technologies__paragraph'>HTML</p>
        </div>
        <div className='technologies-block'>
        <p className='paragraph technologies__paragraph'>CSS</p>
        </div>
        <div className='technologies-block'>
        <p className='paragraph technologies__paragraph'>JS</p>
        </div>
        <div className='technologies-block'>
        <p className='paragraph technologies__paragraph'>React</p>
        </div>
        <div className='technologies-block'>
        <p className='paragraph technologies__paragraph'>Git</p>
        </div>
        <div className='technologies-block'>
        <p className='paragraph technologies__paragraph'>Express.js</p>
        </div>
        <div className='technologies-block'>
        <p className='paragraph technologies__paragraph'>mongoDB</p>
        </div>
      </div>
    </section>
  )
}

export default Techs;