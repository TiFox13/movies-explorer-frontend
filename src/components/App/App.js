import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';

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

import { mainApi } from '../../utils/MainApi';
import * as Auth from '../../utils/Auth';

function App() {

const navigate = useNavigate();
// переменные состояния
const [loggedIn, setLoggedIn] = React.useState(true);
const [user, setUser] = React.useState({});
const [currentUser, setCurrentUser] = React.useState([]);


// забираем с сервера данные о пользователе
React.useEffect(() => {
  if (loggedIn) {
    console.log('типа забрали')
    // mainApi.getUserInfo()
    // .then((res) => {
    //   console.log(res)
    //   setCurrentUser(res)
    // })
    // .catch((error) => {
    //   console.log(error)  // выведем ошибку в консоль
    // })
  }
}, [])

// ПРОВЕРКА ТОКЕНА
React.useEffect(() => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    Auth.getToken(jwt)
      .then((res) => {
        setLoggedIn(true);
        setUser(res);   //не записывается инфа про юзера

        navigate('/');
      })
      .catch((error) => {
        console.log(error); // выведем ошибку в консоль
      })

  }
}, []);

// ВЫХОД ИЗ ПРИЛОЖЕНИЯ
function signOut() {
  localStorage.removeItem('jwt');
  setLoggedIn(false);
  navigate('/sign-in');
};


const [massage, setMessage] = React.useState('');
// const  [infoTooltipOpen, setInfoTooltipOpened] = React.useState(false);  //информационное окно. успешна регистрация/логин или нет
const [statusForInfoTooltip, setStatusForInfoTooltip] =React.useState('')

// function handleInfoTooltipOpen() {   // открытие информационного окна. успешна регистрация/логин или нет
//   setInfoTooltipOpened(true);
// }

// РЕГИСТРАЦИЯ
function handleRegister(name, email, password) {

  Auth.register(name, email, password)
    .then(() => {
      setMessage('Вы успешно зарегистрировались!')
      setStatusForInfoTooltip('ok')
      // handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация/логин или нет
    })
    .catch(() => {
      setMessage('Что-то пошло не так! Попоробуйте еще раз.')
      setStatusForInfoTooltip('no')
      // handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация/логин или нет
    })
}


// ЛОГИН
function handleLogin(email, password ) {
  Auth.login(email, password)
    .then((data) => {      
      if (data.token){
        localStorage.setItem('jwt', data.token)
        setLoggedIn(true)
      }
    })
    .then(()=> {
      Auth.getToken(localStorage.getItem('jwt'))
        .then((res) =>{
          setUser(res.data);
          navigate('/movies') // перенаправление на фильмы
        })
    .then(() => {
      
    })
        .catch((error) => {
          console.log(error); // выведем ошибку в консоль
        }) 
  })
    .catch(() => {
      setMessage('Что-то пошло не так! Попоробуйте еще раз.')
      setStatusForInfoTooltip('no')
      // handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация/логин или нет
    })
    setMessage('')  
}





  return (
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={<Main/> } />

          <Route path='/signup' element={ 
            <Register handleSubmit={handleRegister} />
          } />

          <Route path='/signin' element={
            <Login handleSubmit={handleLogin}/>
          } />

          <Route path='/profile' element={
            <>
              <Header>
                <Navigation  profileLinkActiveClass='link-active' />
              </Header>
              <Profile  user={currentUser}/>
            </>
          } />
          
          <Route path='/error' element={
                      <Error />
                    } 
                    />

          <Route path='/movies' element={(
            <>
              <Header>
                <Navigation linkMoviesActiveClass='link-active'/>
              </Header>
              <main>
                <SearchForm />
                <MoviesCardList />
              </main>
              <Footer />
            </>
            )} />

          <Route path='/saved-movies' element={
            <>
              <Header>
                <Navigation  linkActiveClass='link-active'/>
              </Header>
              <main>
                <SearchForm />
                <MoviesCardList deleteClass='movie__button_delete' />
              </main>
              <Footer />
            </>
          } />

         
          
        </Routes>
      </div>
    </div>
  )
}


export default App;
