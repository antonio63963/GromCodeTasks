`use strict`
// localStorage.clear()
const counter = document.querySelector('.counter');
const counterValueElem = document.querySelector('.counter__value');



const changeCounterValue = (e) => {
    
    if(!e.target.classList.contains('counter__button')) return;
    let oldValue = Number(counterValueElem.textContent);
    newValue = e.target.dataset.count == 'increase'
    ? ++oldValue
    : --oldValue;
    counterValueElem.textContent = newValue;
    localStorage.setItem('count', newValue);
};
const onStorageChange = (e) => {
    console.log(e);
    counterValueElem.textContent = e.newValue;
};
const onLoadDocument = () => {
    counterValueElem.textContent = localStorage.getItem('count');
};
counter.addEventListener('click', changeCounterValue);
window.addEventListener('storage', onStorageChange);
document.addEventListener('DOMContentLoaded', onLoadDocument);