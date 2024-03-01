import {useCallback, useEffect, useState} from "react";
import {ShowIncrement} from "./ShowIncrement.jsx";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const memorizeCallback = useCallback(
        (value) => {
            setCounter( (c) => c+value);
            }, []);

    // useEffect(() => {
    //     memorizeCallback();
    //     console.log('ME volvi a generarrrrrrrrr')
    // }, [memorizeCallback]);

    return (
        <>
            <h1>useCAllback Hook: { counter }</h1>
            <hr/>

            <ShowIncrement increment={memorizeCallback}/>
        </>
    )
}
