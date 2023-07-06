'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image.js'

import { User } from '@/types/global'
import { fetchUser } from '@/data/fetchUser';
import styles from './profileCard.module.css'



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
    <ProfileCardUI user={users[0]} />
  )
}

interface ProfileCardUIProps {
  user: User
}

const ProfileCardUI: React.FC<ProfileCardUIProps> = ({user}) => {

  return (
    <div className={styles.profileCard}>
      <Image 
        src={user.imageUrl} 
        alt={user.name} 
        width={200} 
        height={200}
        // TODO: this can be configured
        unoptimized={true} 
      />
      <h1>{user.name}</h1>
    </div>
  )
}



export default ProfileCard