import './style.css';
import {addBtnTodo} from './addTodoBtn.js';

/*Application logic */

const btnTodoAdd = document.querySelector('#add-btn-todo');
btnTodoAdd.addEventListener('click',addBtnTodo);