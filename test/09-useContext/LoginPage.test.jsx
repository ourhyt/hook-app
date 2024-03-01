import {fireEvent, render, screen} from "@testing-library/react";
import {UserContext} from "../../src/09-useContext/context/UserContext.jsx";
import {LoginPage} from "../../src/09-useContext/LoginPage.jsx";

describe('Test LoginPage', () => {
    const setUserMock = jest.fn();

    it('should show component without user', () => {
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });

    it('should call setUser when button click', () => {
        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage/>
            </UserContext.Provider>
        );
        const buttonTag = screen.getByLabelText('btn');
        fireEvent.click(buttonTag);
        expect(setUserMock).toHaveBeenCalledWith({"email": "juan@gm.com", "id": "123", "name": "juan"});
    });
});