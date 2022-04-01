const books = document.querySelectorAll('.books')
const book = document.querySelectorAll('.book')
const add = document.querySelector('.adv')
const title3 = document.querySelectorAll('a')
const lists = document.querySelectorAll('ul')
const elem = document.querySelectorAll('li')


document.body.style.backgroundImage = "url('../image/you-dont-know-js.jpg')";


add.remove()

book[0].before(book[1])
book[5].after(book[2])
book[3].before(book[4])

elem[3].after(elem[6])
elem[9].after(elem[2])
elem[6].after(elem[8])

elem[47].after(elem[55])
elem[55].after(elem[49])
elem[49].after(elem[50])
elem[53].after(elem[51])


title3[4].textContent = 'Книга 3. this и Прототипы Объектов'

const createNewLi = document.createElement('li');
createNewLi.textContent = 'Глава 8: За пределами ES6'

book[2].querySelector('ul').append(createNewLi);
createNewLi.after(elem[26])

console.log(books)
console.log(book)
console.log(title3)

console.log(lists)
console.log(elem)