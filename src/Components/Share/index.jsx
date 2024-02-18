import React from 'react';
import "./index.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import RoomIcon from '@mui/icons-material/Room';
import { useSelector } from 'react-redux';

const SHARE_FIELDS = [{
  Icon: PermMediaIcon, color:'tomato', name:'Photo or Video',
},{
  Icon: LabelIcon, color:'blue', name:'Tag',
},{
  Icon: RoomIcon, color:'green', name:'Location',
},{
  Icon: EmojiEmotionsIcon, color:'goldenrod', name:'Feeling',
},]

const ShareFields = () => SHARE_FIELDS.map(({Icon, color, name}) => (
  <div className="shareoption" key={`key-${name}`}>
    <Icon htmlColor={color} />
    <span className="share-option-text">{name}</span>
  </div>
));

const Share = () => {
  const user = useSelector(state => state.loggedInUser);
  const { name, profilePicture } = user;
  return (
    <div className="share">
      <div className="share-wrapper">
        <div className="share-top">
          <img src={profilePicture} alt="" />
          <input name={name} placeholder={`What's in your mind ${name}?`} alt='thought'/>
        </div>
        <hr/>
        <div className="shareButtom">
          <div className="shareoptions">
            <ShareFields />
            <button className='btn btn-sm btn-success share-button'>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Share