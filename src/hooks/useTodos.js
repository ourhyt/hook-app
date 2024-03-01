import {useEffect, useReducer} from "react";
import {todoReducer} from "../08-useReducer/todoReducer.js";

export const useTodos = () => {

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || '[]');
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        console.log(todo);
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id,
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle state Todo',
            payload: id,
        });
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        totalTodos: todos.length,
        missTodos: todos.reduce((accumulator,todo) => {
            if (!todo.done){
                return accumulator+1;
            }
            return accumulator;
        },0)
    }
}
