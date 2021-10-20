import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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

const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
const StyledLink = styled(NavLink)`
  color: #282c34;
  font-size: 2rem;
  margin-right: 20px;
  transition: 0.75s ease;
  &:hover {
    color: #000;
  }
`

export default Nav
