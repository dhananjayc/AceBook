import {React,useEffect,useState} from 'react'
import "./index.css"
import { feed,friendList } from "./helper"
import Online from '../Online'

const Sidebar = () => {
  const [closeFriendsList,setCloseFriendsList] = useState([])

useEffect(()=>{
    closeFriendFunction()
},[])

function closeFriendFunction(){
  setCloseFriendsList(friendList?.filter(e=>e.close==="true"))
}
  const OnlineFriends = () => closeFriendsList?.map((e, index) => (
    <Online
     key={`sidebar-online-${index}`}
     profilePic={e.profilePic}
     friendName={e.friendName}
    />
  ));
  
  const FeedList = () => feed?.map((e, index) =>(
    <li key={`sidebar-key-${index}-${e.feedName}`}>
      <e.icon/>
      {e.feedName}
    </li>
  ));

  return (
    <div className='sidebar'>
      <div className="sidebar-wrapper">
        <ul className="sidebar-ul">
          <FeedList />
        </ul>
        <hr/>
        <span className='close-title'>Close friends</span>
        <ul className='friendlist'>
          <OnlineFriends />
        </ul>
      </div>
    </div>
  )
}

export default Sidebar