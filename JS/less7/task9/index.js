let clients = ['Ann', 'Bob', 'Jane', 'Mik'];
let balances = [123, 345, 1400, 4507];

const widthdraw = (clients, balances, client, amount) => 
    clients.indexOf(client) !== -1 &&
        amount <= balances[clients.indexOf(client)] ?
        balances[clients.indexOf(client)] -= amount :
        -1;



// let a = clients.indexOf('Bob');
 console.log(widthdraw(clients, balances, 'Bob', 450));