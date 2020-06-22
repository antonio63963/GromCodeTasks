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
// var#1

// export const studentsBirthDays = (students) => {
//     const monthesArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
//     let birthdayList = {};

//     [...students].sort((a, b) =>
//         new Date(a.birthday).getDate() - new Date(b.birthday).getDate())
//         .forEach(student => {
//             const month = monthesArr[new Date(student.birthday).getMonth()];

//             if (birthdayList.hasOwnProperty(month)) {
//                 birthdayList[month].push(student.name);
//             } else {
//                 birthdayList[month] = [student.name];
//             }
//         });
//     console.log(birthdayList);
//     return birthdayList;
// };

// var#2
export const studentsBirthDays = (students) => {
    const monthesArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
    const res = [...students].reduce((acc, student) => {
        const month = monthesArr[new Date(student.birthday).getMonth()];
        if (acc.hasOwnProperty(month)) {
            acc[month].push(student);
            acc[month] = acc[month].sort((a, b) => new Date(a.birthday).getDate() - new Date(b.birthday).getDate());
        } else {
            acc[month] = [student];
        }
        return acc;
    }, {});
    const a = {};
    for (let key in res) {
        a[key] = res[key].map(s => s.name);
    }
    return a;
};

console.log(studentsBirthDays(students));

