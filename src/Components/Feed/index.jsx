import React from 'react'
import "./index.css"
import Share from '../Share'
import Post from '../Post'
import { postDetails } from '../Sidebar/helper';

const Feed = () => {
  return (
    <div className='feed col-md-12'>
      <Share/>
      {postDetails?.map((e, index)=>
        <Post 
          key={`post-key-${index}`}
          likes={e.likes}
          reaction={e.reaction}
          status={e.status}
          profilePicture={e.profilePicture} 
          profileName={e.profileName}
          postPicture={e.postPicture}
        />
        )}
    </div>
  )
}

export default Feed