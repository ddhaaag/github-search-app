import React, { useState } from 'react'
import Loader from 'react-loader-spinner'
import { Icon } from 'semantic-ui-react'
import { StyledContainer, StyledImage, StyledMiddleContainer, StyledText } from './UserCard.styled'

import { useDispatch } from 'react-redux'
import { AddFavoriteUsers } from '../../slices/favoriteUser'

const UserCard = ({ loading, user }) => {
  const [disable, setDisable] = useState(false)
  const dispatch = useDispatch()

  const handleClick = () => {
    setDisable(true)
    dispatch(AddFavoriteUsers(user))
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    )
  }
  return (
    <>
      <StyledContainer>
        <StyledImage src={user.avatar_url} />
        <StyledMiddleContainer>
          <StyledText onClick={handleClick} disabled={disable}>
            Add to favorite
          </StyledText>
        </StyledMiddleContainer>
      </StyledContainer>
      <h2>{user.name}</h2>
      <p>
        <a href={user.html_url} target="_blank">
          {user.login}
        </a>
      </p>
      <Icon name="users" size="large" />
      <span>{(Math.round(user.followers) / 1000).toFixed(1)}k followers</span>
      <Icon name="user" size="large" />
      <span>{user.following} following</span>
    </>
  )
}

export default UserCard
