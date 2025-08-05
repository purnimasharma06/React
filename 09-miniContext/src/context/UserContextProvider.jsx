import React from "react";
import UserContext from "./UserContext";
// here children is just like outlet -> means jo bhi children(prop) aa rha hai usko use krlo
const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        // 
        // we have to access a property so we write UserContext. provider 
        // children mtlb jo bhi aa rha hai usko as it is likh do

        // kon sa property ko access de rhe hai uske liye we write value , uske andar we pass an object
        <UserContext.Provider value={{user, setUser}}>
            
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider