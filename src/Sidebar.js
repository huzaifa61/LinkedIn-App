import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import "./Sidebar.css";
function Sidebar() {
  const user = useSelector(selectUser);

  

    const recentItem = (topic) => (
        <div className="sidebar_recentitem">
            
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
                    </div>

    );
  return (
      <div className="sidebar">
        <div className="sidebar_top">
          <img src="https://i.ibb.co/BtJs8XT/gradienta-ix-k-UDz-Cczo-unsplash.jpg"  />
          <Avatar src={user.photoUrl} className="sidebar_avatar" >
            {user.email[0]}
          </Avatar>
          <h2>{user.displayName}</h2>
          <h4>{user.email}</h4>
        </div>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <p>Who viewed you</p>
            <p className="sidebar_statNumber"> 2,543</p>
          </div>
          <div className="sidebar_stat">
            <p>viewed on posts</p>
            <p className="sidebar_statNumber"> 2448</p>
          </div>
        </div>
        

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("softwareengineering")}
            {recentItem("design")}
            {recentItem("developer")}

           
        </div>
      </div>
  );
}

export default Sidebar;
