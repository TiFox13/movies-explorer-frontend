import React from 'react';
import { Link } from 'react-router-dom';

import './Error.css';
function Error() {
  
  return (
    <div className='error'>
      <h1 className='error__code'>404</h1>
      <p className='error__paragragraph'>Страница не найдена</p>
      <Link className='link error-link' to={-1}>Назад</Link>
    </div>
  )
}

export default Error;