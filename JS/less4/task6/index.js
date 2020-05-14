let odd = 0; 

for(let i = 1; i <= 1000; i++) {
    if(i % 2 === 1) {
        console.log("Found");
        odd += i;
    }
}
if(odd * 5 > 5000) {
    console.log('Bigger');
}else{
    console.log('Smaller or equal');
}