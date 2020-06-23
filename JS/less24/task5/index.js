const students = [{
        name: 'Tom',
        birthDate: '01/15/2010',
    },
    {
        name: 'Tony',
        birthDate: '05/10/2011'
    },

    {
        name: 'Ben',
        birthDate: '01/17/2008'
    },
    {
        name: 'Sam',
        birthDate: '03/15/2010'
    },
    {
        name: 'Jack',
        birthDate: '03/25/2001'
    },
    {
        name: 'Bill',
        birthDate: '05/30/2011'
    },
    {
        name: 'Ann',
        birthDate: '05/12/2010'
    },

];
// var#1

// export const studentsbirthDates = (students) => {
//     const monthesArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
//     let birthDateList = {};

//     [...students].sort((a, b) =>
//         new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate())
//         .forEach(student => {
//             const month = monthesArr[new Date(student.birthDate).getMonth()];

//             if (birthDateList.hasOwnProperty(month)) {
//                 birthDateList[month].push(student.name);
//             } else {
//                 birthDateList[month] = [student.name];
//             }
//         });
//     console.log(birthDateList);
//     return birthDateList;
// };

// var#2
const studentsbirthDates = (students) => {
    const monthesArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Dec'];
    const res = [...students].reduce((acc, student) => {
        const month = monthesArr[new Date(student.birthDate).getMonth()];
        if (acc.hasOwnProperty(month)) {
            acc[month].push(student);
            acc[month] = acc[month].sort((a, b) => new Date(a.birthDate).getDate() - new Date(b.birthDate).getDate());
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

console.log(studentsbirthDates(students));

