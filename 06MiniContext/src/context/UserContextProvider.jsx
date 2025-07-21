import React, {useState} from "react";
import UserContext from "./userContext";
const UserContextProvider = ({children}) => {
    const [title, setTitle] = useState(null)
  return (
    <UserContext.Provider  value={{title, setTitle}} >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
