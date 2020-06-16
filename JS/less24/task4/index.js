const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
        dateDone: undefined,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
        dateDone: undefined,
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
        dateDone: undefined,
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4,
        dateDone: 1529502534000,
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5,
        dateDone: 1592660934000,
    },
];


const tasksList = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');


// dwnld existing arr

const renderTaskEllements = (arr) => {
    const tasksList = document.querySelector('.list');
    tasksList.textContent = '';
    const arrDouble = [...arr];
   
    const resultArr = arrDouble.sort((a, b) => b.id - a.id)
    .sort((a, b) => b.dateDone - a.dateDone)
    .sort((a, b) => a.done - b.done)
        .map(({
            text,
            done,
            id
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


    tasksList.append(...resultArr);
//add listeners to every li elem
    // const collection = document.querySelectorAll('.list__item');
    // for (let i = 0; i < collection.length; i++) {
    //     collection[i].addEventListener('click', handleUpdateTask);
    // }
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
        dateDone: undefined
    });
    renderTaskEllements(tasks);
    taskInput.value = '';
};

const handleUpdateTask = (e) => {
    if(!e.target.classList.contains('list__item-checkbox')) { return;}
    const idElem = e.target.closest('.list__item').getAttribute('data-id');
    console.log(e.target);
    const index = idElem - 1;
    tasks[index].done = !tasks[index].done;
    tasks[index].dateDone = 
    tasks[index].dateDone ? undefined :
    new Date().getTime();

    renderTaskEllements(tasks);
};



renderTaskEllements(tasks);
tasksList.addEventListener('click', handleUpdateTask);
createTaskBtn.addEventListener('click', handleCreateTask);

