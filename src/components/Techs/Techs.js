import React from 'react';

import './Techs.css';

function Techs() {
  return (
    <section className='technologies'>
      <h2 className='section__title'>Технологии</h2>
      <div className='technologies__contaner'>
        <h3 className='technologies__subtitle'>7 технологий</h3>
        <p className='paragraph_technologies'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      </div>
      <div className='techs-contaner'>
        <div className=' techs-contaner__block'>
          <p className='paragraph  techs-contaner__paragraph'>HTML</p>
        </div>
        <div className='techs-contaner__block'>
          <p className='paragraph techs-contaner__paragraph'>CSS</p>
        </div>
        <div className='techs-contaner__block'>
          <p className='paragraph techs-contaner__paragraph'>JS</p>
        </div>
        <div className='techs-contaner__block'>
          <p className='paragraph techs-contaner__paragraph'>React</p>
        </div>
        <div className='techs-contaner__block'>
          <p className='paragraph techs-contaner__paragraph'>Git</p>
        </div>
        <div className='techs-contaner__block'>
          <p className='paragraph techs-contaner__paragraph'>Express.js</p>
        </div>
        <div className='techs-contaner__block'>
          <p className='paragraph techs-contaner__paragraph'>mongoDB</p>
        </div>
      </div>
    </section>
  )
}

export default Techs;