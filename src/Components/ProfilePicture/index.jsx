import React from 'react';
import "./index.css";
import "../../Assets/common.css";
import { useSelector } from 'react-redux';

const ProfilePicture = () => {
  const user = useSelector(state => state.loggedInUser);
  const { name, profilePicture } = user;
  return (
    <div className='profilepicture'>
      <div className="img-wrapper">
          <img src="https://wallpapers.com/images/hd/hd-vacation-house-in-the-beach-j4jasqgcc5ismew8.jpg" alt="" />
      </div>
      <div className='profile-dp-img-wrapper'> {/**flexaligncenter*/}
        <img className='profile-dp' src={profilePicture} alt="" />
        <div className='flex-column'>
          <h2>{name}</h2>
          <span>Hey I'm new to Acebook!!!</span>
        </div>
      </div>
    </div>
  )
}

export default ProfilePicture