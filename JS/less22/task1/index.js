const divElem = document.querySelector('.rect_div')
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');
const eventsList = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeHandlerBtn = document.querySelector('.remove-handlers-btn');
const attachHandlersBtn = document.querySelector('.attach-handlers-btn');


const inputColorText = (color, text) => {
    eventsList.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};
// handlers

const clearList = () => {
    eventsList.textContent = '';
};

const divHandler = () => {
    event.stopPropagation();
    inputColorText('grey', 'DIV');
};
const pHandler = () => {
    event.stopPropagation();
    inputColorText('grey', 'P');
};
const spanHandler = () => {
    event.stopPropagation();
    inputColorText('grey', 'SPAN');
};

const removeHandler = () => {
    divElem.removeEventListener('click', divHandler);
    pElem.removeEventListener('click', pHandler);
    spanElem.removeEventListener('click', spanHandler);
};

const attachHandlers = () => {
    divElem.addEventListener('click', divHandler);
    pElem.addEventListener('click', pHandler);
    spanElem.addEventListener('click', spanHandler);
};


clearBtn.addEventListener('click', () => clearList());
removeHandlerBtn.addEventListener('click', () => removeHandler());
attachHandlersBtn.addEventListener('click', () => attachHandlers());

divElem.addEventListener('click', divHandler);
pElem.addEventListener('click', pHandler);
spanElem.addEventListener('click', spanHandler);