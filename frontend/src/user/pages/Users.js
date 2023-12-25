import React from 'react'
import UsersList from '../components/userslist/UsersList'


const Users = props => {
  const USERS = [
    {
      id: 'u1',
      name: 'Utkarsh Raj',
      image: "https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg",
      places: 3
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
