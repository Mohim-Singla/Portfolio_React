import React from 'react'
import "./header.scss"
export default function Header({navbarOpen, setNavbarOpen}) {
  return (
    <div className='parent'>

    <div className={navbarOpen ? 'header menuOpen' : 'header'} id='header'>
      <div className='wrapper'>
        <div className='headerItems'>
            <p className='headerLogo'>&#60;Portfolio &#47;&#62;</p>
        </div>
        <div className='headerItems'>
            <p className='headerName'>Mohim Singla</p>
        </div>
        <div className='headerItems'>
          <div className='hamburger'>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
