
const btn = document.querySelector('.single-use-btn');

const handler = () => {
    console.log('clicked');
    btn.removeEventListener('click', handler);
};


btn.addEventListener('click', handler);

