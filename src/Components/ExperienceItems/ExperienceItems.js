import React from 'react'
import './ExperienceItems.scss'
import ExpDescPoints from '../ExpDescPoints/ExpDescPoints'

export default function ExperienceItems({cardInfo}) {
  
  return (
    <div className="expItem">
    {cardInfo.map((expItem) => (
      <div class="card">
        <div class="banner" style={{backgroundImage: expItem.Banner}}>
          <img src="" alt="" />
        </div>
        <h2 class="name">
          {expItem.Company}
        </h2>
        <div class="title">
          {expItem.Start} - {expItem.End}
        </div>
        <div class="title">
          {expItem.Location}
        </div>
        <div class="actions">
        <div class="follow-btn">
            <a href=""><button>{expItem.ButtonText}</button></a>
          </div>
          
        </div>
        <ExpDescPoints companyDesc={expItem.Description}/>
      </div>
    ))}
    </div>
    
  )
}
