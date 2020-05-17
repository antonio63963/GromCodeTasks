let allStudents = ['Ann', 'Bob', 'Mik', 'Julie'];
let failedStudents = ['Bob', 'Julie'];

const getMessagesForBestStudents = (allStudents, failedStudents) => {
    const winStudents = allStudents
        .filter(name => 
            failedStudents.indexOf(name) == -1)
        .map(name => 
            'Good job, ' + name
        );

    return winStudents;
};

console.log(getMessagesForBestStudents(allStudents, failedStudents));
console.log(allStudents);