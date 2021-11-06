import React from 'react'
import { List } from './Repos.styled'

import ReposListItem from './ReposListItem'
const Repos = ({ repos }) => {
  return (
    <List>
      {repos.map((repo) => (
        <ReposListItem key={repo.id} repo={repo} />
      ))}
    </List>
  )
}

export default Repos
