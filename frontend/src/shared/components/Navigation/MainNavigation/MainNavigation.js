import React from 'react'

import { Link } from 'react-router-dom'
import MainHeader from '../MainHeader/MainHeader'
import "./MainNavigation.css"
import NavLinks from '../NavLinks/NavLinks'

const MainNavigation = props => {
  return (
    <MainHeader>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title'><Link to='/'>Your Places</Link></h1>
      <nav><NavLinks /></nav>
    </MainHeader>
  )
}

export default MainNavigation
