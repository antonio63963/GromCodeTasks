
const divPage = document.querySelector('.pagination');



const handleClick = (event) => {
  const data =  event.target.getAttribute('data-page-number');
  console.log(data);
};

divPage.addEventListener('click', handleClick);
