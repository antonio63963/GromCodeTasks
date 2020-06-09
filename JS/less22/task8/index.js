
const inputElem = document.querySelector('.text-input');

const handler = (event) => {
    console.log(event.target.value);
};

inputElem.addEventListener('change', handler);
