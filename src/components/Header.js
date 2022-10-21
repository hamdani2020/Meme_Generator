import React from 'react'
import logo from '../images/memelogo.jpg'
const Header = () => {
  return (
    <header className='header'>
      <img src={logo} alt="" className='header--logo' />
      <h1 className='header--title'>Meme Generator</h1>
      <h4 className='lusitech'>LusiTech</h4>
    </header>
  )
}

export default Header
