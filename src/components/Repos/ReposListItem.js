import React from 'react'
import { ListItem, ListHeader, ListDescription } from './Repos.styled'

const ReposListItem = ({ repo }) => {
  return (
    <ListItem>
      <ListHeader>{repo.name} </ListHeader>
      <ListDescription>{repo.description}</ListDescription>
    </ListItem>
  )
}

export default ReposListItem
