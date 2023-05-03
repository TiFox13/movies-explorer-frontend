 class MainApi {
  constructor(object) {
    this._url = object.url;  //тут будет адрес для запроса
    this._headers = object.headers;
    this._token = object.token; 
  }

  // штука от дублирования кода
  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  _request(url, options) {
    return fetch(url, options).then(this._getResponseData)
  }



  // ПОЛУЧЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
  getUserInfo() {
    return this._request(`${this._url}/users/me`,
      {
        headers: 
          // authorization: `Bearer ${this._token}`,
          this._headers,
        method: "GET"
      }
    )
  }

  // ИЗМЕНЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
  patchUserInfo({name, email}) {
    return this._request(`${this._url}/users/me`,
      {
        method: "PATCH",
        headers: {
          "Content-type": 'application/json',
        authorization: `Bearer ${this._token}`,
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
      }
    )
  }

  getSavedMovies() {
    return this._request(`${this._url}/movies`,
    {
      headers: {
        authorization: `Bearer ${this._token}`,
        "Content-type": 'application/json',
      },
      method: "GET"
    }
  )
  }

  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЕННЫЕ
  saveMovie(movie) {
    return this._request(`${this._url}/movies`,
      {
        method: "POST",
        headers: {
          "Content-type": 'application/json',
          authorization: `Bearer ${this._token}`,
        },
        body: JSON.stringify({
          country: movie.country,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          description: movie.description,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${movie.image.url}`,  //все бы хорошо, поле обязательное, но его в базе у объектов НЕТ!
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          movieId: movie.id, // тоже нет в объектах с сервера
          // owner: "req.user._id",
        })
      }
    )
  }

  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЕННЫХ 
deleteMovie(movie) {
  return this._request(`${this._url}/movies/${movie}`,
  {
    method: "DELETE",
    headers: {
      "Content-type": 'application/json',
      authorization: `Bearer ${this._token}`,
    }
  })
}
 } 

//подключаем API
 export const mainApi = new MainApi({
  token: localStorage.getItem('jwt'),
  url: "http://localhost:3000",
  headers: {
    "Content-type": 'application/json'
  }
});