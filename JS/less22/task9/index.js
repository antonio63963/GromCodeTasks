
const checkElem = document.querySelector('.task-status');

const handler = (event) => {
    if(event.target.checked == true) {
    console.log(true);
    } else { console.log(false);}
};

checkElem.addEventListener('change', handler);
