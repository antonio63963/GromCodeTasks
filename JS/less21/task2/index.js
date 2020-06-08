

export function getTitleElement() {
    const titleElem = document.querySelector('.title');
    console.dir(titleElem);
    return titleElem;
}

export function getInputElement() {
    const collection =  [...document.querySelectorAll('input')];
    const result = collection.filter(item => item.type == 'text');
    const res = result[0];
    console.dir(res);
    return res;
};

getTitleElement();
getInputElement();