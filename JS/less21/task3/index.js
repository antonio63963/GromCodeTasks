

 function getItemsList() {
    const collection = document.querySelectorAll('.technology');
    console.dir(collection);
    return collection;
}

 function getItemsArray() {
    const collection = Array.from(document.querySelectorAll('.tool'));
    
    
    console.dir(collection);
    return collection;
};

getItemsList();
getItemsArray();