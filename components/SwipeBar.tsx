'use client'
import Image from 'next/image.js'
import styles from './swipeBar.module.css'
import tick from '../public/tick.svg'
import cross from '../public/cross.svg'
import { updateUserProfiles } from '@/utils/updateUserProfiles'
import { useContext } from 'react'
import { StunterContext } from '@/context/state'
import { UserProfileContext } from '@/types/global'


const SwipeBar: React.FC  = () => {
  const {
    userProfiles, 
    setUserProfiles, 
    currentUserProfile, 
    setCurrentUserProfile, 
    profileIndex, 
    setProfileIndex
  } = useContext(StunterContext) as UserProfileContext

  const handleClick = (status: boolean) => {
    const updatedProfiles = updateUserProfiles(currentUserProfile.id, userProfiles, status)
    setUserProfiles(updatedProfiles)

    const newIndex = profileIndex + 1
    setCurrentUserProfile(userProfiles[newIndex])
    setProfileIndex(newIndex)
  }

  return <SwipeBarUI handleClick={handleClick}/>
}

interface SwipeBarUIProps {
  handleClick: (status: boolean) => void;
}

const SwipeBarUI: React.FC<SwipeBarUIProps> = ({handleClick}) => {
  return (
    <div className={styles.swipeBar}>
      <button className={styles.decline} onClick={() => handleClick(false)}>
        <Image 
          src={cross} 
          alt='decline'
          height={80} 
          width={80} 
        />
      </button>
      <button className={styles.accept} onClick={() => handleClick(true)}>
        <Image 
          src={tick} 
          alt='accept' 
          height={80} 
          width={80} 
        />
      </button>
    </div>
  )
}

export default SwipeBar;