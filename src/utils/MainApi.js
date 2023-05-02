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

  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЕННЫЕ  post


  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЕННЫХ  delete

 } 

//подключаем API
 export const mainApi = new MainApi({
  token: localStorage.getItem('jwt'),
  url: "http://localhost:3000",
  headers: {
    "Content-type": 'application/json'
  }
});