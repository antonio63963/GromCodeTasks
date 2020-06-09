

const btn = document.querySelector('.btn');
const btn2 = btn.nextElementSibling;

const handleClick = (event) => {
    const tar = event.target.textContent;
    console.log(tar);
};


btn.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);

