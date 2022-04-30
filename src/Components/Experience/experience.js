import React from 'react'
import './experience.scss'
import ExperienceItems from '../ExperienceItems/ExperienceItems'

export default function Experience({cardInfo}) {
  return (
    <div className='Experience'>
      <div className="expWrapper">
        <div className="expHeading">
          <p>&#60;Experience &#47;&#62;</p>
        </div>
        <ExperienceItems cardInfo={cardInfo} />
      </div>
    </div>
    )
  }
  