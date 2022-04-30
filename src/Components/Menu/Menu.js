import React from 'react'
import './menu.scss'
import MenuItems from '../MenuItems/MenuItems'

export default function Menu({navbarOpen, setNavbarOpen}) {
  return (
    <div className={navbarOpen ? "menuAfterClick open" : "menuAfterClick" }>
        <ul className='listWrapper'>
            {/* <li className='listItems'><a href='#'>Intro</a></li>
            <li className='listItems'><a href='#'>Experience</a></li>
            <li className='listItems'><a href='#'>Skills</a></li>
            <li className='listItems'><a href='#'>Projects</a></li>
            <li className='listItems'><a href='#'>Contact</a></li> */}
            <MenuItems />
        </ul>
    </div>
  )
}
