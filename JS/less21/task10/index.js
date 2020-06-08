

export function finishForm() {
    const elem = document.querySelector('.login-form');
    const newInput1 = document.createElement('input')
    newInput1.setAttribute('name', 'login');
    newInput1.type = 'text';
    elem.prepend(newInput1);
    elem.lastElementChild.type = "password";
    
}

finishForm();
