import React from 'react';
import { Route, Routes} from 'react-router-dom';

import './App.css';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';

import Error from '../Error/Error';

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
              <MoviesCardList />
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
          <Route path='/error' element={
            <Error />
          } />
          
        </Routes>
      </div>
    </div>
  )
}


export default App;
