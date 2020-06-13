
// https://gromcode.s3.eu-central-1.amazonaws.com/front-end/javascript/lesson23/task2/design.png

const boardElem = document.querySelector('.board__selected-seat');




const getNumbersRange = (from, to) => {
    let resArr = [];
    for(let i = from; i <= to; i++) {
        resArr.push(i);
    }
    return resArr;
}
const getSeats = () => {
    return getNumbersRange(1, 10).map(seatNumber => 
        `<div class="sector__seat" data-seat-number="${seatNumber}"></div>`
        ).join('');
}

const getSectorlines = () => {
    return getNumbersRange(1, 10).map(lineNumber => 
        `<div class="sector__line" data-line-number="${lineNumber}">
            ${getSeats()}
        </div>`
        ).join('');
}

const renderArena = () => {
    const arenaElem = document.querySelector('.arena');

    const sectorRow = getNumbersRange(1, 3)
        .map(sectorNumber =>
            `<div class="sector" data-sector-number="${sectorNumber}">
                ${getSectorlines()}
            </div>`).join('');
    arenaElem.innerHTML = sectorRow;
};

renderArena();

const getNumberSeat = (event) => {
   const seat = event.target.dataset.seatNumber;
   const line = event.target.closest('.sector__line')
            .dataset.lineNumber;
    const sector = event.currentTarget.dataset.sectorNumber;
   console.log(seat, line, sector);
   boardElem.textContent = `S ${sector} - L ${line} - S ${seat}`;
};

const sectorsAll = document.querySelectorAll('.sector');
for(let i = 0; i < sectorsAll.length; i++) {
    sectorsAll[i].addEventListener('click', getNumberSeat);
}