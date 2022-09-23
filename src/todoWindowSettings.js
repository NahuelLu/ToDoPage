import todo from './todo.js';
const form = document.createElement('form');
let todoList = [];
const createElmt = (element,parent)=>{
    const elemt = document.createElement(element);
    parent.appendChild(elemt);
    return elemt;
}
const labelTitle = createElmt('label',form);
const title = createElmt('input',form);
const createNotes = ()=>{
    const labelNotes = createElmt('label',form);
    const notes = createElmt('textarea',form);
    notes.id='notes';
    notes.rows='10';
    notes.cols='10';
    labelNotes.htmlFor='notes';
    labelNotes.textContent='Notes:';
}
const createTitle = ()=>{
    title.id='title';
    labelTitle.htmlFor='title';
    labelTitle.textContent='Title:';
}
const createDescription = ()=>{
    const labelDescription = createElmt('label',form);
    const descrip = createElmt('input',form);
    descrip.id='description';
    labelDescription.htmlFor='description';
    labelDescription.textContent='Description:';
}
const createSendBtn = ()=>{
    const btn = createElmt('input',form);
    btn.type='submit';
    btn.addEventListener('click',saveTodo);
}
const saveTodo = (event)=>{
    let currentTodo = todo();
    currentTodo.title = title.value;
    todoList.push(currentTodo);
    event.preventDefault();
    console.log(currentTodo);
}
const createPriority = ()=>{
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
    mediumOption.checked= 'true';
}
const createWindow = ()=>{
    const windowContainer = document.createElement('div');
    const parent = document.querySelector('.display-todos-container');
    windowContainer.appendChild(form);
    createTitle();
    createDescription();
    createNotes();
    createPriority();
    createSendBtn();
    parent.appendChild(windowContainer);
    windowContainer.className='windowContainer';
}

export {createWindow}