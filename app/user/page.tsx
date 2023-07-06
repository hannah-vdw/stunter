'use client'

import Image from "next/image"
import { fetchUser } from "../../data/fetchUser"
import { User } from '../../types/global'
import { useEffect, useState } from "react"


const User: React.FC = () => {
  const [users, setUsers] = useState<User[]>([{name: "", imageUrl: ""}])
  
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUser();
      setUsers(userData);
    }
    fetchData();
  }, []);

  return (
    <UserView user={users[0]} />
  )
}

interface UserViewProps {
  user: User
}

const UserView: React.FC<UserViewProps> = ({user}) => {

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={user.name}/>
    </div>
  )
}



export default User