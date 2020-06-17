const students = [{
        name: 'Tom',
        birthday: '01/15/2010',
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
   
];

 /*
 0. создаю массив месяцов
 1. сплитом разбиваю дату 
 2. определяю месяц 
 3. создаю результирующий объект
   
*/
export const studentsBirthDays = (students) => {
    const copyArr = [...students];
    let monthesArr = [['null', []], ['Jan', []], ['Feb', []], ['Mar', []], ['Apr', []], ['May', []], ['Jun', []], ['Jul', []], ['Aug', []], ['Sept', []], ['Oct', []], ['Nov', []], ['Dec', []]];
  
    const gradationByBirthday = {};

    copyArr.forEach((student) => {
        const dateArr = student.birthday.split('/');
        monthesArr.forEach((month, index) => {
            if(index == dateArr[0]) {
            month[1].push([student.name, dateArr[1]]);
                month[1].sort((a, b) => b[1] - a[1]);
            }
        });
    });
    // console.log(monthesArr);
    monthesArr.forEach(elem => {
            if(elem[1].length > 0 &&  elem !== 'null') {
                gradationByBirthday[elem[0]] = elem[1].map(name => name[0]);
            }
    })
    return gradationByBirthday;
   

 }

console.log(studentsBirthDays(students));


// export const studentsBirthDays = (students) => {
//     const copyArr = [...students];
//     let monthesArr = ['null', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
//     let sortedByBirthday =[];
  
//     const gradationByBirthday = {};

//     copyArr.forEach((student) => {
//         const dateArr = student.birthday.split('/');
//         monthesArr.forEach((month, index) => {
//             if(index == dateArr[0]) {
//             sortedByBirthday.push([month, dateArr[1]]);
//                 month[1].sort((a, b) => b[1] - a[1]);
//             }
//         });
//     });
//     // console.log(monthesArr);
//     monthesArr.forEach(elem => {
//             if(elem[1].length > 0 &&  elem !== 'null') {
//                 gradationByBirthday[elem[0]] = elem[1].map(name => name[0]);
//             }
//     })
//     return gradationByBirthday;
   

//  }