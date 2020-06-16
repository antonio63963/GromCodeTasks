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
    let pushedStudents = [];
    const gradationByBirthday = {rrrr: "fff",};

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
                pushedStudents[elem[0]] = elem[1].map(name => name[0]);
            }
    })
    return pushedStudents;
   

 }

// studentsBirthDays(students);
// console.log(studentsBirthDays(students));

// const birth = {
//     Jan: ['Tom'],
//     Feb : ['Jack', 'Bob']
// };

// for(let key in birth) {
//     birth[key].push('gggggg');
// }
// const h = Object.entries(birth);
// // birth.Feb.push('rrrrr')
// console.log(h);