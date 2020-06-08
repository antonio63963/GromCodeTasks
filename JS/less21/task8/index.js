
export function createButton(text) {
    const elemBody = document.querySelector('body');
    const buttonElem = document.createElement('button');
    buttonElem.textContent = text;
    elemBody.append(buttonElem);
}

//createButton('SUPER');

