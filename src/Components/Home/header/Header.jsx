import React from 'react'
import './Header.css'


import Logo from '/assets/logo.png'


function Header() {
  return (
    <div className='header'>
            <div className="header-photo">
                <img src={Logo} alt="" />
            </div>
            <div className="header-photo2">
                <a href="#">меню</a>
                <img src="" alt="" />

            </div>
    </div>
    
  )
}

export default Header