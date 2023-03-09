import './style.css';
import list from './modules/todoList.js'


window.onload = ()=>{
    list.show()
}

list.enterBtn.onclick = (e) =>{
    e.preventDefault();
    list.addTodo();
    list.show()
}
