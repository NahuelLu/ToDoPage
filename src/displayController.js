import {createWindow} from "./todoWindowSettings";
import {stopBtnAdd} from "./todoWindowSettings";
const displayTodoWindow = ()=>{
    createWindow();
    stopBtnAdd();
}


export {displayTodoWindow};