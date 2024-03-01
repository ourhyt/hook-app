import {fireEvent, render, screen} from "@testing-library/react";
import {MultipleCustomHooks} from "../../src/03-examples/index.js";
import {useCounter, useFetch} from "../../src/hooks/index.js";

jest.mock('../../src/hooks/useFetch.js');
jest.mock('../../src/hooks/useCounter.js');

describe('tests MultiplecustomHooks', () => {

    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should show default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        })

        render(<MultipleCustomHooks/>);
        expect( screen.getByText('Loading...'))
        expect( screen.getByText('BrakingBad Quotes'));

        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeTruthy();
    });

    it('Should show a quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Juan Pablo', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        })

        render(<MultipleCustomHooks/>);
        expect(screen.getByText('Hola Mundo')).toBeTruthy();
        expect(screen.getByText('Juan Pablo')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        expect(nextButton.disabled).toBeFalsy();

    });

    it('should call increment function', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Juan Pablo', quote: 'Hola Mundo'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();
    });
});