import {renderHook} from "@testing-library/react";
import {useForm} from "../../src/hooks/index.js";
import {act} from "react-dom/test-utils";

describe('Test useForm', () => {

    const initialForm = {
        name: 'Juan',
        email: 'juan@gmail.com',
    }

    it('should return default info', () => {
        const {result} = renderHook(() => useForm(initialForm));
        expect(result.current).toEqual({
                name: 'Juan',
                email: 'juan@gmail.com',
                formState: { name: 'Juan', email: 'juan@gmail.com' },
                onInputChange: expect.any(Function) ,
                onResetForm: expect.any(Function),
        })
    });

    it('should change nameForm', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        act(() => {
            onInputChange({target: {name: 'Jose', value: 'jose@gmail.com'}});
            onResetForm();
        });
        expect(result.current.formState.name).toBe('Juan');
        expect(result.current.name).toBe('Juan');
    });
});