const valueA = document.querySelector('.number-a'); 
const valueB = document.querySelector('.number-b');
const btnResult = document.querySelector('.button-result');
const result = document.querySelector('.result');
const symbol = document.querySelector('.symbol');
const body = document.querySelector('body');

const backgroundColor = document.querySelector('.background-color-btn')

backgroundColor.addEventListener('click', function () {
    body.style.background = 'radial-gradient(circle, rgba(180,63,118,1) 0%, rgba(66,155,41,1) 100%)'}) 

const div = document.querySelector('.calculator')

btnResult.addEventListener('click', function() {
    const numA = Number(valueA.value);
    const numB = Number(valueB.value);
    const option = symbol.value 
    
    result.textContent = calculator(numA, numB, option)
})


