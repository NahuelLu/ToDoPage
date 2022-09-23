import './style.css';
import {displayTodoWindow} from './displayController';

/*Application logic */

const btnTodoAdd = document.querySelector('#add-btn-todo');
btnTodoAdd.addEventListener('click',displayTodoWindow);