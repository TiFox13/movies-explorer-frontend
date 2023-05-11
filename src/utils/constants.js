export const BASE_URL = 'https://84.201.172.248'

export const VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 30,
    message: 'Имя должно содержать больше 2 символов и менее 30'
  },
  email: {
    pattern: "[-a-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(?:aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$",
    message: 'Некорректный формат E-mail'
    },
  password: {
    minLength: 4,
    maxLength: 30,
    message: 'Пароль не может быть короче 4 символов'
  }
}

export const breakpoints = {
  SCREEN_S: 620,
  SCREEN_M: 900,
  SCREEN_L: 1280,
}
export const numbersOfFilms = {
  MOBILE: 5,
  TABLET: 8,
  DESKTOP: 12,
}

export const searchMessages = {
  SEARCH_ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.',
  KEY: 'Нужно ввести ключевое слово',
  NOT_SAVED: 'У вас еще нет сохраненных фильмов',
  NOT_FOUND: 'Ничего не найдено',
}

export const authMessages = {
  REGISTER: 'Вы успешно зарегистрировались!',
  AUTH_ERROR: 'Что-то пошло не так! Попоробуйте еще раз.',
}


export const userMessages = {
  UPDATE_OK: 'Ваши данные успешно обновлены!',
  UPDATE_ERROR: 'При одновлении данных произошла ошибка. Подождите немного и попроуйте снова'
}

export const movieMessages = {
  SAVE_ERROR: 'При сохранении фильма произошла ошибка. Перезагрузите страницу и попробуйте снова',
  DELETE_ERROR: 'При удалении фильма произошла ошибка. Перезагрузите страницу и попробуйте снова'
}
