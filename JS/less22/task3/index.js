
const inputElem = document.querySelector('.text-input');

const handler = () => {
    console.log(inputElem.value);
};
inputElem.addEventListener('change', handler);