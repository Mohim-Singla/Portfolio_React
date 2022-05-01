import React from 'react'
import './experience.scss'
import ExperienceItems from '../ExperienceItems/ExperienceItems'

export default function Experience({cardInfo}) {
  return (
    <div className='Experience'>
      <div className="expWrapper">
        <div className="expHeading">
          <h1 class="heading">&#60;<span>Exp</span>erience &#47;&#62;</h1>
        </div>
        <ExperienceItems cardInfo={cardInfo} />
      </div>
    </div>
    )
  }
  