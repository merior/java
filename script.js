let title = 'строка с названием проекта';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 1234
let rollback = Math.round(Math.random()*100);
let fullPrice = Math.round(Math.random()*10000);
let adaptive = Boolean(Math.round(Math.random()));

let newScreens = screens.toLowerCase();
let newNewScreens = newScreens.split(", ");


console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов ' + screenPrice + '$ ' + 'Стоимость разработки сайта ' + fullPrice + '$');

console.log(newNewScreens);

console.log(fullPrice * (rollback/100));



// console.log('все работает но неопределено')

alert('пока не работает надо закрыть')