import React from 'react'
import { Grid, Container, Icon } from 'semantic-ui-react'

const EmptyState = () => {
  return (
    <Container style={{ marginTop: 50 }}>
      <Grid textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <Icon name="search" size="huge" /> Start with searching a GitHub user
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default EmptyState
