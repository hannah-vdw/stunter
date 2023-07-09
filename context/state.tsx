"use client";

import React, { createContext, useContext, useState } from "react";
import { APIData, UserProfileContext } from "@/types/global";
import { createInitialUserProfiles } from "@/utils/fetchUsers";
import { data } from "@/dataStore/data";

export const StunterContext = createContext<UserProfileContext | null>(null);

// TODO: fix typing
export const StunterProvider = ({ children }: any) => {
  const initialState = createInitialUserProfiles(data as unknown as APIData[]);
  const [userProfiles, setUserProfiles] = useState(initialState);
  const [profileIndex, setProfileIndex] = useState(0);

  return (
    <StunterContext.Provider
      value={{
        userProfiles,
        setUserProfiles,
        profileIndex,
        setProfileIndex,
      }}
    >
      {children}
    </StunterContext.Provider>
  );
};

export const useStunterContext = () => {
  return useContext(StunterContext);
};
