'use strict'

const title = document.getElementsByTagName('h1')[0]
const buttonPlus = document.querySelector('.screen-btn')
const otherItemsPercent = document.querySelectorAll('.other-items.percent')
const otherItemsNumber = document.querySelectorAll('.other-items.number')

const inputRange = document.querySelector('.rollback input')
const inputRangeValue = document.querySelector('.rollback .range-value')

const startBtn = document.getElementsByClassName('handler_btn')[0]
const resetBtn = document.getElementsByClassName('handler_btn')[1]

const total = document.getElementsByClassName('total-input')[0]
const totalCount = document.getElementsByClassName('total-input')[1]
const totalCountOther = document.getElementsByClassName('total-input')[2]
const fullTotalCount = document.getElementsByClassName('total-input')[3]
const totalCountRollback = document.getElementsByClassName('total-input')[4]

let screens

const appData = {
    title: '',
    screens: [  ],
    count: 0,
    screenPrice: 0,
    adaptive: true,
    rollback: 0,
    fullPrice: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    servicePercentPrices: 0,
    servicesPercent: {},
    servicesNumber: {},

    init: () => {

        appData.addTitle()
        appData.getRollback()

        startBtn.addEventListener('click', () => {

            inputRange.addEventListener('input', () => {
                appData.getRollback()
                appData.showRollback()
            })
            
            otherItemsPercent.forEach((item) => {
                const check = item.querySelector('input[type=checkbox]')
                const input = item.querySelector('input[type=text]')
            
                input.disabled = true
                check.disabled = true
            })  
            otherItemsNumber.forEach((item) => {
                const check = item.querySelector('input[type=checkbox]')
                const input = item.querySelector('input[type=text]')
                
                input.disabled = true
                check.disabled = true
            })  
            
            screens.forEach((screen) => {
                const select = screen.querySelector('select')
                const input = screen.querySelector('input')
    
                input.disabled = true
                select.disabled = true
                buttonPlus.disabled = true
            })

            appData.getBtnReset()
        })

        resetBtn.addEventListener('click', () => {
            appData.reset()

            otherItemsPercent.forEach((item) => {
                const check = item.querySelector('input[type=checkbox]')
                const input = item.querySelector('input[type=text]')
            
                input.disabled = false
                check.disabled = false
            })  
            otherItemsNumber.forEach((item) => {
                const check = item.querySelector('input[type=checkbox]')
                const input = item.querySelector('input[type=text]')
                
                input.disabled = false
                check.disabled = false
            })  
            
            screens.forEach((screen) => {
                const select = screen.querySelector('select')
                const input = screen.querySelector('input')
    
                input.disabled = false
                select.disabled = false
                buttonPlus.disabled = false
            })

            appData.getBtnStart()
        })

        startBtn.addEventListener('click', () => {
            screens = document.querySelectorAll('.screen')

            screens.forEach((screen) => {
                const select = screen.querySelector('select')
                const input = screen.querySelector('input')
    
                function btnNotAllow() {
                    if (input.value != 0 && select.value != 0) {
                        startBtn.style.cursor = 'pointer'
                        appData.start()
                    }  else {
                        startBtn.style.cursor = 'not-allowed'
                    }
                }
                btnNotAllow()
            })
        })
        startBtn.addEventListener('mouseover', () => {
            screens = document.querySelectorAll('.screen')

            screens.forEach((screen) => {
                const select = screen.querySelector('select')
                const input = screen.querySelector('input')
    
                function btnNotAllow() {
                    if (input.value != 0 && select.value != 0) {
                        startBtn.style.cursor = 'pointer'
                    }  else {
                        startBtn.style.cursor = 'not-allowed'
                    }
                }
                btnNotAllow()
            })
        })

       

        buttonPlus.addEventListener('click', appData.addScreenBlock)


    },
    reset: () => {
        console.log('lkl');
        total.value = '0'
        totalCountOther.value = '0'
        fullTotalCount.value = '0'
        totalCountRollback.value = '0'
        totalCount.value = '0'

        const checks = document.querySelectorAll('input[type=checkbox]')
        checks.forEach((item) => {
            item.checked = false;
        })

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')

            if (index !== 0) {
                screen.remove()
            } else {
                select.value = ''
                input.value = ''
            }
        })
        inputRange.value = 0
        inputRangeValue.textContent = '0%'

        const option = document.querySelectorAll('option')
        option.forEach((item) => {
            console.log(option)
        })

    },
    addTitle: () => {
        document.title = title.textContent
    },
    start: () => {
        appData.resetResult()
        appData.addScreens()
        appData.addServices()

        appData.addPrices()
        
        // appData.logger()
        appData.showRollback()
        appData.showResult()
    },

    getBtnReset: () => {
        startBtn.style.display = "none";
        resetBtn.style.display = "block"
    },

    getBtnStart: () => {
        resetBtn.style.display = "none";
        startBtn.style.display = "block"
    },


    // getReset: () => {
    //     HTMLFormElement.reset()
    // },  
    getNumber: (num) => {
        let numNew = Number(String(num).trim())
        return numNew
    },
    addScreens: () => {
        screens = document.querySelectorAll('.screen')

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select')
            const input = screen.querySelector('input')
            const selectName = select.options[select.selectedIndex].textContent

            appData.screens.push({ 
                id: index, 
                name: selectName, 
                price: +select.value * +input.value
            })
        })

        this.count = screens.length
    },
    addServices: () => {
      otherItemsPercent.forEach((item) => {
          const check = item.querySelector('input[type=checkbox]')
          const label = item.querySelector('label')
          const input = item.querySelector('input[type=text]')

          if(check.checked) {
            appData.servicesPercent[label.textContent] = +input.value
          }
      })  
      otherItemsNumber.forEach((item) => {
        const check = item.querySelector('input[type=checkbox]')
        const label = item.querySelector('label')
        const input = item.querySelector('input[type=text]')

        if(check.checked) {
          appData.servicesNumber[label.textContent] = +input.value
        }
      })  
    },
    addScreenBlock: () => {
        screens = document.querySelectorAll('.screen')

        const cloneScreen = screens[0].cloneNode(true)

        screens[screens.length - 1].after(cloneScreen)
    },
    getRollback: () => {
        inputRange.addEventListener('input', () => {
            inputRangeValue.textContent = inputRange.value + '%'
            this.rollback = inputRange.value
        }) 
    },
    addPrices: () => {
        for (let screen of appData.screens) {
            this.screenPrice += +screen.price
        }
        
        for (let key in appData.servicesNumber) {
            this.servicePricesNumber += appData.servicesNumber[key]
        }
        
        for (let key in appData.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (appData.servicesPercent[key] / 100)
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent
    },
    showRollback: () => {
        appData.servicePercentPrices = this.fullPrice - (this.fullPrice * (this.rollback / 100))

        totalCountRollback.value = appData.servicePercentPrices
    },
    showResult: () => {
        total.value = this.screenPrice
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber
        fullTotalCount.value = this.fullPrice
        totalCount.value = this.count
    },
    resetResult: () => {
        total.value = ''
        totalCountOther.value = ''
        fullTotalCount.value = ''
        totalCountRollback.value = ''
        totalCount.value = ''
        
        appData.screens.length = 0
        this.screenPrice = 0
        this.servicePricesNumber = 0
        this.servicePricesPercent = 0
        this.fullPrice = 0
        this.servicePercentPrices = 0
    },
    showTypeOff: (variable) => {
        console.log(variable, typeof variable);
    },
    logger: () => {
        for(let prop in appData) {
            if (typeof appData[prop] !== "function") {
                this.showTypeOff(appData[prop])
            }
        }
    }
}

appData.init()