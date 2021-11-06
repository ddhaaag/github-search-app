import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const StyledLink = styled(NavLink)`
  color: #282c34;
  font-size: 2rem;
  margin-right: 20px;
  transition: 0.75s ease;
  &:hover {
    color: #000;
  }
`
