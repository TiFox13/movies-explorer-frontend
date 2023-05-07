import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { CurrentMoviesContext } from '../../contexts/CurrentMoviesContext';
import { CurrentSavedMoviesContext } from '../../contexts/CurrentSavedMoviesContext';

import Main from '../Main/Main';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';


import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
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


// ОБНОВЛЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
function handleUpdateUser({name, email}) {
  mainApi.patchUserInfo({name, email})
  .then((res) => {
    setCurrentUser(res)
  })
  .catch((error) => {
    console.log(error) // выведем ошибку в консоль
  })
}





//////////////////////////////////////////////////////////
// РАБОТА С ФИЛЬМАМИ
/////////////////////////////////////////////////////////


// все фильмы
const [currentMovies, setMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) || []);


// ПОЛУЧЕНИЕ ФИЛЬМОВ
  React.useEffect(() => {
// если в хранилище еще нет фильмов, то их надо получить
  if (!currentMovies.length) {
    moviesApi.getMovies()
  .then((res) => {
    // мы получили все фильмы.
    setMovies(res);

// сохраняем фильмы в локальном хранилище
  localStorage.setItem('movies', JSON.stringify(res))

  })
  .catch((error) => {
    console.log(error) // выведем ошибку в консоль
  })
  }
}, [])


////////////////////////////////////////////////
// РАБОТА С СОХРАНЕННЫМИ ФИЛЬМАМИ
//////////////////////////////////////////////

  const [savedMoviesList, setSavedMoviesList] = React.useState([])

    // Получение массива сохраненных фильмов
    React.useEffect(() => {
      if (loggedIn) {
        mainApi.getSavedMovies()
          .then((res) => {
            setSavedMoviesList(res);
            // // сохраняем фильмы в локальном хранилище
            // localStorage.setItem('savedMovies', JSON.stringify(res))
          })
          .catch(err => {
            console.log(err);
          })
      }
    }, []);
    

    
// СОХРАНИТЬ ФИЛЬМ
function saveMovie(movie) {  

  mainApi.saveMovie(movie)
  .then((res) => {
    setSavedMoviesList([...savedMoviesList, res])
  })
  .catch((err) => {
    console.log(err)
  })
}

// УДАЛИТЬ ФИЛЬМ
function deleteMovie(movie) {
  console.log("movie еще не вошли в find", movie)
  const savedMovie = savedMoviesList.find((item) => {
    if (item.movieId === movie.id || item.movieId === movie.movieId) {
      console.log("да")
       return item
    }
  })     

mainApi.deleteMovie(savedMovie._id)
  .then((res) => {
    const newMoviesList = savedMoviesList.filter((m) => {
     return ( savedMovie._id !== m._id)
    })
    console.log("newMoviesList",newMoviesList)
    setSavedMoviesList(newMoviesList);
  })
  .catch((err) => {
    console.log(err)
  })
}


////////////////////////////////////////////////////////
// ФИЛЬТРАЦИЯ ФИЛЬМОВ
////////////////////////////////////////////////////////

// чекбокс 
const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')));
// сюда будем кидать отфильтрованные фильмы
  const [filteredMovies, setFilteredMovies] = React.useState(JSON.parse(localStorage.getItem('filteredMovies')) || [])
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState(JSON.parse(localStorage.getItem('filteredSavedMovies')) || [])
// переменная для ошибки
const [notFound, setIsNotFound] = React.useState(true);
const [errorMessage, setIsErrorMessage] = React.useState(true);
// загрузка
const [isLoading, setIsLoading] = React.useState(false);

// меняет состояние чекбокса
function onChangeCheckbox() {
  setIsChecked(!isChecked);
}

// обновляет localStorage для чекбокса и фильмов
React.useEffect (() => {
  localStorage.setItem('checkbox', JSON.stringify(isChecked));
  localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
}, [isChecked, filteredMovies])

  //фильтр по ключевым словам
  function filterKeyword(movies, key) {
    let filteredByKeywordMovies = [];
    movies.forEach((movie) => {
      if (movie.nameRU.toLowerCase().includes(key.toLowerCase())) {
        filteredByKeywordMovies.push(movie);
      }
    });
    return filteredByKeywordMovies;
  }

  //фильтр фильмов по времени
  function filterShortMovies(movies) {
      return  movies.filter((movie) => {
        return movie.duration <= 40;
      })
  }

  // общий фильтр
  function filterMovies( key) {
    localStorage.setItem('key', JSON.stringify(key))
    // ищем по ключевому слову
    const filteredByKeywordMovies = filterKeyword(currentMovies, key);

    //высветить ошибку, если мы ничего не нашли
    if (filteredByKeywordMovies.length !== 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
 
    //ищем короткие фильмы, если нужно
    if (isChecked) {
      const filteredShortMovies = filterShortMovies(filteredByKeywordMovies);
      if (filteredShortMovies.length === 0) {
        setIsNotFound(true);
        setFilteredMovies(filteredShortMovies);
      } else {
        setIsNotFound(true);
        setFilteredMovies(filteredShortMovies);
      }
    } else {
      setFilteredMovies(filteredByKeywordMovies);
    }
  }

// фильтр для сохраненных фильмов

  function filterSavedMovies(key) {
    localStorage.setItem('key', JSON.stringify(key))
    const filteredByKeywordMovies = filterKeyword(savedMoviesList, key);
    if (filteredByKeywordMovies.length === 0) {
      setIsNotFound(false);
    } else {
      setIsNotFound(true);
    }

    if (isChecked) {
      const filteredShortMovies = filterShortMovies(filteredByKeywordMovies);
      if (filteredShortMovies.length === 0) {
        setIsNotFound(true);
        setFilteredSavedMovies(filteredShortMovies);
      } else {
        setIsNotFound(true);
        setFilteredSavedMovies(filteredShortMovies);
      }
    } else {
      setFilteredSavedMovies(filteredByKeywordMovies);
    }
  }

  // function submitSearch(key) {
  //   localStorage.setItem('key', JSON.stringify(key))

  //   filterMovies( key)

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
     <Movies 
      filteredMovies={filteredMovies}
      savedMoviesList={savedMoviesList}

      saveMovie={saveMovie}
      deleteMovie={deleteMovie}
      submitSearch={filterMovies}

      isChecked={isChecked}
      isLoading={isLoading}
      onChangeCheckbox={onChangeCheckbox}

      errorMessage={errorMessage}
      notFound={notFound}
     />
              <Footer />
            </>
            )} />

          <Route path='/saved-movies' element={
            <>
              <Header>
                <Navigation  linkActiveClass='link-active'/>
              </Header>

    <SavedMovies 
setIsNotFound={setIsNotFound}

    setFilteredSavedMovies={setFilteredSavedMovies}
      deleteClass='movie__button_delete'
      filteredSavedMovies={filteredSavedMovies}
      savedMoviesList={savedMoviesList}
      submitSearch={filterSavedMovies}
      deleteMovie={deleteMovie}
      saveMovie={saveMovie}

      isChecked={isChecked}
      isLoading={isLoading}
      onChangeCheckbox={onChangeCheckbox}

      errorMessage={errorMessage}
      notFound={notFound}
    />

              <Footer />
            </>
          } />
  
         
        </Routes>
      </div>
    </div>
  )
}


export default App;
