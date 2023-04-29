export const BASE_URL = 'http://localhost:3000';

// ответы сервера 
const getResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};


// РЕГИСТРАЦИЯ
export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({name, email, password })
  })
    .then(getResponse)
}

// ЛОГИН
export const login = (email, password) => {
  return (
    fetch(`${BASE_URL}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
      .then(getResponse)

  )
}

// ПРОВЕРКА ТОКЕНА
export const getToken = (token) => {
  return (
    fetch(`${BASE_URL}/users/me`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then(getResponse)
  )
}