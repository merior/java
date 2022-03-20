'use strict';

let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?',  "Простые, Сложные, Интерактивные");
let newScreens = screens.split(", ");
let screenPrice = +prompt('Сколько будет стоить данная работа?');
let rollback = Math.round(Math.random()*100);
// let fullPrice = Math.round(Math.random()*10000);
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько будет стоить данная работа?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько будет стоить данная работа?');
let fullPrice
let rollbackPrice = fullPrice / 100 * rollback
let servicePercentPrice = fullPrice - rollbackPrice
let allServicePrices


const showTypeOf = function(variable){
    console.log(variable, typeof variable)
}

const getRollbackMessage = function (price){
    if (price >= 30000) {
        return 'Даем скидку в 10%'
    } else if (price >= 15000) {
        return 'Даем скидку в 5%'
    } else if (0 < price) {
        return 'Скидка не предусмотрена'
    } else if (price <= 0) {
        return 'Что то пошло не так'
    }
};
const getAllServicePrices = function() {
    return servicePrice1 + servicePrice2;
};

    allServicePrices = getAllServicePrices();

const getFullPrice = function() {
   return screenPrice + allServicePrices;
};
    fullPrice = getFullPrice();

const getTitle = function() {
    let titleNew = title.split('')[0].toUpperCase()
    let title2 = title.slice(1);
    title = titleNew + title2
    return title
}; 
    title = getTitle();

const getServicePercentPrices = function() {
    return fullPrice - (fullPrice * (rollback / 100));
};
    servicePercentPrice = getServicePercentPrices();

showTypeOf(rollbackPrice);
showTypeOf(servicePercentPrice);
showTypeOf(newScreens);

console.log(newScreens)
console.log(getRollbackMessage(fullPrice));
console.log( 'стоимость за вычетом процента отката посреднику ' + Math.round(servicePercentPrice));

console.log("Стоимость верстки экранов", screenPrice, "рублей и",
 "Стоимость разработки сайта", fullPrice, "рублей")