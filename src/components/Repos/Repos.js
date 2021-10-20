import React from 'react'

import { List } from 'semantic-ui-react'
import './result.css'

const Repos = ({ repos }) => {
  console.log(repos)
  // const { public_repos } = item

  return (
    <>
      {/* <h1>Repositories ({public_repos})</h1> */}
      {repos.map((repo) => (
        <List.Item key={repo.id}>
          <List.Content>
            <List.Header as="h2">{repo.name} </List.Header>
            <List.Description as="p">{repo.description}</List.Description>
          </List.Content>
        </List.Item>
      ))}
    </>
  )
}

export default Repos
