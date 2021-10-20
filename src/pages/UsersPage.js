import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Image, List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fetchUsers, usersSelector, getUsername, submitData } from '../slices/users'
import ReactPaginate from 'react-paginate'

const StyledUsersPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Heading = styled.h1`
  font-size: clamp(3rem, 5vw, 7vw);
  color: #eee;
  font-weight: 700;
  margin: 0;
  padding: 0;
  user-select: none;
`

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  width: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  background: #ccc;
  border: none;
  border-radius: 3px;
  &:focus {
    outline: 3px solid red;
  }
  ::placeholder {
    color: #000;
  }
`
const UsernameTitle = styled.h2`
  font-size: 1.5rem;
`

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
      )}
    </div>
  )
}

// Connect Redux to React
export default UsersPage
