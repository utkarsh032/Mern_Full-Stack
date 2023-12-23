import React from 'react'
import UsersItem from '../usersitem/UsersItem'
import './UsersList.css'

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No-user found</h2>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <UsersItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
}

export default UsersList
