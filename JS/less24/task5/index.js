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
    {
        name: 'Bill',
        birthday: '05/30/2011'
    },
    {
        name: 'Ann',
        birthday: '05/12/2010'
    },
    {
        name: 'Tony',
        birthday: '05/10/2011'
    },

];


// export const studentsBirthDays = (students) => {
//     const copyArr = [...students];
//     let monthesArr = [['null', []], ['Jan', []], ['Feb', []], ['Mar', []], ['Apr', []], ['May', []], ['Jun', []], ['Jul', []], ['Aug', []], ['Sept', []], ['Oct', []], ['Nov', []], ['Dec', []]];

//     const gradationByBirthday = {};

//     copyArr.forEach((student) => {
//         const dateArr = student.birthday.split('/');
//         monthesArr.forEach((month, index) => {
//             if(index == dateArr[0]) {
//             month[1].push([student.name, dateArr[1]]);
//                 month[1].sort((a, b) => b[1] - a[1]);
//             }
//         });
//     });
//     // console.log(monthesArr);
//     monthesArr.forEach(elem => {
//             if(elem[1].length > 0 &&  elem !== 'null') {
//                 gradationByBirthday[elem[0]] = elem[1].map(name => name[0]);
//             }
//     });
//     return gradationByBirthday;


//  }

// console.log(studentsBirthDays(students));


const sorting = (a, b) => {
    if (b.birthday.getDate() - a.birthday.getDate() !== 0) {
        b.birthday.getDate() - a.birthday.getDate();
    }
    if (a.birthday.getDate() - b.birthday.getDate()) {
        return a.birthday.getMonth() - b.birthday.getMonth();
    }
}

export const studentsBirthDays = (students) => {
    const copyArr = [...students];
    let birthdayList = {};
    const formatedDateArr = copyArr.map((student) => {
        student.birthday = new Date(student.birthday);
        return student;
    }).sort(sorting);
    formatedDateArr.forEach(student => {
        student.birthday = student.birthday.toDateString()
            .split(' ')
            .splice(1, 3);
        const month = student.birthday[0];

        if (Object.keys(birthdayList).includes(month)) {
            birthdayList[month].push(student.name);
        } else {
            birthdayList[month] = [student.name];
        }

    });
    console.log(birthdayList);
    return birthdayList;
};

studentsBirthDays(students);

