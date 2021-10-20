import React from 'react'
import styled from 'styled-components'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import UsersPage from './pages/UsersPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Nav from './components/Nav/Nav'
import UserDetail from './components/Users/UserDetail'

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/users" exact component={UsersPage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path="/users/:id" component={UserDetail} />
        </Switch>
      </Router>
    </>
  )
}

export default App
