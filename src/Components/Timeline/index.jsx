import React from 'react';
import "./index.css";
import Feed from "../Feed/index";
import ProfileRightBar from '../ProfileRightBar';

const Timeline = () => {
  return (
    <div className='timeline'>
      <div className="timeline-wrapper">
        <div className="feed-wrapper">
          <Feed/>
          </div>
          <div className="profileright-wrapper">
          <ProfileRightBar/>
          </div>
      </div>
    </div>
  )
}

export default Timeline