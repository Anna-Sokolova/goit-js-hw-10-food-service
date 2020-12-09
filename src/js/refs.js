// Файл для получения всех доступов к ДОМ элементам

export default {
  menuList: document.querySelector('.js-menu'), // получаем доступ к ul для разметки меню

  btnCheck: document.querySelector('#theme-switch-toggle'), // получаем доступ к чекбоксу для изменения темы

  body: document.querySelector('body'), // получаем доступ к body для добавления класса при изменении темы
};
