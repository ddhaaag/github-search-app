import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const DropdownLink = styled(NavLink)`
  color: black;
  padding: 12px 16px;
  text-align: center;
  display: block;
  &:hover {
    background-color: #ddd;
  }
`
