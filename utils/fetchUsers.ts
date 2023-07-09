import { APIData, UserProfile } from "../types/global";

interface UserData {
  id: string;
  name: string;
  imageUrl: string;
}

const fetchUsers = (data: APIData[]): UserData[] => {
  return data[0].results.map((userData: APIData): UserData => {
    const id = userData.login.uuid;
    const name = `${userData.name.first} ${userData.name.last}`;
    const imageUrl = userData.picture.large;

    return { id, name, imageUrl };
  });
};

export const createInitialUserProfiles = (data: APIData[]): UserProfile[] => {
  const users = fetchUsers(data);

  return users.map((user) => {
    return { ...user, accepted: null, seen: null };
  });
};
