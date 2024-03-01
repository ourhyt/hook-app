import {renderHook} from "@testing-library/react";
import {useCounter} from "../../src/hooks/index.js";
import {act} from "react-dom/test-utils";

describe('Tests useCounter', () => {
    it('should validate useCounter default values', () => {
        const {result} = renderHook(() => useCounter());
        const { counter, decrement, increment, reset} = result.current;
        expect(counter).toBe(10);
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))
    });

    it('should return counter 100', () => {
        const {result} = renderHook(() => useCounter(100));
        const { counter} = result.current;
        expect(counter).toBe(100)
    });

    it('should increment counter', () => {
        const {result} = renderHook(()=> useCounter(100));
        const { increment} = result.current;
        act(()=> increment());
        expect(result.current.counter).toBe(101)
    });

    it('should decrement counter', () => {
        const {result} = renderHook(()=> useCounter(100));
        const { decrement} = result.current;
        act(()=> {
            decrement();
        });
        expect(result.current.counter).toBe(99)
    });

    it('should reset counter', () => {
        const {result} = renderHook(()=> useCounter());
        const { decrement, reset} = result.current;
        act(()=> {
                decrement();
                decrement();
                decrement();
                reset();
            }
        );
        expect(result.current.counter).toBe(10)
    });
});