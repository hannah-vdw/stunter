"use client";
import { useContext } from "react";
import Image from "next/image.js";

import { StunterContext } from "@/context/state";
import { UserProfile, UserProfileContext } from "@/types/global";
import styles from "./profileCard.module.css";

const ProfileCard = () => {
  const { userProfiles, profileIndex } = useContext(
    StunterContext,
  ) as UserProfileContext;

  return <ProfileCardUI userProfile={userProfiles[profileIndex]} />;
};

interface ProfileCardUIProps {
  userProfile: UserProfile;
}

const ProfileCardUI: React.FC<ProfileCardUIProps> = ({ userProfile }) => {
  return (
    <div>
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
        <div className={styles.stack}>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
