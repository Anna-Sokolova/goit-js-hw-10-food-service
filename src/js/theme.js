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
  if (!e.target.checked) {
    // body.classList.add(Theme.LIGHT);
    // body.classList.remove(Theme.DARK);
    // localStorage.setItem('setting', Theme.LIGHT);
    replaceTheme(Theme.LIGHT, Theme.DARK);
  } else {
    // body.classList.add(Theme.DARK);
    // body.classList.remove(Theme.LIGHT);
    // localStorage.setItem('setting', Theme.DARK);
    replaceTheme(Theme.DARK, Theme.LIGHT);
  }
}

// функция для проверки состояния ползунка чекбокса и текущей темы
function updateLS() {
  if (localStorage.setting === Theme.DARK) {
    body.classList.toggle(Theme.DARK);
    btnCheck.checked = true;
  } else {
    body.classList.toggle(Theme.LIGHT);
  }
}

//функция для добавления или удаления темы
function replaceTheme(oldTheme, newTheme) {
  body.classList.add(newTheme);
  body.classList.remove(oldTheme);
  localStorage.setItem('setting', newTheme);
}

updateLS(); //вызываем функцию для проверки текущей темы

btnCheck.addEventListener('change', handleChangeTheme); //вешаем слушателя события на кнопку чекбокс
