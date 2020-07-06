import { setItem, getTaskList} from './storage.js';
import { renderTaskEllements } from './render.js';

const taskInput = document.querySelector('.task-input');

// handlers
export const handleCreateTask = () => {
    const tasks = getTaskList();
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
    setItem('tasksList', tasks);
    console.log(getTaskList());
    renderTaskEllements();
    taskInput.value = '';
};

