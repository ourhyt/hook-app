import {useRef} from "react";

export const FocusScreen = () => {

    const inputRef = useRef();
    const onClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                type="text"
                className="form-control"
                placeholder="type your name"
            />

            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder="type your name"
            />

            <button className="btn btn-primary" onClick={onClick}>Select</button>
        </>
    )
}
