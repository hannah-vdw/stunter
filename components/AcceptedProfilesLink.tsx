'use client'
import { useContext, useState } from 'react'
import styles from './acceptedProfilesLink.module.css'
import { StunterContext } from '@/context/state'
import { UserProfile, UserProfileContext } from '@/types/global'
import ProfileCard from './ProfileCard'

const AcceptedProfilesLink: React.FC = () => {

  const { userProfiles } = useContext(StunterContext) as UserProfileContext;
  const [showAcceptedProfiles, setShowAcceptedProfiles] = useState(false);

  const handleClick = () => setShowAcceptedProfiles(!showAcceptedProfiles);
  const profiles = userProfiles.filter((user: UserProfile) => user.accepted);

  return <AcceptedProfilesLinkUI 
    profiles={profiles}
    handleClick={handleClick}
    showAcceptedProfiles={showAcceptedProfiles}
  />
}

interface AcceptedProfilesLinkUIProps {
  profiles: UserProfile[]
  handleClick: () => void;
  showAcceptedProfiles: boolean
}

const AcceptedProfilesLinkUI: React.FC<AcceptedProfilesLinkUIProps> = ({profiles, handleClick, showAcceptedProfiles}) => {
  return (
    <div className={styles.link}>
      <button onClick={handleClick}>{showAcceptedProfiles ? "Hide Accepted Users" : "Show Accepted Users"}</button>

    { showAcceptedProfiles 
      ?
        <ul>
          {profiles.map((profile) => <li key={profile.id}> {profile.name} </li>)}
        </ul>    
      : 
        null }
    </div> 
  )
}

export default AcceptedProfilesLink;