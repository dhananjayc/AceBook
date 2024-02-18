import React from 'react';
import "./index.css";
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from '@mui/icons-material/Notifications';

const NAVBAR_MENUS = [{
    id: 'person',
    icon: PersonIcon,
    count: 1
  },{
    id: 'chat',
    icon: ChatIcon,
    count: 1
  },{
    id: 'notification',
    icon: NotificationsIcon,
    count: 1
  }];

  
const NavbarIcon = ({ count, Icon }) => (
  <div className="navbar-icon">
    <Icon style={{color:"#fff"}}/>
    <span>{count}</span>
  </div>
);

const NavbarMenuIcons = () => {
  return NAVBAR_MENUS.map((menu) => (
    <NavbarIcon key={`navbar-key-${menu.id}`} Icon={menu.icon} count={menu.count} />
  ));
}

export default NavbarMenuIcons;