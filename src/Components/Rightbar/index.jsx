import React from 'react'
import "./index.css"
import Gift from "../../Assets/images/gift.png"
import Online from '../Online'
import { friendList } from '../Sidebar/helper'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="birthday-notification flexcenter"> 
        <img src={Gift} alt="" className='birthday-image'/>
        <span><b>Anand Raj</b> and <b>3 other friends</b> have a birthday today.</span>
      </div>
      <span className='online-friends-title'>Online Friends</span>
      {friendList?.map((e, index)=>
      <Online
        key={`online-key-${index}`}
        profilePic={e.profilePic}
        friendName={e.friendName}
      />)}
    </div>
  )
}

export default Rightbar