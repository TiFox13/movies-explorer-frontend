import React from 'react';

import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project'>
      <h2 className='section__title'>О проекте</h2>
      <div className='project__contaner'>
        <div className='text-contaner'>
          <h3 className='text-contaner__subtitle'>Дипломный проект включал 5 этапов</h3>
          <p className='text-contaner__paragraph'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности&nbsp;и финальные доработки.</p>
        </div>
        <div className='text-contaner'>
        <h3 className='text-contaner__subtitle'>На выполнение диплома ушло 5 недель</h3>
          <p className='text-contaner__paragraph'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать,&nbsp;чтобы успешно защититься.</p>
        </div>
      </div>
      <div className='schema'>
        <p className='schema__time schema__time_back'>1 неделя</p>
        <p className='schema__time schema__time_front'>4 недели</p>
        <p className='schema__info schema__info_back'>Back-end</p>
        <p className='schema__info schema__info_front'>Front-end</p>
      </div>
    </section>
  )
}

export default AboutProject;