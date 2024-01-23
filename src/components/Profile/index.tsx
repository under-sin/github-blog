import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import {
  UserAddicionalInfos,
  ProfileContainer,
  UserTitle,
  UserInfoContent,
  UserDescription,
} from './styles'
import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  company: string
  bio: string
  followers: string
}

export function Profile() {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/under-sin', {})

    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <UserInfoContent>
        <UserTitle>
          <h1>{user.name}</h1>

          <a href={user.html_url} target="_blank" rel="noreferrer">
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </UserTitle>
        <UserDescription>{user.bio}</UserDescription>
        <UserAddicionalInfos>
          <span>
            <FontAwesomeIcon icon={faGithub} /> {user.login}
          </span>
          <span>
            <FontAwesomeIcon icon={faBuilding} /> {user.company}
          </span>
          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </span>
        </UserAddicionalInfos>
      </UserInfoContent>
    </ProfileContainer>
  )
}
