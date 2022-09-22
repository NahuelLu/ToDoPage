import todo from './todo.js';

const createWindow = ()=>{
    const windowContainer = document.createElement('div');
    const parent = document.querySelector('.display-todos');
    parent.appendChild(windowContainer);
    windowContainer.className='windowContainer';
    
    console.log(todo());
}

export {createWindow}