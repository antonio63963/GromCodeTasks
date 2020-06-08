
export function finishList() {
    const parent = document.querySelector('.list');
    const special = document.querySelector('.special');
    const newLi_1 = document.createElement('li');
    newLi_1.textContent = 1;
    const newLi_4 = document.createElement('li');
    newLi_4.textContent = 4;
    const newLi_6 = document.createElement('li');
    newLi_6.textContent= 6;
    const newLi_8 = document.createElement('li');
    newLi_8.textContent = 8;


    parent.prepend(newLi_1);
    special.before(newLi_4);
    special.after(newLi_6);
    parent.append(newLi_8);
}

// finishList();

