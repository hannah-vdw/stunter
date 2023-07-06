import { User } from '../types/global'

interface apiData {
  name: {
    first: string,
    last: string,
  },
  picture: {
    large: string
  }
}

export const fetchUser = async (): Promise<User[]> => {

  const response  = await fetch('https://randomuser.me/api/?results=500')
  .then(res => res.json());

  return response.results.map((userData: apiData): User => {
    const name = `${userData.name.first} ${userData.name.last}`
    const imageUrl = userData.picture.large;

    return {name, imageUrl}
  })

  // const user: User = {
  //   name,
  //   imageUrl
  // }

  // return users
}

