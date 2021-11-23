import React from 'react'
import { StyledList, StyledItem, StyledLink } from './FavoriteItem.styled'

const FavoriteItem = ({ favorite }) => {
  return (
    <StyledList>
      <StyledItem>
        <StyledLink to={`/users/${favorite.id}`}>{favorite.login}</StyledLink>
      </StyledItem>
    </StyledList>
  )
}

export default FavoriteItem
