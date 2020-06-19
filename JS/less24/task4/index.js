const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
        dateCreate: new Date,
        dateDone: undefined,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
        dateCreate: new Date,
        dateDone: undefined,
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
        dateCreate: new Date,
        dateDone: undefined,
    },
    {
        text: 'Visit doctor',
        done: false,
        id: 4,
        dateCreate: new Date,
        dateDone: undefined,
    },
    {
        text: 'Buy meat',
        done: false,
        id: 5,
        dateCreate: new Date,
        dateDone: undefined,
    },
];


const tasksList = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');


// dwnld existing arr


const sorting = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }
    if (a.done) {
        return b.dateDone - a.dateDone;
    }
    return b.dateCreate - a.dateCreate;
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
            
            let checkbox = document.createElement('input');
            checkbox.classList.add('list__item-checkbox');
            checkbox.setAttribute('type', 'checkbox');
            checkbox.dataset.id = id;
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
        dateCreate: new Date(),
        dateDone: undefined
    });
    renderTaskEllements(tasks);
    taskInput.value = '';
};

const handleUpdateTask = (e) => { 

    if (e.target.type !== 'checkbox') return;

        const idElem = e.target.dataset.id - 1;
        console.log(idElem);
        tasks[idElem].done = !tasks[idElem].done;
        tasks[idElem].dateCreate = new Date();
        tasks[idElem].dateDone = new Date();

          
    
    // tasks[index].dateDone = tasks[index].dateDone ? 
    // undefined :
    // new Date();

    renderTaskEllements(tasks);
    console.log(tasks)
};



renderTaskEllements(tasks);
tasksList.addEventListener('click', handleUpdateTask);
createTaskBtn.addEventListener('click', handleCreateTask);