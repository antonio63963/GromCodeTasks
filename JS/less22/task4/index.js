
const checkElem = document.querySelector('.task-status');

const handler = () => {
    if(checkElem.checked == true) { console.log(true);} else { console.log(false);}
    // console.log(checkElem.value);
};
checkElem.addEventListener('change', handler);