const tasks = [{
        text: 'Buy milk',
        done: false,
        id: 1,
        dateCreate: 1592358805803,
        dateDone: null,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 2,
        dateCreate: 159235880403,
        dateDone: null,
    },
    {
        text: 'Visit party',
        done: false,
        id: 3,
        dateCreate: 1592358803503,
        dateDone: null,
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 4,
        dateCreate: 1592340805803,
        dateDone: 1592358805803,
    },
    {
        text: 'Buy meat',
        done: true,
        id: 5,
        dateCreate: 1592435805803,
        dateDone: 1592458805803,
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

    const resultArr = [...arr].sort(sorting)
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
        dateCreate: new Date().getTime(),
        dateDone: null
    });
    renderTaskEllements(tasks);
    taskInput.value = '';
};

const handleUpdateTask = (e) => {

    if (e.target.type !== 'checkbox') return;

    const idElem = e.target.dataset.id;

    const task = tasks.find(task => task.id == idElem);
    task.done = !task.done;

    task.done ?
    task.dateDone = new Date().getTime() :
    task.dateDone = null;

    console.log(task);

    renderTaskEllements(tasks);
};



renderTaskEllements(tasks);
tasksList.addEventListener('click', handleUpdateTask);
createTaskBtn.addEventListener('click', handleCreateTask);

