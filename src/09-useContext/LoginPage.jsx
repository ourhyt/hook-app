import {useContext} from "react";
import {UserContext} from "./context/UserContext.jsx";

export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    console.log(user);
    return (
        <>
            <h1>LoginPage</h1>
            <hr/>

            <pre aria-label='pre'>
                {JSON.stringify(user, null, 3)}
            </pre>

            <button aria-label="btn" className="btn btn-primary" onClick={() => setUser({id: '123', name: 'juan', email: 'juan@gm.com'})}>
                Establish user
            </button>
        </>
    )
}
