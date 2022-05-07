import React from 'react'
import './MenuItems.scss'
export default function MenuItems({items}) {
  
  return (
    <>
    {items.map((item) => (
      <li className='listItems'><a href='#'>{item}</a></li>
    ))}
    </>
  )
}
