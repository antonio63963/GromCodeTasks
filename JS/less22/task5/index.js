const searchElem = document.querySelector('.search__btn');
const inputElem = document.querySelector('.search__input');

const handler = () => {
    console.log(inputElem.value);
};

searchElem.addEventListener('click', handler);
