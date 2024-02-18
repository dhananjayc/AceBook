import React from 'react'
import "./index.css"
import Feed from '../../Components/Feed'
import Rightbar from '../../Components/Rightbar'

const Home = () => {
  return (
    <div className="row acebook-container">
    <Feed/>
    <Rightbar/>
    </div>
  )
}

export default Home