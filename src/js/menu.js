// Основной файл для разметки меню

import menuRef from './refs.js'; //подключаем файл с основными доступами к ДОМ элементам
const { menuList } = menuRef; // делаем деструктуризацию в безымянном экспорте по основным переменным, чтобы получить к ним доступ
// console.log(menuList);

import menu from '../menu.json'; //подключаем файл с данными массива
// console.log(menu);

import menuItemTempale from '../templates/menu-item.hbs'; // подключаем файл с шаблоном элемента
// console.log(menuItemTempale(menu));    // проверяем шаблон, это функция, в которую нужно передать массив для создания разметки

const newMenu = menuItemTempale(menu); // записываем вызов функции создания шаблона в переменную
// console.log(newMenu);


menuList.insertAdjacentHTML("afterbegin", newMenu) // встраиваем в разметку
