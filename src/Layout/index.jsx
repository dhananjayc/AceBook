import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom";
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import "./index.css";

const Layout = (props) => {
  const user = useSelector(state => state.loggedInUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [navigate, user]);

  if (!user) {
    return;
  }

  return (
    <React.Fragment>
      <Navbar/>
      <Sidebar/>
      <div className="main-content">
        {props?.component}
      </div>
    </React.Fragment>
  )
}

export default Layout