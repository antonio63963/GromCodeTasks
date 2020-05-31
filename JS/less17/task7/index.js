

export const user = {
    firstName: 'Johny',
    lastName: 'Cash',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    setFullName(fullName) {
        const arrName = fullName.split(' ');
        this.firsNname = arrName[0];
        this.lastName = arrName[1];
    }

};

const a = 'Johny Cash';
console.log(a.split(' '));