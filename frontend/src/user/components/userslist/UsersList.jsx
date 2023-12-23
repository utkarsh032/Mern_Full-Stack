import React from 'react'
import UsersItem from '../usersitem/UsersItem'

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className='center'>done</div>
    )
  }
  return <ul>
    {props.items.map(user => (<UsersItem
      key={user.id}
      id={user.id}
      image={user.images}
      name={user.name}
      placeCount={user.places}
    />))}
  </ul>
}

export default UsersList
