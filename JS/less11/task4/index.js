const myString = 'sooooperLoooongStreeenggg';
const myNewString = "ssedddkkkkeeennnsseeeasseee";

const countOccurrences = (string, searchingItem) => {
    let occur = 0;
    let copyString = string;
    if (searchingItem == '') {
        return null;
    } else {
        while (true) {
            if (copyString.indexOf(searchingItem) === -1) {
                break;
            }
            //получаю индекс совпадения
            const index = copyString.indexOf(searchingItem);
            // эдичу стрингу через обрезание
            copyString = copyString.slice(index + searchingItem.length);
            occur += 1;
            console.log(copyString);
        }
    }
    // console.log(occur);
    return occur;

};


console.log(countOccurrences(myString, 'e'));

