import { getTaskList, setItem } from './storage.js';
import { renderTaskEllements } from './render.js';


export const handleUpdateTask = (e) => {
    
    if (e.target.type !== 'checkbox') return;
    
    const tasksList = getTaskList();
    const idElem = e.target.dataset.id;

    let task = tasksList.find(task => task.id == idElem);
    task.done = !task.done;

    task.done ?
    task.dateDone = new Date().getTime() :
    task.dateDone = null;

    console.log(task);
    setItem('tasksList', tasksList);
    renderTaskEllements();
};