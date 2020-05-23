const contacts = [
    {
        name: 'Tom',
        phoneNumber: '111-11-11',
    },
    {
        name: 'Ann',
        phoneNumber: '222-22-12',
    },
    {
        name: 'Dave',
        phoneNumber: '333-11-11',
    },
    {
        name: 'Jan',
        phoneNumber: '444-11-11',
    },
    {
        name: 'Zac',
        phoneNumber: '155-15-11',
    }
];

const sortContacts = (contacts, grade = true ) => {
    if(Array.isArray(contacts)) {
    return contacts.sort((a, b) => 
   grade ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    } else { return null;}
   
};
 
console.log(sortContacts('contacts', false));