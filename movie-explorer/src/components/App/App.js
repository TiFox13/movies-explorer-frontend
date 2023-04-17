import React from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main.js'
import Footer from '../Footer/Footer.js'
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        {/* <Routes>
          <Route path='/' element={ */}
          <div>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </div>
          {/* } />
        </Routes> */}
      </div>
    </div>
  )
}


export default App;
