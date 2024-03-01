import {HomePage} from "../../src/09-useContext/HomePage.jsx";
import {render, screen} from "@testing-library/react";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";

describe('Test homePage', () => {

    const user = {
        id: 1,
        name: 'Juan Pablo'
    }

    it('should show component', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null')
    });

    it('should show component', () => {
        render(
            <UserContext.Provider value={{user}}>
                <HomePage/>
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain(user.name)
    });
});