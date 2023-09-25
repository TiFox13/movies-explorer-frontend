class MoviesApi {
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


getMovies() {
  return this._request(`${this._url}`, 
  {
    method: "GET",
    headers: this._headers,
  })
}
} 

//подключаем API
 export const moviesApi = new MoviesApi({
  token: localStorage.getItem('jwt'),
  url: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-type": 'application/json'
  }
});