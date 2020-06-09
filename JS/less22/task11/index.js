const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4,
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5,
    },
];
const tasksList = document.querySelector('.list');
const createTaskBtn = document.querySelector('.create-task-btn');
const taskInput = document.querySelector('.task-input');


// dwnld existing arr

const addTaskEllements = (arr) => {
    const tasksArr = arr.sort((a, b) => b.id - a.id).sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
        return done ? 
        `<li class="list__item list__item_done" data-id="${id}">
        <input type="checkbox" checked class="list__item-checkbox">
        ${text}
        </li>` :
        `<li class="list__item" data-id="${id}">
        <input type="checkbox" class="list__item-checkbox">
        ${text}
        </li>`;
        
    });
    
    tasksList.innerHTML = tasksArr.join('');
};

// handlers

const handleCreateTask = () => {
    if(taskInput.value == '') { return; }
    tasks.push({
        text: taskInput.value,
        done: false,
        id: tasks.length 
    });
    addTaskEllements(tasks);
    taskInput.value = '';
}

const handlerCheckbox = (e) => {
    if(!e.target.classList.contains('list__item-checkbox')) {return;}
    const id = e.target.closest('.list__item')
        .getAttribute('data-id');
    tasks.forEach((elem) => {
        if(elem.id == id) {elem.done = true;}
    });
        addTaskEllements(tasks);
        console.log(collection);
};

addTaskEllements(tasks);
tasksList.addEventListener('change', handlerCheckbox);
createTaskBtn.addEventListener('click', handleCreateTask);