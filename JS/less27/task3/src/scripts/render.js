import { getTaskList } from './storage.js';

 
const sorting = (a, b) => {
    if (a.done - b.done !== 0) {
        return a.done - b.done;
    }
    if (a.done) {
        return b.dateDone - a.dateDone;
    }
    return b.dateCreate - a.dateCreate;
};
export const renderTaskEllements = () => {
    const tasksList = document.querySelector('.list');
    tasksList.textContent = '';
    const arr = getTaskList();

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