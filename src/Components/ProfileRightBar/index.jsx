import React from 'react';
import "./index.css";

// Created a constant (which can be moved in utils) but kept data as it is
// TODO: This can be taken from store as per User
const FRIENDS = [{
  name: "Aryan Khan",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
},{
  name: "Aryan Khan",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
},{
  name: "Aryan Khan",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
},{
  name: "Aryan Khan",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
},{
  name: "Aryan Khan",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
},{
  name: "Aryan Khan",
  image: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg",
}];

const Friendlist = () => FRIENDS.map((friend, id) => {
  return (
  <div className="right-6 flexcenter" key={`friend-key-${id}-${friend.name}`}>
    <div className="cursor flex-column">
    <img className='friend-img-wrapper' src={friend.image} alt="" />
    <span className='friends-name'>{friend.name}</span>
    </div>
  </div>);
})

const ProfileRightBar = () => {
  return (
    <div className='profile-rightbar'>
    <div className="user-details">
        <h5>User Information</h5>
        <span className='user-info'>City:  <span className='user-info-details'>New York</span></span><br/>
        <span className='user-info'>From:  <span className='user-info-details'>Madrid</span></span><br/>
        <span className='user-info'>Relationship:  <span className='user-info-details'>Single</span></span><br/>
    </div>
    
    <div className="user-friends">
        <h5>Friends</h5>
        <div className="row pad">
          <Friendlist />
        </div>
    </div>
    </div>
  )
}

export default ProfileRightBar