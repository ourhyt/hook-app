import {render, screen} from "@testing-library/react";
import {TodoApp} from "../../src/08-useReducer/TodoApp.jsx";
import {useTodos} from "../../src/hooks/useTodos.js";

jest.mock('../../src/hooks/useTodos.js')
describe('test TodoApp', () => {
    useTodos.mockReturnValue({
        todos: [
            {id: 1, description: 'Todo #1', done: false},
            {id: 2, description: 'Todo #2', done: true}
        ],
        handleDeleteTodo: jest.fn(),
        handleNewTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        totalTodos: 2,
        missTodos: 1,
    })
    it('should show component correctly', () => {
        render(<TodoApp/>);
        expect(screen.getByText('Todo #1')).toBeTruthy();
        expect(screen.getByText('Todo #2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
    });
});