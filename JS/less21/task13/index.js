
function getSection(num) {
    const collection = document.querySelectorAll('span');
    let parent;
    for(let i = 0; i < collection.length; i++) {
        if(collection[i].getAttribute('data-number') == num) {
           parent = collection[i].closest('.box');
        }
    }
    console.log(parent.getAttribute('data-section'));
    return parent.getAttribute('data-section');
}

// getSection(3);