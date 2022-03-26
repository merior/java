'use strict';


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    rollback: 10,
    start: function(){
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()
        appData.title = appData.getTitle()
        appData.logger()
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },    

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', "калькулятор верстки");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
        } while (!appData.isNumber(appData.screenPrice))
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    getAllServicePrices: function() {
        let sum = 0
        let serviceSum = 0
        for (let i = 0; i < 2; i++) {
            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?', "service1")
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?', "service2")
            }
            do {
                serviceSum = +prompt('Сколько это будет стоить?', 1200);
            } while (!appData.isNumber(serviceSum))
            sum += serviceSum
        }
        return sum
    },
    getFullPrice :function() {
        return +appData.screenPrice + +appData.allServicePrices
    },

    getServicePercentPrices: function() {
        return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
    },
    
    getTitle: function() {
        let firstTitle = appData.title.trim()[0].toUpperCase()
        let secondTitle = appData.title.trim().substring(1).toLowerCase()
        return firstTitle + secondTitle
    },
    
    getRollbackMessage: function(price) {
        if (price >= 30000) {
            return 'Даем скидку в 10%'
        } else if (price >= 15000 && price < 30000) {
            return 'Даем скидку в 5%'
        } else if (price >=0 && price < 15000) {
            return 'Скидка не предусмотрена'
        } else {
            return 'Что то пошло не так'
        }  
    },

    logger: function() {
        for (let key in appData) {
            console.log(key + ': ' + appData[key]);
        }
    }
}

appData.start();




