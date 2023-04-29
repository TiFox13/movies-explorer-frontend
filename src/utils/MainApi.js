 class MainApi {
  constructor(object) {
    this._url = object.url;  //тут будет адрес для запроса
    this._headers = object.headers;
    // this._token = 'token';   // позже тут будет object.token
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
    // return this._request(`${this._url}/users/me`,
    //   {
    //     headers: 
    //       // authorization: `Bearer ${this._token}`,
    //       this._headers,
    //     method: "GET"
    //   }
    // )
  }

  // ИЗМЕНЕНИЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЕ
  // patchUserInfo(item) {
  //   return this._request(`${this._url}/users/me`,
  //     {
  //       method: "PATCH",
  //       headers: {
  //         "Content-type": 'application/json',
  //       authorization: `Bearer ${this._token}`,
  //       },
  //       body: JSON.stringify({
  //         name: item.name,
  //         email: item.email
  //       })
  //     }
  //   )
  // }
  // ДОБАВИТЬ ФИЛЬМ В СОХРАНЕННЫЕ  post


  // УДАЛИТЬ ФИЛЬМ ИЗ СОХРАНЕННЫХ  delete

 } 

//подключаем API
 export const mainApi = new MainApi({
  url: "http://localhost:3000",
  headers: {
    authorization: '532cb979-197b-4764-a60b-369a0c33ba6e',
    "Content-type": 'application/json'
  }
});