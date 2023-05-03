import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CurrentMovieContext } from '../../contexts/CurrentMovieContext'
import { CurrentSavedMoviesContext } from '../../contexts/CurrentSavedMoviesContext';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import Movies from '../Movies/Movies';

import SearchForm from '../SearchForm/SearchForm';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Error from '../Error/Error';

import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';
import * as Auth from '../../utils/Auth';


function App() {

const navigate = useNavigate();
// переменные состояния
const [loggedIn, setLoggedIn] = React.useState(true);
// const [user, setUser] = React.useState({});
const [currentUser, setCurrentUser] = React.useState([]);

// фильмы
const [currentMovie, setMovies] = React.useState([]);



// забираем с сервера данные о пользователе
// React.useEffect(() => {
//   if (loggedIn) {
//     console.log('типа забрали')
//     mainApi.getUserInfo()
//     .then((res) => {
//       console.log(res)
//       setCurrentUser(res)
//     })
//     .catch((error) => {
//       console.log(error)  // выведем ошибку в консоль
//     })
//   }
// }, [])

// ПРОВЕРКА ТОКЕНА
React.useEffect(() => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    Auth.getToken(jwt)
      .then((res) => {
        setLoggedIn(true);

        setCurrentUser(res);   //current или просто user????

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
  navigate('/signin');
};

const [message, setMessage] = React.useState('');
const [infoTooltipOpen, setInfoTooltipOpened] = React.useState(false);  //информационное окно. успешна регистрация/логин или нет

function handleInfoTooltipOpen() {   // открытие информационного окна. успешна регистрация/логин или нет
  setInfoTooltipOpened(true);
}
function closeInfoTooltip() {
  setInfoTooltipOpened(false);
}

// РЕГИСТРАЦИЯ
function handleRegister(name, email, password) {

  Auth.register(name, email, password)
    .then(() => {
      setMessage('Вы успешно зарегистрировались!')
      handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация/логин или нет
    })
    .catch(() => {
      setMessage('Что-то пошло не так! Попоробуйте еще раз.')
      handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация/логин или нет
    })
}


// ЛОГИН
function handleLogin(email, password) {
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
          setCurrentUser(res.data);
          navigate('/movies') // перенаправление на фильмы
        })
        .catch((error) => {
          console.log(error); // выведем ошибку в консоль
        }) 
  })
    .catch(() => {
      setMessage('Что-то пошло не так! Попоробуйте еще раз.')
      handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация/логин или нет
    })
    setMessage('')  
}


// обновление информации о пользователе
function handleUpdateUser({name, email}) {
  mainApi.patchUserInfo({name, email})
  .then((res) => {
    setCurrentUser(res)
  })
  .catch((error) => {
    console.log(error) // выведем ошибку в консоль
  })
}


const storageMovies = JSON.parse(localStorage.getItem('movies')) || [];
// получение фильмов
function handleGetMovies() {
  // если в хранилище еще нет фильном, то их надо получить
  if (!storageMovies.length) {
    moviesApi.getMovies()
  .then((res) => {
    // мы получили все фильмы.
    setMovies(res);

// сохраняем фильмы в локальном хранилище
  localStorage.setItem('movies', JSON.stringify(res))
    //( а еще надо так же сохранить состояние преключателя

    // и текст запроса)

  })
  .catch((error) => {
    console.log(error) // выведем ошибку в консоль
  })
} else {
  // если они есть, то
  setMovies(storageMovies)
  
}

  }
  

//при перезагрузке данные берутся уже не с сервера а из локального хранилища

// РАБОТА С СОХРАНЕННЫМИ КАРТОЧКАМИ

  const [savedMoviesList, setSavedMoviesList] = React.useState([])

    // Получение массива сохраненных фильмов
    React.useEffect(() => {
      if (loggedIn) {
        mainApi.getSavedMovies()
          .then((res) => {
            setSavedMoviesList(res);
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, [loggedIn]);
    

  // function saveMovie(thisMovie) {
      // mainApi.saveMovie(thisMovie)
      // .then((res) => {
      //   setSavedMoviesList([res, ...savedMoviesList])
      // })
      // .then((res) => {
        // setIsSaved(true);
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
    // }
    // function deleteMovie(thisMovie) {
    //   const savedMovie = savedMoviesList.find((item) => {
    //     if (item.movieId === thisMovie.id) {
    //       return item
    //     } else {
    //       return savedMoviesList
    //     }
  
    //   })     
  // mainApi.deleteMovie(savedMovie._id)
  //     .then((res) => {
  //       console.log('удалили');
        // setIsSaved(false);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
    // }
  




  return (
    <div className="page">
      <div className="page__content">
        <Routes>
  
          <Route path='/' element={<Main/> } />

          <Route path='/signup' element={ 
            <>
              <Register handleSubmit={handleRegister} />
              <InfoTooltip isOpen={infoTooltipOpen} onClose={closeInfoTooltip} message={message} />
            </>
            
          } />

          <Route path='/signin' element={
            <>
              <Login handleSubmit={handleLogin}/>
              <InfoTooltip isOpen={infoTooltipOpen} onClose={closeInfoTooltip} message={message}/>
            </>
          } />

          <Route path='/error' element={
                      <Error />
                    } 
                    />

          

          <Route path='/profile' element={
        
<CurrentUserContext.Provider value={currentUser}>   
              <Header>
                <Navigation  profileLinkActiveClass='link-active' />
              </Header>
              <Profile  user={currentUser} onUpdate={handleUpdateUser} signOut={signOut}/>
</CurrentUserContext.Provider>  
  
          } />
          
          <Route path='/movies' element={(
            <>
              <Header>
                <Navigation linkMoviesActiveClass='link-active'/>
              </Header>

<CurrentMovieContext.Provider value={currentMovie}>
  <CurrentSavedMoviesContext.Provider value={{savedMoviesList, setSavedMoviesList}}>
     <Movies  getMovies={handleGetMovies}  />
  </CurrentSavedMoviesContext.Provider>
             

</CurrentMovieContext.Provider>

              <Footer />
            </>
            )} />

          <Route path='/saved-movies' element={
            <>
              <Header>
                <Navigation  linkActiveClass='link-active'/>
              </Header>
<CurrentMovieContext.Provider value={currentMovie}>
<CurrentSavedMoviesContext.Provider value={{savedMoviesList, setSavedMoviesList}}>
    <Movies  getMovies={handleGetMovies}  deleteClass='movie__button_delete'  />
</CurrentSavedMoviesContext.Provider>
            
</CurrentMovieContext.Provider>
              {/* <main>
                <SearchForm />
                <MoviesCardList deleteClass='movie__button_delete' />
              </main> */}
              <Footer />
            </>
          } />
  
         
        </Routes>
      </div>
    </div>
  )
}


export default App;
