 class MainApi {
  constructor(object) {
    this._url = object.url;  //тут будет адрес для запроса
    this._headers = object.headers;
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
        headers: this._headers,
        method: "GET"
      }
    )
  }

  // ИЗМЕНЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
  patchUserInfo({name, email}) {
    return this._request(`${this._url}/users/me`,
      {
        headers: this._headers,
        method: "PATCH",
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
      headers: this._headers,
      method: "GET"
    }
  )
  }

  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЕННЫЕ
  saveMovie(movie) {
    return this._request(`${this._url}/movies`,
      {
        headers: this._headers,
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
      }
    )
  }

  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЕННЫХ 
deleteMovie(movie) {
  return this._request(`${this._url}/movies/${movie}`,
  {
    headers: this._headers,
    method: "DELETE",
  })
}
 } 

//подключаем API
 export const mainApi = new MainApi({
  url: "http://localhost:3000",
  headers: {
    authorization: `Bearer ${localStorage.getItem('jwt')}`,
    "Content-type": 'application/json'
  }
});