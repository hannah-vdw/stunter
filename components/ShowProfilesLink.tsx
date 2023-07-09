"use client";
import { useContext, useState } from "react";

import { StunterContext } from "@/context/state";
import { UserProfile, UserProfileContext } from "@/types/global";
import styles from "./showProfilesLink.module.css";

interface ShowProfilesProps {
  showAcceptedUsers: boolean;
}

const ShowProfilesLink: React.FC<ShowProfilesProps> = ({
  showAcceptedUsers: showAcceptedUsers,
}) => {
  const { userProfiles } = useContext(StunterContext) as UserProfileContext;
  const [releventProfiles, setReleventProfiles] = useState(false);

  const handleClick = () => setReleventProfiles(!releventProfiles);
  const profiles = userProfiles.filter((user: UserProfile) =>
    showAcceptedUsers ? user.accepted : user.accepted === false,
  );

  return (
    <ShowProfilesUI
      profiles={profiles}
      handleClick={handleClick}
      releventProfiles={releventProfiles}
      showAcceptedUsers={showAcceptedUsers}
    />
  );
};

interface ShowProfilesUIProps {
  profiles: UserProfile[];
  handleClick: () => void;
  releventProfiles: boolean;
  showAcceptedUsers: boolean;
}

const ShowProfilesUI: React.FC<ShowProfilesUIProps> = ({
  profiles,
  handleClick,
  releventProfiles,
  showAcceptedUsers,
}) => {
  return (
    <div className={styles.link}>
      {showAcceptedUsers ? (
        <button onClick={handleClick} className={styles.accept}>
          {releventProfiles ? "Hide Accepted Users" : "Show Accepted Users"}
        </button>
      ) : (
        <button onClick={handleClick} className={styles.decline}>
          {releventProfiles ? "Hide Declined Users" : "Show Declined Users"}
        </button>
      )}

      {releventProfiles ? (
        <ul>
          {profiles.map((profile) => (
            <li key={profile.id}> {profile.name} </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ShowProfilesLink;
