import {createWindow,stopBtnAdd} from "./todoWindowController";
import {updateTodos} from "./projectTodoController";
const displayTodoWindow = ()=>{
    createWindow();
    stopBtnAdd();
}
const updateDisplayTodos = ()=>{
    updateTodos(0);
}

export {displayTodoWindow,updateDisplayTodos};