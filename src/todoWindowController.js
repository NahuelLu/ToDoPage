import todo from './todo.js';
import {displayTodoWindow,updateDisplayTodos} from './displayController.js';
const defaultTodo = todo();
defaultTodo.title='Untitled';
let todoList = [defaultTodo];
const createElmt = (element,parent)=>{
    const elemt = document.createElement(element);
    parent.appendChild(elemt);
    return elemt;
}
const stopBtnAdd = ()=>{
    document.querySelector('#add-btn-todo').removeEventListener('click',displayTodoWindow);
}
const activeBtnAdd = ()=>{
    document.querySelector('#add-btn-todo').addEventListener('click',displayTodoWindow);
}
const createNotes = (form)=>{
    const labelNotes = createElmt('label',form);
    const notes = createElmt('textarea',form);
    notes.id='notes';
    notes.rows='10';
    notes.cols='10';
    labelNotes.htmlFor='notes';
    labelNotes.textContent='Notes:';
}
const createTitle = (form)=>{
    const labelTitle = createElmt('label',form);
    const title = createElmt('input',form);
    title.id='title';
    labelTitle.htmlFor='title';
    labelTitle.textContent='Title:';
}
const createDescription = (form)=>{
    const labelDescription = createElmt('label',form);
    const descrip = createElmt('input',form);
    descrip.id='description';
    labelDescription.htmlFor='description';
    labelDescription.textContent='Description:';
}
const createSendBtn = (form)=>{
    const btn = createElmt('input',form);
    btn.type='submit';
    btn.addEventListener('click',saveTodo);
}
const removeWindowTodo= ()=>{
    document.querySelector('.display-todos-container').removeChild(document.querySelector('.windowContainer'));
}
const saveTodo = (event)=>{
    event.preventDefault();
    let currentTodo = todo();
    currentTodo.title = document.querySelector('#title').value;
    currentTodo.description = document.querySelector('#description').value;
    currentTodo.notes = document.querySelector('#notes').value;
    currentTodo.priority=[...document.querySelectorAll('.option')].find(option => option.checked).id;
    currentTodo.checklist='false';
    removeWindowTodo();
    todoList.push(currentTodo);
    activeBtnAdd();
    console.log(todoList);
    updateDisplayTodos();//Edit here
}
const createPriority = (form)=>{
    const fieldSet = createElmt('fieldset',form);
    const legend = createElmt('legend',fieldSet);
    const importantDiv = createElmt('div',fieldSet);
    const mediumDiv = createElmt('div',fieldSet);
    const relaxDiv = createElmt('div',fieldSet);
    const importantOption = createElmt('input',importantDiv);
    const importantLabel = createElmt('label',importantDiv);
    const mediumOption = createElmt('input',mediumDiv);
    const mediumLabel = createElmt('label',mediumDiv);
    const relaxOption = createElmt('input',relaxDiv);
    const relaxLabel = createElmt('label',relaxDiv);
    legend.textContent='Select priority'
    importantOption.type='radio';
    mediumOption.type='radio';
    relaxOption.type='radio';
    importantOption.id='important';
    mediumOption.id='medium';
    relaxOption.id='relax';
    importantLabel.textContent='Important!';
    mediumLabel.textContent='Medium';
    relaxLabel.textContent='Relax';
    importantLabel.htmlFor='important';
    mediumLabel.htmlFor='medium';
    relaxLabel.htmlFor='relax';
    importantOption.name='priority';
    mediumOption.name='priority';
    relaxOption.name='priority';
    importantOption.className='option';
    mediumOption.className='option';
    relaxOption.className='option';
    mediumOption.checked= 'true';
}
const createWindow = ()=>{
    const form = document.createElement('form');
    const windowContainer = document.createElement('div');
    const parent = document.querySelector('.display-todos-container');
    windowContainer.appendChild(form);
    createTitle(form);
    createDescription(form);
    createNotes(form);
    createPriority(form);
    createSendBtn(form);
    parent.appendChild(windowContainer);
    windowContainer.className='windowContainer';
}

export {createWindow,stopBtnAdd,todoList,createElmt}