"use client";
import { useContext } from "react";
import Image from "next/image.js";

import { StunterContext } from "@/context/state";
import { UserProfileContext } from "@/types/global";
import { updateUserProfiles } from "@/utils/updateUserProfiles";
import tick from "../public/tick.svg";
import cross from "../public/cross.svg";
import styles from "./swipeBar.module.css";

const SwipeBar: React.FC = () => {
  const { userProfiles, setUserProfiles, profileIndex, setProfileIndex } =
    useContext(StunterContext) as UserProfileContext;

  const handleClick = (status: boolean) => {
    const updatedProfiles = updateUserProfiles(
      userProfiles[profileIndex].id,
      userProfiles,
      status,
    );
    setUserProfiles(updatedProfiles);

    const newIndex = profileIndex + 1;
    setProfileIndex(newIndex);
  };

  return <SwipeBarUI handleClick={handleClick} />;
};

interface SwipeBarUIProps {
  handleClick: (status: boolean) => void;
}

const SwipeBarUI: React.FC<SwipeBarUIProps> = ({ handleClick }) => {
  return (
    <div className={styles.swipeBar}>
      <button className={styles.decline} onClick={() => handleClick(false)}>
        <Image src={cross} alt="decline" height={80} width={80} />
      </button>
      <button className={styles.accept} onClick={() => handleClick(true)}>
        <Image src={tick} alt="accept" height={80} width={80} />
      </button>
    </div>
  );
};

export default SwipeBar;
