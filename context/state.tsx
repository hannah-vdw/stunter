'use client'

import React, { createContext, useContext, useState } from 'react';
import { APIData, UserProfileContext } from '@/types/global';
import { createInitialUserProfiles } from '@/utils/fetchUsers';
import { data } from '@/dataStore/data'

export const StunterContext = createContext<UserProfileContext | null>(null);

// TODO: fix typing
export const StunterProvider = ({children}: any) => {
  const initialState = createInitialUserProfiles(data as unknown as APIData[]);
  const [userProfiles, setUserProfiles] = useState(initialState);
  const [profileIndex, setProfileIndex] = useState(0)
  const [currentUserProfile, setCurrentUserProfile] = useState(userProfiles[profileIndex]);


  return (
    <StunterContext.Provider value={{ 
      userProfiles, 
      setUserProfiles, 
      currentUserProfile, 
      profileIndex, 
      setProfileIndex,
      setCurrentUserProfile, 
    }}> 
      {children} 
    </StunterContext.Provider>
  )
} 

export const useStunterContext = () => {
  return useContext(StunterContext);
}