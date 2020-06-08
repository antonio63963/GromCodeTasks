export function getTitle() {
    const title = document.querySelector('.title');
    return title.textContent;
}

export function getDescription() {
    const elem = document.querySelector('.about');
    return elem.innerText;
}

export function getPlans() {
    const elem = document.querySelector('.plans');
    return elem.innerHTML;
}

export function getGoal() {
    const elem = document.querySelector('.goal');
    return elem.outerHTML;
}

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());