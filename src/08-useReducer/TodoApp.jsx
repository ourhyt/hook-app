import {TodoList} from "./TodoList.jsx";
import {TodoAdd} from "./TodoAdd.jsx";
import {useTodos} from "../hooks/useTodos.js";

export const TodoApp = () => {

    const { todos, handleDeleteTodo, handleNewTodo, handleToggleTodo, totalTodos,missTodos} = useTodos();

    return (
        <>
            <h1>TodoApp: {totalTodos}, <small>Pendientes: {missTodos}</small></h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr/>
                    <TodoAdd onNewTodo={handleNewTodo}/>
                </div>
            </div>
        </>
    )
}
