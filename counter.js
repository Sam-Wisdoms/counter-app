// Grab the various button elements
const title = document.querySelector('#title');

const btnIncrement = document.querySelector('#increment');

const btnReset = document.querySelector('#reset');

const btnDecrement = document.querySelector('#decrement');

// Write an independent variable that can start the count
let startCount = 0;

// Write the various eventListener functions
btnIncrement.addEventListener('click', () =>{
    startCount++
    title.textContent = startCount;
    event.preventDefault();
})

btnReset.addEventListener('click', () =>{
    startCount = 0;
    title.textContent = startCount;
    event.preventDefault();
})

btnDecrement.addEventListener('click', () =>{
    startCount--
    title.textContent = startCount;
    event.preventDefault();
})