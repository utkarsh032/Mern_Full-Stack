import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import MainHeader from '../MainHeader/MainHeader'
import NavLinks from '../NavLinks/NavLinks'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../../UIElements/Backdrop/Backdrop'

import "./MainNavigation.css"

const MainNavigation = props => {

  const [drawerIsOpen, setDrawerIsOpen] = useState(false)

  const openDrawerHandler = () => {
    setDrawerIsOpen(true)
  }

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false)
  }

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'><NavLinks /></nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'><Link to='/'>Destination</Link></h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation
