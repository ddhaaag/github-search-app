import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import {
  PaginationButtons,
  StyledUsersPage,
  Heading,
  Input,
  UsernameTitle,
} from './UserPage.styled'
import { fetchUsers, usersSelector, getUsername, submitData } from '../slices/users'
import ReactPaginate from 'react-paginate'

// Redux state is now in the props of the component
const UsersPage = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch()
  const { users, loading, hasErrors } = useSelector(usersSelector)
  // pagination
  const [currentPage, setCurrentPage] = useState(0)
  const [usersPerPage] = useState(5)

  const indexOfFirstUser = currentPage * usersPerPage
  const currentUsers = users.slice(indexOfFirstUser, indexOfFirstUser + usersPerPage)

  const pageCount = Math.ceil(users.length / usersPerPage)

  const changePage = ({ selected }) => {
    setCurrentPage(selected)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchUsers(username))
  }
  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const renderUsers = () => {
    if (loading) return <p>Loading users...</p>
    if (hasErrors) return <p>Unable to display users</p>

    return currentUsers.map((user) => (
      <List selection verticalAlign="middle" key={user.id}>
        <List.Item>
          <Link to={`/users/${user.id}`}>
            <Image size="small" avatar src={user.avatar_url} />
            <List.Content>
              <UsernameTitle>{user.login}</UsernameTitle>
            </List.Content>
          </Link>
        </List.Item>
      </List>
    ))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="text" value={username} onChange={handleChange} placeholder="Enter username" />
      </form>
      {users.length === 0 && (
        <StyledUsersPage>
          <Heading>USERS PAGE</Heading>
        </StyledUsersPage>
      )}

      {renderUsers()}
      {users.length > 0 && (
        <PaginationButtons>
          <ReactPaginate
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationButtons'}
            previousLinkClassName={'previousButtons'}
            nextLinkClassName={'nextButtons'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
          />
        </PaginationButtons>
      )}
    </div>
  )
}

// Connect Redux to React
export default UsersPage
