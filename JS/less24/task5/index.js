const students = [{
        name: 'Tom',
        birthday: '01/15/2010',
    },
    {
        name: 'Tony',
        birthday: '05/10/2011'
    },

    {
        name: 'Ben',
        birthday: '01/17/2008'
    },
    {
        name: 'Sam',
        birthday: '03/15/2010'
    },
    {
        name: 'Jack',
        birthday: '03/25/2001'
    },
    {
        name: 'Bill',
        birthday: '05/30/2011'
    },
    {
        name: 'Ann',
        birthday: '05/12/2010'
    },

];

export const studentsBirthDays = (students) => {
    const monthesArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
    let birthdayList = {};

    [...students].sort((a, b) =>
        new Date(a.birthday).getDate() - new Date(b.birthday).getDate())
        .forEach(student => {
            const month = monthesArr[new Date(student.birthday).getMonth()];

            if (birthdayList.hasOwnProperty(month)) {
                birthdayList[month].push(student.name);
            } else {
                birthdayList[month] = [student.name];
            }
        });
    console.log(birthdayList);
    return birthdayList;
}

studentsBirthDays(students);