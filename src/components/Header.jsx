import React from 'react'
import logo from '../assets/logo.png'
import pointsIcon from '../assets/pointsIcon.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='headerContainer'>
      <section className='headerLogo'>
        <img src={logo} alt="Logo" />
        <h1 className='titleHeader'>PhotoSearch</h1>
      </section>
      <section className='headerMenuContainer'>
        <img className='headerMenu' src={pointsIcon} alt="Menu" />
      </section>
    </div>
  )
}

export default Header
