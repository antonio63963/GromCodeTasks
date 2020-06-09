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
    // event.stopPropagation();
    inputColorText('grey', 'DIV');
};
const divHandler2 = () => {
     inputColorText('green', 'DIV');
};

const pHandler = () => {
    // event.stopPropagation();
    inputColorText('grey', 'P');
};
const pHandler2 = () => {
       inputColorText('green', 'P');
};

const spanHandler = () => {
    // event.stopPropagation();
    inputColorText('grey', 'SPAN');
};
const spanHandler2 = () => {
    inputColorText('green', 'SPAN');
};

const removeHandler = () => {
    divElem.removeEventListener('click', divHandler);
    divElem.removeEventListener('click', divHandler2, true);
    pElem.removeEventListener('click', pHandler);
    pElem.removeEventListener('click', pHandler2, true);
    spanElem.removeEventListener('click', spanHandler);
    spanElem.removeEventListener('click', spanHandler2, true);
};

const attachHandlers = () => {
    divElem.addEventListener('click', divHandler);
    divElem.addEventListener('click', divHandler2, true);
    pElem.addEventListener('click', pHandler);
    pElem.addEventListener('click', pHandler2, true);
    spanElem.addEventListener('click', spanHandler);
    spanElem.addEventListener('click', spanHandler2, true);
};


clearBtn.addEventListener('click', () => clearList());
removeHandlerBtn.addEventListener('click', () => removeHandler());
attachHandlersBtn.addEventListener('click', () => attachHandlers());

divElem.addEventListener('click', divHandler);
divElem.addEventListener('click', divHandler2, true);
pElem.addEventListener('click', pHandler);
pElem.addEventListener('click', pHandler2, true);
spanElem.addEventListener('click', spanHandler);
spanElem.addEventListener('click', spanHandler2, true);