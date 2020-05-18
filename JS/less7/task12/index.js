let arrNum = [5, 10, 15, 2];

const arrAverage = (arrNum) => {
  let sumNum = arrNum.reduce((acc, num) => {
    return acc + num;
  },0 );
  return sumNum / arrNum.length;
};


console.log(arrAverage(arrNum));
