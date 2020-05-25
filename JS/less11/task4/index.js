const myString = 'sooooperLoooongStreeenggg';
const myNewString = "ssedddkkkkeeennnsseeeasseee";

const countOccurrences = (string, searchingItem) => {
    let occur = 0;
    let copyString = string;
    if(searchingItem == '') { return null;}
    while(true) {
        if(copyString.indexOf(searchingItem) === -1) { break;}
        //получаю индекс совпадения
        const index = copyString.indexOf(searchingItem);
        // эдичу стрингу через обрезание
        copyString = copyString.slice(index + searchingItem.length);
        occur += 1;
        console.log(copyString);
    }
    console.log(occur);
};

countOccurrences(myString, "");
console.log(typeof '');

console.log(myString.indexOf(''));
console.log(myString.indexOf('s'));


