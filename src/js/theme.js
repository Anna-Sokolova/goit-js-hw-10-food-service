// Файл для изменения темы

import menuRef from './refs.js'; //подключаем файл с основными доступами к ДОМ элементам
const { btnCheck, body } = menuRef; // делаем деструктуризацию в безымянном экспорте по основным переменным, чтобы получить к ним доступ
// console.log(btnCheck, body);

//Хранение списка тем
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
// console.log(Theme);

// функция для изменения темы при перетягивании ползунка(добавляет или удаляет класс с body и записывает текущую тему в LS)
function handleChangeTheme(e) {
  body.classList.toggle(Theme.DARK);
  body.classList.toggle(Theme.LIGHT);

  if (!e.target.checked) {
    localStorage.setItem('setting', Theme.LIGHT);
  } else {
    localStorage.setItem('setting', Theme.DARK);
  }
}

// функция для проверки состояния ползунка чекбокса и текущей темы
function updateLS() {
  if (localStorage.setting === Theme.DARK) {
    body.classList.add(Theme.DARK);
    btnCheck.checked = true;
  } else {
    body.classList.add(Theme.LIGHT);
  }
}


updateLS(); //вызываем функцию для проверки текущей темы

btnCheck.addEventListener('change', handleChangeTheme); //вешаем слушателя события на кнопку чекбокс
