import { UserProfile } from "@/types/global";


export const updateUserProfiles = (profileId: string, userProfiles: UserProfile[], status: boolean): UserProfile[] => {

  return userProfiles.map((profile) => {
    return profileId === profile.id 
      ? {...profile, accepted: status}
      : profile;
  })

}