import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Error.css';
function Error() {
  
  const navigate = useNavigate();


  return (
    <div className='error'>
      <h1 className='error__code'>404</h1>
      <p className='error__paragragraph'>Страница не найдена</p>
      <a className='link error-link' onClick={()=>{navigate(-1)}}>Назад</a>
    </div>
  )
}

export default Error;