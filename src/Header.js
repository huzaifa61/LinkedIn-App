import React from 'react';
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from '@material-ui/icons/Search';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { auth } from "./firebase";
import {useDispatch} from 'react-redux';
import HeaderOption from './HeaderOption';
import { logout } from './features/UserSlice';
function Header() {


    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" />
 
            <div className="header_search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon ={HomeIcon} title= "home" />
            <HeaderOption  Icon ={SupervisorAccountIcon} title="My Network" /> 
            <HeaderOption Icon= {BusinessCenterIcon} title ="Jobs" />
            <HeaderOption Icon= {ChatIcon} title ="Messaging" />
            <HeaderOption Icon= {NotificationsIcon}  title="Notifications"/>
            <HeaderOption avatar={true} avatar="https://i.ibb.co/Fm1FNWv/DSC0752.jpg" title="me" onClick={logoutOfApp} />



            
</div>
            
        </div>
    )
}

export default Header
