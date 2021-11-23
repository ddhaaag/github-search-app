import React from 'react'
import { StyledMenu, StyledLink } from './Nav.styled'

const Nav = () => {
  return (
    <StyledMenu>
      <StyledLink
        exact
        to="/"
        activeStyle={{
          color: 'red',
        }}
      >
        Home
      </StyledLink>
      <StyledLink
        to="/users"
        activeStyle={{
          color: 'red',
        }}
      >
        Users
      </StyledLink>
      <StyledLink
        to="/favorite"
        activeStyle={{
          color: 'red',
        }}
      >
        Favorite
      </StyledLink>
      <StyledLink
        to="/about"
        activeStyle={{
          color: 'red',
        }}
      >
        About
      </StyledLink>
    </StyledMenu>
  )
}

export default Nav
