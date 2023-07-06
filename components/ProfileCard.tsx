import { useEffect, useState } from 'react';
import {User} from '@/types/global'
import { fetchUser } from '@/data/fetchUser';


const ProfileCard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([{name: "", imageUrl: ""}])
  
  useEffect(() => {
    const fetchData = async () => {
      const userData = await fetchUser();
      setUsers(userData);
    }
    fetchData();
  }, []);

  return (
    <ProfileCardView user={users[0]} />
  )
}

interface ProfileCardProps {
  user: User
}

const ProfileCardView: React.FC<ProfileCardProps> = ({user}) => {

  return (
    <div>
      <h1>{user.name}</h1>
      <img src={user.imageUrl} alt={user.name}/>
    </div>
  )
}



export default ProfileCard