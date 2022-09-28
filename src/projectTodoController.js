import { todoList,createElmt } from "./todoWindowController";
const projectsContainer = document.querySelector('.display-todos-container');
const defaultProject = document.querySelector('.items-container-todo');
const projects = [defaultProject];

const resetDisplayTodos = (project)=>{project.textContent='';}

const addTodoTo = (project,todo,index)=>{
    const itemTodoContainer = createElmt('div',project);
    const input = createElmt('input',itemTodoContainer);
    const label = createElmt('label',itemTodoContainer);
    itemTodoContainer.className= 'item-todo';
    input.type='checkbox';
    input.name='check';
    input.id= 'item'+index;
    label.htmlFor= 'item'+index;
    label.className= 'content-item';
    label.textContent= todo.title;
}
const addTodosTo = (project)=>{
    let i=0;
    todoList.forEach(todo =>{
        addTodoTo(project,todo,i++);
    })
}
const updateTodos = (indexProject)=>{
    let currentProject =projects[indexProject];
    resetDisplayTodos(currentProject);
    addTodosTo(currentProject);
}
const removeCurrentDisplayProject = ()=>{
    const currentProject = document.querySelector('.display-todos');
    projectsContainer.removeChild(currentProject);
}
const addNewProject = ()=>{
    projectsContainer.appendChild(defaultProject);
}
const displayProject = ()=>{
    removeCurrentDisplayProject();
    //addNewProject();
}
const displayProjectoToList = ()=>{
    const projectList = document.querySelector('#project-container');
    const item = createElmt('li',projectList);
    const link = createElmt('a',item);
    link.className ='project-item';
    link.textContent='Default';
    item.addEventListener('click',displayProject);
}

export {updateTodos,displayProjectoToList}