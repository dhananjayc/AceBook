import React, { useEffect }  from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarMenuIcons from './NavbarMenuIcons';
import "./index.css";

const Navbar = () => {
  // var username="arun"
  const user = useSelector(state => state.loggedInUser);
  const Navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      Navigate('/login')
    }
  }, [Navigate, user]);

  if (!user) {
    return;
  };

  const { name, profilePicture } = user;

  return (
    <div className="navbar-container col-md-12 col-xs-12">
        <div className="navbar-left">
            <span className='logo' onClick={()=>Navigate("/")}>
                AceBook
            </span>
        </div>
        <div className="navbar-middle">
            <div className="serchbar-wrapper">
                <SearchOutlinedIcon />
                <input name='search' type="text" placeholder='search for friends post or video' className="search" />
            </div>
        </div>
        <div className="navbar-right">
          <div className="navbar-links">
              <span onClick={()=>Navigate("/")}>Homepage</span>
              <span onClick={()=>Navigate(`/profile/${name}`)}>Timeline</span>
          </div>
          <div className="icon-wrapper">
            <NavbarMenuIcons />
          </div>
          <img onClick={()=>Navigate(`/profile/${name}`)} className="profile-pic" src={profilePicture} alt='profile-pic'/>
        </div>
    </div>
  )
}

export default Navbar