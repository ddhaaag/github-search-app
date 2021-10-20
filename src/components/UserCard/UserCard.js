import React from 'react'
import './card.css'
import Loader from 'react-loader-spinner'
import { Icon, Image, Item } from 'semantic-ui-react'

const UserCard = ({ item, loading, user }) => {
  // console.log('UserData', item)

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
    )
  }
  return (
    <>
      <Image src={user.avatar_url} size="small" circular />
      <h2>{user.name}</h2>
      <p>
        <a href={user.html_url} target="_blank">
          {user.login}
        </a>
      </p>
      <Icon name="users" size="large" />
      <span>{(Math.round(user.followers) / 1000).toFixed(1)}k followers</span>
      <Icon name="user" size="large" />
      <span>{user.following} following</span>
    </>
  )
}

export default UserCard
