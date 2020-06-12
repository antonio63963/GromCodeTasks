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

const renderTaskEllements = (arr) => {
    const tasksList = document.querySelector('.list');
    tasksList.textContent = '';
    const arrDouble = [...arr];
    const tasksArr = arrDouble.sort((a, b) => b.id - a.id).sort((a, b) => a.done - b.done)
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

    tasksList.append(...tasksArr);

    const collection = document.querySelectorAll('.list__item');
    for (let i = 0; i < collection.length; i++) {
        collection[i].addEventListener('click', handleUpdateTask);
    }
};
// handlers

const handleCreateTask = () => {
    if (taskInput.value == '') {
        return;
    }
    tasks.push({
        text: taskInput.value,
        done: false,
        id: tasks.length + 1
    });
    renderTaskEllements(tasks);
    taskInput.value = '';
};

const handleUpdateTask = (e) => {
    const idElem = e.currentTarget.getAttribute('data-id');
    const index = idElem - 1;
    tasks[index].done = !tasks[index].done;

    renderTaskEllements(tasks);
};



renderTaskEllements(tasks);

createTaskBtn.addEventListener('click', handleCreateTask);