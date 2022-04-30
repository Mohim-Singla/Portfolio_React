import React from 'react'
import './MenuItems.scss'
export default function MenuItems() {
  const items = ["Intro", "Experience", "Skills", "Projects", "Contact"];


  return (
    <>
    {items.map((item) => (
      <li className='listItems'><a href='#'>{item}</a></li>
    ))}
    </>
  )
}
