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
    const tasksList = document.querySelector('.list');
    tasksList.textContent = '';
    const tasksArr = arr.sort((a, b) => a.done - b.done)
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
    addTaskEllements(tasks);
    taskInput.value = '';
};

// const handlerCheckbox = (e) => {
//     if (!e.target.classList.contains('list__item-checkbox')) {
//         return;
//     }
 
//     const id = e.target.closest('.list__item')
//         .getAttribute('data-id');
//     if (!e.target.hasAttribute('checked')) {
//         tasks.forEach((elem) => {
//             if (elem.id == id) {
//                 elem.done = true;
//             }
//         });
//     } else {
//         e.target.removeAttribute('checked');
//         tasks.forEach((elem) => {
//             if (elem.id == id) {
//                 elem.done = false;
//             }
//         });
//     }
// //    console.log(e.target.closest('.list__item'));
//     // console.log(document.querySelectorAll('.list__item'));
//     addTaskEllements(tasks);
    
// };

const handlerCheckbox = (e) => {
    if (!e.target.classList.contains('list__item')) {
        return;
    }
 
    const id = e.target.getAttribute('data-id');
    if (!e.target.firstChild.hasAttribute('checked')) {
        tasks.forEach((elem) => {
            if (elem.id == id) {
                elem.done = true;
            }
        });
    } else {
        e.target.removeAttribute('checked');
        tasks.forEach((elem) => {
            if (elem.id == id) {
                elem.done = false;
            }
        });
    }
//    console.log(e.target.closest('.list__item'));
    // console.log(document.querySelectorAll('.list__item'));
    addTaskEllements(tasks);
    
};

addTaskEllements(tasks);
tasksList.addEventListener('click', handlerCheckbox);
createTaskBtn.addEventListener('click', handleCreateTask);