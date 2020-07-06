import { getItem } from './storage.js';
import { renderTaskEllements } from './render.js';
import { handleCreateTask } from './createTask.js';
import {  handleUpdateTask } from './updateTask.js';



const createTaskBtn = document.querySelector('.create-task-btn');
const tasksList = document.querySelector('.list');

// dwnld existing arr



document.addEventListener('DOMContentLoaded', () => {
renderTaskEllements(getItem('tasks'));
tasksList.addEventListener('click', handleUpdateTask);
createTaskBtn.addEventListener('click', handleCreateTask);
});

