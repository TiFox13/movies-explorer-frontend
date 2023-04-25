import React from 'react';
import { Route, Routes, useNavigate, Link } from 'react-router-dom';

import './App.css';

import Main from '../Main/Main.js'
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';
import Navigation from '../Navigation/Navigation.js'
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreButton from '../MoreButton/MoreButton'
import SearchForm from '../SearchForm/SearchForm'
import Profile from '../Profile/Profile'
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={ <Main />} />

          <Route path='/signup' element={ 
            <Register />
          } />
          <Route path='/signin' element={
            <Login />
          } />

          <Route path='/movies' element={(
          <>
            <Header>
              <Navigation linkMoviesActiveClass='link-active'/>
            </Header>
            <SearchForm />
            <MoviesCardList>
              <MoreButton />
            </MoviesCardList>
            <Footer />
          </>
            )} />
          <Route path='/saved-movies' element={
            <>
              <Header>
              <Navigation  linkActiveClass='link-active'/>
            </Header>
            <SearchForm />
            <MoviesCardList deleteClass='delete-button' />
            <Footer />
            </>
          } />
          <Route path='/profile' element={
            <>
            <Header>
              <Navigation  profileLinkActiveClass='link-active' />
            </Header>
            <Profile />
            </>
          } />
        </Routes>
      </div>
    </div>
  )
}


export default App;
