export function squaredNumbers() {
    const list = document.querySelectorAll('.number');
    console.log(list);
    for(let i = 0; i< list.length; i++) {
        const num = list[i].getAttribute('data-number');
     
        list[i].dataset.squaredNumber = `${num**2}`;
        console.log(list[i]);
       
    }

}

// squaredNumbers();


