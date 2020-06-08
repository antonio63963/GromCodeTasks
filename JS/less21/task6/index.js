export function setButton(buttonText) {
    const elem = document.querySelector('body');
    elem.innerHTML = `<button>${buttonText}</button><br>`;
}
export function setButton2(buttonText) {
    const elem = document.querySelector('body');
    elem.append(`<button>${buttonText}</button>`);
}
// setButton('Super Button');

// setButton2('terrible button');

