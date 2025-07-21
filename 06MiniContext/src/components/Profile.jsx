import React, {useContext} from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
  const {title} = useContext(UserContext)

  if(!title) return <div>Please Login</div>

  return <div>Welcome {title.username}</div>
}

export default Profile