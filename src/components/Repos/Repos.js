import React from 'react'

import { List, ListItem, ListHeader, ListDescription } from './Repos.styled'
const Repos = ({ repos }) => {
  console.log(repos)
  // const { public_repos } = item

  return (
    <List>
      {repos.map((repo) => (
        <ListItem key={repo.id}>
          <ListHeader>{repo.name} </ListHeader>
          <ListDescription>{repo.description}</ListDescription>
        </ListItem>
      ))}
    </List>
  )
}

export default Repos
