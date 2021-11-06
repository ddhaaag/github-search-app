import React, { useState, useEffect } from 'react'
import { Grid } from 'semantic-ui-react'
import ReactPaginate from 'react-paginate'
import { PaginationButtons } from './UserDetail.styled'
import UserCard from '../UserCard/UserCard'
import Repos from '../Repos/Repos'

import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, userSelector } from '../../slices/user'
import { fetchRepos, reposSelector } from '../../slices/repos'

const UserDetail = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [reposPerPage] = useState(5)

  const dispatch = useDispatch()
  const { user, loading: userLoading, hasError: userHasError } = useSelector(userSelector)
  const { repos, loading: reposLoading, hasError: reposHasError } = useSelector(reposSelector)

  useEffect(() => {
    const { id } = match.params
    dispatch(fetchUser(id))
    dispatch(fetchRepos(id))
  }, [dispatch, match])

  const renderUser = () => {
    if (userLoading) return <p>Loading user...</p>
    if (userHasError) return <p>Unable to display user</p>

    return <UserCard user={user} />
  }

  const renderRepos = () => {
    if (reposLoading) return <p>Loading repos...</p>
    if (reposHasError) return <p>Unable to display repos</p>

    return <Repos repos={currentUsers} />
  }

  // Pagination
  const indexOfFirstUser = currentPage * reposPerPage
  const currentUsers = repos.slice(indexOfFirstUser, indexOfFirstUser + reposPerPage)

  const pageCount = Math.ceil(repos.length / reposPerPage)

  const changePage = ({ selected }) => {
    setCurrentPage(selected)
  }

  return (
    <Grid columns={2} divided centered>
      <Grid.Row>
        <Grid.Column width={6}>
          <h2>USERS DETAIL </h2>
          {renderUser()}
        </Grid.Column>
        <Grid.Column width={6}>{renderRepos()}</Grid.Column>
      </Grid.Row>
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
    </Grid>
  )
}

export default UserDetail
