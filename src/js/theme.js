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

