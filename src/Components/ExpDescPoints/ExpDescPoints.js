import React from 'react'
import './ExpDescPoints.scss'

export default function ExpDescPoints({companyDesc}) {
  return (
    <>
    {companyDesc.map((descPoint) => (
        <li className='desc'>{descPoint}</li>
    ))}
    </>
  )
}
