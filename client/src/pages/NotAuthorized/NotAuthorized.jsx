import React from 'react'
import "./style.css";
import logo from "../../assets/logodark.png";
import configureVector from "../../assets/Configure.svg";
const NotAuthorized = () => {
  return (
    <div id="NotAuthorizedWrapper">
        <div id="noAuthorHeader">
            <img src={logo} alt="logo" id="noAuthLogo" />
        </div>
        <div id="loginPromptWrapper">
            <div id="configureVector">
                <img src={configureVector} alt="Configure Vector" />
            </div>
            <div id="promptText">
            You must log in to view this page
            </div>
            <button>Log In</button>
        </div>
    </div>
  )
}

export default NotAuthorized