import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useDebounce } from 'use-debounce'
import {
  PaginationButtons,
  StyledUsersPage,
  Heading,
  Input,
  UsernameTitle,
  Dropdown,
  DropdownContent,
  DropdownLink,
} from './UserPage.styled'
import { fetchUsers, usersSelector } from '../slices/users'
import UserListItem from '../components/UserListItem/UserListItem'

// Redux state is now in the props of the component
const UsersPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { users, loading, hasErrors } = useSelector(usersSelector)
  const [debouncedUsername] = useDebounce(username, 1000)

  useEffect(() => {
    if (debouncedUsername) {
      dispatch(fetchUsers(debouncedUsername))
    } else {
      setUsername('')
    }
  }, [debouncedUsername])

  const renderUsers = () => {
    if (loading) return <h3>Loading users...</h3>
    if (hasErrors) return <p>Unable to display users</p>

    return users.map((user) => <UserListItem key={user.id} user={user} />)
  }

  return (
    <div>
      <Dropdown>
        <DropdownContent>
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          {renderUsers()}
        </DropdownContent>
      </Dropdown>
      {users.length === 0 && (
        <StyledUsersPage>
          <Heading>USERS PAGE</Heading>
        </StyledUsersPage>
      )}
    </div>
  )
}

// Connect Redux to React
export default UsersPage
