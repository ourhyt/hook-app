import {UserContext} from "./UserContext.jsx";
import {useState} from "react";

// const user = {
//     name: "strider",
//     email: "strider@gmail.com",
//     id: "1323"
// }

export const UserProvider = ({ children}) => {

    const [user, setUser] = useState()

    return (
        <UserContext.Provider value={{setUser, user}}>
            { children }
        </UserContext.Provider>
    )
}
