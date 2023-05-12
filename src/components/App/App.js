import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom';

import './App.css';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import { authMessages, userMessages, movieMessages } from '../../utils/constants';

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


const [loggedIn, setLoggedIn] = React.useState(false);
// пользователь
const [currentUser, setCurrentUser] = React.useState({});

// чекбокс 
const [isChecked, setIsChecked] = React.useState(JSON.parse(localStorage.getItem('checkbox')) || false);
// сюда будем кидать отфильтрованные фильмы
const [filteredMovies, setFilteredMovies] = React.useState(JSON.parse(localStorage.getItem('filteredMovies')) || [])
const [filteredSavedMovies, setFilteredSavedMovies] = React.useState(JSON.parse(localStorage.getItem('savedMovies')) || [])
// все фильмы
const [currentMovies, setMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) || {});
// сохраненные фильмы
const [savedMoviesList, setSavedMoviesList] = React.useState([])

// переменные для ошибок
const [isFound, setIsFound] = React.useState(true);
const [isFoundSaveMovies, setIsFoundSaveMovies] = React.useState(true)

const [errorMessageMovies, setIsErrorMessageMovies] = React.useState(false);
const [errorMessageSavedMovies, setIsErrorMessageSavedMovies] = React.useState(false);
// загрузка
const [isLoading, setIsLoading] = React.useState(false);


// ПРОВЕРКА ТОКЕНА
React.useEffect(() => {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    Auth.getToken(jwt)
      .then((res) => {
        setLoggedIn(true);
// забираем информацию о пользователе
        setCurrentUser(res);  
      })
      .catch((error) => {
        console.log(error); // выведем ошибку в консоль
      })
  }
}, []);

// ВЫХОД ИЗ ПРИЛОЖЕНИЯ
function signOut() {
  localStorage.removeItem('jwt')
  localStorage.removeItem('movies')
  localStorage.removeItem('filteredMovies')
  localStorage.removeItem('key')
  localStorage.setItem('checkbox', false)
  localStorage.removeItem('savedMovies')

  setFilteredMovies([]);
  setFilteredSavedMovies([]);

  setLoggedIn(false);
  navigate('/');
};

// информационное окно. успешна регистрация/логин или нет
const [infoTooltipOpen, setInfoTooltipOpened] = React.useState(false);  
// ошибки и сообщения для информационного окна
const [message, setMessage] = React.useState('');

// функция открытия  информационного окна
function handleInfoTooltipOpen() {   
  setInfoTooltipOpened(true);
}

// функция закрытия  информационного окна
function closeInfoTooltip() {  
  setInfoTooltipOpened(false);
}

// РЕГИСТРАЦИЯ
function handleRegister(name, email, password) {
  setIsLoading(true);
  Auth.register(name, email, password)
    .then(() => {
      setMessage(authMessages.REGISTER)
      handleInfoTooltipOpen() // открытие информационного окна. успешна регистрация
    })
    .catch(() => {
      setMessage(authMessages.AUTH_ERROR)
      handleInfoTooltipOpen() // открытие информационного окна об ошибке
    })
    .finally(() => {
      setIsLoading(false)
    })
}

// ЛОГИН
function handleLogin(email, password) {
  setIsLoading(true);
  Auth.login(email, password)
    .then((data) => {  
      if (data.token) {   
      localStorage.setItem('jwt', data.token)
      }
    })
    .then(()=> {
      Auth.getToken(localStorage.getItem('jwt'))
        .then((res) =>{
          setCurrentUser(res);
          setLoggedIn(true)
        })
        .then(() => {
          navigate('/movies') // перенаправление на фильмы
        })
        .catch((error) => {
          console.log(error); // выведем ошибку в консоль
        }) 
    })
    .catch(() => {
      setMessage(authMessages.AUTH_ERROR)
      handleInfoTooltipOpen() // открытие информационного окна об ошибке
    })
    .finally(() => {
      setIsLoading(false)
    })
    setMessage('')  
}

// ОБНОВЛЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
function handleUpdateUser({name, email}) {
  setIsLoading(true)
  const token = localStorage.getItem('jwt');
  mainApi.patchUserInfo({name, email, token})
  .then((res) => {
    setCurrentUser(res)
    setMessage(userMessages.UPDATE_OK)
    handleInfoTooltipOpen() // открытие информационного окна. успешное обновление
  })
  .catch((error) => {
    console.log(error) // выведем ошибку в консоль
    setMessage(userMessages.UPDATE_ERROR)
    handleInfoTooltipOpen() // открытие окна ошибки при обновлении
  })
  .finally(() => {
    setIsLoading(false)
  })
}

//////////////////////////////////////////////////////////
// РАБОТА С ФИЛЬМАМИ
/////////////////////////////////////////////////////////

// ПОЛУЧЕНИЕ ФИЛЬМОВ
React.useEffect(() => {
  // если в хранилище еще нет фильмов, то их надо получить
    if (loggedIn && !currentMovies.length) {
      setIsLoading(true)
      return moviesApi.getMovies()
        .then((res) => {
          setMovies(res);
          // сохраняем фильмы в локальном хранилище
          localStorage.setItem('movies', JSON.stringify(res))
        })
        .catch((error) => {
          console.log(error) // выведем ошибку в консоль
          setIsErrorMessageMovies(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [loggedIn])

  // ПОЛУЧЕНИЕ СОХРАНЕННЫХ ФИЛЬМОВ
  React.useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem('jwt');
      mainApi.getSavedMovies(token)
        .then((res) => {
          setSavedMoviesList(res);
          localStorage.setItem('savedMovies', JSON.stringify(res));
        })
        .catch(err => {
          console.log(err);
          setIsErrorMessageSavedMovies(true)
        })
    }
  }, [loggedIn]);

  // СОХРАНИТЬ ФИЛЬМ
  function saveMovie(movie) {  
    const token = localStorage.getItem('jwt');
    mainApi.saveMovie(movie, token)
    .then((res) => {
      setSavedMoviesList([...savedMoviesList, res])
    })
    .catch((err) => {
      console.log(err)
      setMessage(movieMessages.SAVE_ERROR)
      handleInfoTooltipOpen() 
    })
  }

  // УДАЛИТЬ ФИЛЬМ
  function deleteMovie(movie) {
    const token = localStorage.getItem('jwt');
    const savedMovie = savedMoviesList.find((item) => {
      if (item.movieId === movie.id || item.movieId === movie.movieId) {
        return item
      }
    })     
    mainApi.deleteMovie(savedMovie._id, token)
      .then((res) => {
        const newMoviesList = savedMoviesList.filter((m) => {
        return ( savedMovie._id !== m._id)
        })
        setSavedMoviesList(newMoviesList);
      })
      .catch((err) => {
        console.log(err)
        setMessage(movieMessages.DELETE_ERROR)
        handleInfoTooltipOpen() 
      })
  }

////////////////////////////////////////////////////////
// ФИЛЬТРАЦИЯ ФИЛЬМОВ
////////////////////////////////////////////////////////

  // меняет состояние чекбокса на основной странице
  function onChangeCheckboxAllMovies() {
    setIsChecked(!isChecked);
    localStorage.setItem('checkbox', JSON.stringify(isChecked));
    if (filteredMovies.length !== 0) {
    if (!isChecked) {
      filterShortAllMovies(filteredMovies)
    } else {
      setFilteredMovies(JSON.parse(localStorage.getItem('filteredMovies')))
    }
  }
}

  // фильтр по ключевым словам
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
 if (movies.length !== 0 ) {
    const filteredShortMovies = movies.filter((movie) => {
      return movie.duration <= 40;
    })
    return filteredShortMovies
  } 
}

 function filterShortAllMovies(movies) {
  const filteredShortMovies = filterShortMovies(movies)
     if (filteredShortMovies.length === 0) {
       setIsFound(false);
       setFilteredMovies(filteredShortMovies);
     } else {
       setIsFound(true);
       setFilteredMovies(filteredShortMovies);
     }
   }

  // ФИЛЬТР ДЛЯ ВСЕХ ФИЛЬМОВ
  function filterMovies( key) {
        localStorage.setItem('key', key)
    // ищем по ключевому слову
    const filteredByKeywordMovies = filterKeyword(currentMovies, key);
    localStorage.setItem('filteredMovies', JSON.stringify(filteredByKeywordMovies));
    //высветить ошибку, если мы ничего не нашли
    if (filteredByKeywordMovies.length !== 0) {
      setIsFound(true);
    } else {
      setIsFound(false);
    }
    setFilteredMovies(filteredByKeywordMovies);
    //ищем короткие фильмы, если нужно
    if (isChecked) {
      return filterShortAllMovies(filteredByKeywordMovies);
    }
  }

   function filterShortSavedMovies(movies) {
    const filteredShortMovies = filterShortMovies(movies)
    if (filteredShortMovies.length === 0) {
      setIsFoundSaveMovies(false);
      setFilteredSavedMovies(filteredShortMovies);
    } else {
      setIsFoundSaveMovies(true);
      setFilteredSavedMovies(filteredShortMovies);
    }
     }
     
  // ФИЛЬТР ДЛЯ СОХРАНЕННЫХ ФИЛЬМОВ
  function filterSavedMovies(key) {
    const filteredByKeywordMovies = filterKeyword(savedMoviesList, key);
    if (filteredByKeywordMovies.length === 0) {
      setIsFoundSaveMovies(false);
    } else {
      setIsFoundSaveMovies(true);
    }
    setFilteredSavedMovies(filteredByKeywordMovies);
    if (isChecked) {
      filterShortSavedMovies(filteredByKeywordMovies)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>   
    <div className="page">
      <div className="page__content">
        <Routes>
          <Route path='/' element={
            <Main loggedIn={loggedIn} profileLinkActiveClass='link-active'/>
           } />

          <Route path='/signup' element={ 
            <Register handleSubmit={handleRegister} isLoading={isLoading} />
          } />

          <Route path='/signin' element={
            <Login handleSubmit={handleLogin} isLoading={isLoading}/>
          } />

          <Route path='/profile' element={ <ProtectedRouteElement loggedIn={loggedIn} element={
            <>
              <Header>
                <Navigation  profileLinkActiveClass='link-active' />
              </Header>
              <Profile  user={currentUser} onUpdate={handleUpdateUser} isLoading={isLoading} signOut={signOut}/>
             </>
          } />
          } />
                  
          <Route path='/movies' element={ <ProtectedRouteElement loggedIn={loggedIn} element={
            <>
              <Header>
                <Navigation linkMoviesActiveClass='link-active'/>
              </Header>
              <Movies 
                filterShortAllMovies={filterShortAllMovies}
                setFilteredMovies={setFilteredMovies}
                filteredMovies={filteredMovies}
                savedMoviesList={savedMoviesList}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                submitSearch={filterMovies}
                isChecked={isChecked}
                isLoading={isLoading}
                onChangeCheckbox={onChangeCheckboxAllMovies}
                errorMessageMovies={errorMessageMovies}
                isFound={isFound}
              />
              <Footer />
            </>
          } />
          } />

          <Route path='/saved-movies' element={ <ProtectedRouteElement loggedIn={loggedIn} element={
            <>
              <Header>
                <Navigation  linkActiveClass='link-active'/>
              </Header>
              <SavedMovies 
                setIsFound={setIsFoundSaveMovies}

                filterShortSavedMovies={filterShortSavedMovies}

                setFilteredSavedMovies={setFilteredSavedMovies}
                deleteClass='movie__button_delete'
                filteredSavedMovies={filteredSavedMovies}
                savedMoviesList={savedMoviesList}
                submitSearch={filterSavedMovies}
                deleteMovie={deleteMovie}
                saveMovie={saveMovie}
                isChecked={isChecked}
                isLoading={isLoading}
   
                errorMessageSavedMovies={errorMessageSavedMovies}
                isFound={isFoundSaveMovies}
              />
              <Footer />
            </>
          } />
          } />

        <Route path='*' element={<Error />}/>

        </Routes>
        
        <InfoTooltip 
          isOpen={infoTooltipOpen} 
          onClose={closeInfoTooltip} 
          message={message}/>
      </div>
    </div>
    </CurrentUserContext.Provider>  
  )
}

export default App;
