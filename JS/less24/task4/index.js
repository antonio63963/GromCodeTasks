const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
        dateDone: new Date().getTime(),
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
        dateDone: new Date().getTime(),
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
        dateDone: new Date().getTime(),
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4,
        dateDone: 1592086756593,
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5,
        dateDone: 1591886756593,
    },
];


const tasksList = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');


// dwnld existing arr


const sorting = (a, b) => {
    // if(b.id - a.id !== 0) {
    //   return  b.id - a.id;
    // }
    if(a.done - b.done !== 0) {
        return a.done - b.done;
    }
    if(a.done) {
     return   b.dateDone - a.dateDone;
    }
  return b.id - a.id; 
};



const renderTaskEllements = (arr) => {
    const tasksList = document.querySelector('.list');
    tasksList.textContent = '';
    const arrDouble = [...arr];
 
    const resultArr = arrDouble.sort(sorting)
    //   ;console.log(resultArr);
        .map(({
            text,
            done,
            id,
        }) => {
            let taskItem = document.createElement('li');
            taskItem.classList.add('list__item');
            taskItem.dataset.id = id;
            let checkbox = document.createElement('input');
            checkbox.classList.add('list__item-checkbox');
            checkbox.setAttribute('type', 'checkbox');
            if (done) {
                checkbox.setAttribute('checked', done);
                taskItem.classList.add('list__item_done');
            }
            taskItem.append(checkbox);
            taskItem.append(text);
            return taskItem;
        });

// console.log(resultArr);
    tasksList.append(...resultArr);

};
// handlers

const handleCreateTask = () => {
    if (taskInput.value == '') {
        return;
    }
    tasks.push({
        text: taskInput.value,
        done: false,
        id: tasks.length + 1,
        dateDone: new Date().getTime()
    });
    renderTaskEllements(tasks);
    taskInput.value = '';
};

const handleUpdateTask = (e) => {
    if(!e.target == 'checkbox') { return;}
   
    const idElem = e.target.getAttribute('data-id');
 
    const index = idElem - 1;
    tasks[index].done = !tasks[index].done;
    // tasks[index].dateDone = tasks[index].dateDone ? 
    // undefined :
    // new Date().getTime();

    renderTaskEllements(tasks);
};



renderTaskEllements(tasks);
tasksList.addEventListener('click', handleUpdateTask);
createTaskBtn.addEventListener('click', handleCreateTask);



