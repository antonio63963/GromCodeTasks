const myString = 'sooooperLoooongStreeenggg';

const countOccurrences = (string, searchingItem) => {
    let occur = 0;
    let copyString = string;
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

countOccurrences(myString, "ooo");



