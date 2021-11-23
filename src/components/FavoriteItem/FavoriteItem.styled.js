import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledList = styled.ul`
  list-style: none;
`

export const StyledItem = styled.li`
  ::before {
    content: '⭐';
    display: inline-block;
    margin-right: 0.2rem;
  }
`

export const StyledLink = styled(NavLink)`
  font-size: 1.5rem;

  :hover {
    background-color: #ccc;
  }
`
