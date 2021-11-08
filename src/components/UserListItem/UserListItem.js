import React from 'react'
import { DropdownLink } from './UserListItem.styled'

const UserListItem = ({ user }) => {
  return <DropdownLink to={`/users/${user.id}`}>{user.login}</DropdownLink>
}

export default UserListItem
