import React from 'react'
import UsersList from '../components/userslist/UsersList'


const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Utkarsh Raj',
      image: "https://www.tanjug.rs/data/images/2023-07-07/48158_shutterstock-644724364_f.jpg",
      places: 3
    }
  ]

  return <UsersList items={USERS} />
}

export default Users
