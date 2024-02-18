import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./index.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Post = (props) => {
  const [likes,setLikes] = useState(props?.likes)
  const [isLiked,setIsLiked] = useState(false)
  const [reaction,setReaction] = useState(props?.reaction)
  const [isReacted,setIsReacted] = useState(false)

  function ClickOnce(Event){
    if (Event==="like") {
      setLikes(isLiked ? likes-1 : likes+1)
      setIsLiked(!isLiked)
    } else if(Event==="reaction") {
      setReaction(isReacted ? reaction-1 : reaction+1)
      setIsReacted(!isReacted)
    }
  }
  
  return (
    <div className='post'>
        <div className="post-container">
            <div className="post-header">
            <div className="post-header-row">
            <img className='cursor' src={props.profilePicture} alt=""/>
            <div className="post-person-name cursor">
            {props?.profileName}
            </div>
            <span>5 mins ago</span>
            </div>
            <MoreVertIcon/>
            </div>
            <div className="post-status">
            {props.status}
            </div>
            <div className="post-picture">
                <img src={props.postPicture} alt="" />
            </div>
            <div className="post-enhancer-container flexalignbetween">
            <div className="post-enhancher">
            <div className="post-like">
            <ThumbUpIcon onClick={()=>ClickOnce("like")}/>
            </div>
            <div className="post-react">
            <FavoriteBorderIcon onClick={()=>ClickOnce("reaction")}/>
            </div>
            <div className="post-comment">
            <ChatBubbleIcon/>
            </div>
            {/* <div className="post-share">
                <SendIcon/>
            </div> */}
            <span>{likes} people liked it</span>
            </div>
            <span className='cursor'>10 comments</span>
            </div>
            </div>   
    </div>
  )
}

export default Post