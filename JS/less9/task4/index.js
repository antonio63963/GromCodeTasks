const rooms = {
    room1: [{
            name: 'room1 name1'
        },
        {
            name: 'room1 name2'
        },
        {
            name: 'room1 name3'
        },
        {
            name: 'room1 name4'
        },
    ],
    room2: [{
            name: 'room2 name1'
        },
        {
            name: 'room2 name2'
        },
    ],
    room3: [{
            name: 'room3 name1'
        },
        {
            name: 'room3 name2'
        },
        {
            name: 'room3 name2'
        },
    ]
};

// const getPeople = obj => {
   
//     const objToArr = Object.values(obj);
//     console.log('objToArr  ',objToArr);
//     const flatObjArr = objToArr.reduce((acc, elem) => {
//         return acc.concat(elem);
//     }, []);
//     console.log('flatObjArr  ',flatObjArr);
//     const resultArr = flatObjArr.reduce((acc, elem) => {
//       return  acc.concat(Object.values(elem));
//     },[] );
//     console.log(resultArr);
// };


const getPeople = obj => 
   
   Object.values(obj)
   .reduce((acc, elem) => {
        return acc.concat(elem);
    }, [])
   .reduce((acc, elem) => {
      return  acc.concat(Object.values(elem));
    },[] );
  


console.log(getPeople(rooms));