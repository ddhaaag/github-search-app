import React from 'react'
import { StyledFavoritePage, Heading } from './FavoritePage.styled'

import { useSelector } from 'react-redux'

import { favoriteUsersSelector } from '../slices/favoriteUser'
import FavoriteItem from '../components/FavoriteItem/FavoriteItem'

const FavoritePage = () => {
  const { favoriteUsers } = useSelector(favoriteUsersSelector)

  return (
    <>
      {(
        <StyledFavoritePage>
          <Heading>Favorite Page</Heading>
        </StyledFavoritePage>
      ) && favoriteUsers.map((favorite) => <FavoriteItem key={favorite.id} favorite={favorite} />)}
    </>
  )
}

export default FavoritePage
