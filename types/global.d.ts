export interface APIData {
  results: [],
  login: {
    uuid: string
  }
  name: {
    first: string,
    last: string,
  },
  picture: {
    large: string
  }
}

export interface UserProfile {
  id: string;
  name: string;
  imageUrl: string;
  accepted: boolean | null;
}

export interface UserProfileContext {
  userProfiles: UserProfile[];
  setUserProfiles: Dispatch<SetStateAction<UserProfile[]>>;  
  currentUserProfile: UserProfile;
  setCurrentUserProfile: Dispatch<SetStateAction<UserProfile>>;
  profileIndex: number, 
  setProfileIndex: Dispatch<SetStateAction<number>>,
}