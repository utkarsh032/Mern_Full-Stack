import React from 'react'
import UsersList from '../components/userslist/UsersList'

const Users = () => {
  const USERS = [{
    id: 'u1',
    name: 'Utkarsh Raj',
    image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg",
    places: 3
  }]

  return <UsersList items={USERS} />
}

export default Users
