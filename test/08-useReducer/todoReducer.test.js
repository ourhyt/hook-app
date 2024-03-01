import {todoReducer} from "../../src/08-useReducer/todoReducer.js";

describe('Tests todoReducer', () => {
    const initialState = [ {
        id: 1,
        todo: 'Demo Todo',
        done: false
    }]

    it('should return initial state', () => {
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    it('should add a todo', () => {
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                todo: 'Demo Todo 2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    it('should delete a todo', () => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    it('should toggle a todo to done', () => {
        const action = {
            type: '[TODO] Toggle state Todo',
            payload: 1
        }

        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    });
});