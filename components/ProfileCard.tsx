'use client'
import { useContext } from 'react'
import Image from 'next/image.js'
import styles from './profileCard.module.css'
import { StunterContext } from '@/context/state'
import { UserProfile, UserProfileContext } from '@/types/global'

const ProfileCard = () => {
  const { currentUserProfile } = useContext(StunterContext) as UserProfileContext

  return <ProfileCardUI userProfile={currentUserProfile}/>
}

interface ProfileCardUIProps {
  userProfile: UserProfile
}

const ProfileCardUI: React.FC<ProfileCardUIProps> = ({userProfile}) => {

  return (
    <div className={styles.profileCard}>
      <Image 
        src={userProfile.imageUrl} 
        alt={userProfile.name} 
        width={200} 
        height={200}
        // TODO: this can be configured
        unoptimized={true} 
      />
      <h1>{userProfile.name}</h1>
    </div>
  )
}



export default ProfileCard