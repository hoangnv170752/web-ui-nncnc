import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Smart Farm Rạng Đông</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">10</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">1</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}