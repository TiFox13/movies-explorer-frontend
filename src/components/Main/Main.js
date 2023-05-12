import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import NavTab from '../NavTab/NavTab'
import Navigation from '../Navigation/Navigation';

function Main({loggedIn, profileLinkActiveClass}) {

  return (
    <>
      <Header class='main-header'>
        {loggedIn 
          ? <Navigation profileLinkActiveClass={profileLinkActiveClass} />
          : <NavTab />
        }
      </Header>
      <main> 
        <Promo loggedIn={loggedIn}/>
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main> 
      <Footer />
    </>
  )
}


export default Main;