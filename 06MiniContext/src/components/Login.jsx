import React, {useState, useContext} from 'react'
import UserContext from '../context/userContext';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")

  const {setTitle} = useContext(UserContext)

  const handleSubmit = (e) => {
     e.preventDefault()
     setTitle({username, password})
  }

  return (
    <div>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      {"  "}
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default Login
