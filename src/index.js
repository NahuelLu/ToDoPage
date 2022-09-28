import './style.css';
import {displayTodoWindow} from './displayController';
import {displayProjectoToList} from './projectTodoController'

/*Application logic */

const addTodoBtn = document.querySelector('#add-btn-todo');
const addProjectBtn = document.querySelector('#add-btn-project');
addTodoBtn.addEventListener('click',displayTodoWindow);
addProjectBtn.addEventListener('click',displayProjectoToList);
