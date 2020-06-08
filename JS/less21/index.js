const tasks = [{
        text: 'Buy milk',
        done: false
    },
    {
        text: 'Pick up Tom from airport',
        done: false
    },
    {
        text: 'Visit party',
        done: false
    },
    {
        text: 'Visit doctor',
        done: true
    },
    {
        text: 'Buy meat',
        done: true
    },
];

const tasksList = document.querySelector('.list');
const addTaskEllements = (arr) => {
    const tasksArr = arr.sort((a, b) => a.done - b.done)
        .map(({
            text,
            done
        }) => {
            let taskItem = document.createElement('li');
            taskItem.classList.add('list__item');
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

    return tasksArr;
};


const tasksArr = addTaskEllements(tasks);
tasksList.append(...tasksArr);
