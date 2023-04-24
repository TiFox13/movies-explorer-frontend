import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer.js'
import Promo from '../Promo/Promo.js';
import AboutProject from '../AboutProject/AboutProject.js';
import Techs from '../Techs/Techs.js';
import AboutMe from '../AboutMe/AboutMe.js';
import Portfolio from '../Portfolio/Portfolio.js';
import NavTab from '../NavTab/NavTab.js'

function Main() {
  return (
          <>
            <Header class='main-header'>
              <NavTab />
            </Header>
            <Promo />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </>
  )
}


export default Main;