import {useEffect, useState} from "react";
import {Message} from "./Message.jsx";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'strider@gmail.com',
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        // console.log('UseEffect called')
    }, []);

    useEffect(() => {
        // console.log('FormState called')
    }, [formState]);

    useEffect(() => {
        // console.log('email called')
    }, [email]);

    return (
        <>
            <h1>Simple Form</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="jflor@flor.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                ( username === 'strider2') && <Message/>
            }
        </>
    )
}
