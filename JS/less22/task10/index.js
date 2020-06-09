
// const divPage = document.querySelector('.pagination');

const collection = document.querySelectorAll('.pagination__page');


const handleClick = (event) => {
  const data =  event.target.getAttribute('data-page-number');
  console.log(data);
};
 
for(let i = 0; i < collection.length; i++) {
    collection[i].addEventListener('click', handleClick);
}
// divPage.addEventListener('click', handleClick);
