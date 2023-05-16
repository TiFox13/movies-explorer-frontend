 import { BASE_URL } from "./constants";

 class MainApi {
  constructor(object) {
    this._url = object.url;  //тут будет адрес для запроса
    // this.token = object.token;
  }

  // штука от дублирования кода
  _getResponseData = (res) =>  {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData);
  }



  // ПОЛУЧЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
  getUserInfo(token) {
    return this._request(`${this._url}/users/me`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": 'application/json'
        },
        method: "GET"
      })
  }

  // ИЗМЕНЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
  patchUserInfo({name, email, token}) {
    return this._request(`${this._url}/users/me`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": 'application/json'
        },
        method: "PATCH",
        body: JSON.stringify({
          name: name,
          email: email
        })
      })
  }

  getSavedMovies(token) {
    return this._request(`${this._url}/movies`,
    {
      headers: {
        authorization: `Bearer ${token}`,
        "Content-type": 'application/json'
      },
      method: "GET"
    })
  }

  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЕННЫЕ
  saveMovie(movie, token) {
    return this._request(`${this._url}/movies`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-type": 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          movieId: movie.id, 
        })
      })
  }

  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЕННЫХ 
deleteMovie(movie, token) {
  return this._request(`${this._url}/movies/${movie}`,
  {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-type": 'application/json'
    },
    method: "DELETE",
  })
}
 } 

//подключаем API
 export const mainApi = new MainApi({
  url: BASE_URL,
  // token: localStorage.getItem('jwt'),
});