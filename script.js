'use strict';

let title = prompt('Как называется ваш проект?');
console.log(title);

let screens = prompt('Какие типы экранов нужно разработать?(напишите через запятую) ');
let newScreens = screens.split(", ");

let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = Math.round(Math.random()*100);

// let fullPrice = Math.round(Math.random()*10000);
let adaptive = confirm('Нужен ли адаптив на сайте?');

let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько будет стоить данная работа?');

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько будет стоить данная работа?');



let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollbackPrice = fullPrice / 100 * rollback
let servicePercentPrice = fullPrice - rollbackPrice

// console.log(title, fullPrice, adaptive);
// console.log(screens.length);
// console.log('Стоимость верстки экранов ' + screenPrice + '$ ' + 'Стоимость разработки сайта ' + fullPrice + '$');

// console.log(newScreens);

// console.log(fullPrice * (rollback/100));



// console.log('все работает но неопределено')

if (fullPrice >= 30000) {
    alert('Даем скидку в 10%')
} else if (fullPrice >= 15000) {
    alert('Даем скидку в 5%')
} else if (0 < fullPrice) {
    alert('Скидка не предусмотрена')
} else if (fullPrice <= 0) {
    alert('Что то пошло не так')
}

console.log(newScreens)
console.log(rollbackPrice)
console.log(servicePercentPrice)

console.log(screenPrice);
console.log(servicePrice1);
console.log(servicePrice2);
console.log(fullPrice);;

console.log("Стоимость верстки экранов", screenPrice, "рублей и",
 "Стоимость разработки сайта", fullPrice, "рублей")