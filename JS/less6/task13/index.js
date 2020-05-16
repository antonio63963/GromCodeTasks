// let clients = ['john', 'Bill', 'Mik', 'Ann'];
// let balances = [1400, 2000, 44987, 343];

function withsdraw(clients, balances, client, amount) {
    let name = client;

    for (let i = 0; i < clients.length; i++) {
        if (clients[i] == name) {
            if (balances[i] > amount) {

               return balances[i] - amount , balances[i] -= amount;
          
            } else {
                return  -1;
            }
        }
    }
}

// let example = withsdraw(clients, balances, 'Bill', 150);
// console.log(example, '  ', balances);